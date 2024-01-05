import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.js";

const Sigin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Hello From Sign Page </h1>
      <button onClick={logGoogleUser}> Click to Signin with Google </button>
    </div>
  );
};

export default Sigin;
