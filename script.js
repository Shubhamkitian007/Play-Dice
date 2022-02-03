var count = 0;
function newgame(){
    location.reload();
}

(function(){
    document.getElementById('droll').style.display = "none";
    document.getElementById('result').style.display = "none";
    document.getElementById('new').style.display = "none";
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
        firstRandomNum = Math.floor(Math.random() *6) + 1;
        const firstDiceImage = 'images/'+ firstRandomNum + '.png';
        document.getElementById('firstplayerimage').setAttribute('src',firstDiceImage);
        document.getElementsByClassName('dicevalueone').value = firstRandomNum;        
        // console.log(dicevalueone);
    }
    else if(count == 2){
        secondRandomNum = Math.floor(Math.random() *6) + 1;
        const secondDiceImage = 'images/'+ secondRandomNum + '.png';
        document.getElementById('secondplayerimage').setAttribute('src',secondDiceImage);
        document.getElementsByClassName('dicevaluetwo').value = secondRandomNum;
        document.getElementById('droll').style.display = "none";
        document.getElementById('result').style.display = "block";
        // console.log(secondRandomNum);
        count = 0;
    }
}

function result(){
    firstdicevalue = document.getElementsByClassName('dicevalueone').value;
    seconddicevalue = document.getElementsByClassName('dicevaluetwo').value;
    fname = document.getElementById('firstplayerheading').innerHTML;
    sname = document.getElementById('secondplayerheading').innerHTML;

    if(firstdicevalue > seconddicevalue){
        document.getElementById('box').style.display = "none";
        document.getElementById('result').style.display = "none";
        document.getElementById('new').style.display = "block";
        document.getElementById('win').innerHTML = `Congratulations <br> ${fname} `;
    }
    else if(seconddicevalue > firstdicevalue){
        document.getElementById('box').style.display = "none";
        document.getElementById('result').style.display = "none";
        document.getElementById('new').style.display = "block";
        document.getElementById('win').innerHTML = `Congratulations <br> ${sname} `;
    }
    else{
        document.getElementById('box').style.display = "none";
        document.getElementById('result').style.display = "none";
        document.getElementById('new').style.display = "block";
        document.getElementById('win').innerHTML = `It's Drew`;        
    }
}