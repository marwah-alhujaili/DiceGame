

      function rollTheDice(){
            var randomNum1 = Math.floor(Math.random() * 6) + 1;
            var imgrandompath1='diceimg/dice'+ randomNum1+".png";

            var randomNum2 = Math.floor(Math.random() * 6) + 1;
            var imgrandompath2='diceimg/dice'+ randomNum2+".png";

            document.querySelectorAll('img')[0].
            setAttribute('src', imgrandompath1);
  
            document.querySelectorAll('img')[1].
          setAttribute('src', imgrandompath2);
          var audio1 =new Audio('applause.mp3');

           if (randomNum1 > randomNum2) {
             document.querySelector('h1').innerHTML= "Player 1 Wins!";
                            audio1.play();
         }
         else if (randomNum1 < randomNum2) {
           document.querySelector('h1').innerHTML= "Player 2 Wins!";
                          audio1.play();
                   }

         else {
                document.querySelector('h1').innerHTML = "Draw!";
         }
}
        document.querySelector('button').addEventListener('click',rollTheDice);

        document.querySelector('button').addEventListener('click',function(){
           var audio =new Audio('Clicke_sound.mp3');
               audio.play();
             });
