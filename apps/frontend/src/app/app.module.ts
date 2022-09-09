import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
// --------------------------------------------------------
import { CuiBadgetComponentModule,
         CuiButtonComponentModule,
         CuiSidebarComponentModule } from '@cooper/ui';
// --------------------------------------------------------
import { AppComponent }              from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CuiBadgetComponentModule,
        CuiButtonComponentModule,
        CuiSidebarComponentModule,
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {}
