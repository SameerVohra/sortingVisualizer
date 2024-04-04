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

  const sort = () => {
    console.log(arr);
    const merged = mergeSort(arr, 0, parseInt(size) - 1);
    setArr(merged);
  };

  const mergeSort = (arr: number[], s: number, e: number) => {
    if (s >= e) return arr.slice(s, e + 1);

    const mid = Math.floor(s + (e - s) / 2);

    const left = mergeSort(arr, s, mid);
    const right = mergeSort(arr, mid + 1, e);
    const merged = merge(left, right);
    return merged;
  };

  const merge = (left: number[], right: number[]) => {
    const n1 = left.length;
    const n2 = right.length;

    const merged: number[] = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < n1 && j < n2) {
      if (left[i] <= right[j]) {
        merged[k] = left[i++];
      } else {
        merged[k] = right[j++];
      }
      k++;
    }

    while (i < n1) {
      merged[k++] = left[i++];
    }

    while (j < n2) {
      merged[k++] = right[j++];
    }

    return merged;
  };

  return (
    <>
      <div className="p-2 bg-black text-white flex flex-wrap flex-col items-center justify-center">
        <form onSubmit={handleSubmit}>
          <Input
            label="Enter the array size"
            placeholder="Enter size"
            onChange={(e) => setSize(e.target.value)}
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
            className="bg-blue-500 h-auto mr-2"
            style={{ width: "20px", height: `${value * 10}px` }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default MergeSort;
