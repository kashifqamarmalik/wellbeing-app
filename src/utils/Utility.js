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

export const jsonArrayToData = (json) => {
  let dataWorkload = [];
  let dataFeeling = [];
  json.forEach((it) => {
    let date = new Date(it.date_time);
    if (date > Date.now() - 604800000) {
      it.answers.forEach((answer) => {
        switch (answer.question_string) {
          case 'How are you feeling?':
            dataFeeling.push({x: date.getDate(), y: answer.score.$numberDecimal});
            break;
          case 'How is your workload?':
            dataWorkload.push({x: date.getDate(), y: answer.score.$numberDecimal});
            break;
        }
      });
    }
  });
  console.log(dataFeeling);
  console.log(dataWorkload);
  return {dataFeeling, dataWorkload};
};
