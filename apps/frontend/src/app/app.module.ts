import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CooperUiModule, CooperButtonModule } from '@cooper/ui';
import { IconsModule } from './icons/icons.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CooperUiModule,
        CooperButtonModule,
        IconsModule,
    ],
    providers: [],
    bootstrap: [ AppComponent ],
})
export class AppModule {}
