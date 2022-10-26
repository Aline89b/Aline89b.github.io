
      document
        .getElementById("contact-form").addEventListener("submit", function (event) {
          event.preventDefault();


          const serviceID = "service_btr3hx4";
          const templateID = "template_qmr5fb4";

        /*  let ourFormData = new FormData(event.target)
          let userFirstName = ourFormData.get("first-name")
          let userSecondName = ourFormData.get("second-name")
          let userEmail = ourFormData.get("email")
          let userMessage = ourFormData.get("message")*/


          // send the email here trough emailjs
          emailjs.sendForm(serviceID, templateID, this).then(
            (response) => {
              console.log("yess!Your message has been sent. Thank you for keeping in touch, I'll get back soon!", response.status, response.text);
              openModal();
              },
            (error) => {
              console.log("FAILED...", error);
              alert("Ops...something went wrong! try again,please or send a whatsapp!", error);
            }
          );
        });
        //modal for mail sent
        const modal = document.createElement("div");
        const para = document.createElement("p");
        const closeBtn = document.createElement("button");


        function openModal() {
        document.body.appendChild(modal);
        modal.setAttribute("class","modal");
        modal.appendChild(para);
        para.textContent= "Yess!Your message has been sent. Thank you for keeping in touch, I'll get back soon!";
        para.style.cssText = "fontSize: 18px; color: black; padding: 10px; text-align:center;"
        closeBtn.setAttribute("class","close-btn");
        modal.appendChild(closeBtn);
        closeBtn.textContent = "x";
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
        });
      }
