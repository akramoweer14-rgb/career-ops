<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Pi OS Mini Launcher</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<!-- HOME -->
<div id="home">
    <h2>Pi OS Mini Launcher</h2>
    <button onclick="openDrawer()">Apps</button>
    <button onclick="toggleCC()">Control Center</button>
</div>

<!-- APP DRAWER -->
<div id="drawer">
    <div class="app" onclick="openApp('Notes')">Notes</div>
    <div class="app" onclick="openApp('Music')">Music</div>
    <div class="app" onclick="openApp('Files')">Files</div>
</div>

<!-- DOCK -->
<div id="dock">
    <div class="dock-item" onclick="openApp('Files')"></div>
    <div class="dock-item" onclick="openApp('Settings')"></div>
</div>

<!-- NOTIFICATIONS -->
<div id="notifications"></div>

<!-- CONTROL CENTER -->
<div id="cc">
    <div class="cc-btn" onclick="notify('WiFi toggled')">WiFi</div>
    <div class="cc-btn" onclick="notify('Theme changed')">Theme</div>
    <div class="cc-btn" onclick="notify('Locked')">Lock</div>
</div>

<script src="app.js"></script>
</body>
</html>
