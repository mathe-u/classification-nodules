window.onload = function() {
    var welcomeMessage = document.getElementById('welcomeMessage')
    welcomeMessage.style.opacity = '1' 

    setTimeout(function() {
      welcomeMessage.style.opacity = '0'
      setTimeout(function() {
        window.location.href = 'login.html' 
      }, 2600) 
    }, 5000) 
  };