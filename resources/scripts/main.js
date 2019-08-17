$(document).ready(function () {




    /************ Toggle Nav
     ****************************************************/
    var NAV_TOGGLER = $('#main_nav_toggler');
    var DRAWER_OPEN_ICON = $('#drawer_open_icon');
    var DRAWER_CLOSE_ICON = $('#drawer_close_icon').hide();
    var NAV = $('#main_sticky_nav');


    NAV_TOGGLER.click(toggleNav);

    function toggleNav() {
        // alert("hello");
        NAV.toggleClass('collapse');
        toggleDrawerIcon();
    }


    function toggleDrawerIcon() {
        if (DRAWER_OPEN_ICON.is(":visible")) {
            // alert("drawer open is visible.");
            DRAWER_CLOSE_ICON.show();
            DRAWER_OPEN_ICON.hide();
        } else {
            // alert("drawer close is visible.");
            DRAWER_CLOSE_ICON.hide();
            DRAWER_OPEN_ICON.show();
        }
    }
});