const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');

const resetBtn = document.getElementById('reset');

//make sure Bill and people input does not take letters
document.addEventListener('DOMContentLoaded', function () {
  billInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9.]/g, '');
  });

  peopleInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9.]/g, '');
  });
});

resetBtn.addEventListener('click', function () {
  billInput.value = 0;
  peopleInput.value = 0;
});
