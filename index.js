function buttonValid() {
  var summ = document.getElementsByName("summ")[0].value;
  if (!summ) {
  	alert("Введите сумму");
  } else {
    alert(summ);
  }
}
