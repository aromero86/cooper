export const ModalWindowComponentTs = `
import { ChangeDetectionStrategy,
         Component }                   from '@angular/core';
// --------------------------------------------------------
import { CuiButtonModule,
         CuiHeadingModule,
         CuiModalComponent, 
         CuiModalModule, 
         CuiParagraphModule }          from '@cooper/ui';

@Component({
    templateUrl: './modal-window.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CuiButtonModule,
        CuiHeadingModule,
        CuiModalModule,
        CuiParagraphModule,
    ],
})
export class ModalWindowComponent extends CuiModalComponent {

    close() {
        this.closeModal();
    }

}

`.trim();

export const ModalWindowComponentHtml = `
<cui-modal-container>
    <cui-modal-header>Modal title</cui-modal-header>
    <cui-modal-body>
        <cui-heading [level]="6">Title 1</cui-heading>
        <cui-paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sit quos dolorum, soluta nulla blanditiis maiores optio impedit numquam iste et, reprehenderit autem, architecto cumque ullam. Labore enim delectus natus.</cui-paragraph>
        <cui-heading [level]="6">Title 2</cui-heading>
        <cui-paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sit quos dolorum, soluta nulla blanditiis maiores optio impedit numquam iste et, reprehenderit autem, architecto cumque ullam. Labore enim delectus natus.</cui-paragraph>
        <cui-heading [level]="6">Title 3</cui-heading>
        <cui-paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sit quos dolorum, soluta nulla blanditiis maiores optio impedit numquam iste et, reprehenderit autem, architecto cumque ullam. Labore enim delectus natus.</cui-paragraph>
        <cui-heading [level]="6">Title 4</cui-heading>
        <cui-paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sit quos dolorum, soluta nulla blanditiis maiores optio impedit numquam iste et, reprehenderit autem, architecto cumque ullam. Labore enim delectus natus.</cui-paragraph>
        <cui-heading [level]="6">Title 5</cui-heading>
        <cui-paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sit quos dolorum, soluta nulla blanditiis maiores optio impedit numquam iste et, reprehenderit autem, architecto cumque ullam. Labore enim delectus natus.</cui-paragraph>
        <cui-heading [level]="6">Title 6</cui-heading>
        <cui-paragraph>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet sit quos dolorum, soluta nulla blanditiis maiores optio impedit numquam iste et, reprehenderit autem, architecto cumque ullam. Labore enim delectus natus.</cui-paragraph>
    </cui-modal-body>

    <cui-modal-footer>
        <span class="ml-auto"></span>
        <cui-button color="dark" size="md" mode="flat" (click)="close()">
            <cui-button-label>Close modal</cui-button-label>
        </cui-button>
    </cui-modal-footer>
</cui-modal-container>

`.trim();
