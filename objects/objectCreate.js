const personPrototype = {
    greet: function() {
        console.log(`Olá, meu nome é ${this.name}`);
    }
};

const objThaua = Object.create(personPrototype);
objThaua.name = "Thauã";
objThaua.greet();
