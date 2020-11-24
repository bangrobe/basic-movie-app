const ratingMixin = {
	methods: {
		getRatingColor() {
			if (this.movie.rating > 7) return '#9adf66';
			if (this.movie.rating > 4) return '#70dcf0';
			return '#e27490';
		}
	}
}

export default ratingMixin
