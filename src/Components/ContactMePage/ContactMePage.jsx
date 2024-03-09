import React, { useState } from "react";
import "./ContactMePage.css";
import { sendContactData } from "../../services/firestore.js";

function ContactMePage() {
  function sendInfo(contactInfoObject) {
    sendContactData(contactInfoObject).then((res) => {
      console.log(res);
    });
  }
  //state de los datos del usuario.
  const [dataForm, setDataForm] = useState({
    email: "",
    nombre: "",
    razon: ""
  });
  function inputChangeHander(event) {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    const newDataForm = { ...dataForm };
    newDataForm[inputName] = inputValue;
    setDataForm(newDataForm);
  }

  function sendContactToFirestore(event) {
    event.preventDefault();
    sendInfo(dataForm);
  }

  return (
    <div id="ContactMeContainer">
      <div id="ContactMeIntro">
        <h1 id="ContactMeIntroH1">Contact</h1>
        <div id="ContactMeIntroSpacer"></div>
        <p id="ContactMeIntroDesc">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
      </div>
      <div id="ContactMeForm">
        <form onSubmit={sendContactToFirestore} id="ContactFormContainer">
          <div className="formItem">
            <label htmlFor="name" className="labelForm texto">
              Name
            </label>
            <input
              onChange={inputChangeHander}
              value={dataForm.name}
              name="nombre"
              type="text"
              placeholder="Enter Your Name"
              required
              className="inputForm"
              id="inputName"
            />
          </div>
          <div className="formItem">
            <label htmlFor="mail" className="labelForm texto">
              Email
            </label>
            <input
              onChange={inputChangeHander}
              value={dataForm.email}
              name="email"
              type="mail"
              placeholder="Enter Your Email"
              required
              className="inputForm"
              id="inputMail"
            />
          </div>
          <div className="formItem">
            <label htmlFor="phone" className="labelForm texto">
            &nbsp;&nbsp;&nbsp;&nbsp;Message
            </label>
            <textarea
              onChange={inputChangeHander}
              value={dataForm.razon}
              id="inputPhone"
              className="inputFormText"
              name="razon"
              type="razon"
              placeholder="Enter Your Message"
              required
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button id="buttonForm">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactMePage;
