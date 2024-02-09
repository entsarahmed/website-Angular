import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  status1: string = '';
  showLabel1: boolean = false;

  status2: string = '';
  showLabel2: boolean = false;

  status3: string = '';
  showLabel3: boolean = false;

  status4: string = '';
  showLabel4: boolean = false;

  onInputChange(event: any, inputNumber: number) {
    const inputValue = event.target.value;
    switch (inputNumber) {
      case 1:
        this.status1 = inputValue;
        this.showLabel1 = inputValue.trim() !== '';
        break;
      case 2:
        this.status2 = inputValue;
        this.showLabel2 = inputValue.trim() !== '';
        break;
      case 3:
        this.status3 = inputValue;
        this.showLabel3 = inputValue.trim() !== '';
        break;
      case 4:
        this.status4 = inputValue;
        this.showLabel4 = inputValue.trim() !== '';
        break;
      default:
        break;
    }
  }
}
