import * as React from 'react';

interface PaginatorProps {
  currentPage: number;
  pageActiveClass: string;
  pageNextText: string | React.ReactNode;
  pagePrevText: string | React.ReactNode;
  pagePrevClass: string;
  pageNextClass: string;
  pageContainerClass: string;
  pageItemClass: string;
  pageLimit: number;
  pageLinkClass: string;
  pageNeighbours: number;
  setCurrentPage: (page: number) => void;
  setOffset: (offset: number) => void;
  totalRecords: number;
}

declare const Paginator: React.FC<PaginatorProps>;

export { Paginator };
