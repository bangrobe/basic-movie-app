import firebase from 'firebase';
//Vao Project Settings - tao 1 app
var firebaseConfig = {
	apiKey: "AIzaSyDEiZrIU6QDVbHxHHb6prjYDqEmS6FMXwM",
	authDomain: "movie-app-ed75f.firebaseapp.com",
	databaseURL: "https://movie-app-ed75f.firebaseio.com",
	projectId: "movie-app-ed75f",
	storageBucket: "movie-app-ed75f.appspot.com",
	messagingSenderId: "350862414649",
	appId: "1:350862414649:web:5b989eecb6e6b088f60ee8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;