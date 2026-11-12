const tabs=document.querySelectorAll('.guide-tabs li ')
const contents= document.querySelectorAll('.guide-content li')


init(0)

function init(num){
    tabs[num].classList.add('on')
    contents[num].classList.add('on')
}

function reset(){
    for(let i=0 ;i<tabs.length;i++){
        
        tabs[i].classList.remove('on')
        contents[i].classList.remove('on')
    }
}


tabs.forEach(function(tab,i){
    tab.addEventListener('click',function(){
        console.log(i)
        reset()
        init(i)
    })

})