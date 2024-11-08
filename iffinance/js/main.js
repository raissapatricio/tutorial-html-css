function openModal(){
    const modal = document.querySelector('.modal')
    console.log(modal)
    modal.style.display = 'flex'
}

function closeModal(event){
    const modal = document.querySelector('.modal')
    
    if(event === undefined)
        return modal.style.display = 'none'
    
    if(event.target.className === 'modal')
        return modal.style.display = 'none'
}