import { Component } from '@angular/core';

type ColorType = 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'dark';

@Component({
    selector: 'cooper-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    public colors: ColorType[] = ['primary', 'accent', 'success', 'warning', 'danger', 'dark'];

}
