function fun1() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === '' || password === '') {
    alert('Please enter both email and password.');
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  if (validateLogin(email, password)) {
    alert('Login successful!');
    window.location.href = "index.html";
  } else {
    alert('Invalid email or password. Please try again.');
  }
}

function validateLogin(email, password) {
  return true; 
}
