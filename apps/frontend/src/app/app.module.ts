import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CooperUiModule, CooperButtonModule } from '@cooper/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CooperUiModule, CooperButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
