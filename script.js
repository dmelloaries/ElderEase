const currentDate = new Date();
const calendarGrid = document.getElementById("calendarGrid");
const currentMonthYear = document.getElementById("currentMonthYear");
const appointmentForm = document.getElementById("appointmentForm");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const descriptionInput = document.getElementById("description");
const appointmentList = document.getElementById("appointmentList");
const addAppointmentBtn = document.getElementById("addAppointment");

let selectedDate = new Date();

function renderCalendar() {
    calendarGrid.innerHTML = "";
    currentMonthYear.textContent = `${selectedDate.toLocaleString('default', { month: 'long' })} ${selectedDate.getFullYear()}`;

    const firstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

    for (let i = 0; i < firstDay.getDay(); i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar-day");
        calendarGrid.appendChild(dayElement);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar-day");
        dayElement.textContent = i;
        dayElement.addEventListener("click", () => {
            dateInput.value = selectedDate.toISOString().split('T')[0];
        });
        calendarGrid.appendChild(dayElement);
    }
}

renderCalendar();

addAppointmentBtn.addEventListener("click", () => {
    const date = dateInput.value;
    const time = timeInput.value;
    const description = descriptionInput.value;

    if (date && time && description) {
        const appointment = document.createElement("li");
        appointment.classList.add("appointment");
        appointment.innerHTML = `<strong>${date} ${time}</strong>: ${description}`;
        appointmentList.appendChild(appointment);

        dateInput.value = "";
        timeInput.value = "";
        descriptionInput.value = "";
    }
});

document.getElementById("prevMonth").addEventListener("click", () => {
    selectedDate.setMonth(selectedDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("nextMonth").addEventListener("click", () => {
    selectedDate.setMonth(selectedDate.getMonth() + 1);
    renderCalendar();
});
