export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name?")) {
    return (
      "Jonathan Lindstrom"
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "Jmlindst"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    const addMatch = query.match(/What is (\d+) plus (\d+)/);
    var ans = "";
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      ans = (x+y).toString();
    }
    else{
      ans = "";
    }
    return (
      ans
    );
  }

  if (query.toLowerCase().includes("multiplied")) {
    const addMatch = query.match(/What is (\d+) multiplied by (\d+)/);
    var ans = "";
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      ans = (x*y).toString();
    }
    else{
      ans = "";
    }
    return (
      ans
    );
  }

  // Which of the following numbers is the largest: 13, 30, 1?

  if (query.toLowerCase().includes("largest")) {
    const addMatch = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
    var ans = "";
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      const z: number = parseInt(addMatch[3]);
      ans = Math.max(z,Math.max(x,y)).toString();
    }
    else{
      ans = "";
    }
    return (
      ans
    );
  }

  // Which of the following numbers are primes: 2, 89, 91, 85, 83?

  if (query.toLowerCase().includes("primes")) {
    const addMatch = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/);
    var ans = "";
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      const z: number = parseInt(addMatch[3]);
      const a: number = parseInt(addMatch[4]);
      const b: number = parseInt(addMatch[5]);
      

    }
    else{
      ans = "This";
    }
    return (
      ans
    );
  }

  // Which of the following numbers is both a square and a cube: 470, 3356, 625, 1723, 64, 2543?
  function isSquareAndCubeRoot(number : number) : boolean {
    // Check if the number is non-negative since the square and cube roots
    // of negative numbers won't be integers.
    if (number < 0) {
      return false;
    }
  
    // Calculate the square root and cube root of the number.
    const squareRoot = Math.sqrt(number);
    const cubeRoot = Math.cbrt(number);
  
    // Check if both the square root and cube root are integers.
    return Number.isInteger(squareRoot) && Number.isInteger(cubeRoot);
  }
  
  // Example usage:
  const numberToCheck = 64; // Change this to the number you want to check
  if (isSquareAndCubeRoot(numberToCheck)) {
    console.log(`${numberToCheck} is both a square and a cube root.`);
  } else {
    console.log(`${numberToCheck} is not both a square and a cube root.`);
  }

  if (query.toLowerCase().includes("square")) {
    const addMatch = query.match(/Which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+)/);
    var ans = "";
    if (addMatch) {
      const x: number = parseInt(addMatch[1]);
      const y: number = parseInt(addMatch[2]);
      const z: number = parseInt(addMatch[3]);
      const a: number = parseInt(addMatch[4]);
      const b: number = parseInt(addMatch[5]);
      const list: number[] = [x, y, z, a, b];
      for(var i = 0; i< list.length; i++){
        var val = list[i];
        if(isSquareAndCubeRoot(val)){
          ans += val.toString();
        }
      }
      

    }
    else{
      ans = "";
    }
    return (
      ans
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "Jmlindst"
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "Jmlindst"
    );
  }




  return "";
}
