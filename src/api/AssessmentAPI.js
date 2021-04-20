/* eslint-disable prettier/prettier */

import {URLSearchParams} from "react-native/Libraries/Blob/URL";

let config = require('../config.js');

const url = `http://${config.testing.ip}:${config.testing.port}/api`;

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
            let form = new URLSearchParams();
            Object.keys(assessment).forEach(it => {
                form.append(it, assessment[it]);
            });
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
