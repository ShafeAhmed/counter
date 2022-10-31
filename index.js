function reset(){
    document.getElementById("panel").innerHTML="0";
}
function increment(){
    let value= parseInt(document.getElementById("panel").innerHTML);
    value=value+1;
    document.getElementById("panel").innerHTML=String(value);
}
function decrement(){
    let value= parseInt(document.getElementById("panel").innerHTML);
    if (value>0) {
        value=value-1;
        document.getElementById("panel").innerHTML=String(value);
    }
}