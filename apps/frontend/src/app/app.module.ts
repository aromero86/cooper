import { NgModule }                  from '@angular/core';
import { BrowserModule }             from '@angular/platform-browser';
import { RouterModule }              from '@angular/router';
// --------------------------------------------------------
import { CuiWrapperModule }          from '@cooper/ui';
// --------------------------------------------------------
import { AppComponent }              from './app.component';
import { AppRoutingModule }          from './app.routing.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        CuiWrapperModule,
        HighlightModule,
    ],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                languages: {
                    xml: () => import('highlight.js/lib/languages/xml'),
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    scss: () => import('highlight.js/lib/languages/scss'),
                },
                themePath: './../assets/code-light.css'
            },
        }
    ]
})
export class AppModule { }
