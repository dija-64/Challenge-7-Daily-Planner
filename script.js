


var currentDay = document.getElementById("currentDay");
currentDay.textContent = dayjs().format("dddd MMMM D YYYY");

function changeColours() {
    var currentTime = dayjs().hour();

    document.querySelectorAll(".time-block").forEach(function (timeBlock) {
        var timeBlockHour = parseInt(timeBlock.dataset.hour);

        if (timeBlockHour < currentTime) {
            timeBlock.classList.add("past");
        } else if (timeBlockHour === currentTime) {
            timeBlock.classList.add("present");
        } else {
            timeBlock.classList.add("future");
        }
    });
}

function loadItinerary() {
    document.querySelectorAll(".time-block").forEach(function (timeBlock) {
        var timeBlockHour = timeBlock.dataset.hour;
        var storedEvent = localStorage.getItem(timeBlockHour);

        if (storedEvent) {
            timeBlock.querySelector(".event-input").value = storedEvent;
        }
    });
}

document.querySelectorAll(".save-btn").forEach(function (saveBtn) {
    saveBtn.addEventListener("click", function () {
        var timeBlock = saveBtn.closest(".time-block");
        var timeBlockHour = timeBlock.dataset.hour;
        var eventInput = timeBlock.querySelector(".event-input").value;
        localStorage.setItem(timeBlockHour, eventInput);
    });

    document.getElementById("clearCalendar").addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });

});

changeColours();
loadItinerary();