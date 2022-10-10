 const form = document.getElementById("form");
 
 form.addEventListener("submit", function enviarMail(e){
    console.log("HOLAAAA")
    e.preventDefault();

    var formData = new FormData(form);

    formData.append('service_id', 'service_2ugr5e9');
    formData.append('template_id', 'template_mn8jyal');
    formData.append('user_id', 'ZjZ2ytwul3NqTvoVr');
    // formData.append('to_name', 'Lucas');
    // formData.append('from_name', 'codeburger');
    // formData.append('reply_to', 'jorgepanigo@gmail.com');
    // formData.append('client_mail', 'lucaskeklikian@gmail.com');
    
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', true);
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
    };
    
    xhr.send(formData);
})