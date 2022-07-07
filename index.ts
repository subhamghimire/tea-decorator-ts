//tea
interface ITea {
  getCost(): number;
  getIngredients(): string[];
}

//decorator
abstract class TeaDecorator implements ITea {
  constructor(private readonly decoratedTea: ITea) {}

  getCost(): number {
    return this.decoratedTea.getCost();
  }

  getIngredients(): string[] {
    return this.decoratedTea.getIngredients();
  }
}

class WithMilk extends TeaDecorator {
  constructor(private readonly t: ITea) {
    super(t);
  }

  getPrice() {
    return super.getCost() + 5;
  }

  getIngredient() {
    return [...super.getIngredients(), "milk"];
  }
}

class SimpleTea implements ITea {
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
