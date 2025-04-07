// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Show celsius
 */
function convertFahrenheitToCelsius() {
  // input
  const fahrenheitNumber = parseFloat(document.getElementById("fahrenheit-number").value);

  // process 
  const convertFahrenheitToCelsius = ( fahrenheitNumber - 32) * (5 / 9);

  // output with more controlled precision
  document.getElementById("convert").innerHTML = + fahrenheitNumber + "°F is equivalent to " + convertFahrenheitToCelsius.toFixed(3) + "°C";
}
