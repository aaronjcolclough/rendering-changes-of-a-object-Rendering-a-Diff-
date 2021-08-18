import { Component, Input } from '@angular/core';

@Component({
  selector: 'entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.css']
})
export class EntityCardComponent {
  @Input() title: string = 'Title';
}
