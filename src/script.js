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
