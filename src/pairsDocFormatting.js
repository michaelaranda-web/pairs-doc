//TODO: rename to setRandomColorScheme
function setNewRandomColorScheme(sheet, numTables) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var matchingColors = getFiveColors();
  
  for(var i = 0; i < numTables; i++) {
    var tableHeader = ss.getRangeByName("PairsDocTableHeader" + i);
    
    var tracksTop = getTableRangeFor("tracksTop", sheet, tableHeader.getRow());
    var tracksBottom = getTableRangeFor("tracksBottom", sheet, tableHeader.getRow());
    var tableBodyTop = getTableRangeFor("tableBodyTop", sheet, tableHeader.getRow());
    var tableBodyBottom = getTableRangeFor("tableBodyBottom", sheet, tableHeader.getRow());
    
    tableHeader.setBackground(matchingColors.first_color);
    tracksTop.setBackground(matchingColors.second_color);
    tracksBottom.setBackground(matchingColors.third_color);
    tableBodyTop.setBackground(matchingColors.fourth_color);
    tableBodyBottom.setBackground(matchingColors.fifth_color);
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

function setRowHeights(sheet) {
  for(var i = _getFTOSectionRowNumber(); i < 57; i++) {
    sheet.setRowHeight(i, 25);
  }
}

function getTableRangeFor(section, sheet, tableHeaderRowNum) {
  if(section === "entireTable") {
     return sheet.getRange(tableHeaderRowNum,
                           1,
                           pairsDocConfig().numRowsPerTeam * 2,
                           pairsDocConfig().numColsPerTable);
  }
  else if(section === "entireTableBody") {
     return sheet.getRange(tableHeaderRowNum+1,
                           1,
                           pairsDocConfig().numRowsPerTeam * 2,
                           pairsDocConfig().numColsPerTable);
  }
  else if(section === "tracksTop") {
     return sheet.getRange(tableHeaderRowNum+1,
                           1,
                           pairsDocConfig().numRowsPerTeam,
                           1);
  }
  else if(section === "tracksBottom") {
     return sheet.getRange(tableHeaderRowNum+5,
                           1,
                           pairsDocConfig().numRowsPerTeam,
                           1);
  }
  else if(section === "tableBodyTop") {
     return sheet.getRange(tableHeaderRowNum+1,
                           2,
                           pairsDocConfig().numRowsPerTeam,
                           5);
  }
  else {
     return sheet.getRange(tableHeaderRowNum+5,
                           2,
                           pairsDocConfig().numRowsPerTeam,
                           5);
  }
  
  //change above to 'else if', and put 'else return error' here?
}

// Font colors

function setTableHeaderFontToWhite() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  for(var i = 0; i < _numTables(); i++) {
    ss.getRangeByName("PairsDocTableHeader" + i).setFontColor("white");
  }  
}

//Refactor fontToWhite functions into one function
function setTracksTopFontToWhite() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(getNewSheetName());
    for(var i = 0; i < _numTables(); i++) {
    var tableHeader = ss.getRangeByName("PairsDocTableHeader" + i);
    var tracksTop = sheet.getRange(tableHeader.getRow()+1, 
                                            1,
                                            4,
                                            1);
    tracksTop.setFontColor("white");
  }    
}

function setTracksBottomFontToWhite() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(getNewSheetName());
  
  for(var i = 0; i < _numTables(); i++) {
    var tableHeader = ss.getRangeByName("PairsDocTableHeader" + i);
    var tracksBottom = sheet.getRange(tableHeader.getRow()+5, 
                                      1,
                                      4,
                                      1);
    tracksBottom.setFontColor("white");
  }   
}

function setTableBodyTopFontToWhite() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(getNewSheetName());
  
  for(var i = 0; i < _numTables(); i++) {
    var tableHeader = ss.getRangeByName("PairsDocTableHeader" + i);
    var tableBodyTop = sheet.getRange(tableHeader.getRow()+1, 
                                            2,
                                            4,
                                            5);
    tableBodyTop.setFontColor("white");
  }   
}

function setTableBodyBottomFontToWhite() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(getNewSheetName());
  
  for(var i = 0; i < _numTables(); i++) {
    var tableHeader = ss.getRangeByName("PairsDocTableHeader" + i);
    var tableBodyBottom = sheet.getRange(tableHeader.getRow()+5, 
                                      2,
                                      4,
                                      5);
    tableBodyBottom.setFontColor("white");
  } 
}

function freezeTopRow(sheet) {
  sheet.setFrozenRows(1);
}

function setTableCellBorders(sheet) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(getNewSheetName());
  
  for(var i = 0; i < _numTables(); i++) {
    var tableHeader = ss.getRangeByName("PairsDocTableHeader" + i);
    var entireTable = getTableRangeFor("entireTableBody", sheet, tableHeader.getRow());
    
    entireTable.setBorder(true, true, true, true, true, true);
  } 
}

// HELPERS

function _getMiddleRow(firstRow, lastRow) {
  return Math.ceil((firstRow + lastRow)/2);
}
  
function _getFTOSectionRowNumber() {
  return 5;
}

function _numTables() {
  return 5;  
}