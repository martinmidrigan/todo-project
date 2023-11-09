function onAddParagraph() {
  const newParagraph = document.createElement('p');
  newParagraph.className = 'removable-paragraph';
  newParagraph.innerHTML = prompt('To do');
  newParagraph.addEventListener('click', onRemoveParagraph);

  const removableParagraphs = document.getElementById('removable-paragraphs');
  removableParagraphs.append(newParagraph);

  const endMessage = document.getElementById('end-message');
  endMessage.style.display = 'none';
}

function onRemoveParagraph(event) {
  const targetElement = event.target;
  targetElement.parentNode.removeChild(targetElement);

  const removableParaphs = document.querySelectorAll('.removable-paragraph');

  if (removableParaphs.length === 0) {
    const endMessage = document.getElementById('end-message');
    endMessage.style.display = 'block';
  }
}

const removableParaphs = document.querySelectorAll('.removable-paragraph');

for (const removableParaph of removableParaphs) {
  removableParaph.addEventListener('click', onRemoveParagraph);
}

const addParagraphButton = document.getElementById('add-paragraph-button');
addParagraphButton.addEventListener('click', onAddParagraph);
