import {Assessment} from '../src/data/Assessment';
import {Question} from '../src/data/Question';

it('score should be 5 after setting to 5, multiple questions in array', () => {
  let id_string = 'q_id2';
  let question1 = new Question('q_id', 'q_string', 0, 10, 'min', 'max', -1);
  let question2 = new Question(id_string, 'q_string', 0, 10, 'min', 'max', -1);
  let question3 = new Question('q_id3', 'q_string', 0, 10, 'min', 'max', -1);

  let assessment = new Assessment(
    '6026848f720e2f5db8c09ca8',
    [question1, question2, question3],
    'Hello',
  );
  assessment.setQuestionScore(id_string, 5);
  expect(
    assessment.questions[
      assessment.questions.findIndex(
        (question) => question.question_id === id_string,
      )
    ].score,
  ).toBe(5);
});

it('score should be 5 after setting to 5, only single questions in array', () => {
  let question1 = new Question('q_id', 'q_string', 0, 10, 'min', 'max', -1);

  let assessment = new Assessment(
    '6026848f720e2f5db8c09ca8',
    [question1],
    'Hello',
  );
  assessment.setQuestionScore('q_id', 5);
  expect(
    assessment.questions[
      assessment.questions.findIndex(
        (question) => question.question_id === 'q_id',
      )
    ].score,
  ).toBe(5);
});

it('question score after setting with non existing id should be -1', () => {
  let question1 = new Question('q_id', 'q_string', 0, 10, 'min', 'max', -1);
  let assessment = new Assessment(
    '6026848f720e2f5db8c09ca8',
    question1,
    'Hello',
  );
  assessment.setQuestionScore('qid', 5);
  expect(assessment.questions[0].score).toBe(-1);
});

it('init with question but no array, questions should still be array with length 1', () => {
  let question1 = new Question('q_id', 'q_string', 0, 10, 'min', 'max', -1);

  let assessment = new Assessment(
    '6026848f720e2f5db8c09ca8',
    question1,
    'Hello',
  );
  expect(assessment.questions.length).toBe(1);
});
