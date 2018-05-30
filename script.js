var turn = "human";
//var info_text = document.getElementById("testiteksti");

function start() {
  document.getElementById("testiteksti").innerHTML = "Human (X) starts!";
  clear_boxes();
  turn = "human";
}

function clear_boxes() {
  for (i = 1; i <= 9; i++) {
    var kasiteltava = document.getElementById(i);
    kasiteltava.innerHTML = '';
  }
}

function make_a_move(ruutu) {
  if (turn === "human") {
    human_move(ruutu);
  } else {
    bot_move(ruutu);
  }
}

function human_move(ruutu) {
  var is_empty = document.getElementById(ruutu).innerHTML;
  if (is_empty === "") {
    document.getElementById(ruutu).innerHTML = 'X';
    turn = "bot";
    document.getElementById("testiteksti").innerHTML = "Bot's turn!";
  } else {
    document.getElementById("testiteksti").innerHTML = "Try another box! Still "+turn+"'s (X) turn.";
  }

}

function bot_move(ruutu) {
  var is_empty = document.getElementById(ruutu).innerHTML;
  if (is_empty === "") {
    document.getElementById(ruutu).innerHTML = 'O';
    turn = "human";
    document.getElementById("testiteksti").innerHTML = "Human's turn!";
  } else {
    document.getElementById("testiteksti").innerHTML = "Try another box! Still "+turn+"'s (O) turn.";
  }
}
