//tea
interface ITea {
  getCost(): number;
  getIngredients(ingredients: string[]): string[];
}

//decorator
abstract class TeaDecorator implements ITea {
  constructor(private readonly decoratedTea: ITea) {}

  getCost(): number {
    return this.decoratedTea.getCost();
  }

  getIngredients(ingredients: string[]): string[] {
    return this.decoratedTea.getIngredients(ingredients);
  }
}

class WithMilk extends TeaDecorator {
  constructor(private readonly t: ITea) {
    super(t);
  }

  getPrice() {
    return super.getCost() + 5;
  }

  getIngredient(ingredients: string[]) {
    return super.getIngredients([...ingredients, "milk"]);
  }
}

class SimpleTea implements ITea {
  getCost() {
    return 10;
  }

  getIngredients(ingredients: string[]) {
    return ingredients;
  }
}

// class SugarFreeTea implements ITea {
//   getCost(): number {
//     return 5;
//   }

//   getIngredients(ingredients: string[]) {
//     return ingredients;
//   }
// }

const tea = new WithMilk(new SimpleTea());
console.log(tea.getPrice());
console.log(tea.getIngredient(["tea", "sugar", "water"]));

// const sugarFreetea = new WithMilk(new SugarFreeTea());
// console.log(sugarFreetea.getPrice());
// console.log(sugarFreetea.getIngredient(["tea", "water"]));
