
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn i');

    sidebar.classList.toggle('collapsed');

    // Toggle icon based on the sidebar state
    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.classList.remove('fa-angle-double-left');
        toggleBtn.classList.add('fa-angle-double-right');
    } else {
        toggleBtn.classList.remove('fa-angle-double-right');
        toggleBtn.classList.add('fa-angle-double-left');
    }
}



function autoCollapseSidebar() {
    if (window.innerWidth <= 768) {
      document.querySelector(".sidebar")?.classList.add("collapsed");
    }
  }
  
  document.addEventListener("DOMContentLoaded", autoCollapseSidebar);
  



  