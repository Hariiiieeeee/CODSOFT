
const display = document.getElementById("display")

function clearDisplay(){
    display.value = "";

}

function appendtoDisplay(input){
    display.value += input;

}

function Calculate(){
    
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "syntax error!";
    }
}