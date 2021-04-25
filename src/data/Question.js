export class Question {
  constructor(
    question_id,
    question_string,
    min_score,
    max_score,
    min_text,
    max_text,
    score,
  ) {
    this.question_id = question_id;
    this.question_string = question_string;
    this.min_score = min_score;
    this.max_score = max_score;
    this.max_text = max_text;
    this.min_text = min_text;
    this.score = score;
  }
}
