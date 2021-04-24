export class Assessment {
  constructor(assessment_id, questions, comment) {
    this.user_id = '';
    this.assessment_id = assessment_id;
    this.questions = questions;
    this.comment = comment;
    this.assessment_name = '';
  }

  setQuestionScore(question_id, score) {
    let index = this.questions.findIndex(
      (question) => question.question_id === question_id,
    );
    if (index >= 0) {
      this.questions[index].score = score;
    }
  }

  set questions(questions) {
    if (questions === undefined) {
      this._questions = [];
    } else if (questions.constructor !== Array) {
      this._questions = [questions];
    } else {
      this._questions = questions;
    }
  }

  get questions() {
    return this._questions;
  }

  setUserId(user_id) {
    this.user_id = user_id;
  }

  setAssessmentName(assessment_name) {
    this.assessment_name = assessment_name;
  }
}
