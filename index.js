//decorator
class TeaDecorator {
    decoratedTea;
    constructor(decoratedTea) {
        this.decoratedTea = decoratedTea;
    }
    getCost() {
        return this.decoratedTea.getCost();
    }
    getIngredients() {
        return this.decoratedTea.getIngredients();
    }
}
class WithMilk extends TeaDecorator {
    t;
    constructor(t) {
        super(t);
        this.t = t;
    }
    getPrice() {
        return super.getCost() + 5;
    }
    getIngredient() {
        return [...super.getIngredients(), "milk"];
    }
}
class SimpleTea {
    getCost() {
        return 10;
    }
    getIngredients() {
        return ["tea", "milk", "water", "sugar"];
    }
}
const tea = new WithMilk(new SimpleTea());
console.log(tea.getPrice());
console.log(tea.getIngredient());
//# sourceMappingURL=index.js.map