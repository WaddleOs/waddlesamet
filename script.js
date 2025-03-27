document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
        document.getElementById('loginScreen').classList.remove('hidden');
    }, 6000);
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '130005') {
        document.getElementById('loginScreen').classList.add('hidden');
        document.getElementById('controlPanel').classList.remove('hidden');
    } else {
        alert('Hatalı kullanıcı adı veya şifre!');
    }
});

async function handleLock() {
    try {
        await fetch('http://192.168.1.118:5000/1');
        alert('Ekran kilitleme komutu gönderildi');
    } catch (error) {
        alert('Bağlantı hatası!');
    }
}

async function handleUnlock() {
    try {
        await fetch('http://192.168.1.118:5000/2');
        alert('Ekran açma komutu gönderildi');
    } catch (error) {
        alert('Bağlantı hatası!');
    }
}
