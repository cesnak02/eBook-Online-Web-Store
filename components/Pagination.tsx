"use client";
import { usePaginationStore } from "@/app/_zustand/paginationStore";
import React from "react";

const Pagination = () => {
  // getting from Zustand store current page and methods for incrementing and decrementing current page
  const { page, incrementPage, decrementPage } = usePaginationStore();
  return (
    <div className="join flex justify-center py-16">
      <button
        className="join-item btn btn-lg bg-yellow-500 text-white hover:bg-white hover:text-yellow-500"
        onClick={() => decrementPage()}
      >
        «
      </button>
      <button className="join-item btn btn-lg bg-yellow-500 text-white hover:bg-white hover:text-yellow-500">
        Page {page}
      </button>
      <button
        className="join-item btn btn-lg bg-yellow-500 text-white hover:bg-white hover:text-yellow-500"
        onClick={() => incrementPage()}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
