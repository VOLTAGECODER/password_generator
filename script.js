const lengthp = document.querySelector('#lengthnumber');
const upper = document.querySelector('#uppercase');
const lower = document.querySelector('#lowercase');
const symbols = document.querySelector('#symbols');
const numbers = document.querySelector('#numbers');
const passinp = document.querySelector('#pass-input');
const copy = document.querySelector('#copy');
const generate = document.querySelector('#generate');
const passInput = document.getElementById('pass-input');
const background = document.getElementById('background');

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';

let password = '';

generate.addEventListener('click', () => {
    let str = '';
    password = '';

    if (upper.checked) {
        str += uppercasestr;
    }
    if (lower.checked) {
        str += lowercasestr;
    }
    if (symbols.checked) {
        str += symbolstr;
    }
    if (numbers.checked) {
        str += numberstr;
    }

    console.log(str, "str");

    for (let i = 0; i < lengthp.value; i++) {
        let index = Math.floor(Math.random() * str.length);
        password += str[index];
    }

    console.log(password, "password");
    passinp.value = password;
    updateBlur();
});

lengthp.addEventListener('input', () => {
    updateBlur();
});

copy.addEventListener('click', () => {
    if (passinp.value === '') {
        alert('Please Generate a Password First');
    } else {
        const newele = document.createElement('textarea');
        newele.value = passinp.value;
        document.body.appendChild(newele);
        newele.select();
        document.execCommand('copy');
        alert('Password Copied to Clipboard');
        newele.remove();
    }
});

function updateBlur() {
    const passwordLength = password.length;
    const darkness = (10 - passwordLength) * 2;
    background.style.filter = `blur(${darkness}px)`;
}

passInput.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;

    const blurValue = Math.max(0, 20 - length * 2);
    background.style.filter = `blur(${blurValue}px)`;
});
