import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ProgressBarComponent } from 'src/progress-bar/progress-bar.component'

import { MusicBoundariesModule } from 'src/music-boundaries/music-boundaries.module'
import { InfinitePlayerComponent } from './infinite-player.component'
import { LoadSongComponent } from '../load-song/load-song.component'

@NgModule({
  declarations: [
    InfinitePlayerComponent,
    ProgressBarComponent,
    LoadSongComponent,
  ],
  // #todo How can I not need to declare the progress bar component here?
  imports: [FormsModule, MusicBoundariesModule],
  exports: [InfinitePlayerComponent],
})
export class InfinitePlayerModule {}
