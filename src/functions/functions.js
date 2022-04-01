import { setDoc, doc, db, getDoc } from "../firebase/firebaseConfig";

function computerGiveId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

async function saveDocumentInFirestore(userId = "0", userDetails) {
  let userObject = {
    name: userDetails.name,
  };
  let addRef = doc(db, "user", userId);
  try {
    let res = await setDoc(addRef, userObject);
    return res;
  } catch (error) {
    console.log(error.message);
  }
}
async function getDocumentFromFirestore(userId = "0") {
  let getRef = doc(db, "user", userId);
  try {
    let res = await getDoc(getRef);
    return res;
  } catch (error) {
    console.log(error.message);
  }
}

export { computerGiveId, saveDocumentInFirestore, getDocumentFromFirestore };
