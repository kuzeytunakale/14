document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'dogruKullanici' && password === 'dogruSifre') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('welcome').style.display = 'block';
    } else {
        alert('Yanlış kullanıcı adı veya şifre!');
    }
});
