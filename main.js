//Invertir Cadena de Caracteres

const nombre = ["Paula", "Belen" ];
//console.log('nombre:', nombre);

function insertaNombre () {
    const n1 = [nombre];

    return n1;
}


const inserta = insertaNombre();
const h1 = document.getElementById("n1");

inserta.forEach(String =>{
    const p = document.createElement("p");
    p.innerHTML= String;
    h1.append(p);
    }
);

const reversed = nombre.reverse();
console.log(reversed);

function insertaNombre2 () {
    const n2 = [reversed];

    return n2;
} 

const inserta2 = insertaNombre2();
const h2 = document.getElementById("n2");

inserta2.forEach(String =>{
    const p = document.createElement("p");
    p.innerHTML= String;
    h2.append(p);
}
);