//TODO: Create configurations function
function createNewPairsDoc() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var originalSheet = ss.getSheets()[0];
  
  var newSheet = ss.insertSheet(getNewSheetName());
  setColumnWidths(newSheet);
  
  //Insert header template with values from last week
  var headerRange = originalSheet.getRange(1,1,6,6);
  headerRange.copyTo(newSheet.getRange(1,1));
  
  //Insert Mon - Fri pairs tables
  var startingRowForTables = newSheet.getLastRow() + 2;
  insertTablesForWeek(startingRowForTables, newSheet);
  
  setTableRowHeights(ss, newSheet);
  //TODO: Move color scheme function call here
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
    
    currentRowToWrite++;
    
    //Insert table sections
    var tableBodyRange = sheet.getRange(currentRowToWrite,1,NUM_ROWS_PER_TABLE,NUM_COLS_PER_TABLE);
    
    var topTrackSection = sheet.getRange(tableBodyRange.getRow(), 
                                            1,
                                            tableBodyRange.getHeight()/2,
                                            1);
    
    var bottomTrackSection = sheet.getRange(_getMiddleRow(tableBodyRange.getRow(), tableBodyRange.getLastRow()), 
                                            1,
                                            tableBodyRange.getHeight()/2,
                                            1);
    
    var tableBodyTopSection = sheet.getRange(tableBodyRange.getRow(), 
                                            2,
                                            tableBodyRange.getHeight()/2,
                                            tableBodyRange.getWidth()-1);
    
    var tableBodyBottomSection = sheet.getRange(_getMiddleRow(tableBodyRange.getRow(), tableBodyRange.getLastRow()), 
                                            2,
                                            tableBodyRange.getHeight()/2,
                                            tableBodyRange.getWidth()-1);
    
    ss.setNamedRange("PairsDocTracksTop" + i, topTrackSection);
    ss.setNamedRange("PairsDocTracksBottom" + i, bottomTrackSection);
    ss.setNamedRange("PairsDocTableBodyTop" + i, tableBodyTopSection);
    ss.setNamedRange("PairsDocTableBodyBottom" + i, tableBodyBottomSection);
    
    currentRowToWrite = currentRowToWrite + NUM_ROWS_PER_TABLE + 1;
  }
  
  setNewRandomColorScheme(sheet, tableHeaders.length);
}