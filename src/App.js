import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản lí công việc</h1>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Thêm công việc
                  <span className="fa fa-times-circle text-right"
                  ></span>
                </h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label>Tên: </label>
                    <input
                      type="text" className="form-control" placeholder="type here"
                      name="name"
                      />
                    <label>Trạng thái: </label>
                    <select
                      className="form-control"
                      required="required"
                      name="status"
                      >
                      <option value={0}>Kích Hoạt</option>
                      <option value={1}>Hủy</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-warning"><i class="fa fa-plus mr-5"></i>Lưu lại</button>&nbsp;
                  <button type="reset" className="btn btn-danger"><i class="fa fa-times mr-5"></i>Hủy bỏ</button>
                </form>

              </div>
            </div>
          </div>
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="submit" className="btn btn-primary"><i class="fa fa-plus mr-5"></i>Thêm công việc</button>
            <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div>
                  <input
                    name="keyword"
                    type="text"
                    className="form-control"
                    placeHoler="Nhập từ khóa..."
                  />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary"><i class="fa fa-search mr-5"></i>Tìm</button>
                  </span>
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                <button type="button" className="btn btn-primary dropdown-toggle"><i class="fa fa-search mr-5"></i>Tìm</button>
                </div>
              </div>
            </div>
            <div className="row">
              
            </div>
          </div>
        </div>
          

      </div>

    );
  }
}

export default App;
