"use strict";

$(function(){

  var turn = "X";
  var win = false;

  // Listen for click events on table cells
  $('td').on('click', function(event){
    event.preventDefault();
    // if someone has already won, don't place marks.
    if(win) return;

    // Make sure the cell isn't filled already
    if(!$(event.target).text()) {
      // Place our token
      $(event.target).text(turn);
      var i,j;
      // cells array is each of the td's in "reading" order
      // left-to-right, top to bottom (0-8)
      var cells = $('td');
      for(i = 0; i < 3; i++) {

        // Check horizontal rows
        win = true;
        for(j=0; j < 3; j++) {
          if($(cells[i*3 + j]).text() !== turn) win = false;
        }
        if(win) break;

        // Check vertical rows
        win = true;
        for(j=0; j < 3; j++) {
          if($(cells[i + j*3]).text() !== turn) win = false;
        }
        if(win) break;
      }

      // Check diagonals
      if($(cells[0]).text() === turn && $(cells[4]).text() === turn && $(cells[8]).text() === turn)
        win = true;
      if($(cells[2]).text() === turn && $(cells[4]).text() === turn && $(cells[6]).text() === turn)
        win = true;

      // Print win or next turn
      if(win) {
        // Mark the turn as a win
        $('#turn').text(turn + " Won!  Refresh page to play again.");
      } else {
        // Update the turn
        turn = (turn === "X") ? "O" : "X";
        $('#turn').text(turn + "'s Turn");
      }
    }
  });

});
