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
  assessment.setUserId('606c9a4094c4d13c0cbfd43a');
  assessment.setAssessmentName('Quick Assessment');
  let res = await AssessmentAPI().putCompletedAssessment(assessment);
  let json = await res.json();
  expect(res.status).toBe(400);
  expect(res.statusText).toBe('Bad Request');
  expect(json.errors).toBe('No such assessment id found.');
});

it('getUserAssessments() should return matching assessment(s).', async () => {
  let userId = '606c9a4094c4d13c0cbfd43a';
  let assessmentId = '6026848f720e2f5db8c09ca9';
  let res = await AssessmentAPI().getUserAssessments(userId, assessmentId);
  res.forEach((it) => {
    expect(it.user_id).toBe(userId);
    expect(it.assessment_id).toBe(assessmentId);
    console.log(it.answers);
  });
});

it('putCompletedAssessment() with missing assessmentId should return error', async () => {
  let userId = '606c9a4094c4d13c0cbfd423';
  let assessmentId = '';
  await expect(async () => {
    await AssessmentAPI().getUserAssessments(userId, assessmentId);
  }).rejects.toThrow('Invalid ids passed to get.');
});

it('putCompletedAssessment() with missing userId should return error', async () => {
  let assessmentId = '606c9a4094c4d13c0cbfd43a';
  let userId = '';
  await expect(async () => {
    await AssessmentAPI().getUserAssessments(userId, assessmentId);
  }).rejects.toThrow('Invalid ids passed to get.');
});
