// $(function() {

//   $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//     preventSubmit: true,
//     submitError: function($form, event, errors) {
//       // additional error messages or events
//     },
//     submitSuccess: function($form, event) {
//       event.preventDefault(); // prevent default submit behaviour
//       // get values from FORM
//       var name = $("input#name").val();
//       var email = $("input#email").val();
//       var phone = $("input#phone").val();
//       var message = $("textarea#message").val();
//       var firstName = name; // For Success/Failure Message
//       // Check for white space in name for Success/Fail message
//       if (firstName.indexOf(' ') >= 0) {
//         firstName = name.split(' ').slice(0, -1).join(' ');
//       }
//       $this = $("#sendMessageButton");
//       $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
//       $.ajax({
//         url: "././mail/contact_me.php",
//         type: "POST",
//         data: {
//           name: name,
//           phone: phone,
//           email: email,
//           message: message
//         },
//         cache: false,
//         success: function() {
//           // Success message
//           $('#success').html("<div class='alert alert-success'>");
//           $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-success')
//             .append("<strong>Your message has been sent. </strong>");
//           $('#success > .alert-success')
//             .append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },
//         error: function() {
//           // Fail message
//           $('#success').html("<div class='alert alert-danger'>");
//           $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//             .append("</button>");
//           $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
//           $('#success > .alert-danger').append('</div>');
//           //clear all fields
//           $('#contactForm').trigger("reset");
//         },
//         complete: function() {
//           setTimeout(function() {
//             $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
//           }, 1000);
//         }
//       });
//     },
//     filter: function() {
//       return $(this).is(":visible");
//     },
//   });

//   $("a[data-toggle=\"tab\"]").click(function(e) {
//     e.preventDefault();
//     $(this).tab("show");
//   });
// });

// /*When clicking on Full hide fail/success boxes */
// $('#name').focus(function() {
//   $('#success').html('');
// });

// function validateAndSubmit() {
//     var emailInput = document.getElementById("email");
//     var nameInput = document.getElementById("name");
//     var phoneInput = document.getElementById("phone");
//     var messageInput = document.getElementById("message");// Add this line

//     var emailError = document.getElementById("email-error");
//     var phoneError = document.getElementById("phone-error");
//     var nameError = document.getElementById("name-error");
//     var messageError = document.getElementById("message-error");// Add this line

//     var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
//     var isValidPhone = /^\d{10}$/.test(phoneInput.value);
//     var isValidName = /^[a-zA-Z\s]{3,}$/.test(nameInput.value);
//     var isValidMessage = messageInput.value.trim() !== ""; // Add this line


//     if (!isValidEmail) {
//         emailError.style.display = "block";
//     } else {
//         emailError.style.display = "none";
//     }

//     if (!isValidPhone) {
//         phoneError.style.display = "block";
//     } else {
//         phoneError.style.display = "none";
//     }

//     if (!isValidName) {
//         nameError.style.display = "block";
//     } else {
//         nameError.style.display = "none";
//     }
//     if (!isValidMessage) {
//         messageError.style.display = "block";
//     } else {
//         messageError.style.display = "none";
//     }


//     if (isValidEmail && isValidPhone && isValidName && isValidMessage) {
//         // Submit the form using AJAX
//         $.ajax({
//             url: "https://script.google.com/macros/s/AKfycbyhHelt6euB6s45MOwyM6UArDzLL_rib4iquWgsWd-K3xnqs9aH8suw1Z1ltx9xwqvM_Q/exec",
//             data: $("#submit-form").serialize(),
//             method: "post",
//             success: function (response) {
//                 alert("Form submitted successfully");
//                 window.location.reload();
//             },
//             error: function (err) {
//                 alert("Something went wrong");
//             }
//         });
//     }
// }
