import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { generateArray } from "./generateArray";
import { algorithms } from "../../SortingAlgorithms/algorithms";

function QuickSort() {
  const [arr, setArr] = useState<number[]>([]);
  const [size, setSize] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const [language, setLanguage] = useState<"cpp" | "c" | "java">("cpp");

  const sort = () => {
    const newArr = [...arr];
    quickSort(newArr, 0, arr.length - 1);
  };

  const partition = (newArr: number[], s: number, e: number) => {
    const pivot: number = newArr[e];
    let i: number = s - 1;
    for (let j: number = s; j < e; j++) {
      if (newArr[j] < pivot) {
        i++;
        const temp: number = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = temp;
      }
    }
    const temp: number = newArr[i + 1];
    newArr[i + 1] = newArr[e];
    newArr[e] = temp;
    return i + 1;
  };

  const quickSort = (newArr: number[], s: number, e: number) => {
    if (s < e) {
      const pi = partition(newArr, s, e);
      setArr([...newArr]); // Visualize the partition process
      setTimeout(() => {
        quickSort(newArr, s, pi - 1);
        quickSort(newArr, pi + 1, e);
      }, 1000);
    } else {
      setArr([...newArr]);
    }
  };

  const getColor = (value: number) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min;
    const colorValue = Math.floor((255 * (value - min)) / range);
    return `rgb(${255 - colorValue}, ${colorValue}, 0)`;
  };

  const getBarWidth = () => {
    return arr.length > 50 ? 10 : 20;
  };

  return (
    <>
      <h1 className="text-2xl text-center m-4 bg-gray-500 p-10">QUICK SORT</h1>

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
              width: `${getBarWidth()}px`,
              height: `${value * 10}px`,
            }}
          >
            {arr.length <= 50 ? `${value}` : ""}
          </div>
        ))}
      </div>
      <div className="flex justify-center align-center flex-wrap ">
        <div className="p-1 w-auto mb-10 mt-5 text-2xl bg-black text-white px-5 py-6">
          {algorithms.quickSort.Description}
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
            <code>{algorithms.quickSort.code[language]}</code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default QuickSort;
