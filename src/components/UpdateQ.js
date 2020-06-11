import React from "react";
import firebase from "./firebase";


export const UpdateQ= ({test})=> {
  const [age, setName] = React.useState(test.age);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("quiz")
      .doc(test.id)
      .set({ ...test, age });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("quiz").doc(test.id).delete();
  };

  return (
    <>
      <input
        value={age}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
    </>
  );
};