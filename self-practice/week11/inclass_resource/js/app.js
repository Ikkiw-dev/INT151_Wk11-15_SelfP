import { loadQuotes } from "./quotemanagement.js";

function createCard(quote) {
  const card = document.createElement("div");
  card.className = "quote-card";
  card.dataset.id = quote.id;

  const content = document.createElement("p");
  content.textContent = `"${quote.content}"`;
  const author = document.createElement("p");
  author.textContent = quote.author;

  card.appendChild(content);
  card.appendChild(author);

  const divActions = document.createElement("div");
  divActions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.dataset.id = quote.id;
  editBtn.textContent = "Edit";
  editBtn.className = "edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.dataset.id = quote.id;
  deleteBtn.textContent = "delete";
  deleteBtn.className = "delete";

  divActions.appendChild(editBtn);
  divActions.appendChild(deleteBtn);
  card.appendChild(divActions);

  return card;
}

document.addEventListener("DOMContentLoaded", async () => {
  const quoteList = document.getElementById("quoteList");
  const quotes = await loadQuotes();
  
  quotes.forEach((quote) => quoteList.appendChild(createCard(quote)));
});