function first(){
    document.getElementById("text").style.fontSize = "24pt";
}
function fancy(){
    if (document.getElementById("fancy").checked){
        document.getElementById("text").style.fontWeight = "bold";
        document.getElementById("text").style.color = "blue";
        document.getElementById("text").style.textDecoration = "underline";
    }else{
        document.getElementById("text").style.fontWeight = "normal";
        document.getElementById("text").style.color = "black";
        document.getElementById("text").style.textDecoration = "None";
    }
}
function moo(){
    var store = document.getElementById("text").value.toUpperCase()
    var parts = store.split(".");
    store = parts.join("-Moo");
    document.getElementById("text").value = store
}
