import React from 'react'

async function fetchData() {
  try {
    const apiUrl = "https://api.example.com/data";
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Filter or extract specific data from the API response
    const specificData = data.filter((item) => item.id === 123); // Example filter by ID

    console.log(specificData);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchData();
function Dropdown() {
  return (
  <div>

  </div>
)
}

export default Dropdown
