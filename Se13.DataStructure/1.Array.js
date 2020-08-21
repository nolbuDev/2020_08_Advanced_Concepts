const strings = ['a', 'b', 'c', 'd'];
// 32bit system : 4*4 = bytes of storage.

console.log(strings[2])     //0(1) : fast

// push
strings.push('e'); //0(1) : fast

// pop
strings.pop();  //0(1)
strings.pop();

// unshift
strings.unshift('x'); //0(n)

// splice
strings.splice(2, 0, 'alene');  //0(n)

strings.splice(2, 1);  //0(n)

console.log(strings);

// C++
// int a[20];
// int b[5] = {1,2,3,4,5}