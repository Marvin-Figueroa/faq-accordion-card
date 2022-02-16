const questionContainers = document.querySelectorAll(".question-container");

questionContainers.forEach((questionContainer) => {
  questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle("active");
    questionContainer.nextElementSibling.classList.toggle("show");
  });
});
