/********************************************************************
 Isaac Young
 table sort
 *******************************************************************/

 // The array of objects, one object for each artist.
 
 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ]

 // complete with code to select and populate the table
 document.addEventListener('DOMContentLoaded', function() {
  const table = document.getElementById('bhangra');
  const headerRow = table.insertRow();
  const nameHeader = document.createElement('th');
  nameHeader.textContent = 'Name';
  headerRow.appendChild(nameHeader);
  const birthYearHeader = document.createElement('th');
  birthYearHeader.textContent = 'Date of Birth';
  headerRow.appendChild(birthYearHeader);
  const linkHeader = document.createElement('th');
  linkHeader.textContent = 'Link';
  headerRow.appendChild(linkHeader);

  artists.forEach(artist => {
    const row = table.insertRow();
    const nameCell = row.insertCell(0);
    const birthYearCell = row.insertCell(1); 
    nameCell.textContent = artist.name;
    birthYearCell.textContent = artist.birthYear;
    const linkCell = row.insertCell(2);
    const link = document.createElement('a');
    link.href = artist.link;
    link.textContent = 'Watch Video';
    linkCell.appendChild(link);
  });

  function shuffleRows() {
    const rows = Array.from(table.rows).slice(1);
    for (let i = rows.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [rows[i], rows[j]] = [rows[j], rows[i]];
    }
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    rows.forEach(row => table.appendChild(row));
  }

  function sortByName() {
    const rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent));
    table.innerHTML = '';
    table.appendChild(headerRow);
    table.append(...rows);
  }

  function sortByYear() {
    const rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => a.cells[1].textContent - b.cells[1].textContent);
    table.innerHTML = '';
    table.appendChild(headerRow);
    table.append(...rows);
  }

  document.getElementById('shuffle').addEventListener('click', shuffleRows);
  document.getElementById('sortByName').addEventListener('click', sortByName);
  document.getElementById('sortByYear').addEventListener('click', sortByYear);
});
