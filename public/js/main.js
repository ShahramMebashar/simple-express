(function() {
 const ul = document.querySelector('ul');
 const li = ul.querySelectorAll('li');
 li.addEventListener('click', e => {
    if(e.target.matches('.active')) {
        e.target.classList.remove('active');
    } else {
        e.target.classList.add('active');
    }
 });

})();