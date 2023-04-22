const opções = document.querySelectorAll(".player-options div > img");
const opções_ing = document.querySelectorAll(".enemy-options div > img");
var resultado = document.getElementById("resultado");
var player_opt = "";
var enemy_opt = "";
var audio_playing = [false, false, false];

function RedefinirEscolha() {
    for (var i = 0; i < opções.length; i++) {
            opções[i].style.opacity = 0.3;
    }
    for (var i = 0; i < opções_ing.length; i++) {
        opções_ing[i].style.opacity = 0.3;
    }
}

function IngOption() {
    let opt_rand = Math.floor(Math.random()*3);

    for(var i = 0; i < opções_ing.length; i++) {
        if (i == opt_rand) {
            opções_ing[i].style.opacity = 1;
            enemy_opt = opções_ing[i].getAttribute("opt");
        } else {opções_ing[i].style.opacity = 0.3;}
    }

    switch (player_opt) {
        case "pedra": 
            switch (enemy_opt) {
                case "pedra": resultado.innerHTML = "Empate";
                break
                case "papel": resultado.innerHTML = "Derrota!";
                break
                case "tesoura": resultado.innerHTML = "Você Ganhou!";
            }
        break
        case "papel":
            switch (enemy_opt) {
                case "papel": resultado.innerHTML = "Empate";
                break
                case "tesoura": resultado.innerHTML = "Derrota!";
                break
                case "pedra": resultado.innerHTML = "Você Ganhou!";
            }
        break
        case "tesoura":
            switch (enemy_opt) {
                case "tesoura": resultado.innerHTML = "Empate";
                break
                case "pedra": resultado.innerHTML = "Derrota!";
                break
                case "papel": resultado.innerHTML = "Você Ganhou!";
            }
    }
}

for (var i = 0; i < opções.length; i++) {
    opções[i].addEventListener("click", (i2)=> {
        RedefinirEscolha();
        i2.target.style.opacity = 1;
        player_opt = i2.target.getAttribute("opt");
        IngOption();

        switch (player_opt) {
            case "pedra": 
                if (audio_playing[0] == false) {
                    let audio = new Audio("rock_snd.mp3");
                    audio.play();
                    audio_playing[0] = true;
                    audio.addEventListener('ended', ()=> {audio_playing[0] = false;});
                }
            break
            case "papel": 
                if (audio_playing[1] == false) {
                    let audio = new Audio("paper_snd.mp3");
                    audio.play();
                    audio_playing[1] = true;
                    audio.addEventListener('ended', ()=> {audio_playing[1] = false;});
                }
            break
            case "tesoura": 
                if (audio_playing[2] == false) {
                    let audio = new Audio("scissor_snd.mp3");
                    audio.play();
                    audio_playing[2] = true;
                    audio.addEventListener('ended', ()=> {audio_playing[2] = false;});
                }
        }
    })
}
