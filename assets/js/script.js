function updateTime() {
  const now = new Date();
  const timeOptions = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };
  const timeString = now.toLocaleString('en-US', timeOptions);
  document.getElementById('clock').textContent = timeString;
}

setInterval(updateTime, 1000); 

var tw = new Typewriter('#typing-text', {
  loop: true,
  delay: 30,
  deleteDelay: 1500
});

var messages = [
  'SpaceLeak open!',
  'Free leak',
  'Site By TibuSpike001',
  'By dsc.gg/skyleak'
];

function typeMessages() {
  for (var i = 0; i < messages.length; i++) {
    tw.typeString(messages[i])
      .pauseFor(2000)
      .deleteAll()
      .pauseFor(100)
      .start();
  }
}

typeMessages();
