import { generateArray } from "./generateArray";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import { algorithms } from "../../SortingAlgorithms/algorithms";
function SelectionSort() {
  const [size, setSize] = useState("");
  const [arr, setArr] = useState<number[]>([]);
  const [err, setErr] = useState("");
  const [language, setLanguage] = useState("cpp");

  const sort = (arr: number[]) => {
    const newArr = arr.slice(0, arr.length);
    selectionSort(newArr, arr.length);
  };

  const selectionSort = (newArr: number[], n: number) => {
    const steps: number[][] = [];
    for (let i: number = 0; i < n - 1; i++) {
      let ele = i;
      for (let j: number = i + 1; j < n; j++) {
        if (newArr[j] < newArr[ele]) ele = j;
      }
      if (ele !== i) {
        const temp: number = newArr[i];
        newArr[i] = newArr[ele];
        newArr[ele] = temp;
        steps.push([...newArr]);
      }
    }
    steps.forEach((element, index) => {
      setTimeout(() => {
        setArr(element);
      }, index * 1500);
    });
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
        SELECTION SORT
      </h1>

      <div className="p-2 bg-black text-white flex flex-wrap flex-col items-center justify-center">
        <form>
          <Input
            label="Enter the array size"
            type="text"
            className="text-black"
            placeholder="Enter size"
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
          <br />
          <br />
          <div className="flex mt-4">
            <Button
              className="mr-4"
              children="Generate Array"
              onClick={() => {
                generateArray(size, setArr, setErr);
              }}
            />
            <Button
              children="SORT"
              onClick={() => {
                sort(arr);
              }}
            />
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
            {arr.length <= 50 ? `${value}` : ""}
          </div>
        ))}
      </div>
      <div className="flex justify-center align-center flex-wrap ">
        <div className="p-1 w-auto mb-10 mt-5 text-2xl bg-black text-white px-5 py-6">
          {algorithms.selectionSort.Description}
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
            <code>{algorithms.selectionSort.code[language]}</code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default SelectionSort;
