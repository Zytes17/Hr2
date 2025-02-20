function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    const sidebarItems = document.querySelectorAll(".sidebar-text");
    const sidebarTitle = document.getElementById("sidebar-title");

    sidebar.classList.toggle("w-16");
    sidebar.classList.toggle("w-64");

    mainContent.classList.toggle("ml-16");
    mainContent.classList.toggle("ml-64");

    // Hide sidebar title when collapsed
    sidebarTitle.classList.toggle("hidden");

    // Toggle visibility of text elements
    sidebarItems.forEach(item => {
        item.classList.toggle("hidden");
    });
}




function setupDropdown(toggleId, dropdownId) {
    let toggle = document.getElementById(toggleId);
    let dropdown = document.getElementById(dropdownId);

    toggle.addEventListener('click', function(e) {
        e.stopPropagation();

        // Close all other dropdowns
        document.querySelectorAll('[id$="-dropdown"]').forEach(function(el) {
            if (el.id !== dropdownId) {
                el.classList.add('hidden');
            }
        });

        // Toggle the current dropdown
        let isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isExpanded);
        dropdown.classList.toggle('hidden');
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', function() {
    document.querySelectorAll('[id$="-dropdown"]').forEach(function(el) {
        el.classList.add('hidden');
    });
    document.querySelectorAll('[id$="-toggle"]').forEach(function(btn) {
        btn.setAttribute('aria-expanded', 'false');
    });
});

// Setup dropdowns
setupDropdown('notification-toggle', 'notification-dropdown');
setupDropdown('profile-toggle', 'profile-dropdown');






















































// Sample data for the table
let employees = [
    {
        id: 1,
        name: 'John Doe',
        department: 'IT',
        email: 'john@example.com'
    },
    {
        id: 2,
        name: 'Jane Smith',
        department: 'HR',
        email: 'jane@example.com'
    }
];

// Function to show modal
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('hidden');
}

// Function to hide modal
function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
}

// Function to populate table
function populateTable() {
    const tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = ''; // Clear existing content
    
    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.className = 'border-b hover:bg-gray-50';
        
        row.innerHTML = `
            <td class="px-6 py-4">${employee.name}</td>
            <td class="px-6 py-4">${employee.department}</td>
            <td class="px-6 py-4">${employee.email}</td>
            <td class="px-6 py-4">
                <button onclick="scheduleEmployee(${employee.id})" class="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600">Schedule</button>
                <button onclick="viewEmployee(${employee.id})" class="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600">View</button>
                <button onclick="editEmployee(${employee.id})" class="bg-yellow-500 text-white px-3 py-1 rounded mr-2 hover:bg-yellow-600">Edit</button>
                <button onclick="deleteEmployee(${employee.id})" class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Schedule Employee
window.scheduleEmployee = (employeeId) => {
    const employee = employees.find(emp => emp.id === employeeId);
    if (employee) {
        document.getElementById('scheduleEmployeeName').textContent = employee.name;
        showModal('scheduleModal');
    }
};

// View Employee
window.viewEmployee = (employeeId) => {
    const employee = employees.find(emp => emp.id === employeeId);
    if (employee) {
        document.getElementById('viewEmployeeName').textContent = employee.name;
        document.getElementById('viewEmployeeDepartment').textContent = employee.department;
        document.getElementById('viewEmployeeEmail').textContent = employee.email;
        showModal('viewModal');
    }
};

// Edit Employee
window.editEmployee = (employeeId) => {
    const employee = employees.find(emp => emp.id === employeeId);
    if (employee) {
        document.getElementById('editEmployeeId').value = employee.id;
        document.getElementById('editEmployeeName').value = employee.name;
        document.getElementById('editEmployeeDepartment').value = employee.department;
        document.getElementById('editEmployeeEmail').value = employee.email;
        showModal('editModal');
    }
};

// Save Edit Employee
window.saveEditEmployee = () => {
    const id = parseInt(document.getElementById('editEmployeeId').value);
    const name = document.getElementById('editEmployeeName').value;
    const department = document.getElementById('editEmployeeDepartment').value;
    const email = document.getElementById('editEmployeeEmail').value;

    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees[index] = { id, name, department, email };
        populateTable();
        hideModal('editModal');
    }
};

// Delete Employee
window.deleteEmployee = (employeeId) => {
    if (confirm('Are you sure you want to delete this employee?')) {
        employees = employees.filter(emp => emp.id !== employeeId);
        populateTable();
    }
};

// Save Schedule
window.saveSchedule = () => {
    const date = document.getElementById('scheduleDate').value;
    const time = document.getElementById('scheduleTime').value;
    alert(`Training scheduled for ${date} at ${time}`);
    hideModal('scheduleModal');
};

// Close modal buttons
document.querySelectorAll('.modal-close').forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        modal.classList.add('hidden');
    });
});

// Initialize table
populateTable();