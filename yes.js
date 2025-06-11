function submitForm() {
    const firstName = document.getElementById("name1").value;
    const lastName = document.getElementById("name2").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    if (!firstName || !lastName || !email || !phone || !address) {
        alert("Please fill out all fields.");
        return;
    }

    const result = 
        "First Name: " + firstName + "\n" +
        "Last Name: " + lastName + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Address: " + address;

    document.getElementById("result").innerText = "Result:\n" + result;
}
