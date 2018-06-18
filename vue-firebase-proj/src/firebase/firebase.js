import { initializeApp} from 'firebase'
import * as firebase from 'firebase';

export const firebaseapp = initializeApp( {
    apiKey: "AIzaSyDsqnwyY5p3T7sS9KmZ2_ndbROvFFH5j94",
    authDomain: "uni-project-c3b29.firebaseapp.com",
    databaseURL: "https://uni-project-c3b29.firebaseio.com",
    projectId: "uni-project-c3b29",
    storageBucket: "",
    messagingSenderId: "58512999093"
})
console.log('firebaseapp',firebaseapp)

export const db = firebaseapp.database();
