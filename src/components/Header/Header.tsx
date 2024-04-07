import LinkBtn from "./LinkBtn";

function Header() {
  return (
    <div className="bg-black flex flex-wrap justify-center p-5 gap-10 mb-2">
      <LinkBtn to="/bubblesort" text="Bubble Sort" />
      <LinkBtn to="/mergesort" text="Merge Sort" />
      <LinkBtn to="/selectionsort" text="Selection Sort" />
      <LinkBtn to="/quicksort" text="Quick Sort" />
      <LinkBtn to="insertionsort" text="Insertion Sort" />
    </div>
  );
}

export default Header;
