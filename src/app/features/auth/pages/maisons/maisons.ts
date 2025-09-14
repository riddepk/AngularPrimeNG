import { TableModule } from 'primeng/table';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {Maisonservice} from '../../../../services/maisonservice';
import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {HousesDto} from '../../models/houses-dto';
import {HousesDetailDto} from '../../models/houses-detail-dto';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ButtonDirective } from "primeng/button";
import { MaisonsDetail } from '../maisons-detail/maisons-detail';


@Component({
  selector: 'app-maisons',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CommonModule,
    ButtonDirective
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
  currentUser: any;

  constructor(private maisonService:Maisonservice
             ,private router:Router
             ,private dialogRef: MatDialogRef<Maisons>
             ,private dialog: MatDialog
            ) {
        this.currentUser = this._authService.currentUser;
  }
  // ------------------------ close popup
  close() {
    this.dialogRef.close();
  }

  ngOnInit() : void{
    console.log(this.maisons);
    this.maisons =this.maisonService.initializerTableauMaisonnettes();

  }

voirDetails(username: string, HouseName: string) {
  if (username) {
    console.log(" detail username : " + username);
    this._router.navigate(['/maisons-detail', username]);
  } else {
    console.warn("HouseOwner ou username est manquant pour cette maison", HouseName);
  }
}


   onEdit(maison: HousesDto) {
    console.log('Éditer:', maison);
    // Redirection vers formulaire ou inline editing
  }

  onDelete(maison: HousesDto) {
    console.log('Supprimer:', maison);
    // Confirmation + suppression
  }

  // fait en sorte que la popup ait automatiquement la largeur du tableau


  }
