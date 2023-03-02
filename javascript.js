const panels=document.querySelectorAll('.panel');

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        removeAcitvePanels();
        panel.classList.add('active');
    })
})

function removeAcitvePanels(){
 panels.forEach(panel =>{
    panel.classList.remove('active');
 })
}