import AssessmentAPI from '../src/api/AssessmentAPI';
import {Assessment} from '../src/data/Assessment';
import 'isomorphic-fetch';

it('getBasicAssessment() should return basic assessment', async () => {
  let res = await AssessmentAPI().getBasicAssessment();
  console.log(res);
  expect(res.assessment_name).toBe('Quick Assessment');
  expect(res._id).toBe('6026848f720e2f5db8c09ca9');
});

it('putCompletedAssessment() with missing parameters should return error', async () => {
  let assessment = new Assessment();
  await expect(async () => {
    await AssessmentAPI().putCompletedAssessment(assessment);
  }).rejects.toThrow('No valid assessment passed to putCompletedAssessment().');
});

it('putCompletedAssessment() with invalid assessment_id should return error', async () => {
  let assessment = new Assessment('6026848f720e2f5db8c09ca8', [], 'Hello');
  assessment.setUserId('603545c86a1d7a4e903d54e4');
  assessment.setAssessmentName('Assessment name 1');
  let res = await AssessmentAPI().putCompletedAssessment(assessment);
  let json = await res.json();
  expect(res.status).toBe(400);
  expect(res.statusText).toBe('Bad Request');
  expect(json.errors).toBe('No such assessment id found.');
});
