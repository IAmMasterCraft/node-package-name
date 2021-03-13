const axios = require('axios');

exports.checkName = async (name) => {
    try {
        const response = await axios.get(`https://lit-hamlet-93900.herokuapp.com/api/check-package/${name}`);
        // console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: `E don finally happen, app don crash!<br/><code>>>&nbsp;ERROR: ${(error.message) ? error.message : "something went wrong!"}</code>`
        };
    }
}