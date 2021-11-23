
import * as api from '../api/data.js';
import { useHistory } from 'react-router-dom';

window.api = api;

export default function RegisterUser(props){
    let historyHook = useHistory();

    async function onSubmit(event){
        event.preventDefault();
        let formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');
    
        if(email === '' || password === '' || rePass === ''){
            return alert('All fields are required!');
        }
    
        if(password !== rePass){
            return alert('Passwords don\'t match!');
        }
    
        await window.api.register(email, password);
        if(sessionStorage.getItem('email')){
            historyHook.push(`/`);
            console.log(`User ${email} logged in!`);
        }
        console.log(`User ${email} registered and logged in!`);
        // ctx.page.redirect('/');
    }

    return (
        <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-12 mx-auto tm-login-col">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="tm-block-title mb-4">Welcome Meals, Register</h2>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <form onSubmit={(e) => onSubmit(e)} className="tm-login-form">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
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
                    <div className="form-group mt-3">
                      <label htmlFor="password">Repeat password</label>
                      <input
                        name="rePass"
                        type="password"
                        className="form-control validate"
                        id="rePass"
                        required
                      />
                    </div>
                    <div className="form-group mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-uppercase"
                      >
                        REGISTER
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