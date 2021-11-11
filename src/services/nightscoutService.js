const urls = ['https://roumen.nightscout.bg'];
const entriesUrl = '/api/v1/entries';
// const treatmentsUrl = '/api/v1/treatments';
// const profilestsUrl = '/api/v1/profiles';

export const getSgv = async () => {
    let url = urls[0] + entriesUrl;
    let response = await fetch(url, {
        method: 'GET',
        headers: {
            "accept": "application/json",
        },
    });
    let result = await response.json();
    return result;
}

export const createSgv = async (sgv) => {
    let response = await fetch(`${urls[0]}${entriesUrl}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(sgv)
    });

    let result = await response.json();

    return result;
}