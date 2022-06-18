var botao = document.getElementById('clique');

botao.onclick = function(){
    if(botao.value === 'troca'){
        pers1.src = 'seraphine-2.webp';
        botao.value = 'Retornar';
        botao.innerHTML = '(Voltar)';
    }else{
        pers1.src = 'seraphine.jpg';
        botao.value = 'troca';
        botao.innerHTML = '(Trocar)';
    }
}