const admin = require("firebase-admin");

var serviceAccount = require("./movie-app-firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://movie-app-ed75f.firebaseio.com"
});

const firestore = admin.firestore();
const movies = require('./movie-list.json');

const db = firestore.collection('movies');

movies.map(async movie=> {
	try {
		await db.add(movie);
	}
	catch(e){
		console.log(e);
	}
})