import React, { FormEvent, useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { generateArray } from "./generateArray";
import { algorithms } from "../../SortingAlgorithms/algorithms";

function BubbleSort() {
  const [size, setSize] = useState<string>("");
  const [arr, setArr] = useState<number[]>([]);
  const [err, setErr] = useState<string>("");
  const [language, setLanguage] =
    useState<keyof typeof algorithms.bubbleSort.code>("cpp");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setSize(e.currentTarget.value);
  };

  const sort = () => {
    if (arr.length === 0) {
      setErr("Array is empty");
      return;
    }

    const sortedArr = [...arr];
    const n: number = sortedArr.length;
    let i = 0;
    const sortInterval = setInterval(() => {
      let isSwapped: boolean = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          const temp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = temp;
          isSwapped = true;
        }
      }
      if (!isSwapped) clearInterval(sortInterval);
      setArr([...sortedArr]);
      i++;
    }, 1000);
  };

  const getColor = (value: number) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min;
    const colorValue = Math.floor((255 * (value - min)) / range);
    return `rgb(${255 - colorValue}, ${colorValue}, 0)`;
  };

  return (
    <>
      <h1 className="text-2xl text-center m-4 bg-gray-500 p-10">BUBBLE SORT</h1>
      <div className="p-2 bg-black text-white flex flex-wrap flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            label="Enter the array size"
            placeholder="Enter size"
            onChange={handleChange}
            className="text-black"
          />
          <br />
          <br />
          <div className="flex mt-4">
            <Button
              className="mr-4"
              onClick={() => generateArray(size, setArr, setErr)}
              children="Generate Array"
            />
            <Button children="SORT" type="submit" onClick={sort} />
          </div>
          <br />
          <br />
          {err && <p className="text-red-500 mt-1 text-xl">{err}</p>}
        </form>
      </div>
      <div className="mt-4 flex justify-center">
        {arr.map((value, index) => (
          <div
            key={index}
            className="h-auto mr-2"
            style={{
              width: arr.length <= 50 ? "20px" : "10px",
              height: `${value * 10}px`,
              backgroundColor: getColor(value),
            }}
          >
            <div className="flex justify-center">
              {arr.length <= 50 ? `${value}` : ""}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center align-center flex-wrap ">
        <div className="p-1 w-auto mb-10 mt-5 text-2xl bg-black text-white px-5 py-6">
          {algorithms.bubbleSort.Description}
        </div>
        <div className="border border-black w-fit p-4">
          <div className="flex justify-evenly">
            <button
              className="border border-black p-1 w-12 active:bg-black active:text-white"
              onClick={() => setLanguage("c")}
            >
              C
            </button>
            <button
              className="border border-black p-1 w-12 active:bg-black active:text-white"
              onClick={() => setLanguage("cpp")}
            >
              C++
            </button>
            <button
              className="border border-black p-1 w-12 active:bg-black active:text-white"
              onClick={() => setLanguage("java")}
            >
              JAVA
            </button>
          </div>
          <pre>
            <code>{algorithms.bubbleSort.code[language]}</code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default BubbleSort;
