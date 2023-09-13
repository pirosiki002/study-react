import { useCallback, useState } from "react";

export const useInputArray = () => {
  const [text, setText] = useState("");
  const [array, setArray] = useState<string[]>([]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("Please enter up to 5 letters.");
      return;
    }
    setText(e.target.value.trim());
  }, []);


  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if(prevArray.includes(text)){
        alert("same element!!");
        return prevArray;
      }
      return [...prevArray, text];
    });
  },[text]);

  return {text, array, handleChange, handleAdd};
}
