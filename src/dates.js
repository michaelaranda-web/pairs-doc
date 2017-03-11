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

//TODO refactor similar date functions below
function getFormattedDateString() {
  var date = new Date();
  var options = { month: "short", day: "2-digit", year: "numeric" }
  
  return date.toLocaleDateString("en", options);
}
