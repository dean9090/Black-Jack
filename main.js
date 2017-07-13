/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/




function handValue (hand) {

  let currentHand = 0;

  for (var i = 0; i < hand.length; i++) {
    let card = hand[i];

    if (card === "J" || card === "Q" || card === "K") {
      currentHand = currentHand + 10;
    }



    else if (card !== "J" && card !== "Q" && card !== "K" && card !== "A") {

      currentHand = currentHand + Number(card);
    }

    else if (currentHand < 11 && card === "A") {
      currentHand = currentHand + 11;
    }

    else if (currentHand > 11 && card === "A") {
      currentHand = currentHand + 1;
    }



  }
  console.log(currentHand);
  return currentHand;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
