function submitToGoogleForm() {
  const form = document.getElementById("myForm");

  // Replace this URL with your Google Form 'formResponse' URL
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

  // Extracting values from the form
  const formData = new FormData(form);

  // Creating a key-value mapping for Google Form entry fields
  const googleFormData = new URLSearchParams();

  // Replace 'entry.YOUR_FIELD_ID' with the respective Google Form field IDs
  googleFormData.append("entry.YOUR_FIELD_ID_FOR_NAME", formData.get("name"));
  googleFormData.append("entry.YOUR_FIELD_ID_FOR_EMAIL", formData.get("email"));
  googleFormData.append(
    "entry.YOUR_FIELD_ID_FOR_LANGUAGE",
    formData.get("language")
  );
  googleFormData.append(
    "entry.YOUR_FIELD_ID_FOR_PROFESSION",
    formData.get("profession")
  );

  // Sending the POST request
  fetch(googleFormUrl, {
    method: "POST",
    mode: "no-cors", // Necessary to prevent CORS issues
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: googleFormData.toString(),
  })
    .then((response) => {
      // Since 'no-cors' mode is used, you can't read the response status
      alert("Form submitted successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}

function subscribeToGoogleForm() {
  const phoneNumber = document.getElementById("phoneNumber").value;

  // Replace this URL with your Google Form 'formResponse' URL
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

  // Creating a key-value mapping for Google Form entry fields
  const googleFormData = new URLSearchParams();

  // Replace 'entry.YOUR_FIELD_ID' with the respective Google Form field IDs
  googleFormData.append("entry.YOUR_FIELD_ID_FOR_PHONE_NUMBER", phoneNumber);

  // Sending the POST request
  fetch(googleFormUrl, {
    method: "POST",
    mode: "no-cors", // Necessary to prevent CORS issues
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: googleFormData.toString(),
  })
    .then((response) => {
      // Since 'no-cors' mode is used, you can't read the response status
      alert("Subscription successful!");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    });
}

// Note: Remember to replace 'YOUR_FORM_ID' and 'YOUR_FIELD_ID' placeholders with actual values.
  document.getElementById("toggle-menu").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.classList.contains("collapse")) {
      mobileMenu.classList.remove("collapse");
    } else {
      mobileMenu.classList.add("collapse");
    }
  });

// on nav click close the mobile menu
document.querySelectorAll(".nav-link").forEach((navLink) => {
  navLink.addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.add("collapse");
  });
});