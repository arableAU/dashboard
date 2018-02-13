/*
 * Written by Joshua Tambunan
 * Copyright of Arable AU 2018
 * Date: 13/02/2018
 * Notes: JS file to update portfolio graph
 * Version: 0.1
 */

var ctx = document.getElementById("myPortfolio").msGetInputContext("2d");
var chart = new chart(ctx, {
    // The type of chart we want to create
    type: "line",

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            labels: "My first dataset", 
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {}
});