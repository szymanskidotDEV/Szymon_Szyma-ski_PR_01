'use strict';
let a = 0;
let b = 0;
let operation = 'add';

const calculate = function (a, b) {
  let result = 0;
  switch (operation) {
    case 'add':
      result = a + b;
      break;
    case 'subtract':
      result = a - b;
      break;
    case 'multiply':
      result = a * b;
      break;
    case 'divide':
      b !== 0
        ? (result = a / b)
        : alert('pamiętaj, nigdy nie dziel przez zero.');
      break;
    case 'power':
      result = a ** b;
      break;
  }
  return result;
};

$(document).ready(function () {
  $('.navbar-nav a').click(function () {
    $(this).siblings('a').removeClass('active');
    $(this).addClass('active');
    if ($('.add').hasClass('active')) {
      operation = 'add';
    } else if ($('.subtract').hasClass('active')) {
      operation = 'subtract';
    } else if ($('.multiply').hasClass('active')) {
      operation = 'multiply';
    } else if ($('.divide').hasClass('active')) {
      operation = 'divide';
    } else if ($('.power').hasClass('active')) {
      operation = 'power';
    }
  });
});

$('.c').on('change', function () {
  let userC = Number(document.querySelector('.c').value);
  a = Number(document.querySelector('.a').value);
  b = Number(document.querySelector('.b').value);
  let c = calculate(a, b);
  if (userC === c) {
    alert('You made great math operation, your answer is correct!');
  } else {
    alert(
      `Unfortunately your answer is not correct, try again or press 'Oblicz' to check correct answer`
    );
  }
});

$('.calc').click(function () {
  a = Number(document.querySelector('.a').value);
  b = Number(document.querySelector('.b').value);
  let c = calculate(a, b);
  document.querySelector('.c').value = c;
  return c;
});
