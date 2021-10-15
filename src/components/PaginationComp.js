import React from "react";

const PaginationComp = () => {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a className="page-link" href="1">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="2">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="3">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="4">
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="5">
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="6">
                6
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginationComp;
