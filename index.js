function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
