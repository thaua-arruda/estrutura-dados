let  array = [1, 2, 3, 4, 5];
let newArray  = array.filter(function(element) {
      return element % 2 === 0;
});
console.log(newArray); // [2, 4]