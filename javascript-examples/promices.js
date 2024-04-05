function fetchData() {
  return new Promise((resolve, reject) => {
      // Assume fetching data asynchronously after 2 seconds
      setTimeout(() => {
          const success = true; // Simulating a successful operation
          if (success) {
              const data = [
                  { id: 1, name: 'John' },
                  { id: 2, name: 'Jane' },
                  { id: 3, name: 'Doe' }
              ];
              resolve(data); // Resolve the promise with the fetched data
          } else {
              reject('Error fetching data'); // Reject the promise with an error message
          }
      }, 2000); // Simulating a delay of 2 seconds
  });
}

// Using the fetchData() function with Promises
fetchData()
  .then((data) => {
      // Handle the resolved promise (successful operation)
      console.log('Data received:', data);
  })
  .catch((error) => {
      // Handle the rejected promise (error occurred)
      console.error('Error fetching data:', error);
  })
  .finally(() => {
      // Optional: Perform cleanup or final tasks after promise is settled (fulfilled or rejected)
      console.log('Fetching data completed');
  });