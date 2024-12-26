// Register function
document.getElementById('register-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://127.0.0.1:8000/authentication/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            first_name,
            last_name,
            email,
            password,
        }),
    });

    const data = await response.json();
    console.log(data);

    if (response.status === 201) {
        alert('Registration successful');
    } else {
        alert('Registration failed');
    }
});

// Login function
document.getElementById('login-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://127.0.0.1:8000/authentication/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
        localStorage.setItem('access_token', data.access);
        alert('Login successful');
    } else {
        alert('Login failed');
    }
});
