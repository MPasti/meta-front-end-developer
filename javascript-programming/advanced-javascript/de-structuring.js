let { PI } = Math;
//PI é uma propriedade do objeto Math, então fazemos uma copia dela em nova variável
console.log(PI); // 3.141592

//undefined, não existe pi em minusculo
let { pi } = Math;

PI === Math.PI; //true
pi === Math.PI; //false

// também podemos desestruturar propriedades que vão para funções como objetos
