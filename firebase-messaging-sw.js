importScripts('https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.1.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyDehlnXpT6SngVpVuyp7c2sRX4AGYxlY2w",
    authDomain: "boilerplate-react-pwa-fcm.firebaseapp.com",
    databaseURL: "https://boilerplate-react-pwa-fcm.firebaseio.com",
    projectId: "boilerplate-react-pwa-fcm",
    storageBucket: "boilerplate-react-pwa-fcm.appspot.com",
    messagingSenderId: "138477924028",
    appId: "1:138477924028:web:7d2262f03c8bdd71"
});

const messaging = firebase.messaging();