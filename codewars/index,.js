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

const renderGenreList = (genre) => (
  <li className="filter__item" key={genre.name}>
    <input type="radio" name="type" id={genre.type} checked={currentGenre === genre.type} readOnly/>
    <label className="filter__label" htmlFor={genre.type} onClick={() => changeGenreHandler(genre.type)}>
      <svg className="filter__icon" width={genre.iconWidth} height={genre.iconHeight} aria-hidden="true">
        <use xlinkHref={genre.xlinkHref}></use>
      </svg><span className="filter__label-text">{genre.name}</span>
    </label>
  </li>
);
const renderLevelList = (level) => (
  <li className="filter__item" key={level.name}>
    <input type="radio" name="level" id={level.name} checked={currentLevel === level.type} readOnly/>
    <label className="filter__label" htmlFor={level.name} onClick={() => changeLevelHandler(level.type)}><span className="filter__label-text">{level.name}</span>
    </label>
  </li>
);
