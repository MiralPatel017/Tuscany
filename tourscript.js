
document.addEventListener("DOMContentLoaded", () => {
    const publicToursBtn = document.getElementById("public-tours");
    const privateToursBtn = document.getElementById("private-tours");

    // Toggle active button
    publicToursBtn.addEventListener("click", () => {
        publicToursBtn.classList.add("active");
        privateToursBtn.classList.remove("active");
    });

    privateToursBtn.addEventListener("click", () => {
        privateToursBtn.classList.add("active");
        publicToursBtn.classList.remove("active");
    });
});

const dateInput = document.getElementById("custom-date-input");
const calendar = document.getElementById("custom-calendar");
const calendarBody = document.getElementById("calendar-body");
const calendarHeader = document.getElementById("calendar-header");

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function toggleCalendar() {
    calendar.style.display = calendar.style.display === "block" ? "none" : "block";
}

function closeCalendar() {
    calendar.style.display = "none";
}

function populateCalendar(month, year) {
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    calendarHeader.innerText = `${today.toLocaleString("default", {
        month: "long"
    })} ${year}`;
    calendarBody.innerHTML = "";

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                const cell = document.createElement("td");
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                const cell = document.createElement("td");
                cell.innerText = date;
                cell.addEventListener("click", () => {
                    dateInput.value = `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
                    closeCalendar();
                });
                row.appendChild(cell);
                date++;
            }
        }
        calendarBody.appendChild(row);
    }
}

dateInput.addEventListener("click", () => {
    toggleCalendar();
    populateCalendar(currentMonth, currentYear);
});

window.addEventListener("click", (e) => {
    if (!calendar.contains(e.target) && e.target !== dateInput) {
        closeCalendar();
    }
});