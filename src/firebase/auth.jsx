import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const docreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const dosignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const dosignInWithGoogle = async () => {
  const Provider = new GoogleAuthProvider();
  const result = await Provider.signInWithGooglePopup(auth, provider);
  //result.user
  return result;
};
export const doSignOut = () => {
  return auth.signOut();
};

// export const doPasswordReset = () => {
//   return sendPasswordResetEmail(auth, email);
// };
// export const doPsswordChange = (password) => {
//   return updatePassword(auth.currentUser, password);
// };
// export const doSendEmailVerification = () => {
//   return sendEmailVerification(auth.currentUser, {
//     url: `${window.location.origin}/home`,
//   });
// };
