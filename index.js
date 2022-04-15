
const navbar = document.querySelector('.navbar-links');
const btn = document.querySelector('.toggle-navbar');

btn.onclick = () => {
    if (navbar.style.display === 'flex'){
        navbar.style.display = 'none';
    }
    else{
        navbar.style.display = 'flex';
    }
}