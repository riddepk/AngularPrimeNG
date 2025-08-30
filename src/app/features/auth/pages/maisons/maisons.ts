import { TableModule } from 'primeng/table';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Maisonservice} from '../../../../services/maisonservice';
import {Component, inject, OnInit} from '@angular/core';
import {MaisonsDto} from '../../models/maisons-dto';
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

  constructor(private maisonService:Maisonservice) {
                }
  ngOnInit() : void{
    this.maisons =this.maisonService.initializerTableauMaisonnettes();
  }
  onView(maison: MaisonsDto) {
    console.log('Voir:', maison);
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

