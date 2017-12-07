export class Category {
    constructor(
        private name: String,
        private selected?: boolean
    ) {}

    toogleSelected(): void {
        this.selected = !this.selected;
    }

    isSelected(): boolean {
        return this.selected;
    }

    getName(): String {
        return this.name;
    }
}
