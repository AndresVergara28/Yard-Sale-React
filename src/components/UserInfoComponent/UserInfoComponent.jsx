import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";

const UserInfoComponent = () => {
  const { usuario, setUsuario } = useState(null);
  const [name, setName] = useState("Esperemos");

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      const emailVerified = user.emailVerified;
      setName(displayName);

      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      const uid = user.uid;
    }
  });

  return <div>aqui vamos a poner la info del usuario {name} </div>;
};

export { UserInfoComponent };
