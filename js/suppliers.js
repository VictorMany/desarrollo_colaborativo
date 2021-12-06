const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");

function changeCards(card) {
  switch (card) {
    case 1:
      card1.style.display = "block";
      card2.style.display = "none";
      card3.style.display = "none";
      card4.style.display = "none";
      break;
    case 2:
      card1.style.display = "none";
      card2.style.display = "block";
      card3.style.display = "none";
      card4.style.display = "none";
      break;
    case 3:
      card1.style.display = "none";
      card2.style.display = "none";
      card3.style.display = "block";
      card4.style.display = "none";
      break;
    case 4:
      card1.style.display = "none";
      card2.style.display = "none";
      card3.style.display = "none";
      card4.style.display = "block";
      break;
  }
}
