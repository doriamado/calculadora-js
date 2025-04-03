const display = document.getElementById("display");

function AparecernoDisplay(input){
    display.value += input;
}

function LimparDisplay (){
    display.value = " ";
}

function calcular(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Erro";
    }
}

function Apagardigito(){
    display.value = display.value.slice(0, -1);
}