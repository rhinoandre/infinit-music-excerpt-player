import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProgressBarComponent } from 'src/progress-bar/progress-bar.component';

import { InifitPlayerComponent } from './inifit-player.component';
import { MusicBoundariesModule } from 'src/music-boundaries/music-boundaries.module';

@NgModule({
  declarations: [InifitPlayerComponent, ProgressBarComponent],
  // #todo How can I not need to declare the progress bar component here?
  imports: [FormsModule, MusicBoundariesModule],
  exports: [InifitPlayerComponent]
})
export class InifitPlayerModule {}
