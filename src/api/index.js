import { auth, db } from "../firebase.config";
import { doc, onSnapshot, setDoc } from "firebase/firestore";

export const getUserDetail = () => {
  return new Promise((resolve, reject) => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        const userData = user.providerData[0];
        console.log(user.providerData[0]);
        console.log("auth state changed");
        const unsubscribeSnapshot = onSnapshot(
          doc(db, "users", userData?.uid),
          (docData) => {
            if (docData.exists()) {
              resolve(docData.data());
            } else {
              setDoc(doc(db, "users", userData?.uid), userData).then((res) => {
                resolve(userData);
              });
            }
          }
        );
        return unsubscribeSnapshot;
      } else {
        reject(new Error("User not Authenticated"));
      }
      unsubscribeAuth();
    });
  });
};
