
console.log("enviando mail");

    
var formData = new FormData();

formData.append('service_id', 'service_2ugr5e9');
formData.append('template_id', 'template_mn8jyal');
formData.append('user_id', 'ZjZ2ytwul3NqTvoVr');
formData.append('to_name', 'to name Jorge');
formData.append('from_name', 'codeburger');
formData.append('reply_to', 'jorgepanigo@gmail.com');



var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.emailjs.com/api/v1.0/email/send-form', true);
xhr.onload = function () {
    // do something to response
    console.log(this.responseText);
};

xhr.send(formData);