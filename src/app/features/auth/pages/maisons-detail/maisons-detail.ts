import { HousesDetailDto ,HousesDetail} from './../../models/houses-detail-dto';
import {Component, inject, OnInit} from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {MaisonsDetailservices} from '../../../../services/maisons-detailservices';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-maisons-detail',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CommonModule,
    ToastrModule,
],
  templateUrl: './maisons-detail.html',
  styleUrl: './maisons-detail.css'
})

export class MaisonsDetail implements OnInit {
  private readonly  _httpClient  = inject(HttpClient);
  private readonly  _formBuilder = inject(FormBuilder);
  private readonly  _toastrService = inject(ToastrService);

  private readonly _router: Router = inject(Router);
  private readonly maisonsDetailService: MaisonsDetailservices = inject(MaisonsDetailservices);
  helpOpen!: boolean;
  housesDetail!: HousesDetail;


  constructor(private route: ActivatedRoute, private dialog: MatDialog) {
  }

  maisonsdetail: HousesDetailDto[] = [];
  houseDetailForm= this._formBuilder.group({
    temperature:[null,[Validators.required,Validators.max(60),Validators.min(-100)]],   // contraintes pour la temperature
    humidity:[null,[Validators.required,Validators.max(100),Validators.min(0)]],        // contraintes pour l'humidité
  });
  ip!: string;
  username?: string;
//**********************************************************
//  cette fonction s'active
//******************************************************* */
    ngOnInit(): void {
      this.username = this.route.snapshot.paramMap.get('username')!;
      console.log('Nom sélectionné :', this.username);
  //   // ---------------------------------------- recuperer l'IP de la maison
     const allMaisonsDetail = this.maisonsDetailService.initializerTableauHousesDetail();
     const maisonCorrespondante = allMaisonsDetail.find(m => m.username === this.username);
     if (maisonCorrespondante) {
       this.ip = maisonCorrespondante.ip;
       console.log('Adresse IP récupérée depuis le tableau :', this.ip);
     } else {
       console.warn('Aucune maison trouvée pour ce username.');
     }
     console.log("Toutes les maisons");
     console.log("==================");
     console.log(allMaisonsDetail);
     console.log("Le proprietaire est => " + this.username);
     this.maisonsdetail = allMaisonsDetail.filter(m => m.username === this.username);
     console.log(this.maisonsdetail);
   }

// ======================================================== Methodes utilisees
  onCreate() {
    console.log('Creér: Creation d\'une nouvelle maison');
    //this._router.navigate(['./addhouse']);
    this._router.navigate(['./create-house']);
    // Redirection vers formulaire ou inline Creation
    return;
  }

// ------------------------------------------------------------------------------
//                    getFieldErrors
// ------------------------------------------------------------------------------
getFieldErrors(controlName: string): string[] {
  const control = this.houseDetailForm.get(controlName);
  if (!control || !control.errors || !(control.touched || control.dirty)) {
    return [];
  }

  const messages: string[] = [];

  if (control.hasError('required')) {
    messages.push(`${controlName} is required`);
  }
  if (control.hasError('minlength')) {
    const requiredLength = control.getError('minlength').requiredLength;
    messages.push(`${controlName} must be at least ${requiredLength} characters long`);
  }
  if (control.hasError('maxlength')) {
    const maxLength = control.getError('maxlength').requiredLength;
    messages.push(`${controlName} may have at most ${maxLength} characters`);
  }

  return messages;
}


}
