import {Component, inject, OnInit} from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {MaisonsDetailservices} from '../../../../services/maisons-detailservices';
import {HousesDetailDto} from '../../models/houses-detail-dto';
import { Button } from "primeng/button";
import { HousesDto } from '../../models/houses-dto';
import { MatDialog } from '@angular/material/dialog';
import { AddHouse } from '../add-house/add-house';

@Component({
  selector: 'app-maisons-detail',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CommonModule,
    Button
],
  templateUrl: './maisons-detail.html',
  styleUrl: './maisons-detail.css'
})

export class MaisonsDetail implements OnInit {
  //private readonly authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);
  private readonly maisonsDetailService: MaisonsDetailservices = inject(MaisonsDetailservices);
  helpOpen!: boolean;


  constructor(private route: ActivatedRoute, private dialog: MatDialog) {
  }

  maisonsdetail: HousesDetailDto[] = [];

  ip!: string;
  username?: string;

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username')!;
    console.log('Nom sélectionné :', this.username);
    // ---------------------------------------- recuperer l'IP de la maison
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

// ========================= Methodes utilisees
  onCreate() {
    console.log('Creér: Creation d\'une nouvelle maison');
    //this._router.navigate(['./addhouse']);
    this._router.navigate(['./create-house']);
    // Redirection vers formulaire ou inline Creation
    return;
  }

}
