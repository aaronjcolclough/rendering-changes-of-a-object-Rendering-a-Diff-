import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'home-route',
  templateUrl: 'home.component.html',
  providers: [DataService]
})
export class HomeComponent implements OnInit {
  constructor(public dataSvc: DataService) {}

  ngOnInit() {
    this.dataSvc.simulateGetDiff();
  }
}
