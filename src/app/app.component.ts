import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FilterSectionComponent } from './components/filter-section/filter-section.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { MainResultComponent } from './components/main-result/main-result.component';
import { ResultPreviewComponent } from './components/result-preview/result-preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FilterSectionComponent,
    HeaderComponent,
    NgbNavModule,
    MatIconModule,
    MainResultComponent,
    ResultPreviewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  active = 1;
}
