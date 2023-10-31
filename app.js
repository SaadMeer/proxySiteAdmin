const toggleBox = document.querySelector('.deskyop-arrow');


toggleBox.addEventListener('click', () => {
    const sidebarMain = document.querySelector('.sidebar-main-container');
    const sidebarSpan = document.querySelector('.sidebar-ul');
    const logoname = document.querySelector('.logoname');

    const bottomUserName = document.querySelector('.bottom-user-name');
    // const logoname = document.querySelector('.logoname');


    const leftarrowMenu = document.querySelectorAll('.leftarrow-menu');
    const sidebarli = document.querySelectorAll('.sidebar-li');
    const spans = sidebarSpan.getElementsByTagName("span");


    document.querySelector('.right-content-section').classList.toggle('right-content-section-flex')
    sidebarMain.classList.toggle("hide-sidebar");
    toggleBox.classList.toggle("toggle-box-container-show");
    logoname.classList.toggle("logonamehide");
    document.querySelector('.main-logo').style.marginLeft = '17px';
    bottomUserName.classList.toggle("bottom-user-name-hide");


    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.toggle("dislpay-none");

    }
    for (let i = 0; i < sidebarli.length; i++) {
        sidebarli[i].classList.toggle("sidebar-icon-center");
    }
    for (let i = 0; i < sidebarli.length; i++) {
        leftarrowMenu[i].classList.toggle("leftarrow-menu-hide");

    }

})


function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar-main-container');
    if (sidebar.style.display === 'none') {
      sidebar.style.display = 'block';
    } else {
      sidebar.style.display = 'none';
    }
  }