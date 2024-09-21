document.getElementById('loadButton').addEventListener('click', async () => {
  try {
    // dynamically import the heavy_module.js only when the button is clicked
    const module = await import('./heavy_module.js');
    module.load(); // call a function from the dynamically imported module
  } catch (error) {
    console.error('Error loading module:', error);
  }
});