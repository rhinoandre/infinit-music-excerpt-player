import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  @Input() max!: number;

  @Input() value!: number;
  @Output() valueChange = new EventEmitter<number>();

  onProgressBarChange(value: string) {
    this.valueChange.emit(Number(value));
  }
}
