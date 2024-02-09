import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbarHeight: number = 100; // Initial height of the navbar
  shrinkHeight: number = 50; // Height to shrink to when scrolling

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Adjust navbar height based on scroll position
    if (window.pageYOffset > 50) { // You can adjust this threshold as needed
      this.navbarHeight = this.shrinkHeight;
    } else {
      this.navbarHeight = 100; // Restore original height
    }
  }
}
