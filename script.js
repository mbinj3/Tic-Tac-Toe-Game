let music = new Audio("music.mp3");
let AudioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X";

let isgameover = false;

// Function to Change the Turn

const ChangeTurn = ()=>{
    return turn === "X"?"0": "X";

}

// Function to Check for a Win

const CheckWin = ()=>{

    let BoxText = document.getElementsByClassName('BoxText');

    let wins = [

        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,5,90],
        [1,4,7,5,15,90],
        [2,5,815,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    
    ]

    wins.forEach(e =>{

        if((BoxText[e[0]].innerText === BoxText[e[1]].innerText) && (BoxText[e[2]].innerText === BoxText[e[1]].innerText) && BoxText[e[0]].innerHTML !== ""){

            document.querySelector('.Info').innerHTML = BoxText[e[0]].innerText + " Won";

            isgameover = true;

            document.querySelector('.ImageBox').getElementsByTagName("img")[0].style.width = '200px';

            document.querySelector(".Line").style.width = "20vw";

            document.querySelector(".Line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`

            document.querySelector(".Line").style.width = "20vw";
        }
    })

}


// Game Logic

let Boxes = document.getElementsByClassName("Box");
Array.from(Boxes).forEach(element =>{
    
    let BoxText = element.querySelector('.BoxText');

    element.addEventListener('click', ()=>{

        if(BoxText.innerText === ''){
            BoxText.innerText = turn;
            turn = ChangeTurn();
            AudioTurn.play();
            CheckWin();

            if(!isgameover){

              document.getElementsByClassName('Info')[0].innerText = "Turn of " + turn;
            
            }

        }
    })
})

//  Add OnClick listener to Reset Button

Reset.addEventListener('click', ()=>{

    let BoxText = document.querySelectorAll('.BoxText');
    Array.from(BoxText).forEach(element => {
        element.innerText = ""
    });

    turn = "X";

    isgameover = false;

    document.querySelector(".Line").style.width = "0vw";

    document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;

    document.querySelector('.ImageBox') .getElementsByTagName('img')[0].style.width = "0px";
})