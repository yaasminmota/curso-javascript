let a = 7;
let b = 94;
/*
  Modo errado
  a = b;
  b = a;
  a recebe valor de b, ou seja, a = 94, depois b recebe
  a , ou seja, b = 94
*/
let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);