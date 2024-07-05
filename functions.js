let pontuacao = calcularRanking(135, 50)

let classes = ["ferro", "bronze", "prata", "ouro", "diamante", "lendário", "imortal"]


function calcularRanking(vitorias, derrotas) {
    let result = vitorias - derrotas
       return result
}

	if(pontuacao <= 10) {
        console.log("O herói possui " + pontuacao + " pontos, sendo pertencente à classe " + classes[0])
    }        
    else if((pontuacao > 10) && (pontuacao <= 20)) {
        console.log("O herói possui " + pontuacao + " pontos, sendo pertencente à classe " + classes[1])    
    }
    else if((pontuacao > 20) && (pontuacao <= 50)) {
        console.log("O herói possui " + pontuacao + " pontos, sendo pertencente à classe " + classes[2])    
    }
    else if((pontuacao > 50) && (pontuacao <= 80)) {
        console.log("O herói possui " + pontuacao + " pontos, sendo pertencente à classe " + classes[3])    
    }
    else if((pontuacao > 80) && (pontuacao <= 90)) {
        console.log("O herói possui " + pontuacao + " pontos, sendo pertencente à classe " + classes[4])    
    }
    else if((pontuacao > 90) && (pontuacao <= 100)) {
        console.log("O herói possui " + pontuacao + " pontos, sendo pertencente à classe " + classes[5])    
    }
    else {
        console.log("O herói possui " + pontuacao + " pontos, sendo pertencente à classe " + classes[6])    
    }   
