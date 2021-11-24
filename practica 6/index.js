class PilaA{
    constructor(){
        this.pila = [];
    }

    push(element){
        this.pila.push(element);
        return this.pila;
    };
    pop(){
        return this.pila.pop();
    };
    peek(){
        return this.pila [this.pila.length - 1];
    };
    size(){
        return this.pila.length;
    };
    print(){
        console.log(this.pila);
    };
}

const pila = new PilaA ();

pila.push (['ACER', 'MSI']);
pila.push (['ACER', 'MSI', 'ALIENWARE']);
console.log(pila.size()); 
console.log(pila.pop()); // 'ACER','MSI', 'ALIENWARE'
console.log(pila.size()); 