function onExpensesSubmit() {
  var category = document.getElementsByName("category")[0].label;
  var summ = document.getElementsByName("summ")[0].value;
  var description = document.getElementsByName("description")[0].value;
  var currency = document.getElementsByName("currency")[0].value;
  if (!summ) {
  	alert("Введите сумму");
  } else if (!description) {
    alert("Введите описание");
  } else {
    alert("Категория: " + category + "\n" + "Описание: " + description + "\n" + "Сумма: " + summ + " " + currency);
  }
}

