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
    <div class="container tm-mt-big tm-mb-big">
      <div class="row">
        <div class="col-12 mx-auto tm-login-col">
          <div class="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="tm-block-title mb-4">Welcome to Dashboard, Login</h2>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-12">
                <form  onSubmit={(e) => onSubmit(e)}  method="post" class="tm-login-form">
                  <div class="form-group">
                    <label htmlFor="email">Username</label>
                    <input
                      name="email"
                      type="text"
                      class="form-control validate"
                      id="email"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input
                      name="password"
                      type="password"
                      class="form-control validate"
                      id="password"
                      required
                    />
                  </div>
                  <div class="form-group mt-4">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block text-uppercase"
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
