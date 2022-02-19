let senha = prompt("Digite a palavra:");
let sub = [];
let contador = 0;

for(var i=1;i<senha.length;i++){
    for(var j=0;j<senha.length-i+1;j++){
        sub.push(senha.substring(j,j+i))
    }
    for(var k=0;k<sub.length-1;k++){
        for(var l=k+1;l<sub.length;l++){
            if(verificaAnagrama(sub[k], sub[l])){
                contador++;
            }
        }  
    }
    sub = [];
}
alert(contador);

function verificaAnagrama(fraseA,fraseB){
    let a = fraseA.split("").sort().join(""); //separa, ordena e junta a string
    let b = fraseB.split("").sort().join("");

    if(a === b){
        return true;
    }else{
        return false;
    }
}