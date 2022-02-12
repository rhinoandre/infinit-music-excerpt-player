import { Component, Input } from '@angular/core';

@Component({
  selector: 'boundary',
  templateUrl: './boundary.component.html',
  styleUrls: ['./boundary.component.css']
})
export class BoundaryComponent {
  @Input() boundaryId: string;
  @Input() onMouseMove: (boundaryId: string, event: Event) => void;

  private onMouseUp = () => {
    document?.removeEventListener('mousemove', this.move);
    document?.removeEventListener('mouseup', this.onMouseUp);
  };

  private move = (event: MouseEvent) => {
    this.onMouseMove(this.boundaryId, event);
  };

  onMouseDown() {
    document?.addEventListener('mousemove', this.move);
    document?.addEventListener('mouseup', this.onMouseUp);
  }
}
