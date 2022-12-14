export const renderTable = (tableHeader, divID, dataArray) => {
  const tableContainer = document.getElementById(divID);
  // Create the table element
  const table = document.createElement("table");

  tableHeader.forEach((element) => {
    const header = document.createElement("th");
    header.innerText = element;
    table.appendChild(header);
  });
  // Loop through the data 
  dataArray.forEach((rowData) => {
    const row = document.createElement("tr");
    console.log(rowData);
    const newObject = {
      name: rowData.product.name,
      units: rowData.units,
      revenue: rowData.revenue,
    };
    Object.values(newObject).forEach((cellData) => {
      const cell = document.createElement("td");
      cell.innerText = cellData;
      row.appendChild(cell);
    });

    table.appendChild(row);
  });

  // Add the table to the container 
  tableContainer.appendChild(table);
};

export const renderOrderTable = (tableHeader, divID, dataArray, current) => {
  let currentList = current;
  const itemsToRender = 10;
  const nextButton = document.getElementById("nextButton");
  const previousButton = document.getElementById("previousButton");
  const startAt = (currentList - 1) * itemsToRender;
  const endAt = startAt + itemsToRender;
  const paginationText = document.getElementById("paginatorText");
  paginationText.textContent = `Page ${current}`;

  const tableContainer = document.getElementById(divID);

  // Create the table element
  const table = document.createElement("table");

  tableHeader.forEach((element) => {
    const header = document.createElement("th");
    header.innerText = element;
    table.appendChild(header);
  });


  // Loop through the data
  dataArray.slice(startAt, endAt).forEach((rowData) => {
    const row = document.createElement("tr");
    console.log(rowData);
    const newObject = {
      name: rowData.product.name,
      date: rowData.created_at,
      price: rowData.total,
      status: rowData.status,
    };
    Object.values(newObject).forEach((cellData) => {
      const cell = document.createElement("td");
      cell.innerText = cellData;
      row.appendChild(cell);
    });

    table.appendChild(row);
  });


  // Add the table to the container 
  tableContainer.appendChild(table);


  //table pagination
  if (current == 1) {
    previousButton.disabled = true;
    nextButton.disabled = false;
  } else if (current * 10 > dataArray.length) {
    nextButton.disabled = true;
    previousButton.disabled = false;
  }
  nextButton.onclick = () => {
    current++;
    paginationText.textContent = `Page ${current}`;
    tableContainer.innerHTML = "";
    renderOrderTable(tableHeader, divID, dataArray, current);
  };
  previousButton.onclick = () => {
    current--;
    paginationText.textContent = `Page ${current}`;
    tableContainer.innerHTML = "";
    renderOrderTable(tableHeader, divID, dataArray, current);
  };
};

export const renderSearchTable = (tableHeader, divID, dataArray,searchString) => {
  

  const tableContainer = document.getElementById(divID);

  // Create the table element
  const table = document.createElement("table");

  tableHeader.forEach((element) => {
    const header = document.createElement("th");
    header.innerText = element;
    table.appendChild(header);
  });

  // Loop through the data 
  dataArray.forEach((rowData) => {
    const row = document.createElement("tr");
    console.log(rowData);
    const newObject = {
      name: rowData.product.name,
      date: rowData.created_at,
      price: rowData.total,
      status: rowData.status,
    };
    if (newObject.name.includes(searchString)){
      Object.values(newObject).forEach((cellData) => {
        const cell = document.createElement("td");
        cell.innerText = cellData;
        row.appendChild(cell);
      });

      table.appendChild(row);
      // Add the table to the container 
      tableContainer.appendChild(table);
    }
      
  });

  

  
};
