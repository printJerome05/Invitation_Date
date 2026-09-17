/**
 * Aesthetic Romantic Date Invitation Experience
 * Procedural Web Audio, 3D Envelope Physics, Playful Dodge AI, Canvas Confetti & Date Planner
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. PROCEDURAL SOUND SYNTHESIZER (WEB AUDIO API)
  // ==========================================================================
  class RomanticAudio {
    constructor() {
      this.ctx = null;
      this.enabled = true;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    toggle() {
      this.enabled = !this.enabled;
      return this.enabled;
    }

    playOpenChime() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);
        
        gain.gain.setValueAtTime(0, this.ctx.currentTime + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + idx * 0.08 + 0.8);
        
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        osc.start(this.ctx.currentTime + idx * 0.08);
        osc.stop(this.ctx.currentTime + idx * 0.08 + 0.9);
      });
    }

    playDodgeBoop() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(220, this.ctx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + 0.18);
    }

    playCelebrationFanfare() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const chordNotes = [
        [523.25, 659.25, 783.99],       // C Major
        [587.33, 739.99, 880.00],       // D Major
        [659.25, 830.61, 987.77],       // E Major
        [1046.50, 1318.51, 1567.98]     // High C Major Sparkle
      ];

      chordNotes.forEach((chord, step) => {
        chord.forEach(freq => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = step === chordNotes.length - 1 ? 'triangle' : 'sine';
          const startTime = this.ctx.currentTime + step * 0.16;

          osc.frequency.setValueAtTime(freq, startTime);
          gain.gain.setValueAtTime(0, startTime);
          gain.gain.linearRampToValueAtTime(0.14, startTime + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.2);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(startTime);
          osc.stop(startTime + 1.3);
        });
      });
    }

    playClick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(this.ctx.currentTime);
      osc.stop(this.ctx.currentTime + 0.06);
    }
  }

  const soundEngine = new RomanticAudio();

  // Sound Toggle Button
  const soundBtn = document.getElementById('sound-btn');
  const soundIcon = document.getElementById('sound-icon');
  const soundLabel = document.getElementById('sound-label');

  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      const active = soundEngine.toggle();
      soundIcon.textContent = active ? '🔊' : '🔇';
      soundLabel.textContent = active ? 'Sound: On' : 'Sound: Off';
      if (active) soundEngine.playClick();
    });
  }

  // ==========================================================================
  // 2. AMBIENT BACKGROUND PARTICLES & CELEBRATION CONFETTI
  // ==========================================================================
  const canvas = document.getElementById('ambient-canvas');
  const ctx = canvas ? canvas.getContext('2d') : null;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    if (!canvas) return;
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Floating Ambient Dust & Hearts
  const particles = [];
  const PARTICLE_COUNT = 38;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3 + 1,
      speedY: Math.random() * 0.4 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.2,
      isHeart: Math.random() > 0.65,
      hue: Math.random() > 0.5 ? 345 : 42 // Rosy or Gold
    });
  }

  // Celebration Fireworks / Confetti Array
  const confettiPieces = [];

  function spawnConfetti(count = 120) {
    const colors = ['#ff3b6f', '#ffd166', '#ffffff', '#ff9ebb', '#a05195', '#f39c12'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      confettiPieces.push({
        x: width / 2,
        y: height / 2 + 50,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.25,
        opacity: 1,
        isHeart: Math.random() > 0.4
      });
    }
  }

  function drawHeart(c, x, y, size, color, opacity = 1) {
    c.save();
    c.translate(x, y);
    c.beginPath();
    const topCurveHeight = size * 0.3;
    c.moveTo(0, topCurveHeight);
    c.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    c.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size * 1.3);
    c.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    c.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    c.closePath();
    c.fillStyle = color;
    c.globalAlpha = opacity;
    c.fill();
    c.restore();
  }

  function renderAnimation() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    // 1. Ambient Background Particles
    for (let p of particles) {
      p.y -= p.speedY;
      p.x += Math.sin(p.y * 0.01) * 0.3 + p.speedX;

      if (p.y < -20) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }

      if (p.isHeart) {
        drawHeart(ctx, p.x, p.y, p.size * 3.5, `hsl(${p.hue}, 80%, 75%)`, p.opacity * 0.7);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
        ctx.fill();
      }
    }

    // 2. Celebration Confetti
    for (let i = confettiPieces.length - 1; i >= 0; i--) {
      const c = confettiPieces[i];
      c.x += c.vx;
      c.y += c.vy;
      c.vy += c.gravity;
      c.rotation += c.rotSpeed;
      c.opacity -= 0.007;

      if (c.opacity <= 0 || c.y > height + 50) {
        confettiPieces.splice(i, 1);
        continue;
      }

      if (c.isHeart) {
        drawHeart(ctx, c.x, c.y, c.size, c.color, c.opacity);
      } else {
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = c.opacity;
        ctx.fillRect(-c.size / 2, -c.size / 4, c.size, c.size / 2);
        ctx.restore();
      }
    }

    requestAnimationFrame(renderAnimation);
  }
  renderAnimation();

  // ==========================================================================
  // 3. ENVELOPE OPENING INTERACTION (STAGE 1 -> STAGE 2)
  // ==========================================================================
  const envelopeStage = document.getElementById('envelope-stage');
  const envelopeWrapper = document.getElementById('envelope-wrapper');
  const envelope = document.getElementById('envelope');
  const waxSeal = document.getElementById('wax-seal');
  const letterStage = document.getElementById('letter-stage');

  let isEnvelopeOpened = false;

  function openEnvelope() {
    if (isEnvelopeOpened) return;
    isEnvelopeOpened = true;

    soundEngine.playOpenChime();

    // Trigger visual opening in CSS
    envelope.classList.add('open');

    // After flap opens and letter emerges, transition to full letter view
    setTimeout(() => {
      envelopeStage.classList.add('stage-hidden');

      setTimeout(() => {
        envelopeStage.style.display = 'none';
        letterStage.classList.remove('hidden');
        letterStage.classList.add('visible');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);

    }, 850);
  }

  if (waxSeal) waxSeal.addEventListener('click', (e) => { e.stopPropagation(); openEnvelope(); });
  if (envelopeWrapper) envelopeWrapper.addEventListener('click', openEnvelope);
  if (envelopeWrapper) {
    envelopeWrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openEnvelope();
      }
    });
  }

  // ==========================================================================
  // 4. PLAYFUL "NO" BUTTON DODGE & DYNAMIC "YES" GROWTH
  // ==========================================================================
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');
  const btnNoText = document.getElementById('btn-no-text');
  const pleaMessage = document.getElementById('plea-message');
  const decisionArena = document.getElementById('decision-arena');

  let dodgeCount = 0;
  let yesScale = 1;

  const pleaPhrases = [
    "Wait, think about it! 🥺",
    "Are you really sure? 🙈",
    "Wrong button silly! 💕",
    "I'll buy you all the snacks! 🍜",
    "Look how shiny the YES button is! ✨",
    "Pretty please with extra chicharon? 🥺",
    "Don't break my tiny heart! 💔",
    "Give it a chance, it'll be amazing! 🌸",
    "Resistance is futile, say yes! 🥰"
  ];

  const noButtonTexts = [
    "No 🥺",
    "Wait... 😳",
    "Are you sure?",
    "Really?",
    "Think again!",
    "Still no? 😢",
    "Try clicking Yes!",
    "No way! 🙈",
    "Never! (Just kidding)"
  ];

  function dodgeNoButton(e) {
    if (e) e.preventDefault();
    dodgeCount++;
    soundEngine.playDodgeBoop();

    // 1. Calculate random displacement within decision arena / card bounds
    const arenaRect = decisionArena.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Bound offsets so it doesn't escape out of visible view
    const maxOffsetX = Math.min(140, arenaRect.width / 2 - btnRect.width / 2);
    const maxOffsetY = 45;

    // Pick a new random non-zero coordinate
    const randomX = (Math.random() * 2 - 1) * maxOffsetX;
    const randomY = (Math.random() * 2 - 1) * maxOffsetY;

    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // 2. Cycle dynamic witty messages
    const textIdx = dodgeCount % noButtonTexts.length;
    btnNoText.textContent = noButtonTexts[textIdx];

    const phraseIdx = (dodgeCount - 1) % pleaPhrases.length;
    if (pleaMessage) {
      pleaMessage.textContent = pleaPhrases[phraseIdx];
      pleaMessage.style.opacity = '1';
    }

    // 3. Make YES button bigger and more compelling
    yesScale += 0.08;
    btnYes.style.transform = `scale(${yesScale})`;
  }

  if (btnNo) {
    // Desktop hover escape
    btnNo.addEventListener('mouseenter', dodgeNoButton);
    // Mobile touch attempt escape
    btnNo.addEventListener('touchstart', dodgeNoButton, { passive: false });
    // If clicked anyway (super fast tap), still dodge
    btnNo.addEventListener('click', dodgeNoButton);
  }

  // ==========================================================================
  // 5. YES! CLICKED -> CELEBRATION & REVEAL DATE PLANNER
  // ==========================================================================
  const letterContent = document.getElementById('letter-content');
  const datePlanner = document.getElementById('date-planner');

  if (btnYes) {
    btnYes.addEventListener('click', () => {
      soundEngine.playCelebrationFanfare();

      // Confetti burst!
      spawnConfetti(150);
      setTimeout(() => spawnConfetti(100), 500);

      // Smoothly transition from Proposal Card to Date Customizer
      letterContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      letterContent.style.opacity = '0';
      letterContent.style.transform = 'translateY(-15px)';

      setTimeout(() => {
        letterContent.style.display = 'none';
        datePlanner.classList.remove('hidden');
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }, 500);
    });
  }

  // ==========================================================================
  // 6. DATE PLANNER CHOICES & ITINERARY
  // ==========================================================================
  // Vibe radio selection
  const vibeCards = document.querySelectorAll('.choice-card');
  let selectedVibe = "Special Batangas Lomi Date";

  vibeCards.forEach(card => {
    card.addEventListener('click', () => {
      vibeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        selectedVibe = radio.value;
      }
      soundEngine.playClick();
    });
  });

  // Schedule radio chips
  const chipPills = document.querySelectorAll('.chip-pill');
  let selectedSchedule = "This Friday Evening 🌙";

  chipPills.forEach(pill => {
    pill.addEventListener('click', () => {
      chipPills.forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
      const radio = pill.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        selectedSchedule = radio.value;
      }
      soundEngine.playClick();
    });
  });

  // Lock In Date CTA & Generate Boarding Pass
  const btnLockDate = document.getElementById('btn-lock-date');
  const ticketResult = document.getElementById('ticket-result');
  const ticketVibeDisplay = document.getElementById('ticket-vibe-display');
  const ticketTimeDisplay = document.getElementById('ticket-time-display');
  const ticketNoteDisplay = document.getElementById('ticket-note-display');
  const customNoteInput = document.getElementById('custom-note');

  let currentCustomNote = "";

  if (btnLockDate) {
    btnLockDate.addEventListener('click', () => {
      soundEngine.playOpenChime();
      spawnConfetti(80);

      currentCustomNote = customNoteInput ? customNoteInput.value.trim() : "";

      // Populate Ticket Displays
      if (ticketVibeDisplay) ticketVibeDisplay.textContent = selectedVibe;
      if (ticketTimeDisplay) ticketTimeDisplay.textContent = selectedSchedule;
      if (ticketNoteDisplay) {
        ticketNoteDisplay.textContent = currentCustomNote ? `"${currentCustomNote}"` : `"Extra cute smiles & good vibes"`;
      }

      // Hide form fields & reveal ticket
      document.querySelector('.planner-form').style.display = 'none';
      ticketResult.classList.remove('hidden');

      // Scroll ticket into view
      setTimeout(() => {
        ticketResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    });
  }

  // Change Choices / Edit Button
  const btnResetChoices = document.getElementById('btn-reset-choices');
  if (btnResetChoices) {
    btnResetChoices.addEventListener('click', () => {
      soundEngine.playClick();
      ticketResult.classList.add('hidden');
      document.querySelector('.planner-form').style.display = 'flex';
      window.scrollTo({ top: 180, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 7. SHARING & RSVP GENERATOR (WHATSAPP & CLIPBOARD)
  // ==========================================================================
  function generateRSVPMessage() {
    let msg = `💖 Official Date Confirmation! 💖\n\n`;
    msg += `I said YES! Here is our date plan:\n`;
    msg += `✨ Vibe: ${selectedVibe}\n`;
    msg += `🗓️ Schedule: ${selectedSchedule}\n`;
    if (currentCustomNote) {
      msg += `💭 Special Request: ${currentCustomNote}\n`;
    }
    msg += `\nI can't wait! See you on our date! 🥰✨`;
    return msg;
  }

  // WhatsApp Share
  const btnShareWhatsApp = document.getElementById('btn-share-whatsapp');
  if (btnShareWhatsApp) {
    btnShareWhatsApp.addEventListener('click', () => {
      soundEngine.playClick();
      const message = generateRSVPMessage();
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  }

  // Copy to Clipboard
  const btnCopyRsvp = document.getElementById('btn-copy-rsvp');
  const copyToast = document.getElementById('rsvp-copy-toast');
  const copyText = document.getElementById('copy-text');

  if (btnCopyRsvp) {
    btnCopyRsvp.addEventListener('click', async () => {
      soundEngine.playClick();
      const message = generateRSVPMessage();

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(message);
        } else {
          // Fallback textarea
          const ta = document.createElement('textarea');
          ta.value = message;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }

        if (copyToast) {
          copyToast.classList.add('show');
          copyText.textContent = "✓ Copied Sweet Message!";
          setTimeout(() => {
            copyToast.classList.remove('show');
            copyText.textContent = "📋 Copy Sweet RSVP";
          }, 3500);
        }
      } catch (err) {
        console.error('Clipboard copy failed', err);
      }
    });
  }

});
