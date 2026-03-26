function toggleSidebar() {
    const sidebar = document.getElementById('docs-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    sidebar.classList.toggle('sidebar-open');
    backdrop.classList.toggle('active');
}
function closeSidebar() {
    document.getElementById('docs-sidebar').classList.remove('sidebar-open');
    document.getElementById('sidebar-backdrop').classList.remove('active');
}
