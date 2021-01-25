const rows = $("div.row");
const displayArea = $("textarea");
const currentHour = parseInt(dayjs().format("H"));
const currentDay = dayjs().format(`MMM, D`);
let storedPlans = [];
const descriptionInput = $(".description");
// displaying current date in header
$("#currentDay").text(currentDay);

// get stored plans from localStorage
function getPlans() {
    let storedAppointments= JSON.parse(localStorage.getItem("appointments"));
    console.log(storedAppointments);

    if (storedAppointments !== null) {
        for (i = 0; i < storedAppointments.length; i++) {
            $('#' + storedAppointments[i].id).val(storedAppointments[i].input);
        };
    }
}
getPlans();

// creating storage function
$(".saveBtn").on("click", function (event) {
    // preventing bubbling
  event.preventDefault();
//   variable for storing input info inside an array
  let userInput = $(this).siblings(".description").val();
  let blockId = $(this).siblings(".description").attr("id");

  storedBlock = {
    id: blockId,
    input: userInput,
  };

  if (storedPlans === null) {
    localStorage.setItem(
      "appointments",
      JSON.stringify([{ id: blockId, input: userInput }])
    );
  } else {
    storedPlans.push(storedBlock);
    localStorage.setItem("appointments", JSON.stringify(storedPlans));
  }
});

console.log(localStorage);
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
    } else {
      setColor(row, "#d3d3d3");
    }
  }
});
// function for setting color
function setColor(element, color) {
  element.style.backgroundColor = color;
}

$('.clear').on('click', function(event){
    event.preventDefault();
    localStorage.clear();
    $('textarea').val('');
});