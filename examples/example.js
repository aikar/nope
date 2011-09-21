require('nope')(__dirname + '/lib');
var fooBar = new Foo.Bar();
var fooBaz = new Foo.Baz();
var foo1 = new Foo(); // echos Foo
var foo2 = new Foo(); // this doesnt echo Foo or Foo.Bar because Foo is a singleton and only inits once.
var fooBar2 = new Foo.Bar(); // but Foo.Bar is not, so itll init again.

console.error(foo2.getY());
foo1.setY(3)
console.error(foo2.getY());

console.error(foo2.getY() == foo1.getY())
console.error(foo2 == foo1)
console.error(foo1)
console.error(foo2)

