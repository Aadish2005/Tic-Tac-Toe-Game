let buttons = document.querySelectorAll(".box");
let resetgame = document.querySelector(".reset");
let msg = document.querySelector("#msg");
let msgcontainerdiv = document.querySelector(".msgcontainerdiv");
let newgamebutton = document.querySelector(".newgamebutton");
let theme = "black";
let gamewon = false;
resetgame.onclick = () => {
    gamewon = false;
    msgcontainerdiv.classList.add("hide");
    buttons.forEach((button) => {
        button.innerText = "";
        button.disabled = false;
    })
    
}

buttons.forEach((button) => 
    {
        button.onclick = () => {
        if (gamewon) {
            return;
        }
        if (theme == "black") {
            button.innerText = "X";
            theme = "white";
        }
        else {
            button.innerText = "O";
            theme = "black"
        }
        button.disabled = true;
      
          let result  = checkwinner();
            if (result) {
                gamewon= true;
                show_winner(result);
                
           
        }
    }});
 
    function checkwinner() {
        let checkpatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let index = 0; index < checkpatterns.length; index++) {
        let pattern = checkpatterns[index];
        
        if (buttons[pattern[0]].innerText === buttons[pattern[1]].innerText && buttons[pattern[0]].innerText === buttons[pattern[2]].innerText  && buttons[pattern[0]].innerText != "") {
          
            return buttons[pattern[0]].innerText + "  is Winner";
        }
    }
    return false;
    
}
 function show_winner ( winner)  {
   msg.innerText = winner;
   msgcontainerdiv.classList.remove("hide");
}
