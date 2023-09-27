import React, { useState } from 'react';

function Login({setLogin}) {
  const [changeLogin, setChangeLogin] = useState(false);
  const changeLogins = () => {
    setChangeLogin(!changeLogin);
  }

  return (
    
    <>
    {changeLogin? (
       <div className="container">
       <div className="row justify-content-center">

         <div className="col-xl-10 col-lg-12 col-md-9">

           <div className="card o-hidden border-0 shadow-lg my-5">
             <div className="card-body p-0">
               <div className="row">
                 <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                 <div className="col-lg-6">
                   <div className="p-5">
                     <div className="text-center">
                       <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                     </div>
                     <form className="user">
                       <div className="form-group">
                         <input type="email" className="form-control form-control-user"
                           id="exampleInputEmail" aria-describedby="emailHelp"
                           placeholder="Enter Email Address..." />
                       </div>
                       <div className="form-group">
                         <input type="password" className="form-control form-control-user"
                           id="exampleInputPassword" placeholder="Password" />
                       </div>
                       <div className="form-group">
                         <div className="custom-control custom-checkbox small">
                           <input type="checkbox" className="custom-control-input" id="customCheck" />
                           <label className="custom-control-label" for="customCheck">Remember
                             Me</label>
                         </div>
                       </div>
                       <a href="#" className="btn btn-primary btn-user btn-block" onClick={() => setLogin(false)}>
                         Login
                       </a>
                       <hr />
                       <a href="index.html" className="btn btn-google btn-user btn-block">
                         <i className="fab fa-google fa-fw"></i> Login with Google
                       </a>
                       <a href="index.html" className="btn btn-facebook btn-user btn-block">
                         <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                       </a>
                     </form>
                     <hr />
                     <div className="text-center">
                       <a className="small" href="forgot-password.html">Forgot Password?</a>
                     </div>
                     <div className="text-center">
                       <a className="small" href="#" onClick={changeLogins}>Create an Account!</a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>

         </div>

       </div>

     </div>
    )
           
            :(
              <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <form className="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleFirstName"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="exampleLastName"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                        />
                      </div>
                    </div>
                    <a
                      href="login.html"
                      className="btn btn-primary btn-user btn-block"
                    >
                      Register Account
                    </a>
                    <hr />
                    <a href="#" className="btn btn-google btn-user btn-block">
                      <i className="fab fa-google fa-fw"></i> Register with
                      Google
                    </a>
                    <a href="#" className="btn btn-facebook btn-user btn-block">
                      <i className="fab fa-facebook-f fa-fw"></i> Register with
                      Facebook
                    </a>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="#" onClick={changeLogins}>
                      Already have an account? Login!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            )}

    </>

  )
}

export default Login