import { TableModule } from 'primeng/table';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Maisonservice} from '../../../../services/maisonservice';
import {Component, inject, OnInit} from '@angular/core';
import {MaisonsDto} from '../../models/maisons-dto';

@Component({
  selector: 'app-maisons',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule
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
    /*    this.maisonsForm = this._fb.group({
          ip: [null, [Validators.required]],
          username: [null, [Validators.required]],
          homestatus: [null, [Validators.required]],
        });*/
                }
  ngOnInit() : void{
    this.maisons =this.maisonService.initializerTableauMaisonnettes();
  }
}

