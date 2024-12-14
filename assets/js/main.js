// assets/js/main.js

document.addEventListener("DOMContentLoaded", function() {
  const announcementKey = 'announcementShown';
  const announcementExpiryKey = 'announcementExpiry';
  const now = new Date().getTime();
  const oneDay = 24 * 60 * 60 * 1000; // 一天的毫秒数

  const lastShown = localStorage.getItem(announcementKey);
  const expiryTime = localStorage.getItem(announcementExpiryKey);

  if (!lastShown || now > expiryTime) {
    var announcementModal = new bootstrap.Modal(document.getElementById('announcement-modal'));
    announcementModal.show();
    localStorage.setItem(announcementKey, 'true');
    localStorage.setItem(announcementExpiryKey, now + oneDay);
  }
});