import { useState, useEffect } from 'react';
import SensorValue from './SensorValue.js'
import {urls, entriesUrl} from '../config/configuration.js'

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
            .then(result => setGlucoseValues(result));
    }, []);

    return (
        <div>

            <label> {urls[0]}</label>
            <ul>
                {glucoseValues.map(sgv =>
                    <SensorValue
                        key={sgv._id}
                        sgv={sgv}
                    // onDelete={deleteTodoItemClickHandler}
                    // onClick={toggleTodoItemClickHandler}
                    />
                )}
            </ul>
        </div>
    );
}