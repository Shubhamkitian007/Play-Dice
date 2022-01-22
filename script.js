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
    

    // play1();
}

function secondplayer(){
    secondplayername = document.getElementById('secondplayer').value;
    // console.log(secondplayername);
    document.getElementById('secondplayerheading').innerHTML = secondplayername;
    document.getElementById('secondplayer').style.display = "none";
    document.getElementById('lsbtn2').style.display = "none";
    document.getElementById('droll').style.visibility = "visible";
    // play2();
}

function diceroll(){
    count++;
    if(count == 1){
        // console.log(count);
        const firstRandomNum = Math.floor(Math.random() *6) + 1;
        console.log(firstRandomNum);
        const firstDiceImage = 'images/'+ firstRandomNum + '.png';
        document.getElementById('firstplayerimage').setAttribute('src',firstDiceImage);
    
    }
    else if(count == 2){
        // console.log(count);
        const secondRandomNum = Math.floor(Math.random() *6) + 1;
        console.log(secondRandomNum);
        const secondDiceImage = 'images/'+ secondRandomNum + '.png';
        document.getElementById('secondplayerimage').setAttribute('src',secondDiceImage);
        count = 0;
    }
}




// $('#playerbtn-1').click(function roll1(){

// });