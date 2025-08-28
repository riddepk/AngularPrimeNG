import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
    currentDateTime: string = '';

  ngOnInit() {
    setInterval(() => {
      this.currentDateTime = new Date().toLocaleString();
    }, 1000);
  }

}
