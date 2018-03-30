window.onload = function() {
    var dirt = document.getElementsByClassName("dirt");
    var sound = document.getElementById("whack");
    var lose = document.getElementById("lose"); 
    var grid = document.getElementById("dirt-box");
    var score = 0;
    for (let i = 0; i < dirt.length ; i++ ){
        dirt[i].addEventListener("click", function(){
            if(dirt[i].innerHTML){
                score = score + 1;
                dirt[i].innerHTML = "";
                sound.play();
                document.getElementById("score").innerHTML = "Congratz broski, you have won a small loan of (" + score + ") million dollars!"
                if (score  > 1000000){
                    document.getElementById("score").innerHTML = "Congratz broski, you have no life"
                }
            } else {
                lose.play();
                alert("Your Dumb, trump isn't there. You Lose :D");
                location.reload();
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
