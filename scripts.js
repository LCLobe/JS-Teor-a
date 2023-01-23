//console.log('Hello world')
//VARIABLES

//No declaramos así porque se nos puede olvidar asignar el valor:
//var caja;
//caja=7;
console.log(caja);
//así declaramos:
var caja =7;
console.log(caja);
//La declaración "var" es muy antigua. Vamos a usar "let" o "const"
//Contexto:
let box = "marrón";
let boxy = "marrón";
{
    let box = "azul";
    boxy = "azul";
    console.log(box);
    console.log(boxy);
}
console.log(box);
console.log(boxy);
//Camelcase: nombres de variable con palabras juntas con la letra en mayúscula.
const exampleString = "Can't update!";
const exampletemplateLiteral =`Yo escribo ${exampleString} mi string`; //sintaxis

//Const
// Boolean
// Number
// undefined
// null
// Array
// Object

console.log(exampleString+` `+exampletemplateLiteral);
console.log(`${exampleString} ${exampletemplateLiteral}`);