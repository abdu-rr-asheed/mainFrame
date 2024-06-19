import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [NgbAccordionModule, MatIconModule],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.css',
})
export class FilterSectionComponent {}
