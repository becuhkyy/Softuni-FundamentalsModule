function movies(commandsArr) {
  const movies = [];

  for (const command of commandsArr) {
    if (command.includes("addMovie")) {
      const [_, movieName] = command.split("addMovie ");

      movies.push({ name: movieName });
    } else if (command.includes("directedBy")) {
      const [movieName, directorName] = command.split(" directedBy ");

      const movie = movies.find((m) => m.name === movieName);

      if (movie) movie.director = directorName;
    } else if (command.includes("onDate")) {
      const [movieName, movieDate] = command.split(" onDate ");

      const movie = movies.find((m) => m.name === movieName);

      if (movie) movie.date = movieDate;
    }
  }

  const result = movies.filter((m) => m.name && m.director && m.date);

  for (const movie of result) {
    console.log(JSON.stringify(movie));
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
