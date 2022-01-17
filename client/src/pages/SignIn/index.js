import { firebaseApp } from "services/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import "./style.css";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const name = result.user.displayName;
    const profilePic = result.user.photoURL;

    localStorage.setItem("name", name);
    localStorage.setItem("profilePic", profilePic);
  })
  .catch((error) => {
    console.log(error);
  });
}

export default function SignIn() {
  return (
    <div className="sign-content">
      <div className='sign-in'>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        <h1>ATyGG</h1>
      </div>
    </div>
  );
}
