import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { generateArray } from "./generateArray";

function MergeSort() {
  const [size, setSize] = useState<string>("");
  const [arr, setArr] = useState<number[]>([]);
  const [err, setErr] = useState<string>("");

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
      setArr([...arr]); // Update array state
      await delay(500); // Delay for visualization
    }

    while (i < n1) {
      arr[k++] = leftArr[i++];
      setArr([...arr]); // Update array state
      await delay(500); // Delay for visualization
    }

    while (j < n2) {
      arr[k++] = rightArr[j++];
      setArr([...arr]); // Update array state
      await delay(500); // Delay for visualization
    }
  };

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <>
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
            className="bg-blue-500 h-auto mr-2"
            style={{ width: "20px", height: `${value * 10}px` }}
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
}

export default MergeSort;
