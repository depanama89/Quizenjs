/**
 * declarons le variable
 * dans ce travail on doit d'abord selectionner les elements que nous allons exploiter
 * de
 * */
const form = document.getElementById("form__questions");
const resultp = document.getElementById("resultValue");
const result = document.getElementById("result");
const testContainer = document.querySelector(".test_container");
let score = 0;

// definition de la fonction

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const correctAnswer = {
    q1: "Oui",
    q2: "Un langage de programmation côté client",
    q3: "Toutes les réponses ci-dessus",
    q4: "console.log()",
    q5: "== compare les valeurs, === compare les valeurs et le type",
    q6: "true",
  };
  for (let question in correctAnswer) {
    const answer = form.querySelector(`input[name="${question}"]:checked`);
    if (answer && answer.value === correctAnswer[question]) {
      score++;
    }
  }
  testContainer.style.display = "none";
  result.style.display = "flex";
  if (score < Object.keys(correctAnswer).length / 2) {
    resultp.textContent = `votre score est : ${score} sur ${
      Object.keys(correctAnswer).length
    }`;
    resultp.classList.add("failed");
  } else {
    resultp.textContent = `votre score est : ${score} sur ${
      Object.keys(correctAnswer).length
    }`;
    resultp.classList.add("succed");
  }
});
