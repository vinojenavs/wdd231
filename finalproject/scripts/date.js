const year = document.querySelector('#currentyear');
const lastModif = document.querySelector('#lastModified');

function displayCurrentYear() { year.innerHTML = new Date().getFullYear(); };
displayCurrentYear();

lastModif.innerHTML = 'Last Updated' + document.lastModified;