const content = document.querySelector('.content')
const openBtn = document.querySelector('.openBtn')
const closeBtn = document.querySelector('.closeBtn')
const wrap = document.querySelector('#wrap')
// content.style.backgroundColor='red'
/*
class binding 
    classList.add() ->class 붙이기
    classList.remove() ->class 삭제하기
    classList.toggle() ->class 스위치

*/



closeBtn.addEventListener('click', function () {
    // content.style.display = 'none'
    wrap.classList.add('close-modal')
    
})

openBtn.addEventListener('click', function () {
    // content.style.display = 'block'
    wrap.classList.remove('close-modal')

})