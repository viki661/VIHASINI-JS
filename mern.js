const Player = document.querySelector(".b");   
const Player1 = document.querySelector(".c");  
const score1 = document.querySelector(".score-value");

let PlayerY = 180;
let PlayerX = 300;

let ArrowX = 300;
let score = 0;


Player.style.top = PlayerY + "px";
Player1.style.left = ArrowX + "px";
Player1.style.top = "180px";

setInterval(() => {

    
    ArrowX -= 15;
    Player1.style.left = ArrowX + "px";

    
    const enemy = Player1.getBoundingClientRect();
    const player = Player.getBoundingClientRect();

    if (
        player.left < enemy.right &&
        player.right > enemy.left &&
        player.top < enemy.bottom &&
        player.bottom > enemy.top
    ) {
        alert("Game Over");
        
    }
    function restartGame() {
    
    PlayerY = 180;
    Player.style.top = PlayerY + "px";

   
    ArrowX = 300;
    Player1.style.left = ArrowX + "px";

    let randomY = Math.floor(Math.random() * 350);
    Player1.style.top = randomY + "px";

    
    score = 0;
    console.log("Game Restarted");
}
    

   
    if (ArrowX < -100) {
        score++;
        score1.textContent = score;
        console.log("Score:", score);

        ArrowX = 300;

       
        let randomY = Math.floor(Math.random() * 250);
        Player1.style.top = randomY + "px";
    }

}, 100);

document.addEventListener("keydown", (e) => {

    if (e.key === "ArrowUp") {
        PlayerY -= 25;
        if (PlayerY < 0) PlayerY = 0;
    }
    if (e.key === "ArrowDown") {
        PlayerY += 25;
        if (PlayerY > 300) PlayerY = 300;
    }
    if (e.key === "ArrowRight") {
        ArrowX += 25;
        if (ArrowX > 300) ArrowX = 300;
        Player1.style.left = ArrowX + "px";
    }

    Player.style.top = PlayerY + "px";
});