let array = [1, 2, 3, 4, 5];
array.splice(2, 0, "a", "b");
console.log(array); // [1, 2, 'a', 'b', 3, 4, 5]

array.splice(3,2);
console.log(array); // [1, 2, 'a', 4, 5]