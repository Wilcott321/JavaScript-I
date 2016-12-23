/* Movie list displays information about the top movies released this
weekend. When movie title is clicked, movie title, release date, duration,
and featured actors are displayed */

/* Movie list protoype function */
function movie(title, duration, rating, starring, gross) {
	this.title = title;
  	this.duration = duration;
  	this.rating = rating;
  	this.starring = starring;
  	this.gross = gross;
}

/* Define new objects with constructor notation */
var filmOne = new movie('Avatar', '2h 42m', 'rated PG-13', ['Starring Sam Worthington', '  Zoe Saldana'], 'Gross: $2,787,965,087');
var filmTwo = new movie('Titanic', '3h 15m', 'rated PG-13', ['Starring Leonardo DiCaprio', '  Kate Winslet'], 'Gross: $2,186,772,302');
var filmThree = new movie('Star Wars: The Force Awakens', '2h 15m', 'rated PG-13', ['Starring Harrison Ford', '  Mark Hamill'], 'Gross: $2,068,178,225');
var filmFour = new movie('Jurassic World', '2h 5m', 'rated PG-13', ['Starring Chris Pratt', '  Bryce Dallas Howard'], 'Gross: $1,670,400,637');
var filmFive = new movie('The Avengers', '2h 23m', 'rated PG-13', ['Starring Robert Downey Jr.', '  Mark Ruffalo'], 'Gross: $1,519,557,910');
var filmSix = new movie('Furious 7', '2h 20m', 'rated PG-13', ['Starring Vin Diesel', '  Paul Walker'], 'Gross: $1,516,045,911');
var filmSeven = new movie('Avengers: Age of Ultron', '2h 22m', 'rated PG-13', ['Starring Robert Downey Jr.', '  James Spader'], 'Gross: $1,405,413,868');
var filmEight = new movie('Harry Potter and the Dealthly Hallows: Part 2', '2h 10m', 'rated PG-13', ['Starring Daniel Radcliffe', '  Ralph Fiennes'], 'Gross: $1,341,511,219');
var filmNine = new movie('Frozen', '1h 49m', 'rated PG', ['Starring Idina Menzel', '  Kristen Bell'], 'Gross: $1,287,000,000');
var filmTen = new movie('Iron Man 3', '2h 15m', 'rated PG-13', ['Starring Robert Downey Jr.', '  Gweneth Paltrow'], 'Gross: $1,215,439,994');


