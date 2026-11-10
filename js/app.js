const wrap = document.querySelector('#wrap')
const fixedTopBtn = document.querySelector('.fixedTop')

fixedTopBtn.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
})


window.addEventListener('scroll', function () {

    console.log(window.scrollY)
    if (window.scrollY > 100) {
        wrap.classList.add('scroll')
    } else {
        wrap.classList.remove('scroll')
    }

})