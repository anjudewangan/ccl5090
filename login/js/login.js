$(document).ready(function () {

    // this prevents page reload on pressing enter
    $("form").submit(function (event) {
        event.preventDefault();
    });

    // click listener
    $('#btnSignIn').click(function () {
        if ($('input:text').val() == "admin" && $('input:password').val() == "patiocclcms") {
            window.location.replace("./admin/index.html");
        }
        else if ($('input:text').val() == "rkumar" && $('input:password').val() == "Rahul@123") {
            window.location.replace("./caller/index.html");
        }
        else {
            alert('Wrong !');
        }
    });

});

// Favicon Change

const faviconTag = document.getElementById("faviconTag");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
    if (isDark.matches) {
        faviconTag.href = "./assets/images/logoIcon/cclDark.png";
    }
    else {

        faviconTag.href = "./assets/images/logoIcon/cclLight.png";
    }
};

changeFavicon();
isDark.addEventListener("change", changeFavicon);