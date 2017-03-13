function setNewRandomColorScheme(sheet, numTables) {
  //TODO: Change to find the correct spreadsheet, instead of assuming active is correct
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var matchingColors = getFiveColors();
  
  for(var i = 0; i < numTables; i++) {
    ss.getRangeByName("PairsDocTableHeader" + i).setBackground(matchingColors.first_color);
    ss.getRangeByName("PairsDocTracksTop" + i).setBackground(matchingColors.second_color);
    ss.getRangeByName("PairsDocTracksBottom" + i).setBackground(matchingColors.third_color);
    ss.getRangeByName("PairsDocTableBodyTop" + i).setBackground(matchingColors.fourth_color);
    ss.getRangeByName("PairsDocTableBodyBottom" + i).setBackground(matchingColors.fifth_color);
  }
}

function getNewSheetName() {
  return getFormattedDateString(getClosestMondayDate());
}

function setColumnWidths(sheet) {
  sheet.setColumnWidth("1", 190);
  sheet.setColumnWidth("2", 150);
  sheet.setColumnWidth("3", 150);
  sheet.setColumnWidth("4", 200);
  sheet.setColumnWidth("5", 205);
  sheet.setColumnWidth("6", 138);
}

// Font colors

function setTableHeaderFontToWhite() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  for(var i = 0; i < _numTables(); i++) {
    ss.getRangeByName("PairsDocTableHeader" + i).setFontColor("white");
  }  
}

function setTracksTopFontToWhite() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  for(var i = 0; i < _numTables(); i++) {
    ss.getRangeByName("PairsDocTracksTop" + i).setFontColor("white");
  }    
}

function setTracksBottomFontToWhite() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  for(var i = 0; i < _numTables(); i++) {
    ss.getRangeByName("PairsDocTracksBottom" + i).setFontColor("white");
  }  
}

function setTableBodyTopFontToWhite() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  for(var i = 0; i < _numTables(); i++) {
    ss.getRangeByName("PairsDocTableBodyTop" + i).setFontColor("white");
  }  
}

function setTableBodyBottomFontToWhite() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  for(var i = 0; i < _numTables(); i++) {
    ss.getRangeByName("PairsDocTableBodyBottom" + i).setFontColor("white");
  }  
}

// PRIVATE

function _getMiddleRow(firstRow, lastRow) {
  return Math.ceil((firstRow + lastRow)/2);
}

function _numTables() {
  return 5;  
}