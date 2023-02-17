
function valid() {
    const password = document.getElementById("password").value
    
    const cnfrmPassword = document.getElementById("confirm-password").value
    
    console.log(password,cnfrmPassword);


    const message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Password match";
            message.style.backgroundColor = "#3ae374";
        } else {
            message.textContent ="Password don't match";
            message.style.backgroundColor = "#ff4d4d";
        }
    } else {
        alert("Password can't be empty!");
        message.textContent = "";
    }
}