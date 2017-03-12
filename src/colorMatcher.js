//TODO: Refactor - param for number of colors to return
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
  return [
    ["#3E3947", "#735360", "#D68684", "#F1B0B0", "#EBD0C4"],
    ["#225378", "#1695A3", "#ACF0F2", "#F3FFE2", "#EB7F00"],
    ["#595241", "#B8AE9C", "#FFFFFF", "#ACCFCC", "#8A0917"],
    ["#04BFBF", "#CAFCD8", "#F7E967", "#A9CF54", "#588F27"],
    ["#D8CAA8", "#5C832F", "#284907", "#382513", "#363942"],
    ["#000000", "#263248", "#7E8AA2", "#FFFFFF", "#FF9800"],
    ["#2F3837", "#C5C7B6", "#FFF8D3", "#4C493E", "#222028"],
    ["#E0FFB3", "#61C791", "#31797D", "#2A2F36", "#F23C55"]
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
                       

