
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
    const line3 = document.querySelector('.line3');
    const line4 = document.querySelector('.line4');
    line3.addEventListener('click', () => {
      line3.style.backgroundColor = 'green';
      line4.classList.add('hidden');
      line3.innerHTML = 'step2';
      setTimeout(() => {
        window.location.href = 'information.html';
       }, 800);
    });
    line4.addEventListener('click', () => {
        line3.style.backgroundColor = 'green';
        line4.classList.add('hidden');
        line3.innerHTML = 'step2';
    });
}); 


