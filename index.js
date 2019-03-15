function buttonValid() {
  var isSumm = document.getElementsByName("summ")[0].value;
  if (!isSumm) {
  	alert("Введите сумму");
  } else {
    alert(isSumm);
  }
}
