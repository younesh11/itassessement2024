// Simple form validation using getElementById
function validateForm() {
    // Retrieve each field's value
    var email = document.getElementById("email").value.trim();
    var name = document.getElementById("name").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var category = document.getElementById("category").value.trim();
    var description = document.getElementById("description").value.trim();
  
    // Check if any required field is empty
    if (email === "" || name === "" || subject === "" || category === "" || description === "") {
      alert("Please fill in all required fields.");
    //   return false; // Prevent form submission
    } else {
      alert("Submission Successful!");
    //   return true;  // Allow form submission
    }
  }
  