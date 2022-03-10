let cambiarSeccion = (element)=>{
  document.querySelector('.contacts').style.display = 'none'
  document.querySelector('.chats').style.display = 'none'

  document.querySelector(element).style.display = 'flex'
}

document.querySelector('.nb-options').onclick = event => {
  document.getElementById('op-chats').classList.remove('active')
  document.getElementById('op-contacts').classList.remove('active')

  document.getElementById(event.target.id).classList.add('active')
}

document.querySelector('.select-user').onclick = (e)=>{
  document.querySelector('.users-list').classList.toggle('d-flex')//d-flex from bootstraap
}