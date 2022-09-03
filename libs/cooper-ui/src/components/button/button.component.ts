import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperButtonComponent {

    @Input() color: 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'dark' = 'primary';
    @Input() mode: 'regular' | 'outline' | 'flat' = 'regular'; 
    @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
    @Input() disabled = false;
    @Input() rounded = false;

}
