import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { count } from 'rxjs';

@Component({
  selector: 'app-main-result',
  standalone: true,
  imports: [MatIconModule, NgbNavModule],
  templateUrl: './main-result.component.html',
  styleUrl: './main-result.component.css',
})
export class MainResultComponent {
  active = 1;
  match = [
    {
      name: 'Match 1',
      count: 1,
    },
    {
      name: 'Live',
      count: 10,
    },
    {
      name: 'Outright',
      count: 1,
    },
    {
      name: 'Result',
      count: 100,
    },
  ];
}
