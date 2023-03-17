function getaction() {
    var p = document.getElementById("number").value;
    var pin = 1234;
    if (p == pin) {
        document.getElementById("pin").innerHTML = "Please choose transcation";
        document.getElementById("option").style.display = "block";
    }
    else {
        document.getElementById("pin").innerHTML = "**INVALID PIN**"
    }
}

var amt = 500000;
function myfunction(val) {
    
    switch (val) {
        case '1':
            document.getElementById("balance").innerHTML = "Your amount is: " + amt;
            document.getElementById("display1").style.display = 'none';
            document.getElementById("display2").style.display = 'none';
            break;
        case '2':
            document.getElementById("display1").style.display = 'block';
            document.getElementById("display2").style.display = 'none';
            break;
        case '3':
            document.getElementById("display1").style.display = 'none';
            document.getElementById("display2").style.display = 'block';
            break;
    }
}

function getamount() {
    
    var a = parseInt(document.getElementById("amount1").value);
    document.getElementById("display1").innerHTML = "Your deposit amount : " + a;
    document.getElementById("remaining_amount1").innerHTML = "Your balance amount is: " + (amt += a);
}

function getamount1() {
 
    var x=parseInt(document.getElementById("amount2").value);
    if(x<=amt) {
        document.getElementById("display2").innerHTML = "Please take your amount : " + x;
        document.getElementById("remaining_amount2").innerHTML = "Your balance amount is: " + (amt-=x);
    }
    else {
        document.getElementById('display2').innerHTML = "Invalid cash";
    }
}