window.onload = function () {
  const rememberedUser = localStorage.getItem("rememberedUser");
  const savedUser = localStorage.getItem("savedUser");

  if (rememberedUser && savedUser) {
    const saved = JSON.parse(savedUser);
    if (rememberedUser === saved.username) {
      showMainContent();
    }
  }
};

function handleLogin() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();
  const remember = document.getElementById('rememberMe').checked;
  const savedUser = JSON.parse(localStorage.getItem("savedUser"));

  if (!user || !pass) {
    alert("Please enter both username and password.");
    return;
  }

  if (!savedUser || savedUser.username !== user || savedUser.password !== pass) {
    alert("Invalid username or password.");
    return;
  }

  if (remember) {
    localStorage.setItem("rememberedUser", user);
  }

  showMainContent();
}

function handleRegister() {
  const user = document.getElementById('username').value.trim();
  const pass = document.getElementById('password').value.trim();

  if (!user || !pass) {
    alert("Please enter both a username and password to register.");
    return;
  }

  const existing = localStorage.getItem("savedUser");
  if (existing) {
    alert("An account already exists. You can only register one demo account.");
    return;
  }

  const userData = {
    username: user,
    password: pass
  };

  localStorage.setItem("savedUser", JSON.stringify(userData));
  alert("Account created. You can now log in.");
}

function handleLogout() {
  localStorage.removeItem("rememberedUser");
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('login').style.display = 'block';
}

function showMainContent() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}

function showSection(id) {
  ['rat', 'iplogger', 'payment'].forEach(section => {
    document.getElementById(section).style.display = (section === id) ? 'block' : 'none';
  });
}
