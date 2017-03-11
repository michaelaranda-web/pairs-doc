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
  var tableHeaders = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const NUM_ROWS_PER_TABLE = 8;
  const NUM_COLS_PER_TABLE = 6;
  
  for(var i = 0; i < tableHeaders.length; i++) {
    
    // Insert table header
    sheet.getRange(currentRowToWrite,1,1,NUM_COLS_PER_TABLE).setBackground("red");
    
    sheet.getRange(currentRowToWrite,1).setValue(addDays(getClosestMondayDate(), i));
    sheet.getRange(currentRowToWrite,2).setValue(tableHeaders[i]);
    
    currentRowToWrite++;
    
    //Insert table rows
    for(var j = 0; j < NUM_ROWS_PER_TABLE; j++) {
      sheet.getRange(currentRowToWrite++,1).setValue("TABLE ROW");
    }
    
    sheet.getRange(currentRowToWrite,1).setValue("BLANK ROW");
    
    currentRowToWrite++;
  }
}