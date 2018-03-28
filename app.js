window.onload = function() {
    var dirt = document.getElementsByClassName("dirt");
    var sound = document.getElementById("whack");
    var grid = document.getElementById("dirt-box");

    for (let i = 0; i < dirt.length ; i++ ){
        dirt[i].addEventListener("click", function(){
            if(dirt[i].innerHTML){
                dirt[i].innerHTML = "";
                sound.play();
            } else {
                console.log("Nothing There");
            }
     })
    }

setInterval(function (){
    var mole = document.createElement("div");
    mole.setAttribute("class", "mole");
    var random = Math.floor(Math.random() * Math.floor(dirt.length));

    if (dirt[random].innerHTML === ""){
       dirt[random].appendChild(mole);
    }
}, 900);    
}
