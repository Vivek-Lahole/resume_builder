import React from "react";
import {
  auth,
  googleAuthProvider,
  githubAuthProvider,
} from "../firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

const SignUpButton = ({ src, label, authProvider }) => {
  async function handleAuth() {
    switch (authProvider) {
      case "googleAuthProvider":
        try {
          await signInWithRedirect(auth, googleAuthProvider);
          try {
            getRedirectResult(auth)
              .then((result) => {
                const credential =
                  GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
              })
              .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                  GoogleAuthProvider.credentialFromError(error);
              });
          } catch (error) {
            // Handle errors during sign-in
            console.error("Error during sign-in:", error);
          }
        } catch (err) {
          console.error(err);
        }
        break;

      case "githubAuthProvider":
        try {
          await signInWithRedirect(auth, githubAuthProvider);
          try {
            getRedirectResult(auth)
              .then((result) => {
                const credential =
                  GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
              })
              .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                  GithubAuthProvider.credentialFromError(error);
              });
          } catch (error) {
            // Handle errors during sign-in
            console.error("Error during sign-in:", error);
          }
        } catch (err) {
          console.error(err);
        }
        break;

      default:
        console.log("default case triggered");
        try {
          await signInWithRedirect(auth, githubAuthProvider);
          try {
            getRedirectResult(auth)
              .then((result) => {
                const credential =
                  GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
              })
              .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                  GithubAuthProvider.credentialFromError(error);
              });
          } catch (error) {
            // Handle errors during sign-in
            console.error("Error during sign-in:", error);
          }
        } catch (err) {
          console.error(err);
        }
    }
  }

  return (
    <button
      class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center transition-all duration-150 ease-in-out
      justify-center focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5 active:scale-90"
      onClick={handleAuth}
    >
      <div class="bg-white p-1 rounded-full">
        <img class="w-4 h-auto" src={src} />
      </div>
      <span class="ml-4">{label}</span>
    </button>
  );
};

export default SignUpButton;
