//make sure Bill input does not take letters
document.addEventListener('DOMContentLoaded', function () {
  var billInput = document.getElementById('bill');
  billInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9.]/g, '');
  });
});
