import React from "react";

function Navbar() {
  return (
    <>
      <nav className="home__navbar navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ height: "50px" }} href="#">
            <img
              src="https://assets.glxplay.io/web/images/logoglx.svg"
              alt=""
              height="40px"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Kho Phim
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Phim Điện Ảnh
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Phim Bộ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Phim Thuê
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Khuyến Mãi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hỗ Trợ
                </a>
              </li>
            </ul>
            <form className="d-flex align-items-center">
              <div className="btn__switch d-flex align-items-center me-3">
                <span className="me-2 ">Giao diện mới:</span>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>

              <button
                className="btn btn-outline-primary nav__btn__search"
                type="submit"
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
