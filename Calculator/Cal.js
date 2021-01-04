
var output = document.querySelector("#result");
function calculate(x){
    output.value = output.value + x;
};

function equal(){
    output.value = eval(output.value);
}

function clr(){
    output.value = null;
}

function back(){
    var str = output.value;
    str= str.substr(0,str.length-1);
    output.value= str;
};