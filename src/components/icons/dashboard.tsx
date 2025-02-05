import React from "react";

function Dashboard({ classname }: { classname?: string }) {
  return (
    <svg
      className={`icon icon-tabler icon-tabler-layout-dashboard ${classname}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4h6v8h-6z" />
      <path d="M4 16h6v4h-6z" />
      <path d="M14 12h6v8h-6z" />
      <path d="M14 4h6v4h-6z" />
    </svg>
  );
}

export default Dashboard;
