export const algorithms = {
  bubbleSort: {
    Description:
      "Bubble sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items, and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted. The name 'bubble'/ sort comes from the way smaller elements 'bubble' to the top of the list with each iteration. While it is easy to understand and implement, bubble sort is generally not efficient for sorting large lists due to its O(n^2) average and worst-case time complexity. ",
    code: {
      cpp: `
void bubbleSort(int arr[], int n){
  int i, j;
  bool swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr[j], arr[j + 1]);
        swapped = true;
        }
      }
    if (swapped == false)
      break;
    }
}`,
      c: `
void swap(int* xp, int* yp){
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}

void bubbleSort(int arr[], int n){
    int i, j;
    bool swapped;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(&arr[j], &arr[j + 1]);
                swapped = true;
            }
        }
        if (swapped == false)
            break;
    }
}`,
      java: `
static void bubbleSort(int arr[], int n){
  int i, j, temp;
  boolean swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) break;
  }
}`,
    },
  },
  mergesort: {
    Description:
      "Merge sort is a highly efficient sorting algorithm that follows the divide-and-conquer strategy. It works by recursively dividing the input list into smaller sublists until each sublist contains only one element, which is inherently sorted. Then, it merges these sorted sublists together by comparing elements from each sublist and arranging them in the correct order. Due to its divide-and-conquer approach, merge sort achieves a time complexity of O(n log n) in all cases, making it suitable for sorting large lists efficiently. Moreover, merge sort is a stable sorting algorithm, meaning that equal elements retain their relative order after sorting. However, it does require additional space proportional to the size of the input list for the merging process, which can be a downside for very large datasets. Overall, merge sort strikes a balance between simplicity, efficiency, and stability, making it a popular choice for various sorting tasks.",
    code: {
      cpp: `
void merge(int array[], int const left, int const mid,
          int const right){
    int const subArrayOne = mid - left + 1;
    int const subArrayTwo = right - mid;
    auto *leftArray = new int[subArrayOne], 
         *rightArray = new int[subArrayTwo];

    for (auto i = 0; i < subArrayOne; i++)
        leftArray[i] = array[left + i];
    for (auto j = 0; j < subArrayTwo; j++)
        rightArray[j] = array[mid + 1 + j];
 
    auto indexOfSubArrayOne = 0, indexOfSubArrayTwo = 0;
    int indexOfMergedArray = left;
 
    while (indexOfSubArrayOne < subArrayOne
           && indexOfSubArrayTwo < subArrayTwo) {
        if (leftArray[indexOfSubArrayOne]
            <= rightArray[indexOfSubArrayTwo]) {
            array[indexOfMergedArray]
                = leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
        }
        else {
            array[indexOfMergedArray]
                = rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
        }
        indexOfMergedArray++;
    }

    while (indexOfSubArrayOne < subArrayOne) {
        array[indexOfMergedArray]
            = leftArray[indexOfSubArrayOne];
        indexOfSubArrayOne++;
        indexOfMergedArray++;
    }

    while (indexOfSubArrayTwo < subArrayTwo) {
        array[indexOfMergedArray]
            = rightArray[indexOfSubArrayTwo];
        indexOfSubArrayTwo++;
        indexOfMergedArray++;
    }
    delete[] leftArray;
    delete[] rightArray;
}

void mergeSort(int array[], int const begin, int const end){
    if (begin >= end)
        return;
 
    int mid = begin + (end - begin) / 2;
    mergeSort(array, begin, mid);
    mergeSort(array, mid + 1, end);
    merge(array, begin, mid, end);
}`,
      c: `
void merge(int arr[], int l, int m, int r){
    int i, j, k;
    int n1 = m - l + 1;
    int n2 = r - m;
  
    int L[n1], R[n2];
 
    for (i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    i = 0;
    j = 0;
    k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
}
 
void mergeSort(int arr[], int l, int r){
    if (l < r) {
        int m = l + (r - l) / 2;
 
        // Sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
 
        merge(arr, l, m, r);
    }
}`,
      java: `
void merge(int arr[], int l, int m, int r){
        int n1 = m - l + 1;
        int n2 = r - m;
        int L[] = new int[n1];
        int R[] = new int[n2];
 
        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];
 
        int i = 0, j = 0;
 
        int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }
 
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }
 
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
 
    void sort(int arr[], int l, int r){
        if (l < r) {
 
          int m = l + (r - l) / 2;
 
 
          sort(arr, l, m);
          sort(arr, m + 1, r);
          merge(arr, l, m, r);
        }
    }`,
    },
  },
  selectionSort: {
    Description:
      "Selection sort is a simple comparison-based sorting algorithm that divides the input list into two sublists: a sorted sublist and an unsorted sublist. The algorithm repeatedly finds the minimum (or maximum) element from the unsorted sublist and swaps it with the first element of the unsorted sublist, effectively growing the sorted sublist. This process is repeated until the entire list is sorted. Selection sort has a time complexity of O(n^2), making it inefficient for large lists, but it has the advantage of being simple to implement and requiring only a constant amount of additional memory space.",
    code: {
      cpp: `
void selectionSort(int arr[], int n){ 
    int i, j, min_idx; 
    for (i = 0; i < n - 1; i++) { 
        min_idx = i; 
        for (j = i + 1; j < n; j++) { 
            if (arr[j] < arr[min_idx]) min_idx = j;
        } 
        if (min_idx != i) 
            swap(arr[min_idx], arr[i]); 
    } 
} `,
      c: `
void selectionSort(int arr[], int n){ 
    int i, j, min_idx; 
  
    for (i = 0; i < n-1; i++) {
        min_idx = i; 
        for (j = i+1; j < n; j++) 
          if (arr[j] < arr[min_idx]) 
            min_idx = j; 
           if(min_idx != i) swap(&arr[min_idx], &arr[i]); 
    } 
}`,
      java: `
void sort(int arr[]){ 
    int n = arr.length;
    for (int i = 0; i < n-1; i++){ 
            
        int min_idx = i; 
        for (int j = i+1; j < n; j++) 
            if (arr[j] < arr[min_idx]) min_idx = j; 
   
        int temp = arr[min_idx]; 
        arr[min_idx] = arr[i]; 
        arr[i] = temp; 
    } 
} `,
    },
  },
  quickSort: {
    Description:
      "Quick sort is a highly efficient sorting algorithm that employs a divide-and-conquer strategy to sort elements in an array or list. The algorithm works by selecting a pivot element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The partitioning process rearranges the elements in such a way that the pivot element is in its correct sorted position. The same process is then recursively applied to the sub-arrays until the entire array is sorted. Quick sort is known for its average-case time complexity of O(n log n), making it one of the fastest sorting algorithms in practice. However, its worst-case time complexity is O(n^2), which occurs when the pivot selection is poor. To mitigate this, various strategies can be employed, such as choosing a random pivot or using the median-of-three method. Overall, quick sort is widely used in various applications due to its efficiency and versatility.",
    code: {
      cpp: `
int partition(int arr[],int low,int high){
  int pivot=arr[high];
  int i=(low-1);
  
  for(int j=low;j<=high;j++){
    if(arr[j]<pivot){
      i++;
      swap(arr[i],arr[j]);
    }
  }
  swap(arr[i+1],arr[high]);
  return (i+1);
}
           
void quickSort(int arr[],int low,int high){
  if(low<high){
    int pi=partition(arr,low,high);

    quickSort(arr,low,pi-1);
    quickSort(arr,pi+1,high);
  }
}`,
      c: `
void swap(int* p1, int* p2){
    int temp;
    temp = *p1;
    *p1 = *p2;
    *p2 = temp;
}

int partition(int arr[], int low, int high){
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j <= high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high){
    if (low < high) {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
      java: `
static void swap(int[] arr, int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

static int partition(int[] arr, int low, int high){
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return (i + 1);
}

static void quickSort(int[] arr, int low, int high)
{
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`,
    },
  },
  insertionSort: {
    Description:
      "Insertion sort is a simple sorting algorithm that builds the final sorted array one element at a time. It works by repeatedly taking the next element from the unsorted part of the array and inserting it into its correct position within the sorted part of the array. This process continues until all elements are sorted. Insertion sort is similar to sorting a hand of playing cards: one card at a time is picked from the unsorted pile and placed in its correct position within the sorted pile. The algorithm is efficient for small arrays or nearly sorted arrays, with a time complexity of O(n^2) on average. However, its best-case time complexity is O(n) when the array is already sorted. Despite its simplicity, insertion sort can be more efficient than other algorithms, such as bubble sort or selection sort, for small datasets or lists that are nearly sorted.",

    code: {
      cpp: `
void insertionSort(int arr[], int n){
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
      c: `
void insertionSortinC(int arr[], int n){
    int i, key, j;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
      java: `
void sort(int arr[]){
    int n = arr.length;
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}`,
    },
  },
};
