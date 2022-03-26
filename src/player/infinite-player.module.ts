import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from 'src/progress-bar/progress-bar.component';

import { MusicBoundariesModule } from 'src/music-boundaries/music-boundaries.module';
import { InfinitePlayerComponent } from './infinite-player.component';

@NgModule({
  declarations: [InfinitePlayerComponent, ProgressBarComponent],
  // #todo How can I not need to declare the progress bar component here?
  imports: [FormsModule, MusicBoundariesModule],
  exports: [InfinitePlayerComponent]
})
export class InfinitePlayerModule {}
