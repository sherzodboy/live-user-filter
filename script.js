"use strict";

const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

getDate();

filter.addEventListener("input", (e) => filterDate(e.target.value));

async function getDate() {
  const res = await fetch("https://randomuser.me/api?results=100");

  const { results } = await res.json();

  // Clear results

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItems.push(li);

    li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}"></img>
      <div class="user-info">
         <h4>${user.name.first}  ${user.name.last}</h4>
         <p>${user.location.city} , ${user.location.country}</p>
      </div>
    `;

    result.appendChild(li);
  });
}

function filterDate(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
