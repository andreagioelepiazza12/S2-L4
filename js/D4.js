/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function area( y, x) {
    let area = y*x;
    return area;

}

console.log("area " + area(3,6));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(x, y){
    if(x == y){
        return (x+y)*3;
    }else {
        return x+y;
    }
    
}

console.log("crazySum " + crazySum(3,5));
console.log("crazySum " + crazySum(3,3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff (x){
    let result = x;
    if(x > 19){
        result -= 19;
        return result*3;
    }else{
        return 19-result;
    }
}

console.log("crazyDiff " + crazyDiff(22));
console.log("crazyDiff " + crazyDiff(12));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, 
 e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (n){
    if(n >= 20 && n <= 100 || n == 400){
        return true;
    }else{
        return false;
    }
}

console.log("boundary " + boundary(21));
console.log("boundary " + boundary(400));
console.log("boundary " + boundary(1));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function fWord(str){
    let words = str.trim().split(" ");
    return words[0];
}


function epify (str){
    if(fWord(str) == "EPICODE"){
        return str;
    }else {
        str = "EPICODE " + str;
        return str;
    }

}

console.log("epify " + epify("EPICODE IS REAL"))
console.log("epify " + epify("IS UNBEALIVEBLE"))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function checkPosit(n){
    if(n >0){
        return n;
    }else{
        return n-n-n;
    }
}

console.log("checkPosit " + checkPosit(9))

function check3and7(n){
   num = checkPosit(n);
   if(num % 3 === 0 && num % 7 === 0){
    return "multiple of 3 and 7"
   }else if (num % 3 === 0){
    return "multiple of 3"
   }else if (num % 7 === 0){
    return "multiple of 7"
   }else {
    return "not multiple of 3 or 7"
   }

}

console.log("check3and7 " + check3and7(22))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", 
 il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString (str){
    let rvr = str.split('').reverse().join('');
    return rvr;
}
console.log("reverseString " + reverseString("epicode"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str){
    
   return str.split(' ').map(word=> word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
   

}

console.log("upperFirst " + upperFirst("ciao epicode sono andrea"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. 
 La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str){

    return str.slice(1,-1);
}

console.log("cutString " + cutString("Epicode"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri
  casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom (n){
    num = [];

    for(let i = 0; i<n; i++){
        num.push(Math.floor(Math.random() * 11))
    }
    return num;

}

console.log("giveMeRandom " + giveMeRandom(20));
