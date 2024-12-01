// JavaScript for User Dashboard with Dynamic Calendar

// DOM Elements
const calendarMonth = document.getElementById('calendar-month');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const calendarDates = document.getElementById('calendar-dates');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Render Calendar Function
function renderCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay(); // Day of the week of the first date
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total days in the current month

    // Update Month and Year Display
    calendarMonth.innerText = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

    // Clear previous dates
    calendarDates.innerHTML = '';

    // Fill blank spaces for days before the first day of the current month
    for (let i = 0; i < firstDay; i++) {
        const blank = document.createElement('div');
        calendarDates.appendChild(blank);
    }

    // Populate the days of the month
    for (let date = 1; date <= daysInMonth; date++) {
        const dateElem = document.createElement('div');
        dateElem.innerText = date;
        dateElem.classList.add('date');
        dateElem.addEventListener('click', () => {
            // Remove active class from all dates
            document.querySelectorAll('.date').forEach(d => d.classList.remove('active'));
            // Add active class to the selected date
            dateElem.classList.add('active');
        });
        calendarDates.appendChild(dateElem);
    }
}

// Navigation Buttons
prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// Initialize Calendar
renderCalendar(currentMonth, currentYear);

// Handle Form Submission for Class Scheduling
const classScheduleForm = document.getElementById('class-schedule-form');

classScheduleForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect Selected Values
    const year = document.getElementById('year').value;
    const department = document.getElementById('department').value;
    const section = document.getElementById('section').value;
    const timing = document.getElementById('timing').value;

    alert(`Viewing schedule for:\nYear: ${year}\nDepartment: ${department}\nSection: ${section}\nTiming: ${timing}`);
    // Placeholder for backend integration to fetch schedule details
});
// Get the dashboard container
const dashboardContainer = document.getElementById("dashboard-container");

// Apply custom scroll behavior
dashboardContainer.style.overflowY = "scroll"; // Ensure vertical scrolling
dashboardContainer.style.scrollBehavior = "smooth"; // Smooth scrolling

// Optional: Add event listener for custom scrolling effects
dashboardContainer.addEventListener("scroll", () => {
    // Example: Change background color on scroll
    const scrollPosition = dashboardContainer.scrollTop;
    if (scrollPosition > 100) {
        dashboardContainer.style.backgroundColor = "#f0f8ff"; // Light blue when scrolled
    } else {
        dashboardContainer.style.backgroundColor = "#ffffff"; // White when at top
    }
});

// Custom scrollbar styling (if needed, via JavaScript)
dashboardContainer.style.scrollbarWidth = "thin"; // Thin scrollbar for modern browsers
dashboardContainer.style.scrollbarColor = "#888 #f1f1f1"; // Dark thumb on light track

// For webkit browsers (like Chrome, Safari)
const style = document.createElement("style");
style.textContent = `
    #dashboard-container::-webkit-scrollbar {
        width: 8px;
    }
    #dashboard-container::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }
    #dashboard-container::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    #dashboard-container::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
`;
document.head.appendChild(style);
