// constructor functions -------------------------------
var User = function(icon, choice) {
  this.icon = icon;
  this.choice = choice;
};

// gameSet constructor ---------------------------
var GameSet = function(wins, losses, gamesPlayed, ties) {
  this.wins = 0;
  this.losses = 0;
  this.gamesPlayed = 0;
  this.ties = 0;
};

// gameBoard constructor ---------------------------
var gameBoard = function(rowOne, rowTwo, rowThree, colOne, colTwo, colThree, diagLtoR, diagRtoL, fullBoard) {
  this.rowOne = [1, 2, 3];
  this.rowTwo = [4, 5, 6];
  this.rowThree = [7, 8, 9];
  this.colOne = [1, 4, 7];
  this.colTwo = [2, 5, 8];
  this.colThree = [3, 6, 9];
  this.diagLtoR = [1, 5, 9];
  this.diagRtoL = [3, 5, 7];
  this.fullBoard = [this.rowOne, this.rowTwo, this.rowThree, this.colOne, this.colTwo, this.colThree, this.diagLtoR, this.diagRtoL];
};

// Game constructor --------------------------
var Game = function(possibleMoves, possibleMovesArray, difficulty, earthWins, sunWins, displayMessage) {
  this.possibleMoves = 9;
  this.possibleMovesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  this.difficulty = undefined;
  this.earthWins = false;
  this.sunWins = false;
  this.displayMessage = false;
};

// Instances ----------------------------------------
var computer,
  currentUser,
  currentGameSet,
  currentGame;

// ----------------------------------game functions --------------------------------------

// genertate a random choice for the computer -----------
function randomSelect() {
  computer.choice = Math.floor(Math.random() * (currentGame.possibleMoves - 0)) + 0;
  computer.choice = currentGame.possibleMovesArray[computer.choice];
  console.log(computer.choice);
  return computer.choice;
};

// extra logic called in gameLogic only if needed ------------------
function extraLogic() {
  if (!$('button#five').hasClass('played')) {
    computer.choice = 5;
  } else {
    if ($('button#three').children(':last').hasClass('glyphicon-globe') && $('button#seven').children(':last').hasClass('glyphicon-globe') || $('button#three').children(':last').hasClass('glyphicon-certificate') && $('button#seven').children(':last').hasClass('glyphicon-certificate')) {
      if (!$('button#four').hasClass('played')) {
        computer.choice = 4;
      } else {
        if (!$('button#two').hasClass('played')) {
          computer.choice = 2;
        } else {
          randomSelect();
        }
      }
    } else if ($('button#one').children(':last').hasClass('glyphicon-globe') && $('button#nine').children(':last').hasClass('glyphicon-globe') || $('button#one').children(':last').hasClass('glyphicon-certificate') && $('button#nine').children(':last').hasClass('glyphicon-certificate')) {
      if (!$('button#eight').hasClass('played')) {
        computer.choice = 8;
      } else {
        if (!$('button#six').hasClass('played')) {
          computer.choice = 6;
        } else {
          randomSelect();
        }
      }
    } else if (currentUser.choice === 5) {
      if (!$('button#seven').hasClass('played')) {
        computer.choice = 7;
      } else {
        if (!$('button#one').hasClass('played')) {
          computer.choice = 1;
        } else {
          if (!$('button#nine').hasClass('played')) {
            computer.choice = 9;
          } else {
            if (!$('button#three').hasClass('played')) {
              computer.choice = 3;
            } else {
              if (!$('button#four').hasClass('played')) {
                computer.choice = 4;
              } else {
                if (!$('button#eight').hasClass('played')) {
                  computer.choice = 8;
                } else {
                  if (!$('button#two').hasClass('played')) {
                    computer.choice = 2;
                  } else {
                    if (!$('button#six').hasClass('played')) {
                      computer.choice = 6;
                    } else {
                      randomSelect();
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else if (currentUser.choice === 1) {
      if (!$('button#three').hasClass('played')) {
        computer.choice = 3;
      } else {
        if (!$('button#seven').hasClass('played')) {
          computer.choice = 7;
        } else {
          if (!$('button#two').hasClass('played')) {
            computer.choice = 2;
          } else {
            if (!$('button#four').hasClass('played')) {
              computer.choice = 4;
            } else {
              randomSelect();
            }
          }
        }
      }
    } else if (currentUser.choice === 2) {
      if (!$('button#one').hasClass('played')) {
        computer.choice = 1;
      } else {
        if (!$('button#three').hasClass('played')) {
          computer.choice = 3;
        } else {
          randomSelect();
        }
      }
    } else if (currentUser.choice === 3) {
      if (!$('button#seven').hasClass('played')) {
        computer.choice = 7;
      } else {
        if (!$('button#one').hasClass('played')) {
          computer.choice = 1;
        } else {
          if (!$('button#six').hasClass('played')) {
            computer.choice = 6;
          } else {
            if (!$('button#two').hasClass('played')) {
              computer.choice = 2;
            } else {
              randomSelect();
            }
          }
        }
      }
    } else if (currentUser.choice === 4) {
      if (!$('button#one').hasClass('played')) {
        computer.choice = 1;
      } else {
        if (!$('button#seven').hasClass('played')) {
          computer.choice = 7;
        } else {
          randomSelect();
        }
      }
    } else if (currentUser.choice === 6) {
      if (!$('button#three').hasClass('played')) {
        computer.choice = 3;
      } else {
        if (!$('button#nine').hasClass('played')) {
          computer.choice = 9;
        } else {
          randomSelect();
        }
      }
    } else if (currentUser.choice === 7) {
      if (!$('button#nine').hasClass('played')) {
        computer.choice = 9;
      } else {
        if (!$('button#one').hasClass('played')) {
          computer.choice = 1;
        } else {
          if (!$('button#four').hasClass('played')) {
            computer.choice = 4;
          } else {
            if (!$('button#eight').hasClass('played')) {
              computer.choice = 8;
            } else {
              randomSelect();
            }
          }
        }
      }
    } else if (currentUser.choice === 8) {
      if (!$('button#seven').hasClass('played')) {
        computer.choice = 7;
      } else {
        if (!$('button#nine').hasClass('played')) {
          computer.choice = 9;
        } else {
          randomSelect();
        }
      }
    } else if (currentUser.choice === 9) {
      if (!$('button#three').hasClass('played')) {
        computer.choice = 3;
      } else {
        if (!$('button#seven').hasClass('played')) {
          computer.choice = 7;
        } else {
          if (!$('button#eight').hasClass('played')) {
            computer.choice = 8;
          } else {
            if (!$('button#six').hasClass('played')) {
              computer.choice = 6;
            } else {
              randomSelect();
            }
          }
        }
      }
    }
  }
};
// Main game logic --------------------------------------
function gameLogic() {
  var earthColRows = [];
  var sunColRows = [];
  var earthRowToPlay;
  var sunRowToPlay;
  var earthMoveToWin;
  var sunMoveToWin;
  var gameBoardToChange = new gameBoard();
  var btnToCheck;

  for (var i = 0; i < gameBoardToChange.fullBoard.length; i++) {
    for (var j = 0; j < gameBoardToChange.fullBoard[i].length; j++) {
      if (gameBoardToChange.fullBoard[i][j] === 1) {
        btnToCheck = $('button#one');
      } else if (gameBoardToChange.fullBoard[i][j] === 2) {
        btnToCheck = $('button#two');
      } else if (gameBoardToChange.fullBoard[i][j] === 3) {
        btnToCheck = $('button#three');
      } else if (gameBoardToChange.fullBoard[i][j] === 4) {
        btnToCheck = $('button#four');
      } else if (gameBoardToChange.fullBoard[i][j] === 5) {
        btnToCheck = $('button#five');
      } else if (gameBoardToChange.fullBoard[i][j] === 6) {
        btnToCheck = $('button#six');
      } else if (gameBoardToChange.fullBoard[i][j] === 7) {
        btnToCheck = $('button#seven');
      } else if (gameBoardToChange.fullBoard[i][j] === 8) {
        btnToCheck = $('button#eight');
      } else if (gameBoardToChange.fullBoard[i][j] === 9) {
        btnToCheck = $('button#nine');
      }
      if ($(btnToCheck).hasClass('played') && $(btnToCheck).children(':last').hasClass('glyphicon-globe')) {
        gameBoardToChange.fullBoard[i][j] = 'Earth';
      } else if ($(btnToCheck).hasClass('played') && $(btnToCheck).children(':last').hasClass('glyphicon-certificate')) {
        gameBoardToChange.fullBoard[i][j] = 'Sun';
      }
    }
  }
  for (var k = 0; k < gameBoardToChange.fullBoard.length; k++) {
    if (gameBoardToChange.fullBoard[k].includes('Sun') && !gameBoardToChange.fullBoard[k].includes('Earth')) {
      sunColRows.push(gameBoardToChange.fullBoard[k]);
    } else if (gameBoardToChange.fullBoard[k].includes('Earth') && !gameBoardToChange.fullBoard[k].includes('Sun')) {
      earthColRows.push(gameBoardToChange.fullBoard[k]);
    }
  }
  for (var s = 0; s < earthColRows.length; s++) {
    earthColRows[s] = earthColRows[s].sort();
    earthColRows[s].pop();
  }
  for (var t = 0; t < sunColRows.length; t++) {
    sunColRows[t] = sunColRows[t].sort();
    sunColRows[t].pop();
  }
  for (var f = 0; f < earthColRows.length; f++) {
    if (earthColRows[f].includes('Earth')) {
      earthRowToPlay = earthColRows[f];
      break;
    } else {
      earthRowToPlay = undefined;
    }
  }
  for (var g = 0; g < sunColRows.length; g++) {
    if (sunColRows[g].includes('Sun')) {
      sunRowToPlay = sunColRows[g];
      break;
    } else {
      sunRowToPlay = undefined;
    }
  }
  if (earthRowToPlay !== undefined) {
    for (var n = 0; n < earthRowToPlay.length; n++) {
      if (typeof earthRowToPlay[n] === 'number') {
        earthMoveToWin = earthRowToPlay[n];
        console.log('earthMoveToWin', earthMoveToWin);
      }
    }
  }
  if (sunRowToPlay !== undefined) {
    for (var n = 0; n < sunRowToPlay.length; n++) {
      if (typeof sunRowToPlay[n] === 'number') {
        sunMoveToWin = sunRowToPlay[n];
        console.log('sunMoveToWin', sunMoveToWin);
      }
    }
  }
  if (computer.icon === 'earth') {
    if (earthMoveToWin !== undefined) {
      computer.choice = earthMoveToWin;
    } else {
      if (sunMoveToWin !== undefined) {
        computer.choice = sunMoveToWin;
      } else {
        extraLogic();
      }
    }
  } else if (computer.icon === 'sun') {
    if (sunMoveToWin !== undefined) {
      computer.choice = sunMoveToWin;
    } else {
      if (earthMoveToWin !== undefined) {
        computer.choice = earthMoveToWin;
      } else {
        extraLogic();
      }
    }
  }
};

// -------------------------------- Game Modes ------------------------------------
// easy mode function ---------------------------
function easy() {
  var logicArray = [false, false, true, false, false, false, true, false, false, true, false, false, true, false, false];
  var indexForLogic = Math.floor(Math.random() * (15 - 0)) + 0;
  if (currentGame.possibleMoves === 9) {
    computer.choice = 5;
  } else {
    if (logicArray[indexForLogic] === true) {
      gameLogic();
    } else {
      randomSelect();
    }
  }
};

// medium mode function --------------------------
function medium() {
  var logicArray = [true, true, false, true, true, true, false, true, true, false, true, true, false, true, true];
  var indexForLogic = Math.floor(Math.random() * (15 - 0)) + 0;
  if (currentGame.possibleMoves === 9) {
    computer.choice = 5;
  } else {
    if (currentGame.possibleMoves < 9 && currentGame.possibleMoves > 0) {
      if (logicArray[indexForLogic] === true) {
        gameLogic();
      } else {
        randomSelect();
      }
    } else {
      gameLogic();
    }
  }
};

// hard mode function -----------------------------
function hard() {
  if (currentGame.possibleMoves === 9) {
    computer.choice = 5;
  } else if (currentGame.possibleMoves > 0) {
    gameLogic();
  }
}

// translate the computer choice to visual representation on gameboard --------
function translateToBoard() {
  console.log('computer.choice coming in', computer.choice);
  var choiceBtn;
  if (computer.choice === 1) {
    choiceBtn = $('button#one');
  } else if (computer.choice === 2) {
    choiceBtn = $('button#two');
  } else if (computer.choice === 3) {
    choiceBtn = $('button#three');
  } else if (computer.choice === 4) {
    choiceBtn = $('button#four');
  } else if (computer.choice === 5) {
    choiceBtn = $('button#five');
  } else if (computer.choice === 6) {
    choiceBtn = $('button#six');
  } else if (computer.choice === 7) {
    choiceBtn = $('button#seven');
  } else if (computer.choice === 8) {
    choiceBtn = $('button#eight');
  } else if (computer.choice === 9) {
    choiceBtn = $('button#nine');
  }
  if (computer.icon === 'sun') {
    $(choiceBtn).children(':last').addClass('glyphicon-certificate');
    $(choiceBtn).addClass('played');
  } else {
    $(choiceBtn).children(':last').addClass('glyphicon-globe');
    $(choiceBtn).addClass('played');
  }

  computer.choice = currentGame.possibleMovesArray.indexOf(computer.choice);
  currentGame.possibleMovesArray.splice(computer.choice, 1);
  currentGame.possibleMoves -= 1;
}

// computer turn process --------------------------------
function computerTurn() {
  if (currentGame.difficulty === 'easy') {
    easy();
  } else if (currentGame.difficulty === 'medium') {
    medium();
  } else if (currentGame.difficulty === 'hard') {
    hard();
  }
  translateToBoard();
  checkProgress();
  resultMsg();
  $('button.boardSquare').removeClass('disableBtns');
}

// timeout function to give illution of computer thinking and to give user a visual distinction between their and the computers moves
var computerDelay = function() {
    window.setTimeout(computerTurn, 600);
  }
  // function to check for winners ----------------------------

function checkProgress() {

  if ($('#iconOne').hasClass('glyphicon-globe') && $('#iconTwo').hasClass('glyphicon-globe') && $('#iconThree').hasClass('glyphicon-globe') ||
    $('#iconFour').hasClass('glyphicon-globe') && $('#iconFive').hasClass('glyphicon-globe') && $('#iconSix').hasClass('glyphicon-globe') ||
    $('#iconSeven').hasClass('glyphicon-globe') && $('#iconEight').hasClass('glyphicon-globe') && $('#iconNine').hasClass('glyphicon-globe') ||
    $('#iconOne').hasClass('glyphicon-globe') && $('#iconFive').hasClass('glyphicon-globe') && $('#iconNine').hasClass('glyphicon-globe') ||
    $('#iconThree').hasClass('glyphicon-globe') && $('#iconFive').hasClass('glyphicon-globe') && $('#iconSeven').hasClass('glyphicon-globe') ||
    $('#iconOne').hasClass('glyphicon-globe') && $('#iconFour').hasClass('glyphicon-globe') && $('#iconSeven').hasClass('glyphicon-globe') ||
    $('#iconTwo').hasClass('glyphicon-globe') && $('#iconFive').hasClass('glyphicon-globe') && $('#iconEight').hasClass('glyphicon-globe') ||
    $('#iconThree').hasClass('glyphicon-globe') && $('#iconSix').hasClass('glyphicon-globe') && $('#iconNine').hasClass('glyphicon-globe')) {
    currentGame.earthWins = true;
    currentGame.displayMessage = true;
  }
  if ($('#iconOne').hasClass('glyphicon-certificate') && $('#iconTwo').hasClass('glyphicon-certificate') && $('#iconThree').hasClass('glyphicon-certificate') ||
    $('#iconFour').hasClass('glyphicon-certificate') && $('#iconFive').hasClass('glyphicon-certificate') && $('#iconSix').hasClass('glyphicon-certificate') ||
    $('#iconSeven').hasClass('glyphicon-certificate') && $('#iconEight').hasClass('glyphicon-certificate') && $('#iconNine').hasClass('glyphicon-certificate') ||
    $('#iconOne').hasClass('glyphicon-certificate') && $('#iconFive').hasClass('glyphicon-certificate') && $('#iconNine').hasClass('glyphicon-certificate') ||
    $('#iconThree').hasClass('glyphicon-certificate') && $('#iconFive').hasClass('glyphicon-certificate') && $('#iconSeven').hasClass('glyphicon-certificate') ||
    $('#iconOne').hasClass('glyphicon-certificate') && $('#iconFour').hasClass('glyphicon-certificate') && $('#iconSeven').hasClass('glyphicon-certificate') ||
    $('#iconTwo').hasClass('glyphicon-certificate') && $('#iconFive').hasClass('glyphicon-certificate') && $('#iconEight').hasClass('glyphicon-certificate') ||
    $('#iconThree').hasClass('glyphicon-certificate') && $('#iconSix').hasClass('glyphicon-certificate') && $('#iconNine').hasClass('glyphicon-certificate')) {
    currentGame.sunWins = true;
    currentGame.displayMessage = true;
  }
  if (currentGame.possibleMoves === 0) {
    currentGame.displayMessage = true;
  }
};

// create result message -------------------------
function resultMsg() {
  console.log(currentGame.displayMessage);
  if (currentGame.displayMessage === true) {
    $('button.btn.boardSquare').addClass('played');

    // If earth wins ------------------------------
    if (currentGame.earthWins === true) {
      if (currentUser.icon === 'earth') {
        $('#sorryCongrats').html('Congratulations, ');
        $('#verdict').html(' won!');
        currentGameSet.wins += 1;
        currentGameSet.gamesPlayed += 1;
      } else {
        $('#sorryCongrats').html('Sorry, ');
        $('#verdict').html(' lost.');
        currentGameSet.losses += 1;
        currentGameSet.gamesPlayed += 1;
      }
    } else {

      // if sun wins -------------------------------
      if (currentGame.sunWins === true) {
        if (currentUser.icon === 'sun') {
          $('#sorryCongrats').html('Congratulations, ');
          $('#verdict').html(' won!');
          currentGameSet.wins += 1;
          currentGameSet.gamesPlayed += 1;
        } else {
          $('#sorryCongrats').html('Sorry, ');
          $('#verdict').html(' lost.');
          currentGameSet.losses += 1;
          currentGameSet.gamesPlayed += 1;
        }
      }
      if (currentGame.earthWins === false && currentGame.sunWins === false) {
        $('#sorryCongrats').html('Cat game, ');
        $('#verdict').html(' tied!');
        currentGameSet.ties += 1
        currentGameSet.gamesPlayed += 1;
      }
    }
    // Update the gameSet data --------------------------
    $('#userWins').html(currentGameSet.wins);
    $('#userLosses').html(currentGameSet.losses);
    $('.totalGames').html(currentGameSet.gamesPlayed);
    $('.ties').html(currentGameSet.ties);
    $('#gameBoard').fadeOut(3000, function() {
      $('#winLose, #stats').slideDown();
    })
  }
}

// jquery user initiated events ---------------------------------

$('#stats, #winLose, #selectIcon, #gameBoard, #difficulty, #about').slideUp();
$('#aboutBtn').click(function() {
  $('#playBtn, #aboutBtn').addClass('hidden').finish();
  $('#about').mousemove(function() {
    $('#aboutGlyph, #aboutGlyphTwo').addClass('constantSpin');
  });
  $('#about').fadeIn('slow').slideDown('slow').removeClass('hidden');
  $('.glyphicon.glyphicon-collapse-up').click(function() {
    $('#about').slideUp('slow', function() {
      $('#playBtn, #aboutBtn').fadeIn('slow').removeClass('hidden');
    });
  });
});
$('#playBtn').click(function() {
  currentGameSet = new GameSet();
  $('#landingPage').slideUp();
  $('#difficulty').slideDown('fast');
});
// intial selection of difficulty --------------------------
$('.diff').click(function() {
  currentGame = new Game();
  if ($(this).is('#easy')) {
    currentGame.difficulty = 'easy';
    $('#mode').html('Easy');
  } else if ($(this).is('#medium')) {
    currentGame.difficulty = 'medium';
    $('#mode').html('Med');
  } else if ($(this).is('#hard')) {
    currentGame.difficulty = 'hard';
    $('#mode').html('Hard');
  }
  $('#difficulty').slideUp();
  $('#selectIcon').slideDown('fast');
});
$('button.btn.btn-default.btn-lg.icon#earth').mouseover(function() {
  $('#earthIcon').addClass('forRotate').addClass('rotate');
});
$('button.btn.btn-default.btn-lg.icon#earth').mouseout(function() {
  $('#earthIcon').removeClass('forRotate').removeClass('rotate');
});
$('button.btn.btn-default.btn-lg.icon#sun').mouseover(function() {
  $('#sunIcon').addClass('forRotate').addClass('rotate');
});
$('button.btn.btn-default.btn-lg.icon#sun').mouseout(function() {
  $('#sunIcon').removeClass('forRotate').removeClass('rotate');
});
// Select earth icon -------------------------------
$('#earth').click(function() {
  $('button.boardSquare').removeClass('disableBtns');
  $('#chngIcon').removeClass('hidden');
  $('#iconChngBtn').removeClass('glyphicon-certificate').addClass('glyphicon-globe');
  currentUser = new User();
  computer = new User();
  currentUser.icon = 'earth';
  computer.icon = 'sun';
  console.log(currentUser.icon);
  console.log(computer.icon);
  $('#selectIcon').slideUp();
  $('#gameBoard').slideDown('fast');
});
// Select sun icon -----------------------------------
$('#sun').click(function() {
  $('button.boardSquare').addClass('disableBtns');
  $('#chngIcon').removeClass('hidden');
  $('#iconChngBtn').removeClass('glyphicon-globe').addClass('glyphicon-certificate');
  currentUser = new User();
  computer = new User();
  currentUser.icon = 'sun';
  computer.icon = 'earth';
  console.log(currentUser.icon);
  console.log(computer.icon);
  $('#selectIcon').slideUp();
  $('#gameBoard').slideDown('fast');
  computerTurn();
});
// User move board clicks -------------------------
$('button.boardSquare').click(function() {
  window.clearTimeout(computerDelay);
  var remove;
  var lastMove;
  if (currentUser.choice) {}
  if ($(this).is('#one')) {
    remove = 1;
    currentUser.choice = 1;
  } else if ($(this).is('#two')) {
    remove = 2;
    currentUser.choice = 2;
  } else if ($(this).is('#three')) {
    remove = 3;
    currentUser.choice = 3;
  } else if ($(this).is('#four')) {
    remove = 4;
    currentUser.choice = 4;
  } else if ($(this).is('#five')) {
    remove = 5;
    currentUser.choice = 5;
  } else if ($(this).is('#six')) {
    remove = 6;
    currentUser.choice = 6;
  } else if ($(this).is('#seven')) {
    remove = 7;
    currentUser.choice = 7;
  } else if ($(this).is('#eight')) {
    remove = 8;
    currentUser.choice = 8;
  } else if ($(this).is('#nine')) {
    remove = 9;
    currentUser.choice = 9;
  }
  $('button.boardSquare').addClass('disableBtns');
  currentGame.possibleMovesArray.splice(currentGame.possibleMovesArray.indexOf(remove), 1);
  if (currentUser.icon === 'earth') {
    $(this).children(':last').addClass('glyphicon-globe');
    $(this).addClass('played');
  } else if (currentUser.icon === 'sun') {
    $(this).children(':last').addClass('glyphicon-certificate');
    $(this).addClass('played');
  }

  currentGame.possibleMoves -= 1;
  checkProgress();
  resultMsg();
  if (currentGame.possibleMoves > 0 && currentGame.earthWins === false && currentGame.sunWins === false) {
    computerDelay();
  }
});
// Start a new game ----------------------------
$('#new').click(function() {
  var savedDifficulty = currentGame.difficulty;
  currentGame = new Game();
  currentGame.difficulty = savedDifficulty;
  $('button.btn.boardSquare').removeClass('played');
  if (currentUser.icon === 'earth') {
    $('button.boardSquare').removeClass('disableBtns');
  } else {
    $('button.boardSquare').addClass('disableBtns');
  }
  $('div.boardImg').removeClass('glyphicon-globe glyphicon-certificate');
  $('#winLose, #stats').slideUp();
  $('#gameBoard').slideDown('fast');
  if (computer.icon === 'earth') {
    computerDelay();
  }
});
// Change Icon and order of play -----------------
$('#chngIcon').click(function() {
  var savedDifficulty = currentGame.difficulty;
  currentGame = new Game();
  currentGame.difficulty = savedDifficulty;
  if (currentUser.icon === 'earth') {
    currentUser.icon = 'sun';
    $('button.boardSquare').addClass('disableBtns');
    computer.icon = 'earth';
    $('#chngIcon').removeClass('hidden');
    $('#iconChngBtn').removeClass('glyphicon-globe').addClass('glyphicon-certificate');
  } else {
    currentUser.icon = 'earth';
    computer.icon = 'sun';
    $('button.boardSquare').removeClass('disableBtns');
    $('#chngIcon').removeClass('hidden');
    $('#iconChngBtn').removeClass('glyphicon-certificate').addClass('glyphicon-globe');
  }
});
// Change difficulty -----------------------------
$('#chngDiff').click(function() {
  if (currentGame.difficulty === 'easy') {
    currentGame.difficulty = 'medium';
    $('#mode').html('Med');
  } else if (currentGame.difficulty === 'medium') {
    currentGame.difficulty = 'hard';
    $('#mode').html('Hard');
  } else if (currentGame.difficulty === 'hard') {
    currentGame.difficulty = 'easy';
    $('#mode').html('Easy');
  }
});
// Quit game --------------------------------------
$('#quit').click(function() {
  window.clearTimeout(computerDelay);
  currentGame = undefined;
  currentGameSet = undefined;
  $('#chngIcon').addClass('hidden');
  $('button.btn.boardSquare').removeClass('played');
  $('div.boardImg').removeClass('glyphicon-globe glyphicon-certificate');
  $('#winLose, #gameBoard, #stats').slideUp();
  $('#landingPage').slideDown('fast');
});