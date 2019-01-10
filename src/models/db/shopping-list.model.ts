/**
 * `model` for handling a single `MShoppingList` instance.
 */
export class MShoppingList {
    name = '';
    date: Date;
    totalItems = 0;
    bill = 0.0;
    open = true;
    products: IProduct[] = [];

    constructor(name: string) {
        this.name = name;
    }
}
