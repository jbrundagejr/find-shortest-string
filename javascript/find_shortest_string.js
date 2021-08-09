function findShortestString(arr) {
  if(arr.length === 1) return arr[0]
  let shortestString
  let tempString
  for (let i = 0; i < arr.length; i++){
    if(arr[i] < arr[i + 1]){
      shortestString = arr[i]
    }
    tempString = shortestString
    for (let i = 0; i < arr.length; i++){
      if(arr[i] < tempString){
        tempString = arr[i]
        shortestString = tempString
      }
    }
  }
  return shortestString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
