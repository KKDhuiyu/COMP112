function validate() {
    var isValid = true;
    
    var fName = document.getElementById('firstname');
    
    var sName = document.getElementById('surname');
    
    var fNameErr = document.getElementById('firstnameError');
    fNameErr.innerHTML = "";
   
    var sNameErr = document.getElementById('surnameError');
    sNameErr.innerHTML = "";
   
    var phone = document.getElementById('phone');
    phoneErr.innerHTML = "";
    var phoneNum = /^[0-9 -]+$/;
    
    if (fName.value == "" || fName.value == " ") {
        isValid = false;
        fNameErr.innerHTML = "You must include a first name.";
    }
    if (sName.value == "" || sName.value == " ") {
        isValid = false;
        sNameErr.innerHTML = "You must include a last name.";
    }
    if (!phone.value.match(phoneNum) || phone.value == "") {
        isValid = false;
        phoneErr.innerHTML = "You must entry your phone number OR your phone number's formate is not appropriate.";
    }
    
    return isValid;
}