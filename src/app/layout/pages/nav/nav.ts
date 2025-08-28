import { Component } from '@angular/core';
import { ButtonModule  } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';


@Component({
  selector: 'app-nav',
  imports: [ButtonModule,ButtonGroupModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

}
