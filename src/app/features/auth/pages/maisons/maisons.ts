import { TableModule } from 'primeng/table';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {Maisonservice} from '../../../../services/maisonservice';
import {Component, inject, OnInit} from '@angular/core';
import {HousesDto, HousesModel} from '../../models/houses-dto';
import {ArduinoSensorDto} from '../../models/arduinosensor-dto';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ButtonDirective } from "primeng/button";
import { ArduinoSensorsServices } from '../../../../services/arduinosensorservices';
import { ArduinoSensorComponent } from '../arduinosensors/arduinosensors';

@Component({
  selector: 'app-maisons',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CommonModule,
    ButtonDirective,
    ArduinoSensorComponent,
],
  templateUrl: './maisons.html',
  styleUrl: './maisons.css'
})

export class MaisonsComponent implements OnInit{

  private readonly _authService: AuthService = inject(AuthService);
  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _router: Router = inject(Router);

  maisons: any[] = [];
  selectedHouse : HousesModel  ;
  HouseName:HousesDto[]=[];
  arduinoSensorDto:ArduinoSensorDto[]=[];
  currentUser: any;

  constructor(private maisonService:Maisonservice
             ,private router:Router
             ,private dialogRef: MatDialogRef<MaisonsComponent>
             ,private dialog: MatDialog
            ) {
        this.currentUser = this._authService.currentUser;
         this.selectedHouse = any;
  }

  ngOnInit() : void{
    console.log(this.maisons);
    this.maisons =this.maisonService.initializerTableauMaisonnettes();

  }
  onHouseSelected(house: HousesDto): void {
    this.selectedHouse = house;
    console.log('Maison sélectionnée:', house);
  }
  }
