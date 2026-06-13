body {
    margin: 0;
    background: #0d0d0d;
    color: #fff;
    font-family: sans-serif;
    overflow: hidden;
}

/* HOME */
#home {
    padding: 20px;
}

/* APP DRAWER */
#drawer {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 60%;
    background: #111;
    border-radius: 20px 20px 0 0;
    padding: 20px;
    transition: 0.3s;
}

.app {
    background: #222;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 10px;
}

/* DOCK */
#dock {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(20,20,20,0.6);
    padding: 10px 20px;
    border-radius: 20px;
    display: flex;
    gap: 15px;
}

.dock-item {
    width: 50px;
    height: 50px;
    background: #333;
    border-radius: 12px;
}

/* NOTIFICATIONS */
#notifications {
    position: fixed;
    top: 10px;
    right: 10px;
    width: 240px;
}

.note {
    background: #222;
    padding: 10px;
    border-left: 3px solid #ffcc33;
    margin-bottom: 8px;
    border-radius: 8px;
}

/* CONTROL CENTER */
#cc {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    background: rgba(0,0,0,0.7);
    padding: 20px;
    transition: 0.3s;
}

.cc-btn {
    background: #222;
    padding: 12px;
    border-radius: 12px;
    margin-bottom: 10px;
}

/* WINDOW */
.window {
    position: absolute;
    top: 80px;
    left: 40px;
    width: 260px;
    height: 180px;
    background: #1a1a1a;
    border-radius: 12px;
    border: 1px solid #333;
}

.window-header {
    background: #ffcc33;
    padding: 8px;
    border-radius: 12px 12px 0 0;
    cursor: move;
}