
function func() {
    let name = document.getElementById("FullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phoneNumber").value;
    if (name === "" || email === "" || password === "" || phone === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (!/^\d{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    window.location.href = 'information.html';
 
   
}

function func1(){
    let option1 = document.getElementById("option1").value; 
    let option2 = document.getElementById("option2").value; 
    let option3 = document.getElementById("option3").value; 
    if (option1==''||option2==''||option3=='') {
        alert("Please fill in all fields.");
        return;
    }
    alert("Registration Successful!");
    window.location.assign("index.html");
}

document.addEventListener('DOMContentLoaded', () => {
    const line1 = document.querySelector('.line1');
    const line2 = document.querySelector('.line2');
    const Register_btn = document.querySelector('.Register_btn');
    
    line1.addEventListener('click', () => {
      line1.style.backgroundColor = 'green';
      line2.classList.add('hidden');
      line1.innerHTML = 'step2';
      setTimeout(() => {
        window.location.href = 'information.html';
       }, 800);
    });
    line2.addEventListener('click', () => {
        line1.style.backgroundColor = 'green';
        line2.classList.add('hidden');
        line1.innerHTML = 'step2';
        setTimeout(() => {
          window.location.href = 'information.html';
         }, 800);
    });
  
      Register_btn.addEventListener('click', () => {
      line1.style.backgroundColor = 'green';
      line2.classList.add('hidden');
      line1.innerHTML = 'step2';
      setTimeout(() => {
        window.location.href = 'information.html';
       }, 800);
    });
}); 


