/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
    // code goes here
    let holePosition
    let v
    for (let i = 1; i < nums.length; i++) {
        holePosition = nums[i] // 5
        for (v = i - 1; nums[v] > holePosition && v >= 0; v--) { // 10 > 5 ? 
            nums[v + 1] = nums[v] // 5 -> 10 
        }
        nums[v + 1] = holePosition // 3 
    }
    return nums;
}

// unit tests
// do not modify the below code

// 10, 5, 3, 8 
// 5 
// 10 > 5 ? Yes  
// nums[v+1] 5 = nums[v] 10 swapped  

test("insertion sort", function () {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    insertionSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
