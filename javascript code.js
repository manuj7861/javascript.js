function findMax(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    // If the input is not an array or is an empty array, return null or throw an error, based on requirements.
    return null; // You can modify this to throw an error if needed.
  }

  let max = numbers[0]; // Assume the first element is the maximum.

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]; // Update max if a larger number is found.
    }
  }

  return max;
}
output:
const numbers = [10, 5, 7, 15, 3, 20];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 20
