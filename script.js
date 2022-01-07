window.onload = function() {
    document.querySelector('#b1').addEventListener("click", Button1);
    document.querySelector('#b2').addEventListener("click", Button2);
    document.querySelector('#hover').addEventListener('mouseover', onHover);
};
// Question 1
function Button1() {
    let clickB1 = document.getElementById("container");
    let b1Response = document.createElement("section");
    b1Response.innerText = "I'm right";
    clickB1.appendChild(b1Response);
}

function Button2() {
    let clickB2 = document.getElementById("container");
    let b2Response = document.createElement("section");
    b2Response.innerHTML = "No, I'm right!";
    clickB2.appendChild(b2Response);
}

// Question 2
function onHover() {
    let notifyUser = document.createElement("section");
    notifyUser.innerHTML = alert("Hey, I told you not to hover over me!");
}


// Question 3/4
function submitButton(event) {
    event.preventDefault();
    let a = document.getElementById("q34");
    let username = document.getElementById("i1").value;
    let password = document.getElementById("i2").value;
    let a1 = document.createElement("h1");
    a.appendChild(a1);

    for (var i = 0; i <= username.length; i++) {
            if (parseFloat(username.length) && parseInt(password) === 12345678){
            a1.innerHTML = "Sucessfully Logged In.";
        } else if(username.length == ""){
            a1.innerHTML = "Please Enter Username.";
        }else {
            a1.innerHTML = "Password Incorrect.";
        }
    }
}

// Bonus
function calculateVolume(){
    let radius = document.getElementById("radius").value;
    if(radius >= 0){
        let volume = (4*Math.PI*radius*radius*radius)/3;
        volume = volume.toFixed(5);
        document.getElementById("result").innerHTML = volume;
    }
    else{
        alert("Do Not Enter A Negative Value.");
    }
    return false;
}