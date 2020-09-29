const axios = require('axios').default;

const mURL = 'https://maas-proxy.cfapps.us10.hana.ondemand.com/74742878-f25a-4762-85d4-65c14a6739df/rpc';

const headers = {
    'Content-Type': 'application/json',
    'apikey': 'Xj5ZoFLdkHTpkEP6ZcYwvYHEaBEQLwm7VRyUG9aCbHWDF7cSyjkJ9cxs9J3sWSBQ'
}

const cDate = new Date().toJSON();

async function createStream() {
    try {
        let response = await axios({
            method: 'post',
            url: mURL,
            data: {
                method: "create",
                params: ["stream", `M_Stream_${cDate}`, {}]
            },
            headers: headers
        });

        return response.data;
    } catch (err) {
        return err;
    }
}

async function listStreamInfo() {
    try {

    } catch (err) {

    }
}
module.exports = {
    createStream
}