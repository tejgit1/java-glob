document.getElementById("addSchedule").addEventListener("click", function () {
    const actionSection = document.getElementById("actionSection");
    actionSection.innerHTML = `
        <h3>Add a New Schedule</h3>
        <form id="scheduleForm">
            <label for="department">Department:</label>
            <input type="text" id="department" name="department" required>
            
            <label for="year">Year:</label>
            <input type="number" id="year" name="year" required>
            
            <label for="section">Section:</label>
            <input type="text" id="section" name="section" required>
            
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required>
            
            <label for="time">Time:</label>
            <input type="time" id="time" name="time" required>
            
            <button type="submit">Save</button>
        </form>
    `;

    document.getElementById("scheduleForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Schedule saved successfully!");
    });
});

document.getElementById("viewSchedules").addEventListener("click", function () {
    const actionSection = document.getElementById("actionSection");
    actionSection.innerHTML = `
        <h3>Schedules</h3>
        <p>List of schedules will appear here.</p>
    `;
});
