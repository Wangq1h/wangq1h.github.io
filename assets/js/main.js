// assets/js/main.js

document.addEventListener("DOMContentLoaded", function() {
  if (!localStorage.getItem('announcementShown')) {
    var announcementModal = new bootstrap.Modal(document.getElementById('announcement-modal'));
    announcementModal.show();
    localStorage.setItem('announcementShown', 'true');
  }
});