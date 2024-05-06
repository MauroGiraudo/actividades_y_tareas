function doSomething(callback) {
  console.log('Doing something...');
  callback();
}
function sayHello() {
  console.log('Hello!');
}

doSomething(sayHello);
