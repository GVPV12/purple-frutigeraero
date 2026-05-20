/* =====================================================
   RETRO BLOG (purple/Y2K) — blog.js
===================================================== */

/* -------------------------------------------------------
   TAB SWITCHING
------------------------------------------------------- */
function switchTab(name, el) {
  document.querySelectorAll('.tab-pane').forEach(function(p) { p.classList.remove('active'); });
  document.querySelectorAll('.nav-btn').forEach(function(t)  { t.classList.remove('active'); });
  var pane = document.getElementById('tab-' + name);
  if (pane) pane.classList.add('active');
  if (el)   el.classList.add('active');
}

/* -------------------------------------------------------
   SOUNDCLOUD MINI PLAYER
------------------------------------------------------- */
function initSCPlayer(iframeId, discId, barsId, btnId, trackId) {
  function tryBind() {
    if (typeof SC === 'undefined') { setTimeout(tryBind, 300); return; }
    var iframe = document.getElementById(iframeId);
    if (!iframe) return;
    var widget = SC.Widget(iframe);
    var disc   = document.getElementById(discId);
    var bars   = document.getElementById(barsId);
    var btn    = document.getElementById(btnId);
    var track  = document.getElementById(trackId);

    function setPlaying(on) {
      if (disc)  disc.classList.toggle('spinning', on);
      if (bars)  bars.classList.toggle('active', on);
      if (track) track.classList.toggle('scrolling', on);
      if (btn)   btn.textContent = on ? '⏸' : '▶';
    }

    widget.bind(SC.Widget.Events.PLAY,   function() { setPlaying(true);  });
    widget.bind(SC.Widget.Events.PAUSE,  function() { setPlaying(false); });
    widget.bind(SC.Widget.Events.FINISH, function() { setPlaying(false); });

    function toggle() { widget.isPaused(function(p) { p ? widget.play() : widget.pause(); }); }
    if (btn)  btn.addEventListener('click',  toggle);
    if (disc) disc.addEventListener('click', toggle);
  }
  tryBind();
}

/* -------------------------------------------------------
   IMAGE FALLBACK SAFETY NET
------------------------------------------------------- */
function initImageFallbacks() {
  document.querySelectorAll('.icon-img').forEach(function(img) {
    function applyFallback() {
      img.style.display = 'none';
      var fb = img.nextElementSibling;
      if (fb && fb.classList.contains('icon-fallback')) fb.style.display = 'block';
    }
    img.addEventListener('error', applyFallback);
    if (img.complete && img.naturalWidth === 0) applyFallback();
  });
}

/* -------------------------------------------------------
   LIGHTBOX
------------------------------------------------------- */
function openLightbox(src) {
  var lb  = document.getElementById('lightbox');
  var img = document.getElementById('lightbox-img');
  if (!lb || !img || !src) return;
  img.src = src;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(e) {
  // Don't close if user clicked the image itself
  if (e && e.target && e.target.id === 'lightbox-img') return;
  var lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});

function initLightbox() {
  // Art grid items — click opens full image
  document.querySelectorAll('.art-item').forEach(function(item) {
    item.style.cursor = 'zoom-in';
    item.addEventListener('click', function() {
      var img = item.querySelector('.icon-img');
      if (img && img.naturalWidth > 0) openLightbox(img.src);
    });
  });

  // Post thumbnails, diary thumbs, post images
  document.querySelectorAll(
    '.post-thumb .icon-img, .post-img .icon-img, .diary-thumb .icon-img, .about-banner .icon-img'
  ).forEach(function(img) {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      if (img.naturalWidth > 0) openLightbox(img.src);
    });
  });
}

/* -------------------------------------------------------
   INIT — single DOMContentLoaded, no nesting
------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  initImageFallbacks();
  initLightbox();

// Player se inicia solo — no depende de DOMContentLoaded
// tryBind() ya hace el retry hasta que SC esté disponible
initSCPlayer('sc-player-rb', 'rb-disc', 'rb-bars', 'rb-btn', 'rb-track');
});