// Variables
var COLD_DEGREE = 10;
var HOT_DEGREE = 25;

// Chosing elements
var convertorForm = document.querySelector('.convertor-form');
var celsiusValueInput = convertorForm.querySelector('.celsius-input');
var fahrenheitInput = convertorForm.querySelector('.fahrenheit-input');
var convertorBackground = document.querySelector('.convertor-body');

convertorForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  // Taking celsius input value
  var celsiusInput = parseFloat(celsiusValueInput.value.trim(), 10);

  // Calculating into fahrenheit
  if (!isNaN(celsiusInput)) {
    celsiusValueInput.value = celsiusValueInput.value.trim();
    var fahrenheitDegree = ((celsiusInput * 9/5) + 32).toFixed(1);
    fahrenheitInput.value = fahrenheitDegree;
  } else {
    celsiusValueInput.value = '';
    fahrenheitInput.value = '';
    alert('Iltimos, faqat son kiriting!');
  }

  // Hot or cold background
  if (celsiusInput >= HOT_DEGREE) {
    convertorBackground.classList.add('bg-warning');
    convertorBackground.classList.remove('bg-info');
  } else if (celsiusInput <= COLD_DEGREE) {
    convertorBackground.classList.add('bg-info');
    convertorBackground.classList.remove('bg-warning');
  } else {
    convertorBackground.classList.remove('bg-warning');
    convertorBackground.classList.remove('bg-info');
  }
});