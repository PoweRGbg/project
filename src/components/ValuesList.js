import { useState, useEffect } from 'react';
import SensorValue from './SensorValue.js'
import {urls, entriesUrl, useMmol, toMmol} from '../config/configuration.js'
import {createSgv} from '../services/nightscoutService.js'

export default function ValueList(props) {
    let [glucoseValues, setGlucoseValues] = useState([]);

    useEffect(() => {
        let url = urls[0] + entriesUrl;
        fetch(url, {
            method: 'GET',
            headers: {
                "accept": "application/json",
            },
        }).then(res => res.json())
            .then(sgvArray => {
                if(useMmol){
                    sgvArray.map(x => x.sgv = Math.round(x.sgv * toMmol * 10) / 10);
                }
                // map to arrows
                sgvArray.map(x=>{
                    if(x.direction === "Flat"){
                        x.direction = "\u2192";
                    }
                    return x;
                })
                setGlucoseValues(sgvArray)
            }).catch(err => console.log(err));
    }, []);

    function tryToCreate() {
        createSgv();
    }

    return (
        <div>

            <label> {urls[0]}</label>
            <ul>
                {(glucoseValues.length > 0) ? (
                    glucoseValues.map(sgv =>
                        <SensorValue
                            key={sgv._id}
                            sgv={sgv}
                            onClick={() => tryToCreate()}
                        />
                    )
                ) : <li>No values</li>
            }
            </ul>
        </div>
    );
}