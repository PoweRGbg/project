import * as api from "../api/data.js";
import { useHistory } from 'react-router-dom';
window.api = api;

export default function Login() {
  let historyHook = useHistory();

  async function onSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "" || password === "") {
      return alert("All fields are required!");
    }


    await window.api.login(email, password);
    if(sessionStorage.getItem('email')){
        historyHook.push(`/`);
        console.log(`User ${email} logged in!`);
    }

  }

  return (
    <div className="container tm-mt-big tm-mb-big">
      <div className="row">
        <div className="col-12 mx-auto tm-login-col">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="tm-block-title mb-4">Welcome to Meals, Login</h2>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <form  onSubmit={(e) => onSubmit(e)}  method="post" className="tm-login-form">
                  <div className="form-group">
                    <label htmlFor="email">Username</label>
                    <input
                      name="email"
                      type="text"
                      className="form-control validate"
                      id="email"
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control validate"
                      id="password"
                      required
                    />
                  </div>
                  <div className="form-group mt-4">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}