import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'inifit-player',
  templateUrl: './inifit-player.component.html',
  styleUrls: ['./inifit-player.component.css']
})
export class InifitPlayerComponent implements OnInit, AfterViewInit {
  title = 'Player';
  @ViewChild('music') music: ElementRef<HTMLMediaElement>;

  currentTime: number;
  musicTime: number;

  endTime: number;
  startTime = 0;
  metadataLoaded = false;
  private intervalNumber!: NodeJS.Timeout;

  ngAfterViewInit(): void {
    this.music.nativeElement.currentTime = this.startTime;
    this.music.nativeElement.addEventListener('loadedmetadata', () => {
      this.musicTime = this.music.nativeElement.duration;
      this.endTime = this.music.nativeElement.duration;
      this.metadataLoaded = true;
    });
  }

  ngOnInit() {
    this.currentTime = this.startTime;
  }

  detectEndOfPlayTime = () => {
    if (this.currentTime >= this.endTime) {
      this.music.nativeElement.currentTime = this.startTime;
      this.currentTime = this.startTime;
    } else {
      this.currentTime = this.music.nativeElement.currentTime;
    }
  };

  onPlay() {
    this.music.nativeElement.play();
    this.intervalNumber = setInterval(this.detectEndOfPlayTime, 300);
  }

  onStop() {
    this.music.nativeElement.pause();
    clearInterval(this.intervalNumber);
  }

  onStartBoundaryChange(event: number) {
    this.startTime = event;
    this.currentTime = event;
  }

  onEndBoundaryChange(event: number) {
    this.endTime = event;
  }
}
