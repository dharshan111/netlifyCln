const hamburge_image = document.getElementById("hamberg-image");
const navbarLists=document.getElementById('navbar-lists');
const sign_in_button=document.getElementById('sign-button');
let itsOpen=false;

hamburge_image.addEventListener('click',()=>{
  if(!itsOpen){ 
  navbarLists.classList.add('navbar-lists-return');
  sign_in_button.classList.add('sign-return');
  // hamburge_image.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
  itsOpen=true;
  }
  else{
  navbarLists.classList.remove('navbar-lists-return');
  sign_in_button.classList.remove ('sign-return')
  //hamburge_image.innerHTML = '<i class="fa-solid fa-bars"></i>';
  itsOpen=false;
  }
})




