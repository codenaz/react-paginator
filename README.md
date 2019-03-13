# React Paginator

![demo](./animate.gif)
A library for adding simple paginator functionality to your react app.

Requires react >= 16.8.\*

## Installation

Run the following command:
`npm install react-paginator`

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Paginator from 'react-paginator';

function App() {
  const [offset, setOffset] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  const data = [page1, page2, page3, page4, page5, page6];

  return (
    <div>
      <Pagination
        totalRecords={data.length}
        pageLimit={4}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
```

## Props

| Property       | Type     | Description                                                    |
| -------------- | -------- | -------------------------------------------------------------- |
| totalRecords   | Number   | The length of the data we are tabulating                       |
| pageLimit      | Number   | Minimum number of records per page                             |
| pageNeighbours | Number   | Number of page blocks by the left and right of the middle page |
| setOffset      | function | function that updates the offset state                         |
| setCurrentPage | function | function that updates the current page state                   |
| currentPage    | Number   | The current page state                                         |

## Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Paginator from 'paginator';
import { fetchData } from './data-fetcher';

function App() {
  const pageLimit = 10;

  const [offset, setOffset] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [currentData, setCurrentData] = React.useState([]);

  useEffect(() => {
    fetchData.then(data => setData(data));
  }, []);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  return (
    <div>
      <ul>
        {currentData.map(data => (
          <li>{data}</li>
        ))}
      </ul>
      <Pagination
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
```
