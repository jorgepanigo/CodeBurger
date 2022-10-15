 const form = document.getElementById("form");
 
 form.addEventListener("submit",validar);


 function validar(e){
    e.preventDefault();
    if (validarNombre()){
        alert("Tiene que escribir su nombre")
        form.to_name.focus()
        return 0
    }

    if (!validarEmail()){
        alert("Escriba correctamente el mail")
        form.client_mail.focus()
        return 0
    }

    enviarMail(e)
    console.log("Mail enviado")
    limpiarFormulario()
 }

 function validarNombre() {
    return form.to_name.value.length  == 0
}
 


function validarEmail() { 
    const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    console.log(regexMail.test(form.client_mail.value))
    return regexMail.test(form.client_mail.value)
}

 
 
function enviarMail(e){

    e.preventDefault();
    
    var formData = new FormData(form);

    formData.append('service_id', 'service_2ugr5e9');
    formData.append('template_id', 'template_mn8jyal');
    formData.append('user_id', 'ZjZ2ytwul3NqTvoVr');
    formData.append('from_name', 'CodeBurger');
    formData.append('mail_codeburger', 'jorgepanigo@gmail.com');
     
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', true);
    xhr.onload = function () {
        console.log("Mail enviado el cliente: "+this.responseText)
        if (this.responseText == "OK"){
            alert("Gracias! Hemos recibido tu comentario")
        }
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

function limpiarFormulario(){
    
    form.to_name.value = ""
    form.client_mail.value = ""
    form.message.value = ""
}
