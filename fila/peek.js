let fila = [1, 2, 3];
Array.prototype.peek = function() {
    return this[0];
};
console.log(fila.peek());
console.log(fila);