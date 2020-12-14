/*
    Author: David De Alva
    Date: 12/10/2020
    File name: porfolio/scripts/script.js
    */
// Hamburger function

function hamburger() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("porfolio-logo");
  if (menu.style.display === "block" && logo.style.display === "none"){
          menu.style.display= "none";
          logo.style.display= "block";
        } else {
          menu.style.display = "block";
          logo.style.display = "none";
           }
  }
