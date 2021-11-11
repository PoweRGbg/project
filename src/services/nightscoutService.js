import { urls, entriesUrl, useMmol, toMmol } from '../config/configuration.js'

export const getSgv = async () => {
    let url = urls[0] + entriesUrl;
    fetch(url, {
        method: 'GET',
        headers: {
            "accept": "application/json",
        },
    }).then(res => res.json())
        .then(sgvArray => {
            if (useMmol) {
                sgvArray.map(x => x.sgv = Math.round(x.sgv * toMmol * 10) / 10);
            }
            // map to arrows
            sgvArray.map(x => {
                if (x.direction === "Flat") {
                    x.direction = "\u2192";
                }
                return x;
            })
            return sgvArray;
        }).catch(err => console.log(err));
}

export const createSgv = async (sgv) => {
    let url = urls[0] + entriesUrl;

    sgv = [
        {
            type: "sgv",
            dateString: Date.now().toString(),
            date: Date.now(),
            sgv: 110,
            direction: "Flat",
            noise: 0,
            filtered: 0,
            unfiltered: 0,
            rssi: 0
        }
    ]
    try {
        let response = await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sgv)
        });
        let result = await response.json();
        console.log(`Server returned ${result}`);
        return result;
    } catch (error) {
        console.error(error)
    };

}