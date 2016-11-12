var username = document.getElementById('username'),
    password = document.getElementById('password'),
    namae = document.getElementById('namae'),
    lastname = document.getElementById('lastname'),
    email = document.getElementById('email'),
    save = document.getElementById('save'),
    list = document.getElementById('list'),
    registro,
    userData;

function fetchRegisters() {
    let XHR = new XMLHttpRequest();
    XHR.open('get', 'http://192.168.0.111:8080/paydaii/app/api/public/users', 'true');
    XHR.onload = fetchRegistersSuccessful;
    XHR.send();
}

function saveUser(){
    let XHR = new XMLHttpRequest();
    XHR.open('post', 'http://192.168.0.111:8080/paydaii/app/api/public/user', 'true');
    XHR.onload = saveUserSuccess;
    userData = {
        username: username.value,
        password: password.value,
        name: namae.value,
        lastname: lastname.value,
        email: email.value,
        birthday: birthday.value
    };
    XHR.setRequestHeader('Content-Type', 'application/json');
    XHR.send(JSON.stringify(userData));
    console.log(userData);
}

function fetchRegistersSuccessful(response) {
    console.log(response.target);
    registro = JSON.parse(response.target.response);
    console.log(registro);
    render(registro.users);
}

function saveUserSuccess(r){
    r = r.target;
    if (r.status === 200){
        Materialize.toast('I see you... ;)', 3000);
        render(r.users);
    } else {
        Materialize.toast('Oops!', 3000);
    }

}

function render(registro) {
    registro.forEach(function(user) {
        let p = document.createElement('p')
        p.textContent = `Username ${user.us_user}`;
        document.body.appendChild(p);
    })
}
fetchRegisters();
