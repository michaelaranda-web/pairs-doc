//TODO: Create configurations function
function createNewPairsDoc() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var originalSheet = ss.getSheets()[0];
  
  var newSheet = ss.insertSheet(getNewSheetName());
  
  //Insert header template with values from last week
  var headerRange = originalSheet.getRange(1,1,6,6);
  headerRange.copyTo(newSheet.getRange(1,1));
  
  //Insert Mon - Fri pairs tables
  var startingRowForTables = newSheet.getLastRow() + 2;
  insertTablesForWeek(startingRowForTables, newSheet);
}

function insertTablesForWeek(startingRow, sheet) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var currentRowToWrite = startingRow;
  var tableHeaders = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const NUM_TEAMS = 2;
  const NUM_ROWS_PER_TABLE = 8;
  const NUM_COLS_PER_TABLE = 6;
  
  for(var i = 0; i < tableHeaders.length; i++) {
    
    // Insert table header
    ss.setNamedRange("PairsDocTableHeader" + i, sheet.getRange(currentRowToWrite,1,1,NUM_COLS_PER_TABLE));
    
    sheet.getRange(currentRowToWrite,1).setValue(addDays(getClosestMondayDate(), i));
    sheet.getRange(currentRowToWrite,2).setValue(tableHeaders[i]);
    
    currentRowToWrite++;
    
    //Insert table rows
    ss.setNamedRange("PairsDocTableBody" + i, sheet.getRange(currentRowToWrite,1,NUM_ROWS_PER_TABLE,NUM_COLS_PER_TABLE));
    
    currentRowToWrite = currentRowToWrite + NUM_ROWS_PER_TABLE + 1;
  }
  
  setNewRandomColorScheme(sheet, tableHeaders.length);
}

function setNewRandomColorScheme(sheet, numTables) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var matchingColors = getThreeColors();
  
  for(var i = 0; i < numTables; i++) {
    ss.getRangeByName("PairsDocTableHeader" + i).setBackground(matchingColors.first_color);
    
    var tableBodyRange = ss.getRangeByName("PairsDocTableBody" + i);
    tableBodyRange.setBackground(matchingColors.second_color);
    var secondHalfTableBody = sheet.getRange(_getMiddleRow(tableBodyRange.getRow(), tableBodyRange.getLastRow()), 
                                            1,
                                            tableBodyRange.getHeight()/2,
                                            tableBodyRange.getWidth());
    
    secondHalfTableBody.setBackground(matchingColors.third_color);
  }
}

function getNewSheetName() {
  return "SD Pairs - " + getFormattedDateString();
}

function _getMiddleRow(firstRow, lastRow) {
  return Math.ceil((firstRow + lastRow)/2);
}