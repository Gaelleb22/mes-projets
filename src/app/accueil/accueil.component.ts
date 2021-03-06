import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1, 2, 3, 4, 5].map((n) => `./assets/carousel/image${n}.jpg`);

  constructor(config: NgbCarouselConfig) {
     // customize default values of carousels used by this component tree
     config.showNavigationArrows = true;
     config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

}
