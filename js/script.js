let signUpBtn = document.getElementById("signUpBtn");
let signInBtn = document.getElementById("signInBtn");
let nameFiled = document.getElementById("nameFiled");
let title = document.getElementById("title");

signInBtn.onclick = function(){
    nameFiled.style.maxHeight = '0';
    title.innerHTML = "Sign In";
    signUpBtn.classList.add("disable");
    signInBtn.classList.remove("disable");
}

signUpBtn.onclick = function(){
    nameFiled.style.maxHeight = '60px';
    title.innerHTML = "Sign Up";
    signInBtn.classList.add("disable");
    signUpBtn.classList.remove("disable");
}

