import movieList from '@/assets/movie-list';

const state = {
	movies: movieList,
	search: '',
	filter: {
		//Defaut value for filter
		key: 'rating',
		order: 'desc'
	}
}

const mutations = {
	SET_SEARCH: (state, search) => {
		state.search = search;
	},
	SET_FILTER: (state, filter) => {
		state.filter = filter;
	}
}

const actions = {
	search ({ commit}, search) {
		commit('SET_SEARCH',search);
	},
	filterAction( {commit}, filter) {
		commit('SET_FILTER', filter);
	}

}

const getters = {
	getMovies: state => {
		return state.movies.filter( movie => movie.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1)
		.sort(compare(state.filter));
	},
	getMovieById: state => id => {
		return state.movies.find(movie => movie.id === id); //movie.id la number, con id la string, nen id tra ve la String
	}
	// Getter tren tuong duong voi code Javascript theo cach cu nhu the nay
	// getMovieById: function(state) {
	// 	return function(id) {
	// 		return state.movies.find(movie=> movie.id === id);
	// 	}
	// }
}
//Compare function
const compare = ({key,order}) => {
	return (a,b) => {
		let result = 0;
		
		if(a[key] > b[key]) {
			result = 1;
		}
		if(a[key] < b[key]) {
			result = -1;
		}

		if(order === 'asc') return result;

		return result * -1;
	}
}


export default {
	state, 
	mutations,
	actions,
	getters
}
