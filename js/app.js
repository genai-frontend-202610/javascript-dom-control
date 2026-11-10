const wrap = document.querySelector('#wrap')
const toggleBtn = document.querySelector('.toggleBtn')

toggleBtn.addEventListener('click',function(){
    
    wrap.classList.toggle('open-modal')
})