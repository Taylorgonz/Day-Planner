const rows = $("div.row");
let currentHour = parseInt(dayjs().format("H"));
const currentDay = dayjs().format(`MMM, D`);
// displaying current date in header
$("#currentDay").text(currentDay);



// setting background color according to time
Array.from(rows).forEach((row) => {
    // 
  let rowHour = parseInt(row.id);

  console.log(rowHour)

  if (rowHour) {
    // compare row id to current hour and sets color
    if (currentHour === rowHour) {
      setColor(row, "#ff6961");
    } else if (currentHour < rowHour) {
      setColor(row, "#77dd77");
    } else{
      setColor(row, "#d3d3d3");
    }
  }
});
function setColor(element, color) {
  element.style.backgroundColor = color;
}
console.log(currentHour)
console.log(rows.id);
console.log(rows);
