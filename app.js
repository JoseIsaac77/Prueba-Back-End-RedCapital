// Fibonacci
// 0, 1 los dos primeros valores


function generaFibonacci (limit) {
    const fi = [0, 1];

    for(let a = 2; a < limit; a++){
        fi[a] = fi[a - 1] + fi[a - 2];
    }

    return fi;
}

const fiboSerie = generaFibonacci(20);
const ul = document.getElementById("fi");

fiboSerie.forEach(number =>{
    const li = document.createElement("li");
    li.innerHTML = number;
    ul.append(li);
    }
);
