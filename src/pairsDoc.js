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
  sheet.getRange(startingRow,1).setValue("TABLE STARTS HERE");
}

// HELPERS

function getPairsFormattedDateString() {
  var date = new Date();
  var options = { month: "short", day: "2-digit", year: "numeric" }
  
  return "SD Pairs - " + date.toLocaleDateString("en", options);
}
