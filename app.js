function validation(){
    let form=document.getElementById('form');
     let email=document.getElementById('email').value;
      let text=document.getElementById('text');
    let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(email.match(pattern)){
      form.classList.add('valid');
      form.classList.remove('invalid');
      text.innerHTML="Email is valid";
      
    }else{
      form.classList.remove('valid');
      form.classList.add('invalid');
      text.innerHTML='Please Enter Correct Email';
    }
    if(email==''){
      form.classList.remove('valid');
      form.classList.remove('invalid');
      text.innerHTML="";
    }
  }