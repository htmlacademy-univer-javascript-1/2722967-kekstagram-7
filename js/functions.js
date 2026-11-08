// eslint-disable-next-line no-unused-vars
const checkStringLength = function (string, maxLength) {
  return string.length <= maxLength;
};

// eslint-disable-next-line no-unused-vars
const isPalindrome = function (string) {
  const preparedString = string.toLowerCase().replace(/ /g, '');
  let reversedString = '';

  for (let i = preparedString.length - 1; i >= 0; i--) {
    reversedString += preparedString[i];
  }

  return preparedString === reversedString;
};

// eslint-disable-next-line no-unused-vars
const extractDigits = function (value) {
  const string = String(value);
  let digits = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      digits += string[i];
    }
  }

  if (digits === '') {
    return NaN;
  }

  return parseInt(digits, 10);
};


// Вспомогательная функция: переводит время "ЧЧ:ММ" в количество минут от начала дня
function timeToMinutes(timeString) {
  const parts = timeString.split(':');
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  return hours * 60 + minutes;
}

// Основная функция проверки встречи
function checkMeetingTime(workStart, workEnd, meetingStart, meetingDuration) {
  // Переводим рабочее время и время начала встречи в минуты
  const workStartMins = timeToMinutes(workStart);
  const workEndMins = timeToMinutes(workEnd);
  const meetingStartMins = timeToMinutes(meetingStart);

  // Вычисляем время окончания встречи в минутах
  const meetingEndMins = meetingStartMins + meetingDuration;

  // Встреча должна начаться не раньше начала дня И закончиться не позже его конца
  return meetingStartMins >= workStartMins && meetingEndMins <= workEndMins;
}


// Тестовые вызовы для проверки (и чтобы линтер не ругался на неиспользуемую функцию)
// eslint-disable-next-line no-console
console.log(checkMeetingTime('08:00', '17:30', '14:00', 90)); // true
// eslint-disable-next-line no-console
console.log(checkMeetingTime('8:0', '10:0', '8:0', 120));     // true
// eslint-disable-next-line no-console
console.log(checkMeetingTime('08:00', '14:30', '14:00', 90)); // false
// eslint-disable-next-line no-console
console.log(checkMeetingTime('14:00', '17:30', '08:0', 90));  // false
// eslint-disable-next-line no-console
console.log(checkMeetingTime('8:00', '17:30', '08:00', 900)); // false
