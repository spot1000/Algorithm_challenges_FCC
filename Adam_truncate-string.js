function truncateString(str, num) {
  
  if (num <= 3) {
    return str.slice(0, num - str.length) + "...";
  }
  else if (num >= str.length) {
      return str;
  }
  else {
      return str.slice(0, num - str.length - 3) + "...";
  }
}
