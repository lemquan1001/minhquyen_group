import { Component, ElementRef, ViewChild } from '@angular/core';
import { serviceManagerAdmin } from './data/data-row-1';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  dataRow1 = serviceManagerAdmin;

  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    this.router.navigate(['/']);
  }

  news() {
    this.router.navigate(['/news']);
  }

  @ViewChild('container', { static: true }) navbarRef!: ElementRef;

  ngAfterViewInit() {
    this.setupScrollListener();
  }

  setupScrollListener() {
    window.addEventListener('scroll', () => {
      let container = this.navbarRef.nativeElement;

      let currentScroll = window.pageYOffset;

      if (currentScroll < 15) {
        setTimeout(() => {
          container.classList.remove('active');
        }, 300);

        // setTimeout(() => {
        //   container.classList.remove('active');
        // }, 300);
      } else {
        setTimeout(() => {
          container.classList.add('active');
        }, 300);
      }
    });
  }
}
