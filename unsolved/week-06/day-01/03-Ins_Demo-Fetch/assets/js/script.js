const tableBody = document.getElementById("repo-table");
const fetchButton = document.getElementById("fetch-button");

// const getApi = () => {
//   const requestUrl = 'https://api.github.com/orgs/nodejs/repos';

// const data = fetch(requestUrl)
// .then(function (response) {
//     console.log(response);
//     return response.json();
//   }).then(function (data) {
//     console.log(data)
//     for (var i = 0; i < data.length; i++) {
//       // Creating elements, tablerow, tabledata, and anchor
//       var createTableRow = document.createElement('tr');
//       var tableData = document.createElement('td');
//       var link = document.createElement('a');

//       // Setting the text of link and the href of the link
//       link.textContent = data[i].html_url;
//       link.href = data[i].html_url;

//       // Appending the link to the tabledata and then appending the tabledata to the tablerow
//       // The tablerow then gets appended to the tablebody
//       tableData.appendChild(link);
//       createTableRow.appendChild(tableData);
//       tableBody.appendChild(createTableRow);
//     }
//   }).catch(function (error) {
//     console.log(error);
//     // handle error and display error modal
//   });

//   console.log(data);
//   console.log("done");
// }

// fetchButton.addEventListener('click', getApi);

const constructTableRows = (rows) => {
  const constructTableRow = (row) => {
    const createTableRow = document.createElement("tr");
    const tableData = document.createElement("td");
    const link = document.createElement("a");

    link.textContent = row;
    link.setAttribute("href", row);

    tableData.appendChild(link);
    createTableRow.appendChild(tableData);
    tableBody.appendChild(createTableRow);
  };

  rows.forEach(constructTableRow);
};

const functionForJSON = (responseObject) => {
  // unless you have some logic here do that before you return
  return responseObject.json();
};

const functionForApplication = (dataFromServer) => {
  // whatever your application code is goes here
  console.log(dataFromServer);

  const callback = (each) => {
    return each.full_name;
  };

  const repos = dataFromServer.map(callback);

  constructTableRows(repos);

  return repos;
};

const functionToHandleError = (errorObject) => {
  // handle your error here according to your application
};

fetch("https://api.github.com/orgs/nodejs/repos")
  .then(functionForJSON)
  .then(functionForApplication)
  .catch(functionToHandleError);
