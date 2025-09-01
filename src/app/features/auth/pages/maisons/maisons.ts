import { TableModule } from 'primeng/table';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {Maisonservice} from '../../../../services/maisonservice';
import {Component, inject, OnInit} from '@angular/core';
import {HousesDto} from '../../models/houses-dto';
import {HousesDetailDto} from '../../models/houses-detail-dto';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-maisons',
  standalone: true,
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

  maisons: HousesDto[] = [];
  maisonsdetail:HousesDetailDto[]=[];

  constructor(private maisonService:Maisonservice,private router:Router) {
  }
  ngOnInit() : void{
    console.log(this.maisons);
    this.maisons =this.maisonService.initializerTableauMaisonnettes();
  }
  voirDetails(username:string) {
    this._router.navigate(['/maisons-detail',username]);
  }

  onEdit(maison: HousesDto) {
    console.log('Éditer:', maison);
    // Redirection vers formulaire ou inline editing
  }

  onDelete(maison: HousesDto) {
    console.log('Supprimer:', maison);
    // Confirmation + suppression
  }

}
