export const unixToDate = (unix: string) => {
  const milliseconds = Number(unix) * 1000;
  return new Date(milliseconds);
};

export const daysSinceRelationshipStarted = (unix: string) => {
  const relationshipDate = unixToDate(unix);
  const today = new Date();

  const elapsed = today.getTime() - relationshipDate.getTime();
  const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

  let message;

  if (days === 0) {
    message = "less than a day together!";
  } else if (days === 1) {
    message = "1 day together!";
  } else {
    message = `${days} days together!`;
  }
  return message;
};
