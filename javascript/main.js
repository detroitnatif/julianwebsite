// checks browser's default mode (true if dark mode, false if light mode)
const isDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}


function dark() {
    var element = document.body;
    var stat = element.classList.toggle("dark_mode");
    if (stat === true) {
        document.getElementById("icon").src = "imgs/sun.png";
        // Update image sources for dark mode
        if (document.getElementById("rust") !== null) {
            document.getElementById("rust").src = "imgs/rust-modified.png";
        }
        if (document.getElementById("map") !== null) {
            document.getElementById("map").src = "imgs/map-modified.png";
            document.getElementById("phone").src = "imgs/phone-modified.png";   
            document.getElementById("mail").src = "imgs/mail-modified.jpg";
            document.getElementById("github").src = "imgs/github-modified.png";   
        }
        localStorage.setItem("mode", "true");
    } else {
        document.getElementById("icon").src = "imgs/moon.png";
        // Update image sources for light mode
        if (document.getElementById("rust") !== null) {
            document.getElementById("rust").src = "imgs/rust.png";
        }
        if (document.getElementById("map") !== null) {
            document.getElementById("map").src = "imgs/map.png";
            document.getElementById("phone").src = "imgs/phone.png"; 
            document.getElementById("mail").src = "imgs/mail.jpg";
            document.getElementById("github").src = "imgs/github.png";  
        }
        localStorage.setItem("mode", "false");
    }
}


window.onload = function() {
    if (localStorage.getItem("mode") === "true") {
        dark();
    } else {
        // Ensure light mode is active by default
        document.getElementById("icon").src = "imgs/moon.png";
        if (document.getElementById("rust") !== null) {
            document.getElementById("rust").src = "imgs/rust.png";
        }
        if (document.getElementById("map") !== null) {
            document.getElementById("map").src = "imgs/map.png";
            document.getElementById("phone").src = "imgs/phone.png";
            document.getElementById("mail").src = "imgs/mail.jpg";
            document.getElementById("github").src = "imgs/github.png";
        }
        localStorage.setItem("mode", "false");  // Explicitly set light mode on first load
    }
}



// on startup, checks weither or not site should be in dark or light mode and switches if needed
// window.onload = function() {
//     if("mode" in localStorage){
//         if (localStorage.getItem("mode") == "true") {
//             dark();
//         }
//     } else {
//         if (isDarkMode() == true) {
//             dark();
//         } else {
//             localStorage.setItem("mode", "false");
//         }
//     }
// }