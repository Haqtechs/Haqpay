// register SW
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/service-worker.js')
    .catch(err => console.warn('SW failed', err));
}

// small helpers
function refreshBalance(){
  alert('Balance refreshed (demo).');
}