"use client";

import { useEffect, useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const result = await response.json();
        setTodos(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return <div>{todos?.title}</div>;
}
