/*
 * Written by Joshua Tambunan
 * Copyright of Arable AU 2018
 * Date: 13/02/2018
 * Notes: JS file to control the navigation pane
 * Version: 0.1
 */

/* Set the width of the side navigation tok 250px */
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementsByTagName("body>header").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0  and the left margin of the page content to 0 and the background color of body to white*/
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "#ffffff";
}