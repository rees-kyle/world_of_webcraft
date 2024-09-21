// this function is used in the main entry file
export function usedFunction() {
  console.log('This function is used!');
}

// this function is never used, so it will be removed during tree shaking
export function unusedFunction() {
  console.log('This function is not used!');
}