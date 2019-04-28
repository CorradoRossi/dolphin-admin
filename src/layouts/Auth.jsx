import React from 'react';

class AuthLayout extends React.Component {
    render() {
        return (
            <div className="form-screen">
                <a href="/home/index" className="spur-logo"> 
                    <img 
                        className="logo" 
                        src={require('../assets/img/logo.svg')} 
                        alt='Dolphin' 
                    />
                    <span>Dolphin</span>
                </a>
                <div className="card account-dialog">
                    <div className="card-header bg-primary text-white"> Please sign in </div>
                    <div className="card-body">
                        <form action="#!">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" for="customCheck1">Remember me</label>
                                </div>
                            </div>
                            <div className="account-dialog-actions">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                                <a className="account-dialog-link" href="signup.html">Create a new account</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthLayout;