import firebase from 'firebase';

export const initializeFirebase = () => {
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
  messaging.onMessage(payload => { //For showing firebase notification in app (not background)
    navigator.serviceWorker.getRegistration().then((reg) => {
      reg.showNotification('Firebase Notification', payload.notification);
    })
    .catch(console.error)
  })
}

export const askForPermissioToReceiveNotifications = async (callback) => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    localStorage.setItem('tokenDevice', token)
    callback()
  } catch (error) {
    console.error(error);
  }
}
