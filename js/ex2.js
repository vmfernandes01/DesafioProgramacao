let s = window.prompt("Digite sua senha: ")
let faltando = 0

if(s == s.toLowerCase()){
    faltando++
}

if(s == s.toUpperCase()){
    faltando++
}

var temNumero = false

for(var i = 0; i < s.length; i++){
    var codigo = s.charCodeAt(i)
    if(codigo > 47 && codigo < 58){
        temNumero = true
    }
}

if(!temNumero){
    faltando++
}

var temEspecial = false
var esp = "!@#$%^&*()-+"

for(var i = 0; i < s.length; i++){
    for(var j = 0; j < esp.length; j++){
        if(s.charAt(i) === esp.charAt(j)){
            temEspecial = true
            break
        }
    }

    if(temEspecial){
        break
    }
}

if(!temEspecial){
    faltando++
}

if(6 - s.length < faltando){
    alert(faltando)
}else{
    alert(6 - s.length)
}
