/* eslint-disable prettier/prettier */

let config = require('../config.js');

const url = `http://${config.testing.ip}:${config.testing.port}/api`;

const AssessmentAPI = () => {

    const getBasicAssessment = async () => {
        try {
            let res = await fetch(url + '/assessmnent/basic', {
                method: 'GET',
            });
            if (res.ok) {
                return await res.json();
            } else {
                throw new Error('HTTP status: ' + res.status);
            }
        } catch (e) {
            throw new Error('HTTP status: ' + e);
        }
    };

    const putCompletedAssessment = async (assessment) => {
        try {
            let form = new URLSearchParams();
            assessment.forEach(it => form.append(it, assessment[it]));
            let res = await fetch(url + '/assessment/add-complete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: {
                    form,
                },
            });
            if (res.ok) {
                return await res.json();
            } else {
                throw new Error('HTTP status: ' + res.status);
            }

        } catch (e) {
            throw new Error('HTTP status: ' + e);
        }
    };

    return {
        getBasicAssessment,
        putCompletedAssessment,
    };
};

export default AssessmentAPI;
