import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfinitePlayerModule } from 'src/player/infinite-player.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InfinitePlayerModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
