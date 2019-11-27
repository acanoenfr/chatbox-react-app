import Rebase from 're-base'
import firebase from "firebase/app"
import "firebase/database"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCjqc21p4V-8H8t7S-8yArI1fLRvKrZwFc",
    authDomain: "chatbox-f1231.firebaseapp.com",
    databaseURL: "https://chatbox-f1231.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
