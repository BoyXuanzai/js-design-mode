// 工厂方法模式
// 定义了一个创建对象的接口，但是由子类决定要实例化的类是哪一个。可以将对象的创建和使用分离，使得系统更加灵活

// 定义一个抽象类
class Animal {
  speak() {
    throw new Error('This method must be implemented.');
  }
}
// 实现具体的类
class Dog extends Animal {
  speak() {
    return 'woof';
  }
}
class Cat extends Animal {
  speak() {
    return 'Meow';
  }
}

// 实现工厂方法
class AnimalFactory {
  createAnimal(animalType) {
    switch (animalType) {
      case 'dog':
        return new Dog();
      case 'cat':
        return new Cat();
      default:
        throw new Error(`Invalid animal type: ${animalType}`);
    }
  }
}
// 使用工厂方法创建对象
let factory = new AnimalFactory()
const dog = factory.createAnimal("dog")
console.log(dog.speak()); // woof
const cat = factory.createAnimal("cat")
console.log(cat.speak()); // Meow
