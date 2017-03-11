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
  return getPairsFormattedDateString();
}

function insertTablesForWeek(startingRow, sheet) {
  var currentRowToWrite = startingRow;
  
  for(var i = 1; i < 6; i++) {
    sheet.getRange(currentRowToWrite++,1).setValue("TABLE HEADER");
    
    for(var j = 0; j < 4; j++) {
      sheet.getRange(currentRowToWrite++,1).setValue("TABLE ROW");
    }
    
    sheet.getRange(currentRowToWrite++,1).setValue("BLANK ROW");
  }
}

// HELPERS

function getPairsFormattedDateString() {
  var date = new Date();
  var options = { month: "short", day: "2-digit", year: "numeric" }
  
  return "SD Pairs - " + date.toLocaleDateString("en", options);
}
