import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

const config = {
    apiKey: 'AIzaSyA0I-G7zqI2rWUJ3qMOQDN3M8Mw83Tqyu4',
    authDomain: 'estreet-2e79f.firebaseapp.com',
    projectId: 'estreet-2e79f',
    storageBucket: 'estreet-2e79f.appspot.com',
    messagingSenderId: '486688136462',
    appId: '1:486688136462:web:d5dbda1727b464cd350b5f',
    measurementId: 'G-8TSNFWNJ21',
}

export default function initFirebase() {
    if (!firebase.apps.length) {
        firebase.initializeApp(config)
    } else {
        firebase.app()
    }
}
