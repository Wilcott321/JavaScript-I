/* Movie list displays information about the top movies released this
weekend. When movie title is clicked, movie title, release date, duration,
and featured actors are displayed */

/* Movie list */
var movies = {
	'Dr. Strange': {
		title: 'Dr. Strange',
		releaseDate: '4 November 2016',
		duration: '116 mins',
		actors: ['Benedict Cumberbatch', 'David Ejiofor', 'Tilda Swanson'],
		rating: 'PG-13'
	},
	'Arrival': {
		title: 'Arrival',
		releaseDate: '11 November 2016',
		duration: '116 mins',
		actors: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
		rating: 'PG-13'
	},
	'Trolls': {
		title: 'Trolls',
		releaseDate: '4 November 2016',
		duration: '92 mins',
		actors: ['Anna Kendrick', 'Justin Timberlake', 'Zooey Deschanel'],
		rating: 'PG'
	},
	'Almost Christmas': {
		title: 'Almost Christmas',
		releaseDate: '11 November 2016',
		duration: '112 mins',
		actors: ['Kimberly Elise', 'Danny Glover', 'Omar Epps'],
		rating: 'PG-13'
	}
}


/* Test

var movie = movies["Almost Christmas"];
console.log(movie.title);
console.log(movie.releaseDate);
console.log(movie.duration);
for (i in movie.actors) {
	console.log(movie.actors[i]);
}
console.log(movie.rating);

*/

/* Click function for displaying info */