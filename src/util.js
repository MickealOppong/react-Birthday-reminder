export const getBirthMonth = (dob) => {
  return new Date(dob).getMonth();
}

export const getAge = (dob) => {
  const today = new Date();
  return today.getFullYear() - new Date(dob).getFullYear();
}

export const getBirthdays = (data) => {
  return data.filter((person) => getBirthMonth(person.dob) === new Date().getMonth());
}