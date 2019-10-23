/* eslint-env jest */

import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react';
import Paginator from '../lib';

const pageLimit = 1;
let currentPage = 1;
const setCurrentPage = (page) => currentPage = page;
let offset = 0
const setOffset = (point) => offset = point;

test('renders correctly', () => {
  const { baseElement } = render(<Paginator
    totalRecords={5}
    pageLimit={pageLimit}
    pageNeighbours={2}
    setOffset={setOffset}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  />);
  expect(baseElement).toMatchSnapshot();
})

test("correct number of pages show up when pages do not exceed the number of available blocks", () => {
  const { getAllByText } = render(<Paginator
    totalRecords={5}
    pageLimit={pageLimit}
    pageNeighbours={2}
    setOffset={setOffset}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  />);
  const pages = getAllByText(/^[1-5]$/);
  expect(pages.length).toBe(5)
})

test("correct number of pages show up when pages exceed the number of available blocks", () => {
  const { getAllByText } = render(<Paginator
    totalRecords={5}
    pageLimit={pageLimit}
    pageNeighbours={2}
    setOffset={setOffset}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  />);
  const pages = getAllByText(/^[1-5]$/);
  expect(pages.length).toBe(5)
})

test("correct number of pages show up with next button when pages exceed the number of available blocks", () => {
  const { queryByText } = render(<Paginator
    totalRecords={20}
    pageLimit={pageLimit}
    pageNeighbours={2}
    setOffset={setOffset}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
  />);
  const nextOrPrev = queryByText(/Next\s»/);
  expect(nextOrPrev).not.toBeNull();
})

test("correct number of pages show up with prev button when pages exceed the number of available blocks", () => {
  const { queryByText } = render(<Paginator
    totalRecords={20}
    pageLimit={pageLimit}
    pageNeighbours={2}
    setOffset={setOffset}
    currentPage={20}
    setCurrentPage={setCurrentPage}
  />);
  const nextOrPrev = queryByText(/«\sPrev/);
  expect(nextOrPrev).not.toBeNull();
})

test("next and prev buttons show up when pages exceed the number of available blocks", () => {
  const { queryAllByText } = render(<Paginator
    totalRecords={20}
    pageLimit={pageLimit}
    pageNeighbours={2}
    setOffset={setOffset}
    currentPage={10}
    setCurrentPage={setCurrentPage}
  />);
  const nextOrPrev = queryAllByText(/Next\s»|«\sPrev/);
  expect(nextOrPrev.length).toBe(2);
})

