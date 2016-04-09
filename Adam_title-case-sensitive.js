function titleCase(str) {
  var titleCase = str.toLowerCase().split(" ");
  titleCase[0].split("");
  for (var i=0; i<titleCase.length; i++) {
    titleCase[i] = titleCase[i].split("");
    titleCase[i][0] = titleCase[i][0].toUpperCase();
    titleCase[i] = titleCase[i].join("");
  }
  return titleCase.join(" ");    
}
