
      document
        .getElementById("contact-form").addEventListener("submit", function (event) {
          event.preventDefault();


          const serviceID = "service_btr3hx4";
          const templateID = "template_qmr5fb4";

          // send the email here trough emailjs
          emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
              console.log("yess!Your message has been sent. Thank you for keeping in touch, I'll get back soon!", response.status, response.text);
              alert("yess!Your message has been sent. Thank you for keeping in touch, I'll get back soon!");
            },
            (error) => {
              console.log("FAILED...", error);
              alert("Ops...something went wrong! try again,please or send a whatsapp!", error);
            }
          );
        });
