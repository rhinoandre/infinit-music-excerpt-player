import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'inifit-player',
  templateUrl: './inifit-player.component.html',
  styleUrls: ['./inifit-player.component.css']
})
export class InifitPlayerComponent implements AfterViewInit {
  title = 'Player';
  @ViewChild('music') music: ElementRef<HTMLMediaElement>;

  currentTime: number = 0;
  musicTime: number;

  endTime: number;
  startTime: number = 0;
  metadataLoaded = false;
  private intervalNumber!: NodeJS.Timeout;

  ngAfterViewInit(): void {
    this.music.nativeElement.addEventListener('loadedmetadata', () => {
      this.musicTime = this.music.nativeElement.duration;
      this.endTime = this.music.nativeElement.duration;
      this.metadataLoaded = true;
    });
  }

  detectEndOfPlayTime = () => {
    if (this.currentTime >= this.endTime) {
      this.setMusicCurrentTime(this.startTime);
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

  private setMusicCurrentTime(newCurrentTime: number) {
    this.music.nativeElement.currentTime = newCurrentTime;
  }

  onStartBoundaryChange(event: number) {
    this.startTime += event;
    this.setMusicCurrentTime(this.startTime);
    this.currentTime += event;
  }

  onEndBoundaryChange(event: number) {
    this.endTime += event;
  }
}
