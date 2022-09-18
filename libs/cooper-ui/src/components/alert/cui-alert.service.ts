import { EventEmitter,
         Injectable }     from '@angular/core';
import { BehaviorSubject,
         map }            from 'rxjs';

@Injectable()
export class CuiAlertService {

    public alertDismissedEvent = new EventEmitter();

    private dismissible = new BehaviorSubject(false);
    public dismissible$ = this.dismissible.asObservable();

    private mode = new BehaviorSubject<'info' | 'success' | 'warning' | 'danger'>('info');
    public modeIsInfo$ = this.mode.asObservable().pipe(map(mode => mode === 'info'));
    public modeIsSuccess$ = this.mode.asObservable().pipe(map(mode => mode === 'success'));
    public modeIsWarning$ = this.mode.asObservable().pipe(map(mode => mode === 'warning'));
    public modeIsDanger$ = this.mode.asObservable().pipe(map(mode => mode === 'danger'));

    private alertHasBody = new BehaviorSubject(false);
    public alertHasBody$ = this.alertHasBody.asObservable();

    setDismissible(value: boolean): void {
        this.dismissible.next(value);
    }

    setMode(value: 'info' | 'success' | 'warning' | 'danger'): void {
        this.mode.next(value);
    }

    setAlertHasBody(value: boolean): void {
        this.alertHasBody.next(value);
    }

    dismiss(): void {
        this.alertDismissedEvent.emit();
    }

}
