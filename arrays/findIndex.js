let array = [ 1, 2, 3, 4, 5];
let index = array.findIndex(function(element){
    return element > 3;
});
console.log(index); // 3, pois o número maior que 3 é o 4, que está no índice 3