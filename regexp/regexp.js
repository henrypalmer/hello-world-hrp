function TestReg() {
    
    var strToTest = document.getElementById("strToVerify").value;

    var regInput = document.getElementById("regExpPattern").value;
    var flags = document.getElementById("flagField").value;
    var regPattern = new RegExp(regInput, flags);

    document.getElementById("regOutput").value = regPattern.test(strToTest);

}