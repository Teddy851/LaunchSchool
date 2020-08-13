function rotateArray(array) {
  if (array && array.length === 0) {
    return `${array}`;
  } else if (typeof array !== "object") {
    return undefined;
  } else {
    let rotatedArray = array.slice(1);
    rotatedArray.push(array[0]);

    console.log(rotatedArray);
    return `${rotatedArray}`;
  }
}

const rotate = (arr) => {
  if (!arr || arr.length === 0 || typeof arr !== 'object') return undefined;
  return [...arr.slice(1), arr[0]];
};

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotate(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined`

