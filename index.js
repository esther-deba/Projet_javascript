const fetchMovies = async () => {
  const films = document.getElementsByClassName('films')[0];
  const response = await fetch('https://ghibliapi.vercel.app/films');
  const movies = await response.json();
  movies.map((movie) => {
    films.appendChild(assembler(movie));
  });
};
const assembler = (film) => {
  const container = document.createElement('div');
  container.className = 'film-container';

  const filmInfo = document.createElement('div');
  filmInfo.className = 'film-info';

  const image = document.createElement('img');
  image.src = film.image;
  image.alt = `couverture du film ${film.title}`;
  const h2 = document.createElement('h2');
  h2.innerText = film.title;
  const p = document.createElement('p');
  p.className = 'director';
  p.innerText = film.director;
  const bottomDiv = document.createElement('div');
  bottomDiv.className = 'bottom';
  const button = document.createElement('button');
  //
  button.innerText = 'View';
  const originalTitle = document.createElement('p');
  originalTitle.className = 'original-title';
  originalTitle.innerText = film.original_title;
  container.appendChild(image);
  filmInfo.appendChild(h2);
  filmInfo.appendChild(p);
  bottomDiv.appendChild(button);
  bottomDiv.appendChild(originalTitle);
  filmInfo.appendChild(bottomDiv);
  container.appendChild(filmInfo);
  button.onclick = () => {
    window.location = `https://www.studioghibli.fr/les-films/`;
  };
  return container;
};
fetchMovies();
