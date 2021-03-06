// シングルトンパターン化する
// const getInstance = singleton(MyClass);
// const myClass = getInstance();

function singleton(Klass) {
  let instance = null;
  return function(){
    if(!instance) {
      instance = new Klass();
    }
    return instance;
  }
}

module.exports = singleton;
