import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "../firebase-config";
import { Todo } from "../types";

export const useTodoCollection = () => {
  const collectionRef = collection(db, "todos");

  const create = async (doc: Todo) => {
    await addDoc(collectionRef, doc);
  };

  const getById = async (id: string) => {
    const docRef = doc(db, "todos", id);
    const docSnap = await getDoc(docRef);

    return docSnap.data();
  };

  const getAll = async () => {
    const data = await getDocs(collectionRef);

    return data.docs.map((doc) => ({ ...(doc.data() as Todo), id: doc.id }));
  };

  const update = async (id: string, newFields: Todo) => {
    const docToUpdate = doc(db, "todos", id);
    await updateDoc(docToUpdate, newFields);
  };

  const remove = async (id: string) => {
    const docToDelete = doc(db, "todos", id);
    await deleteDoc(docToDelete);
  };

  return {
    create,
    getById,
    getAll,
    update,
    remove,
  };
};
