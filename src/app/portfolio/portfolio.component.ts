import { Component,Output, EventEmitter  } from '@angular/core';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  images=[
    {src:'./assets/images/poert1.png'},
    {src:'./assets/images/port2.png'},
    {src:'./assets/images/port3.png'},
    {src:'./assets/images/poert1.png'},
    {src:'./assets/images/port2.png'},
    {src:'./assets/images/port3.png'}
  ]
  
  showLayer(element:HTMLDivElement):void{
console.log(element.classList.remove('d-none'));
  }

  closeLayer(element:HTMLDivElement):void{
    console.log(element.classList.add('d-none'));
      }

      showSrc:string='';
    showImage(element:HTMLImageElement):void{
this.showSrc=element.src;
    }
     
}
