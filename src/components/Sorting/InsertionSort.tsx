import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { generateArray } from "./generateArray";
import { algorithms } from "../../SortingAlgorithms/algorithms";

function InsertionSort() {
  const [arr, setArr] = useState<number[]>([]);
  const [err, setErr] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [language, setLanguage] = useState<"cpp" | "c" | "java">("cpp");

  const sort = () => {
    console.log(arr);
    insertionSort(arr, parseInt(size));
    console.log(arr);
  };

  const insertionSort = (newArr: number[], n: number) => {
    const tmp = [];
    for (let i = 1; i < n; i++) {
      const key = newArr[i];
      let j = i - 1;
      while (j >= 0 && newArr[j] > key) {
        newArr[j + 1] = newArr[j];
        j--;
      }
      newArr[j + 1] = key;
      tmp.push([...newArr]);
      tmp.forEach((value, index) => {
        setTimeout(() => {
          setArr(value);
        }, index * 1500);
      });
    }
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
      <h1 className="text-2xl text-center m-4 bg-gray-500 p-10">
        INSERTION SORT
      </h1>

      <div className="p-2 bg-black text-white flex flex-wrap flex-col items-center justify-center">
        <form>
          <Input
            label="Enter the array size"
            type="text"
            className="text-black"
            placeholder="Enter size"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSize(e.target.value)
            }
          />
          <br />
          <br />
          <div className="flex mt-4 ">
            <Button
              children="Generate Array"
              onClick={() => generateArray(size, setArr, setErr)}
              className="mr-4 "
            />
            <Button children="SORT" onClick={sort} />
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
            className="mr-2"
            style={{
              backgroundColor: getColor(value),
              width: arr.length <= 50 ? "20px" : "10px",
              height: `${value * 10}px`,
            }}
          >
            {arr.length <= 50 ? `${value}` : ""}
          </div>
        ))}
      </div>
      <div className="flex justify-center align-center flex-wrap ">
        <div className="p-1 w-auto mb-10 mt-5 text-2xl bg-black text-white px-5 py-6">
          {algorithms.insertionSort.Description}
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
            <code>{algorithms.insertionSort.code[language]}</code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default InsertionSort;
