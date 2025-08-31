import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router,ActivatedRoute } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {MaisonsDetailservices} from '../../../../services/maisons-detailservices';
import {MaisonsDetailDto} from '../../models/maisons-detail-dto';

@Component({
  selector: 'app-maisons-detail',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CommonModule
  ],
  templateUrl: './maisons-detail.html',
  styleUrl: './maisons-detail.css'
})

export class MaisonsDetail implements OnInit {
  private readonly authService: AuthService = inject(AuthService);
  private readonly maisonsDetailService:MaisonsDetailservices = inject(MaisonsDetailservices);

  constructor(private route: ActivatedRoute) { }
  maisonsdetail:MaisonsDetailDto[]=[];

  ip!:string;
  username?:string;

  ngOnInit() : void {
    this.username = this.route.snapshot.paramMap.get('username')!;
    console.log('Nom sélectionné :', this.username);

    const allMaisons = this.maisonsDetailService.initializerTableauMaisonsDetail();
    console.log(allMaisons);
    console.log(this.username);
    this.maisonsdetail= allMaisons.filter(m =>m.username === this.username);
  }

}
