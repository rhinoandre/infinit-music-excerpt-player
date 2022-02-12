import {
  Component,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'music-boundaries',
  templateUrl: './music-boundaries.component.html',
  styleUrls: ['./music-boundaries.component.css']
})
export class MusicBoundariesComponent {
  @ViewChild('fullRange') fullRange: ElementRef;
  @Input() max: number;

  startBoundary: number = 0;
  endBoundary: number = 100;
  BOUNDARY_START = 'START';
  BOUNDARY_END = 'END';

  @Output() startBoundaryChange = new EventEmitter<number>();
  @Output() endBoundaryChange = new EventEmitter<number>();

  onMouseMove = (boundaryId: string, event: MouseEvent) => {
    // offsetX - Position clicked in the element
    // offsetWidth - element width
    const distanceMoved =
      event.movementX / this.fullRange.nativeElement.offsetWidth;

    const value = this.max * distanceMoved;
    const percetangeMoved = distanceMoved * 100;

    if (boundaryId === this.BOUNDARY_START) {
      if (this.startBoundary + percetangeMoved <= 0) {
        return;
      }

      this.startBoundary += percetangeMoved;
      this.endBoundary -= percetangeMoved;
      this.startBoundaryChange.emit(value);
    } else {
      if (this.endBoundary + percetangeMoved >= 100) {
        return;
      }
      this.endBoundary += percetangeMoved;
      this.endBoundaryChange.emit(value);
    }
  };
}
