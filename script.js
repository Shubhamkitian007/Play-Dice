var count = 0;
function newgame(){
    location.reload();
}
function firstplayer(){
    var firstplayername = document.getElementById('firstplayer').value;
    // console.log(firstplayername);
    document.getElementById('firstplayerheading').innerHTML = firstplayername;
    document.getElementById('firstplayer').style.display = "none";
    document.getElementById('rsbtn1').style.display = "none";
    document.getElementById('droll').style.display = "none";
    

    // play1();
}

function secondplayer(){
    this.secondplayername = document.getElementById('secondplayer').value;
    // console.log(secondplayername);
    document.getElementById('secondplayerheading').innerHTML = secondplayername;
    document.getElementById('secondplayer').style.display = "none";
    document.getElementById('lsbtn2').style.display = "none";
    document.getElementById('droll').style.display = "block";
    // play2();
}

function diceroll(){
    count++;
    if(count == 1){
        // console.log(count);
        this.firstRandomNum = Math.floor(Math.random() *6) + 1;
        const firstDiceImage = 'images/'+ firstRandomNum + '.png';
        document.getElementById('firstplayerimage').setAttribute('src',firstDiceImage);
        firstplayer.push(firstRandomNum);
    
    }
    else if(count == 2){
        // console.log(count);
        this.secondRandomNum = Math.floor(Math.random() *6) + 1;
        const secondDiceImage = 'images/'+ secondRandomNum + '.png';
        document.getElementById('secondplayerimage').setAttribute('src',secondDiceImage);
        count = 0;
    }

    
}

