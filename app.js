
$(".progress-1").each(function(){
  
  var $bar = $(this).find(".bar-1");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (90+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});



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
