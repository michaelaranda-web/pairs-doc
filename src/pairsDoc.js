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

function getNewSheetName() {
  return "SD Pairs - " + getFormattedDateString();
}

function insertTablesForWeek(startingRow, sheet) {
  var currentRowToWrite = startingRow;
  var tableHeaderSecondCellValues = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const NUM_ROWS_PER_TABLE = 5;
  
  for(var i = 0; i < tableHeaderSecondCellValues.length; i++) {
    
    //TODO: Pass currentRowToWrite by reference into a table header function
    var closestMondayDate = getClosestMondayDate();
    sheet.getRange(currentRowToWrite,1).setValue(addDays(closestMondayDate, i));
    sheet.getRange(currentRowToWrite++,2).setValue(tableHeaderSecondCellValues[i]);
    
    for(var j = 0; j < NUM_ROWS_PER_TABLE; j++) {
      sheet.getRange(currentRowToWrite++,1).setValue("TABLE ROW");
    }
    
    sheet.getRange(currentRowToWrite++,1).setValue("BLANK ROW");
  }
}
