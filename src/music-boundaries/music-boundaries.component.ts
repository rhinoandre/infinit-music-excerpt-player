import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'music-boundaries',
  templateUrl: './music-boundaries.component.html',
  styleUrls: ['./music-boundaries.component.css']
})
export class MusicBoundariesComponent implements OnChanges {
  @ViewChild('fullRange') fullRange: ElementRef;
  @Input() max: number;

  // Point where the music should start and end in seconds
  @Input() startTime: number;
  @Input() endTime: number;

  startBoundary: number;
  endBoundary: number;
  BOUNDARY_START = 'START';
  BOUNDARY_END = 'END';

  @Output() startBoundaryChange = new EventEmitter<number>();
  @Output() endBoundaryChange = new EventEmitter<number>();

  ngOnChanges() {
    this.startBoundary = (this.startTime / this.max) * 100;
    this.endBoundary = ((this.endTime - this.startTime) / this.max) * 100;
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    // console.log('drop', event);
    event.preventDefault();
    const boundarySide = event.dataTransfer?.getData('text');

    // offsetX - Position clicked in the element
    // offsetWidth - element width
    const percentageClicked =
      event.offsetX / this.fullRange.nativeElement.offsetWidth;

    boundarySide === this.BOUNDARY_START
      ? this.startBoundaryChange.emit(this.max * percentageClicked)
      : this.endBoundaryChange.emit(this.max * percentageClicked);
  }
}
