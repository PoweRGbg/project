import '../css/herostyle.css';
import { useState, useEffect } from 'react';
const entriesUrl = '/api/v1/entries';
// const treatmentsUrl = '/api/v1/treatments';
// const profilestsUrl = '/api/v1/profiles';
const urls = ['https://roumen.nightscout.bg'];
const corsUrl = 'http://localhost:8080/'

export default function ContentCard(props) {
    let [sites, setSites] = useState(urls);

    function addSite(e) {
        let newSites = sites;
        newSites.push(e.target.value);
        setSites(newSites);
        console.log(`Added ${e.target.value}`);
    }

    async function getData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors', // no-cors, *cors, same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'omit', // include, *same-origin, omit
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }

    useEffect(() => {
        if (sites.length > 0) {

            let url = sites[0] + entriesUrl;
            console.log(url);
            fetch(url,{
                method: 'GET', 
                headers: {
                    "accept": "application/json",
                  },
            }).then(res => res.json())
            .then(console.log)
                .catch(error => console.error(error));

        }
    }, [sites]);

    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
                <h2 className="tm-block-title">{props.title}</h2>
                <div className="col-12 text-center">
                    <h2 className="tm-block-title mb-4">Nigthscout monitor</h2>
                    <label className="tm-block-title mb-4">Add site URL</label>
                    <input
                        name="username"
                        type="text"
                        className="form-control validate"
                        id="username"
                        required
                        style={{
                            'backgroundColor': '#54657d',
                            color: '#fff',
                            border: 0
                        }}
                        onBlur={addSite} />
                    <table className="media tm-notification-item">
                        <tbody>


                            <tr>
                                <td>test</td>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );



}

