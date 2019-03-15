function buttonValid() {
  var isSumm = document.getElementsByName("summ")[0].value;
  var description = document.getElementsByName("description")[0].value;
  if (!isSumm) {
  	alert("Введите сумму");
  } else if (!description) {
    alert("Enter desc");
  } else {
    alert(isSumm + "\n" + description);
  }
}

