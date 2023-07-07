// 抽象工厂模式提供了一种封装一组具有相同主题的单个工厂的方式。它有一个接口，用于创建相关或依赖对象的家族，而不需要指定实际实现的类。

// 创建一组主题对象类型的抽象类
class AnimalFood {
  provide() {
    throw new Error('This method must be implemented.');
  }
}
class AnimalToy {
  provide() {
    throw new Error('This method must be implemented.');
  }
}
// 创建一组具体代表家族的对象
class HighQualityDogFood extends AnimalFood {
  provide() {
    return 'High Quality Dog Food';
  }
}
class HighQualityDogToy extends AnimalToy {
  provide() {
    return 'High Quality Dog Toy';
  }
}
class CheapCatFood extends AnimalFood {
  provide() {
    return 'cheap cat food';
  }
}
class CheapCatToy extends AnimalToy {
  provide() {
    return 'cheap cat toy';
  }
}
// 定义一个抽象工厂
class AnimalProductsAbstractFactory {
  createFood() {
    throw new Error('This method must be implemented.');
  }

  createToy() {
    throw new Error('This method must be implemented.');
  }
}
// 创建具体工厂类
class HighQualityAnimalProductsFactory extends AnimalProductsAbstractFactory {
  createFood() {
    return new HighQualityDogFood();
  }
  createToy() {
    return new HighQualityDogToy();
  }
}
class CheapAnimalProductsFactory extends AnimalProductsAbstractFactory {
  createFood() {
    return new CheapCatFood();
  }
  createToy() {
    return new CheapCatToy();
  }
}
const highFactory = new HighQualityAnimalProductsFactory();
const highFood = highFactory.createFood();
console.log(highFood.provide()); // High Quality Dog Food
const highToy = highFactory.createToy();
console.log(highToy.provide()); // High Quality Dog Toy

const cheapFactory = new CheapAnimalProductsFactory();
const cheapFood = cheapFactory.createFood();
console.log(cheapFood.provide()); //  cheap cat food
const cheapToy = cheapFactory.createToy();
console.log(cheapToy.provide()); //  cheap cat toy
