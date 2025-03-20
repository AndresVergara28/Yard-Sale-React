import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const useUserActions = (setUser) => {
  const MySwal = withReactContent(Swal);
  const auth = getAuth();

  function loginUser(e, username, password, setLoginIn) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        setUser({
          email: userCredential.user.email,
          name: userCredential.user.displayName,
        });

        MySwal.fire({
          position: "center",
          icon: "success",
          title: "You are logged in",
          showConfirmButton: false,
          timer: 2000,
        }).then(() => {
          setLoginIn(true);
          console.log("logged in");
        });

        onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            // ...
          } else {
            // User is signed out
            // ...
          }
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        MySwal.fire({
          position: "top-end",
          icon: "error",
          title: "wrong password",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }

  return { loginUser };
};
