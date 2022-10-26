import { ChangeDetectionStrategy,
         Component, 
         Input,
         OnChanges,
         OnInit }                    from '@angular/core';
// --------------------------------------------------------
import { CuiAccordionService }       from './cui-accordion.service';

@Component({
    selector: 'cui-accordion',
    templateUrl: './cui-accordion.component.html',
    styleUrls: ['./cui-accordion.component.scss'],
    providers: [ CuiAccordionService ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CuiAccordionComponent implements OnChanges, OnInit {

    @Input() onlyOneElemenetOpenedAtOnce = true;

    constructor(
        private cuiAccordionService: CuiAccordionService,
    ) { }

    ngOnInit(): void {
        this.cuiAccordionService.setOnlyOneElemenetOpenedAtOnce(this.onlyOneElemenetOpenedAtOnce);
    }

    ngOnChanges(): void {
        this.cuiAccordionService.setOnlyOneElemenetOpenedAtOnce(this.onlyOneElemenetOpenedAtOnce);
    }

}
