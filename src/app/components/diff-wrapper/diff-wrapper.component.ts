import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models';
import { Diff } from '../../models/diff';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'diff-wrapper',
  templateUrl: './diff-wrapper.component.html',
  styleUrls: ['./diff-wrapper.component.css']
})
export class DiffWrapperComponent implements OnInit {
  @Input() diff: Diff;

  previous: User;
  proposed: User;

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.previous = JSON.parse(this.diff.previous);
    this.proposed = JSON.parse(this.diff.proposed);

    this.dataSvc.checkChanges(this.previous, this.proposed);
    this.dataSvc.setDiffChanges();
  }
}
