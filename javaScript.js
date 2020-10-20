

      function rollTheDice(){
            var randomNum1 = Math.floor(Math.random() * 6) + 1;
            var imgrandompath1='diceimg/dice'+ randomNum1+".png";

            var randomNum2 = Math.floor(Math.random() * 6) + 1;
            var imgrandompath2='diceimg/dice'+ randomNum2+".png";

            document.querySelectorAll('img')[0].
            setAttribute('src', imgrandompath1);
  
            document.querySelectorAll('img')[1].
          setAttribute('src', imgrandompath2);


           if (randomNum1 === randomNum2) {
              document.querySelector('h1').innerHTML = "Draw!";
            
         }
         else if (randomNum1 < randomNum2) {
           document.querySelector('h1').innerHTML= "Player 2 Wins!";
                    playAudio();
                   }

         else {
                document.querySelector('h1').innerHTML= "Player 1 Wins!";
             playAudio();
         }
}
function playAudio(){

var audio1 =new Audio('applause.mp3');
  audio1.play();

}
        document.querySelector('button').addEventListener('click',rollTheDice);
