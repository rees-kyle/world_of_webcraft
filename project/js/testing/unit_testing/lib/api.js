// define an asynchronous function named 'fetchData' to simulate fetching data
export async function fetchData() {
  // simulate an asynchronous operation with a delay of 100 milliseconds
  await new Promise((resolve) => {
    // use 'setTimeout' to create the delay
    setTimeout(() => {
      // resolve the promise with the string 'data'
      resolve('data');
    }, 100); // delay of 100 milliseconds
  });

  // return the string 'data' after the delay
  return 'data';
}