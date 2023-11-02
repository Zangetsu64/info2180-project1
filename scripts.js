/* Add your JavaScript to this file */

window.onload = function() {
    const format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const email = document.getElementById("email");
    const msg = document.querySelector(".message");
    const submit = document.querySelector("button");
  
    submit.addEventListener("click", (e) => {
      e.preventDefault();
  
      if (email.value === "" || !format.test(email.value)) {
        msg.textContent = "Please enter a valid email address.";
        email.value = "";
      } else {
        msg.textContent = `Thank you! Your email address ${email.value} has been added to our mailing list.`;
      }
    });
  };
  