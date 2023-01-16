function repeatStr(n, s) {
  return s.repeat(n);
}

function minMinMax(array) {
  const sortedArray = array.sort((a, b) => a - b);
  let minimumAbsent;
  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i + 1] > sortedArray[i] + 1) {
      minimumAbsent = sortedArray[i] + 1;
      break;
    }
  }
  return [Math.min(...array), minimumAbsent, Math.max(...array)]
}

const renderTimeSlot = (element) => (
  <label className='custom-radio booking-form__date' key={element.time}>
    <input
      type='radio'
      id={element.time}
      name='date'
      required
      disabled={!element.isAvailable}
      readOnly
    />
    <span className='custom-radio__label'>{element.time}</span>
  </label>
);

const getToken = () => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};
const saveToken = (token) => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

const dropToken = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};