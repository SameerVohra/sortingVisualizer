import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { generateArray } from "./generateArray";
import { algorithms } from "../../SortingAlgorithms/algorithms";

function MergeSort() {
  const [size, setSize] = useState<string>("");
  const [arr, setArr] = useState<number[]>([]);
  const [err, setErr] = useState<string>("");
  const [language, setLanguage] = useState<string>("cpp");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const generateAndSetArray = () => {
    generateArray(parseInt(size), setArr, setErr);
  };

  const sort = async () => {
    if (!isNaN(parseInt(size)) && parseInt(size) > 1) {
      const generatedArray = [...arr];
      await mergeSort(generatedArray, 0, generatedArray.length - 1);
    } else {
      setErr("Please enter a valid array size (greater than 1).");
    }
  };

  const mergeSort = async (
    arr: number[],
    s: number,
    e: number,
  ): Promise<void> => {
    if (s >= e) return;

    const mid = Math.floor(s + (e - s) / 2);

    await mergeSort(arr, s, mid);
    await mergeSort(arr, mid + 1, e);
    await merge(arr, s, mid, e);
  };

  const merge = async (
    arr: number[],
    s: number,
    mid: number,
    e: number,
  ): Promise<void> => {
    const n1 = mid - s + 1;
    const n2 = e - mid;

    const leftArr = arr.slice(s, mid + 1);
    const rightArr = arr.slice(mid + 1, e + 1);

    let i = 0,
      j = 0,
      k = s;

    while (i < n1 && j < n2) {
      if (leftArr[i] <= rightArr[j]) {
        arr[k++] = leftArr[i++];
      } else {
        arr[k++] = rightArr[j++];
      }
      setArr([...arr]);
      await delay(500);
    }

    while (i < n1) {
      arr[k++] = leftArr[i++];
      setArr([...arr]);
      await delay(500);
    }

    while (j < n2) {
      arr[k++] = rightArr[j++];
      setArr([...arr]);
      await delay(500);
    }
  };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const getColor = (value: number) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const range = max - min;
    const colorValue = Math.floor((255 * (value - min)) / range);
    return `rgb(${255 - colorValue}, ${colorValue}, 0)`;
  };

  return (
    <>
      <h1 className="text-2xl text-center m-4 bg-gray-500 p-10">MERGE SORT</h1>

      <div className="p-2 bg-black text-white flex flex-wrap flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
          <Input
            label="Enter the array size"
            placeholder="Enter size"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSize(e.target.value)
            }
            className="text-black"
          />
          <br />
          <br />
          <div className="flex mt-4">
            <Button
              className="mr-4"
              onClick={generateAndSetArray}
              children="Generate Array"
            />
            <Button children="SORT" type="button" onClick={sort} />
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
            className=" h-auto mr-2 flex flex-wrap justify-center "
            style={{
              width: arr.length <= 50 ? "20px" : "10px",
              height: `${value * 10}px`,
              backgroundColor: getColor(value),
            }}
          >
            <div className="flex justify-center">
              {" "}
              {arr.length <= 50 ? `${value}` : ""}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center align-center flex-wrap ">
        <div className="p-1 w-auto mb-10 mt-5 text-2xl bg-black text-white px-5 py-6">
          {algorithms.mergesort.Description}
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
            <code>{algorithms.mergesort.code[language]}</code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default MergeSort;
