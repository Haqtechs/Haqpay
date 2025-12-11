// register SW
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./service-worker.js')
    .catch(err => console.warn('SW failed', err));
}

// small helpers
function refreshBalance(){
  alert('Balance refreshed (demo).');
}
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // Show your install button
  document.getElementById("installBtn").style.display = "block";
});

document.getElementById("installBtn").addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  const result = await deferredPrompt.userChoice;

  console.log(result.outcome);

  deferredPrompt = null;
});
