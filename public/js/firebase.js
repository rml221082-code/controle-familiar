
(function () {
  const config = window.CONFIG.FIREBASE;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  window.auth = firebase.auth();
  window.db = firebase.firestore();
})();
