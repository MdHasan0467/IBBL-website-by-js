    document.getElementById('logInBtn').addEventListener('click', function(){
      const emailField = document.getElementById('user-email');
      const email = emailField.value;
    
      const passwordField = document.getElementById('user-password');
      const password = passwordField.value;


      // const checkBoxField = document.getElementById('checkBox');
      // const checkBox = checkBoxField.value;


      if (email === 'hasan@gmail.com') {
        if (password === 'secret') {
            
            window.location.href = 'home.html';
          }
        
        else {
          alert('Please enter valid user password');
        }
      }
      else {
        alert('Please enter a valid user email address');
      }
        
    })



