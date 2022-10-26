import { Injectable }                from "@angular/core";
import { Subscription }              from "rxjs";
// --------------------------------------------------------
import { CuiAccordionItemComponent } from "./cui-accordion.module";

@Injectable()
export class CuiAccordionService {

    private onlyOneElemenetOpenedAtOnce = false;
    private items: CuiAccordionItemComponent[] = [];
    private changeStatusSubscriptions: {[key: string]: Subscription } = { };

    setOnlyOneElemenetOpenedAtOnce(value: boolean): void {
        this.onlyOneElemenetOpenedAtOnce = value;
    }

    registerItem(item: CuiAccordionItemComponent): void {
        this.items.push(item);
        this.changeStatusSubscriptions[item.id] = item.statusChange.subscribe(({ isOpened }) => {
            if (isOpened) {
                this.closeOtherItems(item);
            }
        });
    }

    private closeOtherItems(openedItem: CuiAccordionItemComponent): void {
        if (!this.onlyOneElemenetOpenedAtOnce)
            return;
        this.items.forEach(item => {
            if (item.id !== openedItem.id)
                item.close();
        });
    }

    unregisterItem(itemToRemove: CuiAccordionItemComponent): void {
        this.items = this.items.filter(item => item.id !== itemToRemove.id);
        this.changeStatusSubscriptions[itemToRemove.id]?.unsubscribe();
    }

}
