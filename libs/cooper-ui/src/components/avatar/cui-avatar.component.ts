import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'cui-avatar',
    templateUrl: './cui-avatar.component.html',
    styleUrls: ['./cui-avatar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiAvatarComponent {

    /** Avatar's name owner. By default, empty */
    @Input() public name = '';

    /** Avatar's image source. By default, empty */
    @Input() public imgSrc = '';

    /** If `true`, button borders will be rounded. Default `true` */
    @Input() public rounded = true;

    /** Avatar size:
     * - **Values**: `xs: 24px` | `sm: 32px` | `md: 40px` | `lg: 48px` | `xl: 64px` | `xxl: 80px` | `xxxl: 96px`
     * - **Default**: `sm: 32px`
    **/
    @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl' = 'sm';

    /** Avatar status color:
     * - **Values**: `primary` | `accent` | `success` | `warning` | `danger` | `dark` | `null`
     * - **Default**: `null`
    **/
    @Input() statusColor: 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'dark' | null = null;

}
