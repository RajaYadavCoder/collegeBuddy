function sendOTP() {
    const email = document.getElementById('resetEmail').value;

    if (email) {
        alert('OTP sent to ' + email);
        document.getElementById('otpForm').style.display = 'block';
        document.getElementById('resetForm').style.display = 'none';
    } else {
        alert('Please enter your email.');
    }
}

function resetPassword() {
    const otp = document.getElementById( 'otp').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!otp || !newPassword || !confirmPassword) {
        alert('Please enter OTP and both password fields.');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }
    alert('Password has been reset.');
    window.location.assign("/login.html")

}