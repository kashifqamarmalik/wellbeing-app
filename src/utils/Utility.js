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
