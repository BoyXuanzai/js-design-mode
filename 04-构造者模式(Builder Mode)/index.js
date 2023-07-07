// 建造者模式是一种对象创建设计模式，它旨在通过一步步的构建流程来创建复杂对象。

// 创建Product类
class Sandwich {
  constructor() {
    this.ingredients = [];
  }
  addIngredients(ingredient) {
    this.ingredients.push(ingredient);
  }
  toString() {
    return this.ingredients.join(',');
  }
}
// 创建一个构造者类
class SandwichBuilder {
  
}
