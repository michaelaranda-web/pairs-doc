function createNewPairsDoc() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var originalSheet = ss.getSheets()[0];
  var newSheet = ss.insertSheet(getNewSheetName());
  
  //Copy header from previous week's pair doc
  var headerRange = originalSheet.getRange(1,1,6,6);
  headerRange.copyTo(newSheet.getRange(1,1));
  
  //Insert Mon - Fri pairs tables
  var startingRowForTables = newSheet.getLastRow() + 2;
  insertTablesForWeek(startingRowForTables, newSheet);
  
  //Set color scheme and formatting
  setNewRandomColorScheme(newSheet, 5);
  freezeTopRow(newSheet);
  setRowHeights(newSheet);
  setColumnWidths(newSheet);
  setTableCellBorders(newSheet);
}

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  
  ui.createMenu('Custom')
      .addItem('Create New Pairs Doc', 'createNewPairsDoc')
      .addItem('Swap Color Palette', 'onSwapColorPalette')
      .addSeparator()
      .addSubMenu(SpreadsheetApp.getUi().createMenu('Set Font Color to White...')
           .addItem('Table Header', 'setTableHeaderFontToWhite')
           .addItem('Tracks - Top', 'setTracksTopFontToWhite')
           .addItem('Tracks - Bottom', 'setTracksBottomFontToWhite')
           .addItem('Table Body - Top', 'setTableBodyTopFontToWhite')
           .addItem('Table Body - Bottom', 'setTableBodyBottomFontToWhite'))
      .addToUi();
}

function onSwapColorPalette() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(getNewSheetName());
  
  setNewRandomColorScheme(sheet, 5);
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
    
    currentRowToWrite = currentRowToWrite + NUM_ROWS_PER_TABLE + 2;
  }
}