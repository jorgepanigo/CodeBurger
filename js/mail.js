 const form = document.getElementById("form");
 
 form.addEventListener("submit",enviarMail);
 
 function enviarMail(e){

    e.preventDefault();
    
    var formData = new FormData(form);

    formData.append('service_id', 'service_2ugr5e9');
    formData.append('template_id', 'template_mn8jyal');
    formData.append('user_id', 'ZjZ2ytwul3NqTvoVr');
    formData.append('from_name', 'CodeBurger');
    formData.append('mail_codeburger', 'jorgepanigo@gmail.com');
    //formData.append('reply_to', 'jorgepanigo@gmail.com');
    // formData.append('client_mail', 'lucaskeklikian@gmail.com');
     
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', true);
    xhr.onload = function () {
        console.log("Mail enviado el cliente: "+this.responseText)
    };
    
    xhr.send(formData);

    formData.set('template_id', 'template_1huy7ko');

    var xhr1 = new XMLHttpRequest();
    xhr1.open('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', true);
    xhr1.onload = function () {
        console.log("Mail enviado a CodeBurger: "+this.responseText)
    };
    
    xhr1.send(formData);
}