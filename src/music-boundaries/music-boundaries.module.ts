import { NgModule } from '@angular/core';

import { BoundaryComponent } from '../boundary/boundary.component';
import { MusicBoundariesComponent } from './music-boundaries.component';

@NgModule({
  declarations: [MusicBoundariesComponent, BoundaryComponent],
  exports: [MusicBoundariesComponent]
})
export class MusicBoundariesModule {}
