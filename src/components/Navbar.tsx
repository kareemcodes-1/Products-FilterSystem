import React from "react";
import { useProduct } from "../provider/ProductProvider";

const Navbar = () => {

    const {filterProducts} = useProduct();

  return (
    <nav className="flex items-center justify-center w-[50%]">
      <details className="dropdown">
        <summary className="btn m-1 !bg-transparent">Filter</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li>
            <button onClick={() => filterProducts('cheap')}>Cheap</button>
          </li>
          <li>
            <button onClick={() => filterProducts('expensive')}>Expensive</button>
          </li>
          <li>
            <button onClick={() => filterProducts('popular')}>Popular</button>
          </li>
        </ul>
      </details>
    </nav>
  );
};

export default Navbar;
