STAFF ATTENDANCE PWA PACKAGE

Files:
- attendance.html      Current finalized attendance page + PWA support
- manifest.json        App identity/install configuration
- service-worker.js    PWA service worker
- icons/icon-192.png   App icon
- icons/icon-512.png   App icon

DEPLOYMENT
Upload these files/folders to the ROOT of:
https://jhdar06.github.io/staff-face-attendance/

Keep the existing attendance.html as the main page. This version preserves the
existing attendance/face/GPS code and adds only the PWA installation layer.

IMPORTANT
Do not rename service-worker.js, manifest.json, or the icons folder.
The service worker is deliberately network-first so the latest attendance page
is fetched whenever internet is available. Attendance still requires internet
because it communicates with the Google Apps Script backend.

IPHONE
Open attendance.html in Safari.
Tap the Share button.
Choose Add to Home Screen.
If shown, enable Open as Web App.
Tap Add.
A Staff Attendance icon will appear on the Home Screen.

ANDROID
Open attendance.html in Chrome.
Use the Install App prompt shown by the page, or Chrome's menu > Install app
when available.
The Staff Attendance icon will appear on the Home Screen/app launcher.

EXISTING ADMIN LINKS
No changes are required to the Apps Script backend.
