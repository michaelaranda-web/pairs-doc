function getClosestMondayDate() {
  todayDate = new Date();
  
  if (_isMonday(todayDate)) {
    return todayDate;
  }
  
  for(var i = 1; i < 7; i++) {
    currDate = addDays(todayDate, i);
    
    if (_isMonday(currDate)) {
      return currDate;
    }
  }
}

function addDays(startDate,numberOfDays) {
  var returnDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()+numberOfDays,
    startDate.getHours(),
    startDate.getMinutes(),
    startDate.getSeconds());
  
  return returnDate;
}

function getFormattedDateString() {
  var date = new Date();
  var options = { month: "short", day: "2-digit", year: "numeric" }
  
  return date.toLocaleDateString("en", options);
}

// PRIVATE

function _isMonday(date) {
  if (date.getDay() === 1) {
    return true;
  }
  return false;
}
