<template>
<div class="home">
<nav-bar></nav-bar>
  <div id="main-section">
    <side-bar></side-bar>
    <movie-list></movie-list>
  </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import MovieList from '../components/MovieList';

export default {
  name: 'Home',
  components: { NavBar, SideBar, MovieList }
}
</script>
<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;

		#main-section {
			display: flex;
			margin-top: 50px;
		}
	}
</style>
