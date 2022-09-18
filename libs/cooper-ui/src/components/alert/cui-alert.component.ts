import { ChangeDetectionStrategy,
         Component,
         ContentChildren,
         EventEmitter,
         Input,
         OnChanges,
         OnDestroy,
         OnInit,
         Output,
         QueryList,
         SimpleChanges }         from '@angular/core';
import { Subscription }          from 'rxjs';
// --------------------------------------------------------
import { CuiAlertBodyComponent } from './alert-body/cui-alert-body.component';
import { CuiAlertService }       from './cui-alert.service';
 
@Component({
    selector: 'cui-alert',
    templateUrl: './cui-alert.component.html',
    styleUrls: ['./cui-alert.component.scss'],
    providers: [ CuiAlertService ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiAlertComponent implements OnChanges, OnInit, OnDestroy {

    constructor(
        private cuiAlertService: CuiAlertService,
    ) { }

    @Input() mode: 'info' | 'success' | 'warning' | 'danger' = 'info';
    @Input() dismissible = false;
    @Output() dismissed = new EventEmitter();

    public modeIsInfo$ = this.cuiAlertService.modeIsInfo$;
    public modeIsSuccess$ = this.cuiAlertService.modeIsSuccess$;
    public modeIsWarning$ = this.cuiAlertService.modeIsWarning$;
    public modeIsDanger$ = this.cuiAlertService.modeIsDanger$;

    private dismissedEventSubscription: Subscription | null = null;

    ngOnInit(): void {
        this.dismissedEventSubscription = this.cuiAlertService.alertDismissedEvent.subscribe(() => {
            this.dismissed.emit();
        })
    }

    ngOnDestroy(): void {
        this.dismissedEventSubscription?.unsubscribe();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['dismissible'])
            this.cuiAlertService.setDismissible(this.dismissible);
        if (changes['mode'])
            this.cuiAlertService.setMode(this.mode);
    }

    @ContentChildren(CuiAlertBodyComponent) private set body(value: QueryList<CuiAlertBodyComponent>) {
        this.cuiAlertService.setAlertHasBody(value? value.length > 0 : false);
    }

}
