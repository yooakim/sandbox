exports.world = function() {
  console.log('Hej Världen');
  var foo = {bar: 'foobar'};
  console.log(foo);
  
  var total = 0, count = 1;
  while (count <= 10) {
    total += count;
    count += 1;
  }
  console.log(total);
}