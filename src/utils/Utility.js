export const comparer = (otherArray) => {
  return function (current) {
    return (
      otherArray.filter((other) => {
        return (
          other.description == current.description &&
          other.date == current.date &&
          other._id == current._id
        );
      }).length == 0
    );
  };
};

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const jsonArrayToData = (json) => {
  let dataWorkload = [];
  let dataFeeling = [];
  let currentWeek = getCurrentWeek();

  json.forEach((it) => {
    let date = new Date(it.date_time);
    if (date >= currentWeek.weekStartDate) {
      it.answers.forEach((answer) => {
        switch (answer.question_string) {
          case 'How are you feeling?':
            dataFeeling.push({
              x: date.getUTCDay() + date.getHours() / 24,
              y: answer.score.$numberDecimal,
            });
            break;
          case 'How is your workload?':
            dataWorkload.push({
              x: date.getUTCDay() + date.getHours() / 24,
              y: answer.score.$numberDecimal,
            });
            break;
        }
      });
    }
  });
  dataFeeling = dataFeeling.sort((a, b) =>
    a.x < b.x ? -1 : a.x > b.x ? 1 : 0,
  );
  dataWorkload = dataWorkload.sort((a, b) =>
    a.x < b.x ? -1 : a.x > b.x ? 1 : 0,
  );
  return {dataFeeling, dataWorkload};
};

const getCurrentWeek = () => {
  let today = new Date();

  let weekStartDate = new Date(today);
  weekStartDate.setDate(weekStartDate.getDate() - today.getDay());
  weekStartDate.setHours(0, 0, 0, 0);

  let weekEndDate = new Date(weekStartDate);
  weekEndDate.setDate(weekEndDate.getDate() + 7);

  return {weekStartDate, weekEndDate};
};
