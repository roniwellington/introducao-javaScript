function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'img/amanhecer.jpg'
        document.body.style.backgroundImage = 'url(img/fundo-manha.jpg)'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'img/entardecer.jpg'
        document.body.style.backgroundImage = 'url(img/fundo-tarde.jpg)'
    } else {
        //BOA NOITE
        img.src = 'img/anoitecer.jpg'
        document.body.style.backgroundImage = 'url(img/fundo-noite.jpg)'
    }
}

//CONTADOR DE IDADE
function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var rest = document.querySelector('div#rest');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        //MASCULINO
        if (fsex[0].checked) {
            gênero = 'Homem'

            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src','img/foto-bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','img/foto-jovem-m.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','img/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src','img/foto-idoso-m.png')
            }
            //FEMININO
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 13){
                //Criança
                img.setAttribute('src','img/foto-bebe-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','img/foto-jovem-f.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src','img/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src','img/foto-idoso-f.png')
            }
        }
        rest.style.textAlign = 'center'
        rest.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        rest.appendChild(img)
    }
}


//CONTADOR NÚMERICO

function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let resti = document.getElementById('resti'); 
 
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
         resti.innerHTML = 'Impossivel contar!'
         alert('[ERRO] Faltam dados!');
        
    }else {
         resti.innerHTML = 'Contando: '
         let i = Number(ini.value);
         let f = Number(fim.value);
         let p = Number(passo.value);
         if (p <= 0) {
             alert('Passo inválido! Considerando PASSO 1')
             p = 1
         }
 
         if (i < f) {
             //CONTAGEM CRESCENTE
             for(let c = i; c <=f; c+= p) {
                 resti.innerHTML += ` ${c} \u{1F449} `
             }
           
         } else {
             //CONTAGEM REGRESSIVA
             for(let c = i; c >= f; c -= p){
                 resti.innerHTML += ` ${c} \u{1F449} `
             }
         }
         resti.innerHTML += `\u{1F3C1}`
    }
    
 }
 
 function tabuada() {
     let nume = document.getElementById('txtn');
     let tab = document.getElementById('seltab');
     if (nume.value.length == 0) {
         alert('Por favor, digite um número!')
        
     } else {
         let n = Number(nume.value);
         let c = 1;
         tab.innerHTML = ''
         while (c <= 10) {
             let items = document.createElement('option')
             items.text = ` ${n} x ${c} = ${n*c}`
             items.value = `tab${c}`
             tab.appendChild(items)
             c++
         }
     }
 }


 //ANALIZADOR DE NÚMEROS

let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumeros(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumeros(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista');
    }
    num.value = '';
    num.focus();
}


function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for(let pos in valores) {
            soma += valores[pos];
            if(valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = '';
        res.innerHTML += ` <p> Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p> O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p> Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`;
    }
}