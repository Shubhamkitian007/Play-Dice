var count = 0;
function newgame(){
    location.reload();
}

(function(){
    document.getElementById('droll').style.display = "none";
})();
function firstplayer(){
    const firstplayername = document.getElementById('firstplayer').value;
    document.getElementById('firstplayerheading').innerHTML = firstplayername;
    document.getElementById('firstplayer').style.display = "none";
    document.getElementById('rsbtn1').style.display = "none";
}

function secondplayer(){
    const secondplayername = document.getElementById('secondplayer').value;
    document.getElementById('secondplayerheading').innerHTML = secondplayername;
    document.getElementById('secondplayer').style.display = "none";
    document.getElementById('lsbtn2').style.display = "none";
    document.getElementById('droll').style.display = "block";
    document.getElementById('displayrule').style.display = "none";
}

function diceroll(){
    count++;
    if(count == 1){
        this.firstRandomNum = Math.floor(Math.random() *6) + 1;
        const firstDiceImage = 'images/'+ firstRandomNum + '.png';
        document.getElementById('firstplayerimage').setAttribute('src',firstDiceImage);
    }
    else if(count == 2){
        this.secondRandomNum = Math.floor(Math.random() *6) + 1;
        const secondDiceImage = 'images/'+ secondRandomNum + '.png';
        document.getElementById('secondplayerimage').setAttribute('src',secondDiceImage);
        count = 0;
    }
}

var firstvalue = document.getElementById('firstplayerimage').value;
console.log(firstvalue);
var secondtvalue = document.getElementById('secondplayerimage').value;
console.log(secondtvalue);