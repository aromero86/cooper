import { ChangeDetectionStrategy,
         Component }              from '@angular/core';
// --------------------------------------------------------
import { CuiDarkModeService }     from '@cooper/ui'

@Component({
    selector: 'cooper-sidebar',
    templateUrl: './cooper-sidebar.component.html',
    styleUrls: ['./cooper-sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperSidebarComponent {

    constructor(
        private cuiDarkModeService: CuiDarkModeService,
    ) { }

    public darkModeIsEnabled$ = this.cuiDarkModeService.darkModeIsEnabled$;
    public lightModeIsEnabled$ = this.cuiDarkModeService.lightModeIsEnabled$;

    enableDarkMode(): void {
        this.cuiDarkModeService.enableDarkMode();
    }

    enableLightMode(): void {
        this.cuiDarkModeService.enableLightMode();
    }

}
