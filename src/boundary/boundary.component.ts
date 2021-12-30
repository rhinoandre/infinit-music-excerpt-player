import { Component, Input } from '@angular/core';

@Component({
  selector: 'boundary',
  templateUrl: './boundary.component.html',
  styleUrls: ['./boundary.component.css']
})
export class BoundaryComponent {
  @Input() boundaryId: string;

  onDragStart(event: DragEvent) {
    console.log(this.boundaryId);
    //@ts-ignore
    event.dataTransfer!.setData('text', this.boundaryId);
  }
}
