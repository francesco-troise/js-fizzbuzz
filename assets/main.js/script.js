/*INTRODUZIONE PER L'UTENTE*/

alert(`Il programma stamperà a schermo i numeri da 1 a 100
i numeri multipli sia di 5 che di 3 ricevono un "badge" -FizzBuzz
i numeri multipli solo di 5 ricevono un "badge" -Buzz
i numeri multipli solo di 3 ricevono un "badge" -Fizz
i numeri non multipli nè di 3 nè di 5 non ricevono "badge"`)
//stampa introduzione

/*SEZIONE CICLO FOR*/

for(let i = 1; i <= 100; i++){
//imposto la struttura del ciclo for(-i parte da 1 ed arriverà fino a 100)

    if(i % 3 === 0 && i % 5 === 0){
        console.log(`${i} -FizzBuzz`)
        //gestisco la prima condizione(se il numero è divisibile sia per 5 che per 3[operatore logico AND])
    
    }else if(i % 5 === 0){
        console.log(`${i} -Buzz`)
        //gestisco la seconda condizione(se il numero è divisibile solo per 5)
    }
    

}

