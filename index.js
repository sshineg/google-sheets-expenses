function buttonValid() {
  var summ = document.getElementsByName("summ")[0].value;
  var description = document.getElementsByName("description")[0].value;
  if (!summ) {
  	alert("Введите сумму");
  } else if (!description) {
    alert("Enter desc");
  } else {
    alert(summ + "\n" + description);
  }
}

