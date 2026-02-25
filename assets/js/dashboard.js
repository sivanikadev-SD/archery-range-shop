// Dashboard Specific Logic

document.addEventListener('DOMContentLoaded', () => {
    initDashboardCharts();
    initSidebar();
});

function initSidebar() {
    // Sidebar toggle logic for mobile
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    if (sidebarToggle && sidebar && overlay) {
        sidebarToggle.addEventListener('click', () => {
            // Toggle visibility using force-zero translate which overrides both -translate-x-full (LTR) and translate-x-full (RTL)
            sidebar.classList.toggle('!translate-x-0');

            // Toggle overlay
            overlay.classList.toggle('hidden');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('!translate-x-0');
            sidebar.classList.add('-translate-x-full'); // Reset to default hidden state just in case
            overlay.classList.add('hidden');
        });
    }
}

function initDashboardCharts() {
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') return;

    // Revenue Chart (Admin)
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'Revenue ($)',
                    data: [1200, 1900, 300, 500, 2000, 3000, 4500],
                    borderColor: '#7a1f1f',
                    backgroundColor: 'rgba(122, 31, 31, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                }
            }
        });
    }

    // Lane Usage Chart (Admin)
    const usageCtx = document.getElementById('usageChart');
    if (usageCtx) {
        new Chart(usageCtx, {
            type: 'doughnut',
            data: {
                labels: ['Recurve', 'Compound', 'Training'],
                datasets: [{
                    data: [45, 30, 25],
                    backgroundColor: [
                        '#7a1f1f',
                        '#1f2933',
                        '#f59e0b'
                    ]
                }]
            },
            options: {
                responsive: true
            }
        });
    }
}
function logout() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
    alert("Logout successful");

}