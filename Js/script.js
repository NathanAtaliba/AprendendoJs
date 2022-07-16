//window.alert('Minha primeira mensagem'); // 
//window.confirm('Esta programando?'); //jANELA COM OK E CANCEL
// var nome = window.prompt('Qual  é seu nome?'); //VAI PERGUNTAR O NOME    
//window.alert('É um grande prazer te conhecer '+ nome +' !');

var corb1 = document.querySelector('.button');
var corb2 = document.querySelector('.opcoes');
var corb3 = document.querySelector('.button');
var corb4 = document.querySelector('.opcoes');
corb1.addEventListener('mouseenter',enter1);
corb2.addEventListener('mouseenter',enter2);
corb3.addEventListener('mouseout',out1);
corb4.addEventListener('mouseout',out2);

function enter1(){
    corb1.style.background = 'red';
}
function out1(){
    corb3.style.background = 'blue';
}
function enter2(){
    corb2.style.background = 'red';
}
function out2(){
    corb4.style.background = 'blue';

}

function somar(){
    var tn1 = window.document.getElementById('txtn1');
    var tn2 = window.document.querySelector('input#txtn2');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var ressoma = window.document.getElementById("res1");
    var s = n1 + n2;
    ressoma.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`; 
}
function subtrair(){
    var s1 = window.document.getElementById('sub1');
    var s2 = window.document.getElementById('sub2');
    s1 = Number(sub1.value);
    s2 = Number (sub2.value);
    var ressub = window.document.getElementById("res2");
    var r = s1 - s2;
    ressub.innerHTML =`A subtraçao entre ${s1} e ${s2} é igual a ${r}`;
}
function muLtiplicar(){
var m1 = window.document.getElementById('mul1');
var m2 = window.document.getElementById('mul2');
m1 = Number(mul1.value);
m2 = Number(mul2.value);
var resmul = window.document.getElementById("res3");
var m = m2 * m1;
resmul.innerHTML =`A multiplicaçao de ${m1} e ${m2} é igual a ${m}`;
}
function dividir(){
var d1 = window.document.getElementById('div1');
var d2 = window.document.getElementById('div2');
d1 = Number(div1.value);
d2 = Number(div2.value);
var resdiv = window.document.getElementById("res4"); 
d = d1/d2;
resdiv.innerHTML = `A divisao de ${d1} e ${d2} é igual a ${d}`;


}









