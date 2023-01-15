import React, { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";

import { Todo } from "../../types";
import { db } from "../../firebase-config";

import Loader from "../loader";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const dbRef = collection(db, "todos");

  useEffect(() => {
    const unsub = onSnapshot(dbRef, (docsSnap) => {
      const data: Todo[] = [];
      docsSnap.forEach((doc) => {
        data.push(doc.data() as Todo);
      });
      setTodos(data);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {todos &&
        todos.length > 0 &&
        todos.map((todo, idx) => <div key={idx}>{todo.description}</div>)}
    </>
  );
};

export default TodoList;
