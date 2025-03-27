const input = document.getElementById("markdown-input");
const preview = document.getElementById("preview");
const clearBtn = document.getElementById("clear-btn");

function updatePreview() {
  const markdownText = input.value;
  preview.innerHTML = marked.parse(markdownText);
}

input.addEventListener("input", updatePreview);

clearBtn.addEventListener("click", function () {
  input.value = "";
  updatePreview();
});

updatePreview();
