document.querySelector('.header__moon').onclick = function() {
    document.querySelector('body').classList.toggle('is-black');
}

document.querySelector('.header__mob-menu').onclick = function() {
    document.querySelector('.header-menu').classList.toggle('is-active');
}

document.getElementById("publications").style.display = "block";
document.getElementById("education").style.display = "block";

function next_tab(tab_name) {
    var i;
    // var x = document.getElementsByClassName("page__intro");
    var x = document.getElementsByName("section")
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(tab_name).style.display = "block";
  }
