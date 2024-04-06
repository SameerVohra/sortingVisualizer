import React, { useState } from "react";
import Input from "../Input";
import Button from "../Button";
import { generateArray } from "./generateArray";

function BubbleSort() {
  const [size, setSize] = useState<string>("");
  const [arr, setArr] = useState<number[]>([]);
  const [err, setErr] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const sort = () => {
    const sortedArr = [...arr];
    const n: number = sortedArr.length;
    const iterations = [];
    for (let i = 0; i < n - 1; i++) {
      let isSwapped: boolean = false;
      for (let j = 0; j < n - i - 1; j++) {
        if (sortedArr[j] > sortedArr[j + 1]) {
          const temp = sortedArr[j];
          sortedArr[j] = sortedArr[j + 1];
          sortedArr[j + 1] = temp;
          isSwapped = true;
        }
      }
      if (!isSwapped) break;
      iterations.push([...sortedArr]);
    }

    iterations.forEach((iterations, index) => {
      setTimeout(() => {
        setArr(iterations);
      }, index * 1000);
    });
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
          >
            {value}
          </div>
        ))}
      </div>
    </>
  );
}

export default BubbleSort;
