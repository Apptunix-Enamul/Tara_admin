import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .card.disabled {
      opacity: 0.5;
    }
  `]
})
export class TimeslotComponent implements OnInit {
  disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

}
