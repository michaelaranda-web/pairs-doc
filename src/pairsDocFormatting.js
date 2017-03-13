function setNewRandomColorScheme(sheet, numTables) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var matchingColors = getFiveColors();
  
  for(var i = 0; i < numTables; i++) {
    var tableHeader = ss.getRangeByName("PairsDocTableHeader" + i);
    
    var tracksTop = sheet.getRange(tableHeader.getRow()+1, 
                                            1,
                                            4,
                                            1);
    
    var tracksBottom = sheet.getRange(tableHeader.getRow()+5, 
                                      1,
                                      4,
                                      1);
    
    var tableBodyTop = sheet.getRange(tableHeader.getRow()+1, 
                                            2,
                                            4,
                                            5);
    
    var tableBodyBottom = sheet.getRange(tableHeader.getRow()+5, 
                                      2,
                                      4,
                                      5);
    
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

function setTableRowHeights(ss, sheet) {
  for(var i = _getFTOSectionRowNumber(); i < 57; i++) {
    sheet.setRowHeight(i, 25);
  }
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
  
function _getFTOSectionRowNumber() {
  return 5;
}

function _numTables() {
  return 5;  
}