let timetableData = {};

document.getElementById('addButton').addEventListener('click', function() {
    const selectedDay = document.getElementById('daySelect').value;
    const time = document.getElementById('timeInput').value.trim();
    const subject = document.getElementById('subjectInput').value.trim();
    const teacher = document.getElementById('teacherInput').value.trim();

    if (!time || !subject || !teacher) {
        alert('Please fill in all fields.');
        return;
    }

    if (!timetableData[selectedDay]) {
        timetableData[selectedDay] = {};
    }

    timetableData[selectedDay][time] = { subject, teacher };

    // Clear inputs after adding
    document.getElementById('timeInput').value = '';
    document.getElementById('subjectInput').value = '';
    document.getElementById('teacherInput').value = '';

    updateTimetable();
});

document.getElementById('daySelect').addEventListener('change', updateTimetable);

function updateTimetable() {
    const selectedDay = document.getElementById('daySelect').value;
    const tbody = document.getElementById('timetable-body');
    tbody.innerHTML = ''; // Clear existing timetable

    const times = Object.keys(timetableData[selectedDay] || {}); // Get available times for the selected day

    times.forEach(time => {
        const row = document.createElement('tr');
        const timeCell = document.createElement('td');
        timeCell.textContent = time;
        row.appendChild(timeCell);

        const subjectCell = document.createElement('td');
        subjectCell.textContent = timetableData[selectedDay][time].subject || '';
        row.appendChild(subjectCell);

        const teacherCell = document.createElement('td');
        teacherCell.textContent = timetableData[selectedDay][time].teacher || '';
        row.appendChild(teacherCell);

        tbody.appendChild(row);
    });

    if (tbody.innerHTML === '') {
        const row = document.createElement('tr');
        const noDataCell = document.createElement('td');
        noDataCell.colSpan = 3; // Adjust colspan for the new column
        noDataCell.textContent = 'No data available for this day.';
        row.appendChild(noDataCell);
        tbody.appendChild(row);
    }
}
