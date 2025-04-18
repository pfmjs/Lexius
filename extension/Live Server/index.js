// Store preview window reference
let livePreviewWin = null;

function saveEditorContent() {
  const editorContent = document.querySelector('#editor').innerText || "";
  localStorage.setItem('lexius-live-preview', editorContent);
}

// Simulate writing to a file and open/refresh preview
function startLiveServer() {
  saveEditorContent();

  if (!livePreviewWin || livePreviewWin.closed) {
    livePreviewWin = window.open('./extension/Live Server/index.html', 'lexius-live-preview');
  } else {
    livePreviewWin.location.reload(); // Just reload if already open
  }

  console.log('Live server started.');
  alert('Live server started. Live preview opened or refreshed.');
}

// Trigger reload when you want (e.g., on save)
function triggerLiveReload() {
  saveEditorContent();
  if (livePreviewWin && !livePreviewWin.closed) {
    livePreviewWin.location.reload();
  }
}

// Register with Lexius
window.lexiusExtensions = window.lexiusExtensions || {};
window.lexiusExtensions["live-server"] = {
  activate: () => startLiveServer()
};
