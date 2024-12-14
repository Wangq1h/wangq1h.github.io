// assets/js/main.js

document.addEventListener("DOMContentLoaded", function() {
  if (!sessionStorage.getItem('announcementShown')) {
    var announcementModal = new bootstrap.Modal(document.getElementById('announcement-modal'));
    announcementModal.show();
    sessionStorage.setItem('announcementShown', 'true');
  }
});