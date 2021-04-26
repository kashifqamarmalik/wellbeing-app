/* eslint-disable prettier/prettier */

import {URLSearchParams} from 'react-native/Libraries/Blob/URL';

let config = require('../config.js');

//const url = `http://${config.testing.ip}:${config.testing.port}/api`;
const url = config.cloud.uri;

const AssessmentAPI = () => {
    const getBasicAssessment = async () => {
        try {
            let res = await fetch(`${url}/assessment/basic`, {
                method: 'GET',
            });
            if (res.ok) {
                return await res.json();
            } else {
                return res;
            }
        } catch (e) {
            throw new Error(e);
        }
    };

    const putCompletedAssessment = async (assessment) => {
        if (assessment === undefined || assessment.user_id === undefined || assessment.assessment_id === undefined) {
            throw new Error('No valid assessment passed to putCompletedAssessment().');
        }
        try {
            let form = [];
            Object.entries(assessment).forEach((key) => {
                if (key[0] === '_questions' || key[0] === 'questions') {
                    let temp = JSON.stringify(key[1]);
                    let encKey = encodeURIComponent('answers');
                    let encVal = encodeURIComponent(temp);
                    form.push(`${encKey}=${encVal}`);
                }
               let encKey = encodeURIComponent(key[0]);
               let encVal = encodeURIComponent(key[1]);
               form.push(`${encKey}=${encVal}`);
            });
            form = form.join('&');
            let res = await fetch(`${url}/assessment/add-complete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: form,
            });
            if (res.ok) {
                return await res.json();
            } else {
                return res;
            }

        } catch (e) {
            throw new Error(e);
        }
    };

    const getUserAssessments = async (userId, assessmentId) => {
        if (userId === undefined || assessmentId === undefined || userId.length < 24 || assessmentId.length < 24) {
            throw new Error('Invalid ids passed to get.');
        }
        try {
            let res = await fetch(`${url}/assessment/${assessmentId}/user/${userId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            if (res.ok) {
                return await res.json();
            } else {
                return res;
            }
        } catch (e) {
            throw new Error(e);
        }
    };

    return {
        getBasicAssessment,
        putCompletedAssessment,
        getUserAssessments,
    };
};

export default AssessmentAPI;
