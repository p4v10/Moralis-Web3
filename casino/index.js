Moralis.initialize("1Eg8n79tJ3VqunXsH9qfZGuGKyUC0Ow7eMeAGx5N");
Moralis.serverURL = "https://swpeaxjiq3fv.moralis.io:2053/server";

async function login(){
    try {
        user = await Moralis.Web3.authenticate();
        console.log(user);
        alert("User logged in");
        document.getElementById("login_button").style.display = "none";
        document.getElementById("game").style.display = "block";
    } catch (error) {
        console.log(error);
    }
}

async function flip(side){
    alert(side);
}

document.getElementById("login_button").onclick = login;
document.getElementById("heads_button").onclick = function(){flip("heads")};
document.getElementById("tails_button").onclick = function(){flip("tails")};