import React, { useState } from "react";

const RegisterFormComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(firstName, lastName, email, password);
  return (
    <div className="modal-login-component">
      <form action="">
        <label for="email" className="input-label">
          <span>Name</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Primer nombre"
            autoComplete="name"
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </label>
        <label for="lastName" className="input-label">
          <span>Last name</span>
          <input
            type="lastName"
            name="lastName"
            id="lastName"
            placeholder="Segundo Nombre"
            autoComplete="password"
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </label>
        <label for="email" className="input-label">
          <span>Email Address</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="tucorreo@electronico.com"
            autoComplete="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label for="password" className="input-label">
          <span>Last name</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="*******"
            autoComplete="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <input
          type="submit"
          value="REGISTRAR"
          className="submit-input"
          onClick={(e) => {
            e.preventDefault();
          }}
        />
      </form>
    </div>
  );
};

export { RegisterFormComponent };
