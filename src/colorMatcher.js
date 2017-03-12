//TODO: Refactor - param for number of colors to return
function getFiveColors() {
  var randomPalette = getRandomColorPalette();
  
  return { 
    first_color: randomPalette[0],
    second_color: randomPalette[1],
    third_color: randomPalette[2],
    fourth_color: randomPalette[3],
    fifth_color: randomPalette[4]
  };
}

function getThreeColors() {
  var randomPalette = getRandomColorPalette();

  for(var i = 0; i < 1; i++) {
    var randomColorToRemove = getRandomIntInclusive(0, randomPalette.length-1);
    removeChoice(randomColorToRemove, randomPalette);
  }
  
  return { 
    first_color: randomPalette[0],
    second_color: randomPalette[1],
    third_color: randomPalette[2]
  };
}

function getRandomColorPalette() {
  var colorPalettes = getColorPalettes();
  
  return shuffle(colorPalettes[getRandomIntInclusive(0, colorPalettes.length-1)]);
}

function getColorPalettes() {
  //From Adobe Color Wheel https://color.adobe.com/explore/?filter=most-popular&time=all
  
  return [
    ["#3E3947", "#735360", "#D68684", "#F1B0B0", "#EBD0C4"], //Graceful
    ["#225378", "#1695A3", "#ACF0F2", "#F3FFE2", "#EB7F00"], //Aspirin-C
    ["#595241", "#B8AE9C", "#FFFFFF", "#ACCFCC", "#8A0917"], //Tech Office
    ["#04BFBF", "#CAFCD8", "#F7E967", "#A9CF54", "#588F27"], //Pear Lemon Fizz
    ["#000000", "#263248", "#7E8AA2", "#FFFFFF", "#FF9800"], //1944Mustang
    ["#BA2F1D", "#FFF8A4", "#F5E67F", "#264A59", "#1E2C30"], //Prep School Pendant
    ["#2F3837", "#C5C7B6", "#FFF8D3", "#4C493E", "#222028"], //Early Winter Morning
    ["#E6E2AF", "#A7A37E", "#EFECCA", "#046380", "#002F2F"], //sandy stone ocean beach diver
    ["#E0FFB3", "#61C791", "#31797D", "#2A2F36", "#F23C55"], //Only Human
    ["#468966", "#FFF0A5", "#FFB03B", "#B64926", "#8E2800"], //Firenze
    ["#FCFFF5", "#D1DBBD", "#91AA9D", "#3E606F", "#193441"], //Neutral Blue
    ["#FF6138", "#FFFF9D", "#BEEB9F", "#79BD8F", "#00A388"], //Phaedra 
    ["#F6F792", "#333745", "#77C4D3", "#DAEDE2", "#EA2E49"], //CS04 
    ["#105B63", "#FFFAD5", "#FFD34E", "#DB9E36", "#BD4932"], //Honey Pot
    ["#FFF6C9", "#C8E8C7", "#A4DEAB", "#85CC9F", "#499E8D"], //beach glass
    ["#C7B773", "#E3DB9A", "#F5FCD0", "#B1C2B3", "#778691"] //heirloom one 
  ];  
}

function removeChoice(choice, choices) {
  var index = choices.indexOf(choice);
  if (index > -1) {
    choices.splice(index, 1);
  }
  
  return choices;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
  
  return a;
}
                       

