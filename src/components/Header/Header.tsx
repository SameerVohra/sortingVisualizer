import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-black flex flex-wrap justify-center p-5 gap-10 mb-2">
      <Link
        to="/"
        className="text-white text-xl underline-none hover:text-zinc-400"
      >
        Home
      </Link>
      <Link
        to="/bubblesort"
        className="text-white text-xl underline-none hover:text-zinc-400"
      >
        Bubble Sort
      </Link>
      <Link
        to="/mergesort"
        className="text-white text-xl underline-none hover:text-zinc-400"
      >
        Merge Sort
      </Link>
      <Link
        to="/selectionsort"
        className="text-white text-xl underline-none hover:text-zinc-400"
      >
        Selection Sort
      </Link>
      <Link
        to="/quicksort"
        className="text-white text-xl underline-none hover:text-zinc-400"
      >
        Quick Sort
      </Link>
      <Link
        to="/insertionsort"
        className="text-white text-xl underline-none hover:text-zinc-400"
      >
        Insertion Sort
      </Link>
      <Link
        to="/heapsort"
        className="text-white text-xl underline-none hover:text-zinc-400"
      >
        Heap Sort
      </Link>
    </div>
  );
}

export default Header;
