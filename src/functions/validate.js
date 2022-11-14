const EmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim;

const validate = (name, email, message) => {
  let count = 0;
  if (!name.trim()) {
    count += 1;
  }
  if (!EmailRegex.test(email)) {
    count += 1;
  }
  if (!message.trim()) {
    count += 1;
  }
  return !count;
};

export default validate;
