const loading = document.querySelector('#loading');
const btnLoaded = document.querySelector('#btn-loaded');

btnLoaded.addEventListener('click', loaded);
console.log("clicked")

function loaded(){
    loading.style.display = 'none';
}