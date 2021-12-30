import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InifitPlayerModule } from 'src/player/inifit-player.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, InifitPlayerModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
