const bangkok = document.getElementById('bangkok');
const jerusalem = document.getElementById('jerusalem');
const tokyo = document.getElementById('tokyo');
const london = document.getElementById('london');

setInterval(() => {
  const now = new Date();

  const bangkokTime = new Date();
  bangkokTime.setHours(bangkokTime.getHours() + 5);

  const londonTime = new Date();
  londonTime.setHours(londonTime.getHours() - 2);

  const tokyoTime = new Date();
  tokyoTime.setHours(tokyoTime.getHours() + 7);

  jerusalem.innerHTML = now.toLocaleTimeString('en-US', { hour12: false });
  bangkok.innerHTML = bangkokTime.toLocaleTimeString('en-US', { hour12: false });
  london.innerHTML = londonTime.toLocaleTimeString('en-US', { hour12: false });
  tokyo.innerHTML = tokyoTime.toLocaleTimeString('en-US', { hour12: false });
}, 1000);
