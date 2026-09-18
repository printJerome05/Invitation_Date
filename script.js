/**
 * Aesthetic Romantic Date Invitation Experience
 * Procedural Web Audio, Automated Calligraphic Typewriter, 3D Envelope Physics, 
 * Playful Dodge AI, Canvas Rose Petals & High-Resolution Date Pass Download
 */

// ==========================================================================
// CONFIGURATION: RECIPIENT & PERSONALIZATION
// Define the recipient name and custom text settings here
// ==========================================================================
const INVITATION_CONFIG = {
  recipientName: "Mara Oruga",         // Primary recipient name
  recipientDisplay: "Mara Oruga 💖",    // Aesthetic text typed onto envelope
  petName: "Mara Oruga 💕",            // VIP Passenger name on ticket
  salutation: "Mara Oruga",            // Personalized letter salutation
  typingSpeedMs: 85,                   // Speed per character (ms)
  typingStartDelayMs: 550              // Delay before typing begins (ms)
};

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

    playTypeTick() {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      const now = this.ctx.currentTime;
      osc.frequency.setValueAtTime(1100 + Math.random() * 200, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.03);

      gain.gain.setValueAtTime(0.045, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.035);
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

  // Floating Romantic Petals & Gold Sparkles
  const particles = [];
  const PARTICLE_COUNT = 45;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 5 + 3,
      speedY: Math.random() * 0.5 + 0.25,
      speedX: (Math.random() - 0.5) * 0.4,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.02,
      swayPhase: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.45 + 0.25,
      isPetal: Math.random() > 0.4,
      colorHue: Math.random() > 0.3 ? 346 : 42 // Soft Rose or Golden Starlight
    });
  }

  // Celebration Confetti Array
  const confettiPieces = [];

  function spawnConfetti(count = 130) {
    const colors = ['#e6396b', '#ff758f', '#ffd166', '#d4af37', '#ffffff', '#ff9ebb', '#f39c12'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 4;
      confettiPieces.push({
        x: width / 2,
        y: height / 2 + 30,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 6,
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        gravity: 0.25,
        opacity: 1,
        isHeart: Math.random() > 0.45
      });
    }
  }

  function drawRosePetal(c, x, y, size, rotation, opacity) {
    c.save();
    c.translate(x, y);
    c.rotate(rotation);
    c.beginPath();
    c.moveTo(0, 0);
    c.bezierCurveTo(-size, -size * 0.8, -size * 1.2, size * 0.8, 0, size * 1.5);
    c.bezierCurveTo(size * 1.2, size * 0.8, size, -size * 0.8, 0, 0);
    c.closePath();
    c.fillStyle = `hsla(346, 75%, 72%, ${opacity})`;
    c.fill();
    c.restore();
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

    // 1. Ambient Background Petals & Sparkles
    for (let p of particles) {
      p.y -= p.speedY;
      p.swayPhase += 0.015;
      p.x += Math.sin(p.swayPhase) * 0.45 + p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y < -30) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }

      if (p.isPetal) {
        drawRosePetal(ctx, p.x, p.y, p.size, p.rotation, p.opacity);
      } else {
        // Shimmering Golden Sparkle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(42, 85%, 60%, ${p.opacity * 0.85})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
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
  // 3. AESTHETIC AUTOMATED TYPEWRITER EFFECT (FOR RECIPIENT ON ENVELOPE)
  // ==========================================================================
  function initTypewriterEffect() {
    const typedTarget = document.getElementById('typed-recipient-name');
    const tapHint = document.getElementById('envelope-tap-hint');
    const instructionText = document.getElementById('envelope-instruction-text');
    const letterNameDisplay = document.getElementById('letter-recipient-name');
    const ticketPassengerDisplay = document.getElementById('ticket-passenger-display');

    // Pre-populate downstream name displays
    if (letterNameDisplay) letterNameDisplay.textContent = INVITATION_CONFIG.recipientName;
    if (ticketPassengerDisplay) ticketPassengerDisplay.textContent = INVITATION_CONFIG.petName;

    if (!typedTarget) return;

    const textToType = INVITATION_CONFIG.recipientDisplay;
    let charIdx = 0;

    // Begin typing after slight initial delay for dramatic effect
    setTimeout(() => {
      const typeTimer = setInterval(() => {
        if (charIdx < textToType.length) {
          typedTarget.textContent += textToType.charAt(charIdx);
          charIdx++;
          soundEngine.playTypeTick();
        } else {
          clearInterval(typeTimer);

          // Update hint and instruction to make it extra personal
          if (tapHint) {
            tapHint.innerHTML = `Special delivery for <strong>${INVITATION_CONFIG.recipientName}</strong> ✨ Tap wax seal to open 💌`;
          }
          if (instructionText) {
            instructionText.innerHTML = `A hand-delivered letter for <strong>${INVITATION_CONFIG.recipientName}</strong>`;
          }
        }
      }, INVITATION_CONFIG.typingSpeedMs);
    }, INVITATION_CONFIG.typingStartDelayMs);
  }

  initTypewriterEffect();

  // ==========================================================================
  // 4. ENVELOPE OPENING INTERACTION (STAGE 1 -> STAGE 2)
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
  // 5. PLAYFUL "NO" BUTTON DODGE & DYNAMIC "YES" GROWTH
  // ==========================================================================
  const btnYes = document.getElementById('btn-yes');
  const btnNo = document.getElementById('btn-no');
  const btnNoText = document.getElementById('btn-no-text');
  const pleaMessage = document.getElementById('plea-message');
  const decisionArena = document.getElementById('decision-arena');

  let dodgeCount = 0;
  let yesScale = 1;

  const pleaPhrases = [
    `Wait ${INVITATION_CONFIG.recipientName}, think about it! 🥺`,
    "Are you really sure? 🙈",
    "Wrong button silly! 💕",
    "I'll buy you all the delicious food! 🍜",
    "Look how shiny the YES button is! ✨",
    "Pretty please with extra chicharon? 🥺",
    "Don't break my tiny heart! 💔",
    "Give it a chance, it'll be magical! 🌸",
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

    // Calculate displacement safely bounded within arena / card
    const arenaRect = decisionArena.getBoundingClientRect();
    const btnRect = btnNo.getBoundingClientRect();

    // Retrieve current translate offsets from transform matrix
    let currentTx = 0;
    let currentTy = 0;
    const computedStyle = window.getComputedStyle(btnNo);
    const matrix = computedStyle.transform;
    if (matrix && matrix !== 'none') {
      const match = matrix.match(/matrix\(([^)]+)\)/);
      if (match) {
        const parts = match[1].split(',').map(n => parseFloat(n.trim()));
        if (parts.length >= 6) {
          currentTx = parts[4];
          currentTy = parts[5];
        }
      }
    }

    const naturalLeft = btnRect.left - currentTx;

    // Strict horizontal boundaries within decisionArena with padding
    const padding = 12;
    const minX = (arenaRect.left + padding) - naturalLeft;
    const maxX = (arenaRect.right - padding - btnRect.width) - naturalLeft;
    const minY = -32;
    const maxY = 32;

    const safeMinX = Math.min(minX, maxX);
    const safeMaxX = Math.max(minX, maxX);

    const randomX = Math.round(safeMinX + Math.random() * (safeMaxX - safeMinX));
    const randomY = Math.round(minY + Math.random() * (maxY - minY));

    btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;

    const textIdx = dodgeCount % noButtonTexts.length;
    btnNoText.textContent = noButtonTexts[textIdx];

    const phraseIdx = (dodgeCount - 1) % pleaPhrases.length;
    if (pleaMessage) {
      pleaMessage.textContent = pleaPhrases[phraseIdx];
      pleaMessage.style.opacity = '1';
    }

    // Grow Yes button with a reasonable ceiling so it stays inside mobile viewport
    if (yesScale < 1.4) {
      yesScale += 0.06;
      btnYes.style.transform = `scale(${yesScale})`;
    }
  }

  if (btnNo) {
    btnNo.addEventListener('mouseenter', dodgeNoButton);
    btnNo.addEventListener('touchstart', dodgeNoButton, { passive: false });
    btnNo.addEventListener('click', dodgeNoButton);
  }

  // ==========================================================================
  // 6. YES! CLICKED -> CELEBRATION & REVEAL DATE PLANNER
  // ==========================================================================
  const letterContent = document.getElementById('letter-content');
  const datePlanner = document.getElementById('date-planner');

  if (btnYes) {
    btnYes.addEventListener('click', () => {
      soundEngine.playCelebrationFanfare();

      spawnConfetti(150);
      setTimeout(() => spawnConfetti(100), 500);

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
  // 7. DATE PLANNER CHOICES & ITINERARY
  // ==========================================================================
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
  const ticketPassengerDisplay = document.getElementById('ticket-passenger-display');
  const ticketVibeDisplay = document.getElementById('ticket-vibe-display');
  const ticketTimeDisplay = document.getElementById('ticket-time-display');
  const ticketNoteDisplay = document.getElementById('ticket-note-display');
  const customNoteInput = document.getElementById('custom-note');

  let currentCustomNote = "";

  if (btnLockDate) {
    btnLockDate.addEventListener('click', () => {
      soundEngine.playOpenChime();
      spawnConfetti(90);

      currentCustomNote = customNoteInput ? customNoteInput.value.trim() : "";

      if (ticketPassengerDisplay) ticketPassengerDisplay.textContent = INVITATION_CONFIG.petName;
      if (ticketVibeDisplay) ticketVibeDisplay.textContent = selectedVibe;
      if (ticketTimeDisplay) ticketTimeDisplay.textContent = selectedSchedule;
      if (ticketNoteDisplay) {
        ticketNoteDisplay.textContent = currentCustomNote ? `"${currentCustomNote}"` : `"Extra cute smiles & good vibes"`;
      }

      document.querySelector('.planner-form').style.display = 'none';
      ticketResult.classList.remove('hidden');

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
  // 8. LUXURY BOARDING PASS TICKET DOWNLOAD (HIGH-RESOLUTION CANVAS PNG)
  // ==========================================================================
  function downloadTicketImage() {
    soundEngine.playCelebrationFanfare();
    spawnConfetti(100);

    const downloadText = document.getElementById('download-text');
    if (downloadText) downloadText.textContent = "Creating Image...";

    // Render at 2x Retina resolution for crisp typography and graphics
    const dpr = 2;
    const canvasWidth = 760;
    const canvasHeight = 460;

    const offCanvas = document.createElement('canvas');
    offCanvas.width = canvasWidth * dpr;
    offCanvas.height = canvasHeight * dpr;
    const c = offCanvas.getContext('2d');
    c.scale(dpr, dpr);

    // Outer background fill
    c.fillStyle = '#fff6f8';
    c.fillRect(0, 0, canvasWidth, canvasHeight);

    // 1. Ticket Base Card
    const cardX = 24;
    const cardY = 24;
    const cardW = canvasWidth - 48;
    const cardH = canvasHeight - 48;
    const radius = 18;

    c.save();
    c.beginPath();
    c.roundRect(cardX, cardY, cardW, cardH, radius);
    c.fillStyle = '#ffffff';
    c.fill();
    c.lineWidth = 2;
    c.strokeStyle = '#ebd3b0';
    c.stroke();

    // Inner gold luxury border
    c.beginPath();
    c.roundRect(cardX + 8, cardY + 8, cardW - 16, cardH - 16, radius - 6);
    c.lineWidth = 1;
    c.strokeStyle = 'rgba(200, 158, 82, 0.35)';
    c.stroke();
    c.restore();

    // 2. Ticket Header
    c.fillStyle = '#791530';
    c.font = 'bold 17px "Plus Jakarta Sans", sans-serif';
    c.fillText('❦  OFFICIAL DATE PASS', cardX + 28, cardY + 44);

    // Status Badge: CONFIRMED ✓
    const badgeText = 'CONFIRMED ✓';
    c.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    const badgeW = c.measureText(badgeText).width + 20;
    const badgeX = cardX + cardW - badgeW - 28;
    const badgeY = cardY + 28;
    c.beginPath();
    c.roundRect(badgeX, badgeY, badgeW, 24, 6);
    c.fillStyle = '#e8f7ec';
    c.fill();
    c.strokeStyle = '#1b7a37';
    c.lineWidth = 1;
    c.stroke();
    c.fillStyle = '#1b7a37';
    c.fillText(badgeText, badgeX + 10, badgeY + 16);

    // Header divider line
    c.beginPath();
    c.moveTo(cardX + 26, cardY + 64);
    c.lineTo(cardX + cardW - 26, cardY + 64);
    c.strokeStyle = '#ebd8bd';
    c.lineWidth = 1.2;
    c.stroke();

    // 3. Ticket Main Content Grid
    const col1X = cardX + 30;
    const col2X = cardX + cardW / 2 + 10;

    // Row 1: Passenger / VIP
    c.fillStyle = '#8f7685';
    c.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
    c.fillText('PASSENGER / VIP', col1X, cardY + 92);
    c.fillStyle = '#d93b68';
    c.font = 'bold 19px "Plus Jakarta Sans", sans-serif';
    c.fillText(INVITATION_CONFIG.petName, col1X, cardY + 118);

    // Row 1: Destination
    c.fillStyle = '#8f7685';
    c.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
    c.fillText('DESTINATION', col2X, cardY + 92);
    c.fillStyle = '#2b1129';
    c.font = 'bold 17px "Plus Jakarta Sans", sans-serif';
    c.fillText('To My Heart & A Great Time', col2X, cardY + 118);

    // Row 2: Planned Vibe
    c.fillStyle = '#8f7685';
    c.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
    c.fillText('PLANNED VIBE', col1X, cardY + 155);
    c.fillStyle = '#2b1129';
    c.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
    c.fillText(selectedVibe, col1X, cardY + 180);

    // Row 2: Schedule
    c.fillStyle = '#8f7685';
    c.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
    c.fillText('SCHEDULE', col2X, cardY + 155);
    c.fillStyle = '#2b1129';
    c.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
    c.fillText(selectedSchedule, col2X, cardY + 180);

    // Row 3: Special Request
    c.fillStyle = '#8f7685';
    c.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
    c.fillText('SPECIAL REQUEST', col1X, cardY + 215);
    c.fillStyle = '#553c52';
    c.font = 'italic 500 15px "Plus Jakarta Sans", sans-serif';
    const noteText = currentCustomNote ? `"${currentCustomNote}"` : `"Extra cute smiles & good vibes"`;
    c.fillText(noteText, col1X, cardY + 238);

    // 4. Perforation Line with Side Notches
    const perfY = cardY + 270;

    // Left notch cutout
    c.beginPath();
    c.arc(cardX, perfY, 13, -Math.PI / 2, Math.PI / 2, false);
    c.fillStyle = '#fff6f8';
    c.fill();
    c.strokeStyle = '#ebd3b0';
    c.lineWidth = 2;
    c.stroke();

    // Right notch cutout
    c.beginPath();
    c.arc(cardX + cardW, perfY, 13, Math.PI / 2, -Math.PI / 2, false);
    c.fillStyle = '#fff6f8';
    c.fill();
    c.strokeStyle = '#ebd3b0';
    c.lineWidth = 2;
    c.stroke();

    // Dashed perforation line
    c.beginPath();
    c.setLineDash([8, 6]);
    c.moveTo(cardX + 22, perfY);
    c.lineTo(cardX + cardW - 22, perfY);
    c.strokeStyle = '#dac2a1';
    c.lineWidth = 1.8;
    c.stroke();
    c.setLineDash([]); // Reset dash

    // 5. Footer: Barcode & Approved Stamp
    const barX = cardX + 30;
    const barY = perfY + 26;
    const barWidths = [3, 1, 4, 2, 1, 3, 2, 5, 2, 1, 3, 4, 1, 2, 3, 1, 5, 2, 2, 4, 1, 3, 2, 4, 2, 1, 3, 2, 4, 1, 2, 4];
    let curX = barX;
    c.fillStyle = '#1d0d1e';
    for (let i = 0; i < barWidths.length; i++) {
      const w = barWidths[i] * 2.1;
      if (i % 2 === 0) {
        c.fillRect(curX, barY, w, 36);
      }
      curX += w + 2.4;
    }

    c.fillStyle = '#7d6b79';
    c.font = '10px monospace';
    c.fillText('DATE-NO-REFUNDS-FOREVER-💖', barX, barY + 52);

    // Official Approved Stamp (tilted)
    c.save();
    c.translate(cardX + cardW - 135, barY + 25);
    c.rotate((-8 * Math.PI) / 180);
    c.beginPath();
    c.roundRect(-80, -22, 160, 44, 6);
    c.strokeStyle = '#a61f3d';
    c.lineWidth = 2.5;
    c.stroke();
    c.fillStyle = '#a61f3d';
    c.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
    c.textAlign = 'center';
    c.fillText('APPROVED WITH LOVE', 0, 5);
    c.restore();

    // 6. Download as PNG
    try {
      const imageURL = offCanvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `Date-Ticket-${INVITATION_CONFIG.recipientName.replace(/\s+/g, '-')}.png`;
      link.href = imageURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (downloadText) downloadText.textContent = "✓ Downloaded!";
    } catch (err) {
      console.error("Ticket download error:", err);
      if (downloadText) downloadText.textContent = "Download Ticket 🎟️";
    }

    setTimeout(() => {
      if (downloadText) downloadText.textContent = "Download Ticket 🎟️";
    }, 3500);
  }

  const btnDownloadTicket = document.getElementById('btn-download-ticket');
  if (btnDownloadTicket) {
    btnDownloadTicket.addEventListener('click', downloadTicketImage);
  }

  // ==========================================================================
  // 9. SHARING & RSVP GENERATOR (WHATSAPP & CLIPBOARD)
  // ==========================================================================
  function generateRSVPMessage() {
    let msg = `💖 Official Date Confirmation for ${INVITATION_CONFIG.recipientName}! 💖\n\n`;
    msg += `I said YES! Here is our date plan:\n`;
    msg += `✨ VIP Passenger: ${INVITATION_CONFIG.petName}\n`;
    msg += `🍜 Planned Vibe: ${selectedVibe}\n`;
    msg += `🗓️ Schedule: ${selectedSchedule}\n`;
    if (currentCustomNote) {
      msg += `💭 Special Request: "${currentCustomNote}"\n`;
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
