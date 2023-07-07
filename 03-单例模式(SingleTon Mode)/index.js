// 单例模式的目的是确保一个类只有一个实例，并为该实例提供全局访问点.
class Logger {
  constructor() {
    if (!Logger.instance) {
      this.loggs = [];
      Logger.instance = this;
    }
    return Logger.instance;
  }
  log(message) {
    this.loggs.push(message);
    console.log(`Logger: ${message}`);
  }
  printLogCount() {
    console.log(`Number of logs: ${this.loggs.length}`);
  }
}
// 可以使用全局变量来访问实例
const logger = new Logger();
logger.log('First message'); // Logger: First message
logger.printLogCount(); // Number of logs: 1

const anotherLogger = new Logger(); // 此时返回一个已经存在的实例
anotherLogger.log('Second message'); // Output: Logger: Second message
anotherLogger.printLogCount(); // Output: Number of logs: 2
console.log(logger === anotherLogger);  // true
