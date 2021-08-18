import { Component, Input, OnInit } from '@angular/core';
import { isObject } from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-entity-item',
  templateUrl: './entity-item.component.html',
  styleUrls: ['./entity-item.component.css']
})
export class EntityItemComponent implements OnInit {
  @Input() title: string;
  @Input() data: any;
  @Input() navKey: string = null;;
  @Input() isPrevious: boolean = false;
  
  navProps: any[] = [];
  lineProps: any[] = [];

  ngOnInit() {
    this.seperateProps();
    this.data = Object.entries(this.data);
  }

  seperateProps = () => {
    for (const [key, value] of Object.entries(this.data))
      !isObject(value)
        ? this.lineProps?.push([key, value])
        : this.navProps?.push([key, value]);
  };
}
