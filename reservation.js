// Dhrumil Sathavara Reservation Project

"use strict";

$(document).ready(() => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;

  // Moving Focus to the “Pickup Date” text box.
  document.getElementById("pickup_date").focus();

  // Form submission event handler
  document
    .getElementById("reservation_form")
    .addEventListener("submit", (event) => {
      // Function for clearing error messages
      const errorMessages = document.querySelectorAll(".error");
      errorMessages.forEach((errorMessage) => {
        errorMessage.remove();
      });

      const PickupDate = document.getElementById("pickup_date").value.trim();
      const Days = document.getElementById("days").value.trim();
      const Name = document.getElementById("name").value.trim();
      const Email = document.getElementById("email").value.trim();
      const Phone = document.getElementById("phone").value.trim();

      // Look for the errors
      let hasErrors = false;

      // Validating each text box
      if (!PickupDate) {
        displayErrorMessage(
          "Enter the pickup date",
          document.getElementById("pickup_date")
        );
        hasErrors = true;
      }

      if (!Days) {
        displayErrorMessage(
          "Enter the number of days",
          document.getElementById("days")
        );
        hasErrors = true;
      }

      if (!Name) {
        displayErrorMessage("Enter your name", document.getElementById("name"));
        hasErrors = true;
      }

      if (!Email) {
        displayErrorMessage(
          "Enter your email address",
          document.getElementById("email")
        );
        hasErrors = true;
      }

      if (!Phone) {
        displayErrorMessage(
          "Enter your phone number",
          document.getElementById("phone")
        );
        hasErrors = true;
      }

      if (Days && isNaN(Days)) {
        displayErrorMessage("Must be numeric", document.getElementById("days"));
        hasErrors = true;
      }

      if (Email && !emailPattern.test(Email)) {
        displayErrorMessage(
          "MUST enter a valid email address",
          document.getElementById("email")
        );
        hasErrors = true;
      }

      if (Phone && isNaN(Phone)) {
        displayErrorMessage(
          "MUST be numeric",
          document.getElementById("phone")
        );
        hasErrors = true;
      }

      // Prevent form submission if error occur
      if (hasErrors) {
        event.preventDefault();
        return;
      }

      document.getElementById("pickup_date").value = PickupDate;
      document.getElementById("days").value = Days;
      document.getElementById("name").value = Name;
      document.getElementById("email").value = Email;
      document.getElementById("phone").value = Phone;
    });

  // Function for error messages
  function displayErrorMessage(message, element) {
    const errorMessage = document.createElement("span");
    errorMessage.className = "error";
    errorMessage.textContent = message;
    errorMessage.style.color = "red";
    errorMessage.style.marginLeft = "0.1em";

    element.parentNode.insertBefore(errorMessage, element.nextSibling);
  }
});
