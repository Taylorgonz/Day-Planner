const rows = $("div.row");
const currentHour = parseInt(dayjs().format("H"));
const currentDay = dayjs().format(`MMM, D`);
let storedPlans = [];
const storedPlansName = "schedule plans"
const descriptionInput = $(".description");
console.log(storedPlans)
// displaying current date in header
$("#currentDay").text(currentDay);

// save input function
function setPlans(uText, uId) {
    storedBlock= {
    id : uId,
    input : uText.trim()
}
    for (let i = 0; i < storedPlans.length; i++) {
            if (storedBlock.id === storedPlans[i].id) {

                storedPlans.splice(i, 1);

                localStorage.setItem(storedPlansName, JSON.stringify(storedPlans));

                return null;
            }
        }
    storedPlans.push(storedBlock);
        localStorage.setItem(storedPlansName, JSON.stringify(storedPlans))
}

// get stored plans from localStorage

function getPlans() {
   storedPlans.forEach(function($))
}

// creating storage function
$('.saveBtn').on('click', function(event) {
    event.preventDefault();
    let userInput = $(this).siblings(".description").val();
    let blockId = $(this).siblings(".description").attr("id");

    setPlans(userInput, blockId);
});
console.log(localStorage)
// setting background color according to time
Array.from(rows).forEach((row) => {
    // 
  let rowHour = parseInt(row.id);


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
