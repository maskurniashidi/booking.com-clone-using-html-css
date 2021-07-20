const close = document.querySelector('.third-info a.close');
const thirdInfo = document.querySelector('.third-info');

close.addEventListener('click', function(){
    thirdInfo.style.display = 'none';
});