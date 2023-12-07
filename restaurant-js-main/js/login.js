
function validateLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'admin' && password === '1234') {
    // If the username and password are correct, redirect to the admin page
    window.location.href = 'admin.html';
  } else if (username === '' || password === '') {
    alert('input is empty')
 
  } else{
       // If the username and password are incorrect, redirect to the home page
       window.location.href = 'index.html';
  }
}
