
  function logout() {
    // Clear login session info (if using sessionStorage)
    sessionStorage.clear(); // or localStorage.clear();
    
    // Redirect to login page
    window.location.href = "login.html";
  }

