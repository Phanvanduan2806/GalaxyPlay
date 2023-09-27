import React from 'react'

function Users() {
  return (
    <>
    <h2>User Categories</h2>
    <div className='row'>
        <div className='col col-md-6'>
            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#add__categories">Add user</button>
        </div>
    </div>
    <div className='row'>
        <div className='col col-md-6'>
            <form className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search user" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                </div>
            </form>
        </div>
    </div>
    <div className='table__heading'>Category:</div>
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">No.</th>
                <th scope="col">Tên đăng nhập</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Email</th>
                <th scope="col">Điện thoại</th>
                <th scope="col">Vai trò</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>phanvanduan2806</td>
                <td>Phan Văn Duẩn</td>
                <td>phanvanduan2806@gmail.com</td>
                <td>0386037677</td>
                <td>Quản trị</td>
                <td className='td__action'>
                    <button className='btn btn-primary'>Sửa</button>
                    <button className='btn btn-danger ms-2'>Xoá</button>
                </td>
            </tr>
        </tbody>
    </table>
    <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
            <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1" aria-disabled="true"><i className="fa-solid fa-arrow-left"></i></a>
            </li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item">
                <a className="page-link" href="#"><i className="fa-solid fa-arrow-right"></i></a>
            </li>
        </ul>
    </nav>
    {/* Modal */}
    <form className="modal fade" id="add__categories" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='row'>
                        <div className='col'>
                            <div class="form-group">
                                <label>Tên đăng nhập</label>
                                <input type="text" class="form-control" id="" aria-describedby="emailHelp" placeholder="Tên đăng nhập" />
                            </div>
                            <div class="form-group">
                                <label>Họ và tên</label>
                                <input type="name" class="form-control" id="" aria-describedby="emailHelp" placeholder="Họ và tên" />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control" id="" aria-describedby="emailHelp" placeholder="Nhập địa chỉ email" />
                            </div>
                            <div class="form-group">
                                <label>Số điện thoại</label>
                                <input type="email" class="form-control" id="" aria-describedby="emailHelp" placeholder="Số điện thoại" />
                            </div>
                            <div class="form-group">
                                <label>Vai trò</label>
                                        <select class="form-control" id="">
                                            <option>Người dùng</option>
                                            <option>Người kiểm duyệt</option>
                                            <option>Quản trị viên</option>
                                        </select>
                            </div>
                        </div>
                        <div className='col col-md-4'>
                            <div class="form-group">
                                <label for="exampleFormControlFile1">Images previews</label>
                                <div className='choose__image__preview'>
                                    <img src="https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/337818497_243947048064441_6800968379024616139_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=1l7qeBwT-0AAX_sBJQU&_nc_ht=scontent.fdad1-2.fna&oh=00_AfAcq6LjPF19QifPMxJ88qjn-3aAxAIJDbn-zm0GYU_9YQ&oe=650485F6" alt="" />
                                </div>
                                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </form>
</>
  )
}

export default Users