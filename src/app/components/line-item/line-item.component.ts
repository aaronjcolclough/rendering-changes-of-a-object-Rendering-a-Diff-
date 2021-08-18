import { Component, Input, OnInit } from '@angular/core';
import { isObject } from 'rxjs/internal-compatibility';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.css']
})
export class LineItemComponent implements OnInit {
  @Input() data: string[];
  @Input() navKey: string = null;

  @Input() hasChanged: boolean = false;
  @Input() isPrevious: boolean = false;

  backgroundRed = { background: true, red: true };
  backgroundGreen = { background: true, green: true };

  constructor(private dataSvc: DataService) {}

  ngOnInit() {
    this.dataSvc.changes$.subscribe(changes => {
      if (changes) {
        let entChanges = changes.find(x => x.navPropKey === this.navKey);
        if (entChanges)
          for (const key of entChanges.changedKeys) {
            if (key === this.data[0]) this.hasChanged = true;
          }
      }
    });
  }

  isObject = (data: any) => isObject(data);

  setBackground = () =>
    this.isPrevious
      ? this.hasChanged
        ? this.backgroundRed
        : ''
      : this.hasChanged
      ? this.backgroundGreen
      : '';
}
