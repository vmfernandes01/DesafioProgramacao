var n = prompt("Insira um valor: ");

    if((n<1) || !(n % 1 === 0)){
        document.write("Valor inválido. Insira um valor inteiro maior que 0.");
    }else{
        for(var i=0;i<n;i++){
            for(var j=0;j<n;j++){
                if(j<(n-i-1)){
                    document.writeln(" ");
                }else{
                    document.write("*");
                }
            }
            document.writeln("<br>");
        }
    }

    
    




