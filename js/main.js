document.querySelectorAll('a[href^="#"]').forEach(link=>link.addEventListener('click',e=>{const target=document.querySelector(link.getAttribute('href'));if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}}));
document.querySelectorAll('.request-form').forEach(form=>form.addEventListener('submit',e=>{
 e.preventDefault();
 if(!form.checkValidity()){form.reportValidity();return;}
 const feedback=form.querySelector('.form-feedback');
 feedback.textContent='Спасибо! Заявка заполнена. Для реального приёма заявок подключите отправку на сервер или CRM.';
 form.reset();
}));
document.querySelectorAll('input[type="tel"]').forEach(input=>input.addEventListener('input',()=>{
 input.value=input.value.replace(/[^\d+()\-\s]/g,'');
}));
