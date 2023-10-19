import React from "react";
import { useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

import DataTable from "datatables.net-bs5";
import "datatables.net-bs5/css/dataTables.bootstrap5.css";

function TableView() {
  useEffect(() => {
    const table = new DataTable("#myTable", {
      paging: true, // ปิดการแบ่งหน้า
      searching: true, // ปิดการค้นหา
      info: true, // ปิดข้อมูลจำนวนแถวทั้งหมด
    });
    return () => {
      table.destroy(); // ทำลาย DataTable เมื่อคอมโพเนนต์ถูกทำลาย
    };
  }, []);

  const arrayData = [];

  for (let index = 0; index < 100; index++) {
    arrayData.push(index);
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Tables /</span> Basic Tables
      </h4>

      <div className="card">
        <h5 className="card-header">Table Basic</h5>
        <div className="table-responsive text-nowrap p-4">
          <table id="myTable" className="table ">
            <thead>
              <tr>
                <th>Project</th>
                <th>Client</th>
                <th>Users</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {arrayData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <i className="fab fa-angular fa-lg text-danger me-3"></i>{" "}
                      <strong>Angular Project {item}</strong>
                    </td>
                    <td>Albert Cook</td>
                    <td>
                      <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                        <li
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          className="avatar avatar-xs pull-up"
                          title="Lilian Fuller"
                        >
                          <img
                            src="/src/assets/img/avatars/5.png"
                            alt="Avatar"
                            className="rounded-circle"
                          />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          className="avatar avatar-xs pull-up"
                          title="Sophia Wilkerson"
                        >
                          <img
                            src="/src/assets/img/avatars/6.png"
                            alt="Avatar"
                            className="rounded-circle"
                          />
                        </li>
                        <li
                          data-bs-toggle="tooltip"
                          data-popup="tooltip-custom"
                          data-bs-placement="top"
                          className="avatar avatar-xs pull-up"
                          title="Christina Parker"
                        >
                          <img
                            src="/src/assets/img/avatars/7.png"
                            alt="Avatar"
                            className="rounded-circle"
                          />
                        </li>
                      </ul>
                    </td>
                    <td>
                      <span className="badge bg-label-primary me-1">
                        Active
                      </span>
                    </td>
                    <td>
                      <Dropdown
                        className="position-relative z-10000"
                        drop="start"
                      >
                        <Dropdown.Toggle
                          variant="link"
                          className="btn p-0 dropdown-toggle hide-arrow d-inline z-10000"
                        >
                          <i className="bx bx-dots-vertical-rounded text-dark"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="position-absolute">
                          {arrayData.map((item, index2) => {
                            if (index2 <= 13) {
                              return (
                                <>
                                  <Dropdown.Item key={index2}>
                                    <i className="bx bx-edit-alt me-1"></i> Edit{" "}
                                    {item}
                                  </Dropdown.Item>
                                </>
                              );
                            }
                          })}
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableView;
