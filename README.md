# React Hooks Paginator
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

![demo](./animate.gif)

A library for adding simple paginator functionality to your react app.

Requires react >= 16.8.0

## Installation

Run the following command:
`npm install react-hooks-paginator`

## Usage

```javascript
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Paginator from 'react-hooks-paginator';

function App() {
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [page1, page2, page3, page4, page5, page6];

  return (
    <div>
      <Paginator
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

| Property           | Type                | Default                 | Description                                                    |
| ------------------ | ------------------- | ----------------------- | -------------------------------------------------------------- |
| totalRecords       | Number (required)   |                         | The length of the data we are tabulating                       |
| pageLimit          | Number (required)   |                         | Minimum number of records per page                             |
| pageNeighbours     | Number (required)   |                         | Number of page blocks by the left and right of the middle page |
| setOffset          | function (required) |                         | function that updates the offset state                         |
| setCurrentPage     | function (required) |                         | function that updates the current page state                   |
| currentPage        | Number (required)   |                         | The current page state                                         |
| pageContainerClass | String              | `react-hooks-paginator` | Paginator container classname                                  |
| pageActiveClass    | String              | `active`                | Active page item classname                                     |
| pageItemClass      | String              | `page-item`             | Page item classname                                            |
| pageLinkClass      | String              | `page-link`             | Page link classname                                            |
| pagePrevText       | String or Node      | `Next »`                | Prev page item text                                            |
| pageNextText       | String or Node      | `« Prev`                | Next page item text                                            |

## Example

```javascript
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Paginator from 'react-hooks-paginator';
import { fetchData } from './data-fetcher';

function App() {
  const pageLimit = 10;

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    fetchData().then(data => setData(data));
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
      <Paginator
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://remilekunsalami.com"><img src="https://avatars3.githubusercontent.com/u/23614400?v=4" width="100px;" alt="Remilekun Salami"/><br /><sub><b>Remilekun Salami</b></sub></a><br /><a href="https://github.com/codenaz/react-paginator/commits?author=remiilekun" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!