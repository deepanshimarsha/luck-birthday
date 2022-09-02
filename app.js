var dob = document.querySelector("#input-date")
var luckyNumber = document.querySelector("#input-number")
var btnCheck = document.querySelector("#btn-check")
var message = document.querySelector("#output")




function clickHandler(){
    var dobVal = dob.value
    var luckyNumberVal = luckyNumber.value
    if (dobVal.length === 0 || luckyNumberVal.length === 0 ){
        message.innerHTML = "All fields are required"
    }
    else{
        var sum = calculateSum(dobVal)
        if (sum % Number(luckyNumberVal) === 0){
            message.innerHTML = luckyNumberVal + " is a lucky number!🥳"
        }
        else{
            message.innerHTML = luckyNumberVal + " is not a lucky number!😕"
    }
    }
    
}

function calculateSum(date){
    date = date.replaceAll("-", "");
    var sum = 0;
    for(var idx = 0; idx < dob.length; idx++){
        sum = sum + Number(dob.charAt(idx));
    }

    return sum

}


btnCheck.addEventListener("click", clickHandler)
