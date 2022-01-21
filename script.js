function newgame(){
    location.reload();
}
function firstplayer(){
    var firstplayername = document.getElementById('firstplayer').value;
    // console.log(firstplayername);
    document.getElementById('firstplayerheading').innerHTML = firstplayername;
    document.getElementById('firstplayer').style.display = "none";
    document.getElementById('rsbtn1').style.display = "none";

    play1();
}

function secondplayer(){
    secondplayername = document.getElementById('secondplayer').value;
    // console.log(secondplayername);
    document.getElementById('secondplayerheading').innerHTML = secondplayername;
    document.getElementById('secondplayer').style.display = "none";
    document.getElementById('lsbtn2').style.display = "none";

    play2();
}

$('#playerbtn-1').click(function roll1(){

});