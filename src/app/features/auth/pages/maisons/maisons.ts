import { TableModule } from 'primeng/table';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {Maisonservice} from '../../../../services/maisonservice';
import {Component, inject, OnInit} from '@angular/core';
import {MaisonsDto} from '../../models/maisons-dto';
import {MaisonsDetail, MaisonsDetailDto} from '../../models/maisons-detail-dto';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-maisons',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CommonModule
  ],
  templateUrl: './maisons.html',
  styleUrl: './maisons.css'
})


export class Maisons implements OnInit{
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);

  //maisonsForm: FormGroup;
  maisons: MaisonsDto[] = [];
  maisonsdetail:MaisonsDetailDto[]=[];

  constructor(private maisonService:Maisonservice,private router:Router) {
                }
  ngOnInit() : void{
    console.log(this.maisonsdetail);
    this.maisons =this.maisonService.initializerTableauMaisonnettes();
  }
  onView(maisonsdetail: MaisonsDetail) {
    this._router.navigate(['/maisons-detail',maisonsdetail.ip]);
    // Navigation ou affichage modal
  }

  onEdit(maison: MaisonsDto) {
    console.log('Éditer:', maison);
    // Redirection vers formulaire ou inline editing
  }

  onDelete(maison: MaisonsDto) {
    console.log('Supprimer:', maison);
    // Confirmation + suppression
  }

}

