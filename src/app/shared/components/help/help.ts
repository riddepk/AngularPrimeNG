import { Component, input, model, output } from '@angular/core';

@Component({
  selector: 'app-help',
  imports: [],
  templateUrl: './help.html',
  styleUrl: './help.css'
})
export class Help {
  visible = input.required<boolean>();
  onClose = output();
}