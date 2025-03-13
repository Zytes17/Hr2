// Job Statistics Chart
const jobCtx = document.getElementById('jobChart').getContext('2d');
new Chart(jobCtx, {
    type: 'bar',
    data: {
        labels: ['New Hired', 'Trainees', 'Total Employees', 'Evaluated'],
        datasets: [{
            data: [14, 4, 9, 3],
            backgroundColor: ['#f59e0b', '#3b82f6', '#10b981', '#a855f7'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { display: true }
        }
    }
});

// Attendance Statistics Chart
const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
new Chart(attendanceCtx, {
    type: 'doughnut',
    data: {
        labels: ['Present', 'Absent', 'Late'],
        datasets: [{
            data: [10, 5, 3],
            backgroundColor: ['#10b981', '#ef4444', '#fbbf24'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            }
        }
    }
});