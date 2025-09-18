import { TableModule } from 'primeng/table';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {Maisonservice} from '../../../../services/maisonservice';
import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import {HousesDto} from '../../models/houses-dto';
import {ArduinoSensorDto, ArduinoSensors} from '../../models/arduinosensor-dto';
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

  maisons: HousesDto[] = [];
  arduinoSensorDto:ArduinoSensorDto[]=[];
  currentUser: any;
  


  constructor(private maisonService:Maisonservice
             ,private router:Router
             ,private dialogRef: MatDialogRef<MaisonsComponent>
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

voirDetails(username: string, housename: string) {
  if (username) {
    console.log("username : " + username);
    this._router.navigate(['/arduinosensors', username]);
  } else {
    console.warn("HouseOwner ou username est manquant pour cette maison", housename);
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

@ViewChild('tableRef') tableRef!: ElementRef;
openPopupListSensors(): void {
   
  this.dialogRef.close();
  const minWidth = 600;
  const tableWidth = this.tableRef?.nativeElement?.offsetWidth || minWidth;

  const dialogRef = this.dialog.open(ArduinoSensors, {
    width: `${Math.max(tableWidth, minWidth)}px`,
    maxWidth: 'none',
    data: { }
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    if (result) {
      console.log('Données reçues:', result);
    }
  });
}

onSelect(_maison: MaisonsComponent) {
  const choisit = true;
  
}
  }
