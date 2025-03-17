function calculatelove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();

  if (name1 === "" || name2 === "") {
    alert("Please enter both name");
  } else {
    const lovePresentage = Math.floor(Math.random() * 101);

    const result = document.getElementById("result");
    result.innerHTML = `${name1} and ${name2}'s love percentage: ${lovePresentage}`;

    if (lovePresentage < 30) {
      result.innerHTML += "<br> Not a Great Match.Keeping looling";
    } else if (lovePresentage >= 30 && lovePresentage < 70) {
      result.innerHTML += "<br> There is a potential. Give it try!";
    } else {
      result.innerHTML += "<br> Great Match! Love is in the Air!";
    }
  }
}
