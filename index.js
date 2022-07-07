//decorator
class TeaDecorator {
    decoratedTea;
    constructor(decoratedTea) {
        this.decoratedTea = decoratedTea;
    }
    getCost() {
        return this.decoratedTea.getCost();
    }
    getIngredients(ingredients) {
        return this.decoratedTea.getIngredients(ingredients);
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
    getIngredient(ingredients) {
        return super.getIngredients([...ingredients, "milk"]);
    }
}
class SimpleTea {
    getCost() {
        return 10;
    }
    getIngredients(ingredients) {
        return ingredients;
    }
}
class SugarFreeTea {
    getCost() {
        return 5;
    }
    getIngredients(ingredients) {
        return ingredients;
    }
}
const tea = new WithMilk(new SimpleTea());
console.log(tea.getPrice());
console.log(tea.getIngredient(["tea", "sugar", "water"]));
const sugarFreetea = new WithMilk(new SugarFreeTea());
console.log(sugarFreetea.getPrice());
console.log(sugarFreetea.getIngredient(["tea", "water"]));
//# sourceMappingURL=index.js.map