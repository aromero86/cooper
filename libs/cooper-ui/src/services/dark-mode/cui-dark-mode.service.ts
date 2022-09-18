import { Injectable } from '@angular/core';
import { BehaviorSubject,
         map }             from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CuiDarkModeService {

    constructor() {
        if (localStorage['theme'] === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            document.body.classList.remove('bg-white');
            document.body.classList.add('bg-dark-900');
            this.darkMode.next(true);
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.add('bg-white');
            document.body.classList.remove('bg-dark-900')
            this.darkMode.next(false);
        }
    }

    private darkMode = new BehaviorSubject(false);
    public darkModeIsEnabled$ = this.darkMode.asObservable();
    public lightModeIsEnabled$ = this.darkMode.asObservable().pipe(map(darkMode => !darkMode));

    getDarkModeIsEnabled(): boolean {
        return this.darkMode.getValue();
    }

    enableDarkMode(): void {
        this.darkMode.next(true);
        document.documentElement.classList.add('dark');
        document.body.classList.remove('bg-white');
        document.body.classList.add('bg-dark-900');
        localStorage.setItem('theme', 'dark');
    }

    enableLightMode(): void {
        this.darkMode.next(false);
        document.documentElement.classList.remove('dark');
        document.body.classList.add('bg-white');
        document.body.classList.remove('bg-dark-900')
        localStorage.setItem('theme', 'light');
    }

    toggle(): void {
        const darkMode = this.darkMode.getValue();
        if (darkMode) {
            this.enableLightMode();
        } else {
            this.enableDarkMode();
        }
    }

}
