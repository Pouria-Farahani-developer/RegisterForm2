document.getElementById('change').addEventListener('click', function () {
    this.parentElement.parentElement.style.transform = 'translatex(-100%)'
    this.parentElement.classList.add('hidden')
    document.getElementById('part-2').classList.remove('hidden');
    this.parentElement.parentElement.style.borderRadius = '10px 0 0 10px'
    document.querySelector('.first-part').classList.add('hidden');
    document.querySelector('.second-part').classList.remove('hidden');
})

document.getElementById('change-2').addEventListener('click',function(){
    this.parentElement.parentElement.style.transform= 'translatex(0)'
    this.parentElement.classList.add('hidden')
    document.getElementById('part-1').classList.remove('hidden');
    this.parentElement.parentElement.style.borderRadius = '0px 10px 10px 0px'
    document.querySelector('.first-part').classList.remove('hidden');
    document.querySelector('.second-part').classList.add('hidden');
})