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

    playStepTone(step = 1) {
      if (!this.enabled) return;
      this.init();
      if (!this.ctx) return;

      const stepChords = {
        1: [523.25, 659.25],         // C5, E5 (warm melodic chime)
        2: [659.25, 783.99],         // E5, G5 (rising sweet chord)
        3: [783.99, 1046.50, 1318.5] // G5, C6, E6 (sparkling resolution)
      };

      const notes = stepChords[step] || [523.25, 659.25];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        const startTime = this.ctx.currentTime + idx * 0.07;
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.12, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.38);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.4);
      });
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
  // 7. DATE PLANNER CHOICES & DYNAMIC INTERACTION SUITE
  // ==========================================================================

  // Elements for CTA & Downstream Pass
  const btnLockDate = document.getElementById('btn-lock-date');
  const ticketResult = document.getElementById('ticket-result');
  const vibeAnimationStage = document.getElementById('vibe-animation-stage');
  const cartoonScene = document.getElementById('cartoon-scene');
  const cartoonBadge = document.getElementById('cartoon-badge');
  const cartoonTitle = document.getElementById('cartoon-title');
  const cartoonSubtitle = document.getElementById('cartoon-subtitle');
  const cartoonLoaderStatus = document.getElementById('cartoon-loader-status');
  const cartoonLoaderBar = document.getElementById('cartoon-loader-bar');

  const ticketPassengerDisplay = document.getElementById('ticket-passenger-display');
  const ticketVibeDisplay = document.getElementById('ticket-vibe-display');
  const ticketTimeDisplay = document.getElementById('ticket-time-display');
  const ticketNoteDisplay = document.getElementById('ticket-note-display');
  const customNoteInput = document.getElementById('custom-note');

  // Stepper Elements
  const stepNode1 = document.getElementById('step-node-1');
  const stepNode2 = document.getElementById('step-node-2');
  const stepNode3 = document.getElementById('step-node-3');
  const stepConnector1 = document.getElementById('step-connector-1');
  const stepConnector2 = document.getElementById('step-connector-2');

  // Reaction Elements
  const vibeReaction = document.getElementById('vibe-reaction');
  const vibeReactionText = document.getElementById('vibe-reaction-text');
  const timeReaction = document.getElementById('time-reaction');
  const timeReactionText = document.getElementById('time-reaction-text');
  const noteReaction = document.getElementById('note-reaction');
  const noteReactionText = document.getElementById('note-reaction-text');

  // Romantic reaction messages
  const vibeReactions = {
    "Special Batangas Lomi Date": "Ultimate Batangas Lomi selected! Steaming broth & deep talks await 💕",
    "Cozy Coffee & Pastry Hangout": "Aesthetic Cafe Date chosen! Warm coffee, sweet pastries & cute photos ☕",
    "Sunset Stroll & Late Night Drive": "Sunset & Night Drive locked in! Golden hour skies & car singing together 🌅",
    "Movie Night & Blanket Fort": "Cozy Movie Marathon ready! Blanket fort, warm cuddles & favorite films 🎬"
  };

  const scheduleReactions = {
    "This Friday Evening 🌙": "Friday evening confirmed! The perfect start to our weekend together 🌙",
    "Saturday Afternoon & Sunset ☀️": "Saturday afternoon & golden hour! Perfect unhurried weekend magic ☀️",
    "Sunday Chill Day 🌸": "Sunday chill date! Relaxed vibes, delicious food & warm smiles 🌸",
    "Surprise me whenever you're ready! ✨": "Surprise date mode on! Get ready for something truly unforgettable ✨"
  };

  // Floating Choice Hearts Burst
  function spawnChoiceHearts(sourceEl, event) {
    let clientX, clientY;
    if (event && event.clientX && event.clientY) {
      clientX = event.clientX;
      clientY = event.clientY;
    } else if (sourceEl) {
      const rect = sourceEl.getBoundingClientRect();
      clientX = rect.left + rect.width / 2;
      clientY = rect.top + rect.height / 2;
    } else {
      clientX = window.innerWidth / 2;
      clientY = window.innerHeight / 2;
    }

    const emojis = ['💖', '✨', '💕', '🌸', '🥰'];
    for (let i = 0; i < 5; i++) {
      const heart = document.createElement('span');
      heart.className = 'floating-choice-heart';
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      const angle = (Math.random() * 120 - 150) * (Math.PI / 180); // Upwards fountain arc
      const dist = Math.random() * 55 + 35;
      const tx = Math.cos(angle) * dist;
      const ty = Math.sin(angle) * dist;
      const rot = Math.random() * 50 - 25;

      heart.style.left = `${clientX}px`;
      heart.style.top = `${clientY}px`;
      heart.style.setProperty('--tx', `${tx}px`);
      heart.style.setProperty('--ty', `${ty}px`);
      heart.style.setProperty('--rot', `${rot}deg`);

      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 900);
    }
  }

  function triggerReactionAnimation(element) {
    if (!element) return;
    element.style.animation = 'none';
    void element.offsetWidth; // DOM reflow
    element.style.animation = '';
  }

  // 1. Vibe Selection Cards
  const vibeCards = document.querySelectorAll('.choice-card');
  let selectedVibe = "Special Batangas Lomi Date";

  vibeCards.forEach(card => {
    card.addEventListener('click', (e) => {
      vibeCards.forEach(c => {
        c.classList.remove('selected', 'card-pop');
        const icon = c.querySelector('.card-icon');
        if (icon) icon.classList.remove('anim-wiggle');
      });

      card.classList.add('selected', 'card-pop');
      const icon = card.querySelector('.card-icon');
      if (icon) {
        icon.classList.add('anim-wiggle');
        setTimeout(() => icon.classList.remove('anim-wiggle'), 550);
      }

      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        selectedVibe = radio.value;
      }

      // Dynamic reaction text
      if (vibeReactionText && vibeReactions[selectedVibe]) {
        vibeReactionText.textContent = vibeReactions[selectedVibe];
        triggerReactionAnimation(vibeReaction);
      }

      // Stepper node 1 progress
      if (stepNode1) stepNode1.classList.add('active', 'completed');
      if (stepConnector1) stepConnector1.classList.add('completed');
      if (stepNode2) stepNode2.classList.add('active');

      // Tactile sound and floating hearts
      soundEngine.playStepTone(1);
      spawnChoiceHearts(card, e);

      // Add ready pulse to CTA button
      if (btnLockDate) btnLockDate.classList.add('ready-pulse');
    });
  });

  // 2. Time / Schedule Chip Pills
  const chipPills = document.querySelectorAll('.chip-pill');
  let selectedSchedule = "This Friday Evening 🌙";

  chipPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      chipPills.forEach(p => p.classList.remove('selected', 'pill-pop'));
      pill.classList.add('selected', 'pill-pop');

      const radio = pill.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        selectedSchedule = radio.value;
      }

      // Dynamic reaction text
      if (timeReactionText && scheduleReactions[selectedSchedule]) {
        timeReactionText.textContent = scheduleReactions[selectedSchedule];
        triggerReactionAnimation(timeReaction);
      }

      // Stepper node 2 progress
      if (stepNode2) stepNode2.classList.add('active', 'completed');

      // Tactile sound and floating hearts
      soundEngine.playStepTone(2);
      spawnChoiceHearts(pill, e);

      // Add ready pulse to CTA button
      if (btnLockDate) btnLockDate.classList.add('ready-pulse');
    });
  });

  // 3. Special Request / Secret Note Listener
  if (customNoteInput) {
    customNoteInput.addEventListener('input', () => {
      const val = customNoteInput.value.trim();
      if (val.length > 0) {
        if (noteReactionText) {
          noteReactionText.textContent = `Noted with love: "${val}" — Consider it done! 💖`;
          triggerReactionAnimation(noteReaction);
        }
        if (stepNode3) stepNode3.classList.add('active', 'completed');
        if (stepConnector2) stepConnector2.classList.add('completed');
      } else {
        if (noteReactionText) {
          noteReactionText.textContent = `Your wish is my command! We'll make sure it's perfect 💖`;
        }
        if (stepNode3) stepNode3.classList.remove('completed');
        if (stepConnector2) stepConnector2.classList.remove('completed');
      }
      if (btnLockDate) btnLockDate.classList.add('ready-pulse');
    });

    customNoteInput.addEventListener('focus', () => {
      if (stepNode3) stepNode3.classList.add('active');
    });
  }

  // Pre-activate ready pulse for delightful call to action
  if (btnLockDate) {
    btnLockDate.classList.add('ready-pulse');
  }

  let currentCustomNote = "";
  let cartoonTransitionTimer = null;

  // ==========================================================================
  // ROMANTIC CARTOON SCENE TEMPLATES (4 BESPOKE VECTOR ANIMATIONS)
  // ==========================================================================
  const VIBE_SCENES = {
    "Special Batangas Lomi Date": {
      badge: "✦ COOKING UP LOVE ✦",
      title: "Cooking Up Our Lomi Date! 🍜",
      subtitle: "Steaming hot Batangas soup, overload crispy chicharon & deep conversations...",
      status: "Simmering with love & printing VIP pass 🎟️",
      svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="lomiGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffd166" stop-opacity="0.6"/>
            <stop offset="100%" stop-color="#ffd166" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="brothGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f39c12"/>
            <stop offset="100%" stop-color="#d35400"/>
          </linearGradient>
          <linearGradient id="bowlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#9e2646"/>
            <stop offset="100%" stop-color="#601227"/>
          </linearGradient>
        </defs>
        <ellipse cx="160" cy="120" rx="110" ry="42" fill="url(#lomiGlow)" class="anim-soup-glow"/>
        <g class="anim-steam-1">
          <path d="M135,70 Q130,50 140,35 Q145,25 138,15" stroke="#ff758f" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M138,15 C136,11 130,11 130,16 C130,21 138,26 138,26 C138,26 146,21 146,16 C146,11 140,11 138,15 Z" fill="#d93b68"/>
        </g>
        <g class="anim-steam-2">
          <path d="M165,65 Q175,45 165,30 Q158,18 168,8" stroke="#ffd166" stroke-width="3.5" fill="none" stroke-linecap="round"/>
          <path d="M168,8 C166,4 160,4 160,9 C160,14 168,19 168,19 C168,19 176,14 176,9 C176,4 170,4 168,8 Z" fill="#e6396b"/>
        </g>
        <g class="anim-steam-3">
          <path d="M190,75 Q185,55 195,40 Q202,28 196,18" stroke="#ff9ebb" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M196,18 C194,14 190,14 190,18 C190,22 196,25 196,25 C196,25 202,22 202,18 C202,14 198,14 196,18 Z" fill="#ff758f"/>
        </g>
        <ellipse cx="160" cy="182" rx="72" ry="10" fill="#2d1424" opacity="0.15"/>
        <path d="M78,112 Q76,176 160,180 Q244,176 242,112 Z" fill="url(#bowlGrad)"/>
        <ellipse cx="160" cy="180" rx="38" ry="7" fill="#4d0e1e"/>
        <ellipse cx="160" cy="112" rx="82" ry="28" fill="#5c1428"/>
        <ellipse cx="160" cy="112" rx="82" ry="28" fill="none" stroke="#fedc8b" stroke-width="2.5"/>
        <ellipse cx="160" cy="114" rx="77" ry="24" fill="url(#brothGrad)"/>
        <path d="M96,115 Q125,98 155,115 Q185,128 215,112" stroke="#fedc8b" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M108,122 Q145,135 180,118 Q205,108 224,120" stroke="#f1c40f" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <g transform="translate(112, 102)">
          <ellipse cx="18" cy="14" rx="16" ry="12" fill="#ffffff"/>
          <ellipse cx="18" cy="14" rx="10" ry="8" fill="#f39c12"/>
          <circle cx="15" cy="12" r="2.5" fill="#ffffff" opacity="0.8"/>
        </g>
        <g fill="#e67e22" stroke="#d35400" stroke-width="1">
          <polygon points="170,105 182,99 188,108 178,114"/>
          <polygon points="186,110 198,106 195,117 184,118"/>
          <polygon points="145,116 156,110 162,120 150,123"/>
          <circle cx="138" cy="126" r="6" fill="#8e44ad" stroke="#5b2c6f"/>
          <circle cx="178" cy="124" r="5.5" fill="#a04000" stroke="#6e2c00"/>
        </g>
        <g fill="#27ae60">
          <rect x="135" y="106" width="4" height="4" rx="1"/>
          <rect x="162" y="122" width="4" height="4" rx="1"/>
          <rect x="190" y="118" width="4" height="4" rx="1"/>
          <rect x="148" y="125" width="4" height="4" rx="1"/>
        </g>
        <g stroke="#fedc8b" stroke-width="2.5" stroke-linecap="round" fill="none">
          <path d="M142,148 Q148,143 154,148"/>
          <path d="M166,148 Q172,143 178,148"/>
        </g>
        <ellipse cx="136" cy="152" rx="5" ry="3.5" fill="#ff758f" opacity="0.85"/>
        <ellipse cx="184" cy="152" rx="5" ry="3.5" fill="#ff758f" opacity="0.85"/>
        <path d="M157,153 Q160,158 163,153" stroke="#fedc8b" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <g class="anim-chopsticks">
          <line x1="165" y1="92" x2="230" y2="48" stroke="#d4a373" stroke-width="4.5" stroke-linecap="round"/>
          <line x1="172" y1="96" x2="238" y2="54" stroke="#c58f5d" stroke-width="4" stroke-linecap="round"/>
          <path d="M170,95 Q178,108 174,120" stroke="#f1c40f" stroke-width="4" fill="none" stroke-linecap="round"/>
        </g>
        <path d="M68,75 C64,68 54,68 54,76 C54,84 68,93 68,93 C68,93 82,84 82,76 C82,68 72,68 68,75 Z" fill="#d93b68" opacity="0.75" transform="rotate(-15 68 75)"/>
        <path d="M255,80 C252,74 244,74 244,80 C244,86 255,93 255,93 C255,93 266,86 266,80 C266,74 258,74 255,80 Z" fill="#ff758f" opacity="0.8" transform="rotate(12 255 80)"/>
      </svg>`
    },

    "Cozy Coffee & Pastry Hangout": {
      badge: "✦ BREWING SWEET MOMENTS ✦",
      title: "Brewing Our Aesthetic Cafe Date! ☕",
      subtitle: "Warm artisan coffee, strawberry croissants & candid smiles with you...",
      status: "Pouring fresh coffee & printing VIP pass 🎟️",
      svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="cafeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffd166" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#ffd166" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="pinkCupGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ff758f"/>
            <stop offset="100%" stop-color="#d93b68"/>
          </linearGradient>
          <linearGradient id="creamCupGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="100%" stop-color="#faedd8"/>
          </linearGradient>
          <linearGradient id="croissantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f39c12"/>
            <stop offset="100%" stop-color="#d35400"/>
          </linearGradient>
        </defs>
        <ellipse cx="160" cy="130" rx="120" ry="45" fill="url(#cafeGlow)"/>
        <ellipse cx="160" cy="168" rx="145" ry="24" fill="#faedd8" stroke="#ebd3b0" stroke-width="2"/>
        <g transform="translate(195, 142)">
          <ellipse cx="38" cy="18" rx="38" ry="12" fill="#ffffff" stroke="#ebd3b0" stroke-width="1.5"/>
          <ellipse cx="38" cy="17" rx="32" ry="9" fill="#fffdf9"/>
          <path d="M15,16 Q38,4 62,16 Q50,22 38,18 Q26,22 15,16 Z" fill="url(#croissantGrad)"/>
          <path d="M26,14 Q38,9 50,14" stroke="#fedc8b" stroke-width="1.5" fill="none"/>
          <path d="M38,7 C36,4 30,4 30,8 C30,12 38,16 38,16 C38,16 46,12 46,8 C46,4 40,4 38,7 Z" fill="#e6396b"/>
          <polygon points="36,4 38,1 40,4 41,2 38,5" fill="#27ae60"/>
        </g>
        <g class="anim-cup-left">
          <g class="anim-steam-1">
            <path d="M122,68 Q118,50 126,38" stroke="#ff758f" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M126,36 C124,32 120,32 120,35 C120,38 126,42 126,42 C126,42 132,38 132,35 C132,32 128,32 126,36 Z" fill="#d93b68"/>
          </g>
          <ellipse cx="122" cy="156" rx="32" ry="8" fill="#ffccd5"/>
          <path d="M96,112 Q80,124 96,138" stroke="#d93b68" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M96,104 L99,142 Q122,154 145,142 L148,104 Z" fill="url(#pinkCupGrad)"/>
          <ellipse cx="122" cy="104" rx="26" ry="8" fill="#ffffff"/>
          <ellipse cx="122" cy="105" rx="23" ry="6.5" fill="#6f4e37"/>
          <path d="M122,103 C120,100 115,100 115,103 C115,107 122,110 122,110 C122,110 129,107 129,103 C129,100 124,100 122,103 Z" fill="#ffffff"/>
          <circle cx="114" cy="124" r="2.5" fill="#ffffff"/>
          <circle cx="130" cy="124" r="2.5" fill="#ffffff"/>
          <ellipse cx="109" cy="128" rx="3" ry="2" fill="#ffd166" opacity="0.8"/>
          <ellipse cx="135" cy="128" rx="3" ry="2" fill="#ffd166" opacity="0.8"/>
          <path d="M120,128 Q122,132 124,128" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        </g>
        <g class="anim-cup-right">
          <g class="anim-steam-2">
            <path d="M178,65 Q184,48 176,34" stroke="#ffd166" stroke-width="2.5" fill="none" stroke-linecap="round"/>
            <path d="M176,32 C174,28 170,28 170,31 C170,34 176,38 176,38 C176,38 182,34 182,31 C182,28 178,28 176,32 Z" fill="#f39c12"/>
          </g>
          <ellipse cx="178" cy="156" rx="32" ry="8" fill="#ebd3b0"/>
          <path d="M204,112 Q220,124 204,138" stroke="#c89e52" stroke-width="5" fill="none" stroke-linecap="round"/>
          <path d="M152,104 L155,142 Q178,154 201,142 L204,104 Z" fill="url(#creamCupGrad)" stroke="#ebd3b0" stroke-width="1"/>
          <ellipse cx="178" cy="104" rx="26" ry="8" fill="#fdfaf5"/>
          <ellipse cx="178" cy="105" rx="23" ry="6.5" fill="#583927"/>
          <path d="M178,103 C176,100 171,100 171,103 C171,107 178,110 178,110 C178,110 185,107 185,103 C185,100 180,100 178,103 Z" fill="#faedd8"/>
          <path d="M168,124 Q171,121 174,124" stroke="#4a2e1b" stroke-width="2" fill="none" stroke-linecap="round"/>
          <circle cx="186" cy="124" r="2.5" fill="#4a2e1b"/>
          <ellipse cx="166" cy="128" rx="3" ry="2" fill="#ff758f" opacity="0.8"/>
          <ellipse cx="190" cy="128" rx="3" ry="2" fill="#ff758f" opacity="0.8"/>
          <path d="M176,128 Q178,132 180,128" stroke="#4a2e1b" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        </g>
        <g transform="translate(150, 95)">
          <g class="anim-cafe-sparkle">
            <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" fill="#ffd166"/>
          </g>
        </g>
        <g class="anim-music-note">
          <text x="65" y="70" font-family="sans-serif" font-size="20" fill="#d93b68" font-weight="bold">♪</text>
          <text x="245" y="60" font-family="sans-serif" font-size="22" fill="#c89e52" font-weight="bold">♫</text>
        </g>
      </svg>`
    },

    "Sunset Stroll & Late Night Drive": {
      badge: "✦ GOLDEN HOUR CRUISE ✦",
      title: "Cruising Into the Sunset with You! 🌅",
      subtitle: "Windows down, our favorite songs playing & endless city lights ahead...",
      status: "Mapping our scenic route & printing VIP pass 🎟️",
      svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2d1424"/>
            <stop offset="35%" stop-color="#6b1d3d"/>
            <stop offset="70%" stop-color="#c43b4f"/>
            <stop offset="90%" stop-color="#f39c12"/>
            <stop offset="100%" stop-color="#fedc8b"/>
          </linearGradient>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="30%" stop-color="#fedc8b"/>
            <stop offset="65%" stop-color="#ff758f" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#ff758f" stop-opacity="0"/>
          </radialGradient>
          <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#fedc8b" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#fedc8b" stop-opacity="0"/>
          </linearGradient>
        </defs>

        <!-- Twilight Sunset Sky -->
        <rect x="10" y="10" width="300" height="142" rx="14" fill="url(#skyGrad)"/>

        <!-- Glowing Setting Sun on Horizon -->
        <circle cx="160" cy="100" r="30" fill="url(#sunGlow)"/>

        <!-- Distant Mountain Ridges & City Silhouette -->
        <path d="M10,132 L42,116 L76,125 L112,112 L148,122 L178,114 L212,125 L248,112 L282,120 L310,114 L310,152 L10,152 Z" fill="#1c0a1a" opacity="0.9"/>

        <!-- Twinkling Evening Stars -->
        <circle cx="45" cy="32" r="1.5" fill="#ffffff" opacity="0.8"/>
        <circle cx="92" cy="24" r="2" fill="#fedc8b"/>
        <circle cx="230" cy="28" r="2" fill="#ffffff"/>
        <circle cx="275" cy="40" r="1.8" fill="#fedc8b" opacity="0.85"/>

        <!-- Smooth Asphalt Highway -->
        <rect x="10" y="144" width="300" height="46" rx="4" fill="#1b101d"/>
        <!-- Road Shoulder Line -->
        <line x1="10" y1="145" x2="310" y2="145" stroke="#3d243f" stroke-width="2"/>
        <!-- Animated Moving Highway Center Dashes -->
        <line x1="15" y1="168" x2="305" y2="168" stroke="#fedc8b" stroke-width="3" stroke-dasharray="16 16" class="anim-road-lines"/>

        <!-- ROADSTER POSITIONING GROUP (Fixed at road height) -->
        <g transform="translate(92, 114)">
          <!-- SUSPENSION BOUNCE GROUP (Pure micro-animation) -->
          <g class="anim-car-body">
            <!-- Glowing Golden Headlight Beam Cone -->
            <polygon points="120,32 215,14 215,62 120,44" fill="url(#beamGrad)" opacity="0.65"/>

            <!-- Cute Passenger Silhouettes / Chibis -->
            <!-- Left Character (Mara): Cute dark burgundy hair & rosy blush -->
            <circle cx="56" cy="12" r="8.5" fill="#791530"/>
            <circle cx="57" cy="13" r="6.5" fill="#ffccd5"/>
            <ellipse cx="60" cy="16" rx="2" ry="1.2" fill="#ff758f"/>
            <!-- Right Character: Cute dark hair & golden blush -->
            <circle cx="73" cy="10" r="9" fill="#2d1424"/>
            <circle cx="72" cy="11" r="7" fill="#faedd8"/>
            <ellipse cx="70" cy="14" rx="2" ry="1.2" fill="#ff758f"/>
            <!-- Fluttering Love Heart between them -->
            <path d="M65,2 C64,-1 60,-1 60,2 C60,5 65,8 65,8 C65,8 70,5 70,2 C70,-1 66,-1 65,2 Z" fill="#d93b68"/>

            <!-- Curved Glass Windshield -->
            <path d="M44,22 L58,3 Q84,3 96,22 Z" fill="#ffffff" opacity="0.5" stroke="#ffffff" stroke-width="1.2"/>

            <!-- Car Body (Vintage Cherry-Rose Roadster) -->
            <path d="M10,32 Q26,22 48,22 L98,22 Q120,24 124,36 L120,46 Q116,50 8,50 Q6,40 10,32 Z" fill="#d93b68"/>
            <!-- Shiny Chrome Body Side Stripe -->
            <path d="M10,34 L122,34" stroke="#fedc8b" stroke-width="2"/>
            <!-- Front Headlight Bulb -->
            <circle cx="122" cy="38" r="4.5" fill="#fedc8b"/>
            <!-- Chrome Bumpers -->
            <rect x="6" y="42" width="6" height="6" rx="2" fill="#fedc8b"/>
            <rect x="118" y="42" width="6" height="6" rx="2" fill="#fedc8b"/>

            <!-- REAR WHEEL (Positioning wrapper + rotating child) -->
            <g transform="translate(28, 48)">
              <g class="anim-car-wheel">
                <circle cx="0" cy="0" r="11" fill="#141414"/>
                <circle cx="0" cy="0" r="5.5" fill="#fedc8b"/>
                <circle cx="0" cy="0" r="2" fill="#ffffff"/>
              </g>
            </g>

            <!-- FRONT WHEEL (Positioning wrapper + rotating child) -->
            <g transform="translate(98, 48)">
              <g class="anim-car-wheel">
                <circle cx="0" cy="0" r="11" fill="#141414"/>
                <circle cx="0" cy="0" r="5.5" fill="#fedc8b"/>
                <circle cx="0" cy="0" r="2" fill="#ffffff"/>
              </g>
            </g>

            <!-- DRIFTING HEART EXHAUST (Positioning wrapper + drift animation child) -->
            <g transform="translate(2, 42)">
              <g class="anim-heart-exhaust">
                <path d="M-4,0 C-6,-3 -11,-3 -11,0 C-11,3 -4,7 -4,7 C-4,7 3,3 3,0 C3,-3 -2,-3 -4,0 Z" fill="#ff758f"/>
                <circle cx="-14" cy="4" r="2.8" fill="#ff9ebb" opacity="0.6"/>
              </g>
            </g>
          </g>
        </g>
      </svg>`
    },

    "Movie Night & Blanket Fort": {
      badge: "✦ COZY CINEMA PARADISE ✦",
      title: "Building Our Cuddly Blanket Fort! 🎬",
      subtitle: "Twinkling fairy lights, warm blankets, fresh popcorn & sweet cuddles...",
      status: "Popping warm popcorn & printing VIP pass 🎟️",
      svg: `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fortGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stop-color="#fff0f4"/>
            <stop offset="60%" stop-color="#fae1e8"/>
            <stop offset="100%" stop-color="#ecd1db"/>
          </radialGradient>
          <linearGradient id="projectorBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#fedc8b" stop-opacity="0.85"/>
            <stop offset="100%" stop-color="#fedc8b" stop-opacity="0.1"/>
          </linearGradient>
          <linearGradient id="pillowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#ff758f"/>
            <stop offset="100%" stop-color="#d93b68"/>
          </linearGradient>
        </defs>
        <rect x="15" y="15" width="290" height="170" rx="16" fill="url(#fortGlow)"/>
        <path d="M15,15 Q80,75 160,35 Q240,75 305,15 L305,45 Q240,95 160,55 Q80,95 15,45 Z" fill="#d93b68" opacity="0.85"/>
        <path d="M15,40 Q80,95 160,55 Q240,95 305,40 L305,65 Q240,115 160,75 Q80,115 15,65 Z" fill="#c42754" opacity="0.9"/>
        <path d="M30,55 Q95,95 160,70 Q225,95 290,55" stroke="#fedc8b" stroke-width="1.8" fill="none"/>
        <circle cx="50" cy="65" r="4.5" fill="#fedc8b" class="anim-fairy-light"/>
        <circle cx="85" cy="80" r="4.5" fill="#ffd166" class="anim-fairy-light"/>
        <circle cx="125" cy="80" r="4.5" fill="#ff9ebb" class="anim-fairy-light"/>
        <circle cx="160" cy="70" r="5" fill="#ffffff" class="anim-fairy-light"/>
        <circle cx="195" cy="80" r="4.5" fill="#fedc8b" class="anim-fairy-light"/>
        <circle cx="235" cy="80" r="4.5" fill="#ffd166" class="anim-fairy-light"/>
        <circle cx="270" cy="65" r="4.5" fill="#ff758f" class="anim-fairy-light"/>
        <rect x="25" y="148" width="270" height="28" rx="8" fill="#ffffff" stroke="#ebd3b0" stroke-width="2"/>
        <g transform="translate(55, 125)">
          <rect x="0" y="0" width="38" height="28" rx="8" fill="url(#pillowGrad)" transform="rotate(-10)"/>
          <circle cx="18" cy="12" r="3" fill="#ffffff" opacity="0.8"/>
        </g>
        <g transform="translate(88, 128)">
          <rect x="0" y="0" width="42" height="28" rx="8" fill="#ffffff" stroke="#fedc8b" stroke-width="1.5" transform="rotate(8)"/>
          <circle cx="20" cy="14" r="3" fill="#c89e52"/>
        </g>
        <g transform="translate(145, 124)">
          <rect x="0" y="10" width="36" height="22" rx="4" fill="#2d1424"/>
          <circle cx="9" cy="21" r="5" fill="#c89e52"/>
          <circle cx="26" cy="21" r="4" fill="#c89e52"/>
          <rect x="36" y="15" width="6" height="12" rx="2" fill="#fedc8b"/>
          <polygon points="42,16 140,-5 140,42 42,26" fill="url(#projectorBeamGrad)" class="anim-projector-beam"/>
          <g class="anim-projector-beam" transform="translate(110, 8)">
            <path d="M12,4 C10,1 6,1 6,4 C6,7 12,11 12,11 C12,11 18,7 18,4 C18,1 14,1 12,4 Z" fill="#d93b68"/>
          </g>
          <circle cx="8" cy="7" r="7" fill="#791530" stroke="#fedc8b" stroke-width="1.5"/>
          <circle cx="26" cy="7" r="7" fill="#791530" stroke="#fedc8b" stroke-width="1.5"/>
        </g>
        <g transform="translate(230, 115)">
          <path d="M4,20 L8,55 Q20,58 32,55 L36,20 Z" fill="#ffffff"/>
          <path d="M10,20 L13,56 L19,56 L16,20 Z" fill="#e6396b"/>
          <path d="M24,20 L27,56 L33,55 L30,20 Z" fill="#e6396b"/>
          <circle cx="16" cy="38" r="1.8" fill="#2d1424"/>
          <circle cx="24" cy="38" r="1.8" fill="#2d1424"/>
          <ellipse cx="13" cy="41" rx="2" ry="1.2" fill="#ff758f"/>
          <ellipse cx="27" cy="41" rx="2" ry="1.2" fill="#ff758f"/>
          <path d="M19,41 Q20,44 21,41" stroke="#2d1424" stroke-width="1.2" fill="none" stroke-linecap="round"/>
          <circle cx="8" cy="18" r="6" fill="#fedc8b"/>
          <circle cx="16" cy="14" r="7" fill="#ffffff"/>
          <circle cx="24" cy="14" r="7" fill="#fedc8b"/>
          <circle cx="32" cy="18" r="6" fill="#ffffff"/>
          <circle cx="20" cy="18" r="6.5" fill="#fffdf9"/>
          <g class="anim-popcorn-heart">
            <path d="M18,2 C16,-1 12,-1 12,2 C12,5 18,9 18,9 C18,9 24,5 24,2 C24,-1 20,-1 18,2 Z" fill="#ffd166"/>
            <circle cx="28" cy="4" r="3" fill="#ffffff"/>
          </g>
        </g>
      </svg>`
    }
  };

  // ==========================================================================
  // STAGE TRANSITION: LOCK IN DATE -> CARTOON ANIMATION -> TICKET PASS
  // ==========================================================================
  if (btnLockDate) {
    btnLockDate.addEventListener('click', () => {
      soundEngine.playOpenChime();

      currentCustomNote = customNoteInput ? customNoteInput.value.trim() : "";

      if (ticketPassengerDisplay) ticketPassengerDisplay.textContent = INVITATION_CONFIG.petName;
      if (ticketVibeDisplay) ticketVibeDisplay.textContent = selectedVibe;
      if (ticketTimeDisplay) ticketTimeDisplay.textContent = selectedSchedule;
      if (ticketNoteDisplay) {
        ticketNoteDisplay.textContent = currentCustomNote ? `"${currentCustomNote}"` : `"Extra cute smiles & good vibes"`;
      }

      // Look up chosen cartoon scene data
      const sceneData = VIBE_SCENES[selectedVibe] || VIBE_SCENES["Special Batangas Lomi Date"];

      // Populate cartoon scene DOM
      if (cartoonBadge) cartoonBadge.textContent = sceneData.badge;
      if (cartoonTitle) cartoonTitle.textContent = sceneData.title;
      if (cartoonSubtitle) cartoonSubtitle.textContent = sceneData.subtitle;
      if (cartoonLoaderStatus) cartoonLoaderStatus.textContent = sceneData.status;
      if (cartoonScene) cartoonScene.innerHTML = sceneData.svg;

      // Update header banner during transition
      const celebrationBadge = document.querySelector('.celebration-badge');
      const celebrationTitle = document.querySelector('.celebration-title');
      const celebrationSub = document.querySelector('.celebration-sub');

      if (celebrationBadge) celebrationBadge.textContent = sceneData.badge;
      if (celebrationTitle) celebrationTitle.textContent = "Locking In Our Date! ✨";
      if (celebrationSub) celebrationSub.textContent = "Hold on tight, crafting our official boarding pass below:";

      // Hide planner, show cartoon animation stage
      document.querySelector('.planner-form').style.display = 'none';
      if (ticketResult) ticketResult.classList.add('hidden');
      if (vibeAnimationStage) {
        vibeAnimationStage.classList.remove('hidden');

        // Reset progress bar animation
        if (cartoonLoaderBar) {
          cartoonLoaderBar.style.animation = 'none';
          void cartoonLoaderBar.offsetWidth;
          cartoonLoaderBar.style.animation = '';
        }

        vibeAnimationStage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Clear any prior transition timers
      if (cartoonTransitionTimer) clearTimeout(cartoonTransitionTimer);

      // Play interstitial animation for 2.8s, then smoothly reveal the VIP Ticket!
      cartoonTransitionTimer = setTimeout(() => {
        if (vibeAnimationStage) vibeAnimationStage.classList.add('hidden');
        if (ticketResult) ticketResult.classList.remove('hidden');

        // Update celebration banner for final ticket pass
        if (celebrationBadge) celebrationBadge.textContent = "✦ DATE PASS CONFIRMED ✦";
        if (celebrationTitle) celebrationTitle.textContent = "It's an Official Date! 💖";
        if (celebrationSub) celebrationSub.textContent = "Here is our official VIP date pass. Save this keepsake below:";

        soundEngine.playCelebrationFanfare();
        spawnConfetti(110);

        setTimeout(() => {
          ticketResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }, 2800);
    });
  }

  // Change Choices / Edit Button
  const btnResetChoices = document.getElementById('btn-reset-choices');
  if (btnResetChoices) {
    btnResetChoices.addEventListener('click', () => {
      soundEngine.playClick();
      if (cartoonTransitionTimer) clearTimeout(cartoonTransitionTimer);

      if (vibeAnimationStage) vibeAnimationStage.classList.add('hidden');
      if (ticketResult) ticketResult.classList.add('hidden');
      document.querySelector('.planner-form').style.display = 'flex';

      // Restore planner celebration banner
      const celebrationBadge = document.querySelector('.celebration-badge');
      const celebrationTitle = document.querySelector('.celebration-title');
      const celebrationSub = document.querySelector('.celebration-sub');

      if (celebrationBadge) celebrationBadge.textContent = "✦ SHE/HE SAID YES! ✦";
      if (celebrationTitle) celebrationTitle.textContent = "You just made my whole year! 🥰";
      if (celebrationSub) celebrationSub.textContent = "Now let's plan the most perfect date together. Customize our agenda below:";

      window.scrollTo({ top: 180, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 8. OFFICIAL VIP DATE PASS DOWNLOAD (JUST THE TICKET - HIGH-RES PNG)
  // ==========================================================================
  function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let curY = y;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, curY);
        line = words[n] + ' ';
        curY += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, curY);
    return curY + lineHeight;
  }

  async function downloadTicketImage() {
    soundEngine.playCelebrationFanfare();
    spawnConfetti(100);

    const downloadText = document.getElementById('download-text');
    if (downloadText) downloadText.textContent = "Creating Pass...";

    // Ensure custom web fonts are rendered properly in canvas
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }

    // Render at 2x Retina resolution for crisp typography and graphics
    const dpr = 2;
    const cardW = 480;
    const cardH = 580;
    const radius = 18;
    const notchR = 14;
    const perfY = 430;

    const offCanvas = document.createElement('canvas');
    offCanvas.width = cardW * dpr;
    offCanvas.height = cardH * dpr;
    const c = offCanvas.getContext('2d');
    c.scale(dpr, dpr);

    // Canvas starts fully transparent - only the ticket card is drawn
    c.clearRect(0, 0, cardW, cardH);

    // 1. Draw Ticket Card Shape (Rounded corners + genuine circular perforation cutouts)
    c.save();
    c.beginPath();
    c.moveTo(radius, 0);
    // Top edge
    c.lineTo(cardW - radius, 0);
    // Top-right corner
    c.arcTo(cardW, 0, cardW, radius, radius);
    // Right edge down to above notch
    c.lineTo(cardW, perfY - notchR);
    // Right notch cutout (curving inward into card)
    c.arc(cardW, perfY, notchR, -Math.PI / 2, Math.PI / 2, true);
    // Right edge down to bottom-right
    c.lineTo(cardW, cardH - radius);
    // Bottom-right corner
    c.arcTo(cardW, cardH, cardW - radius, cardH, radius);
    // Bottom edge to bottom-left
    c.lineTo(radius, cardH);
    // Bottom-left corner
    c.arcTo(0, cardH, 0, cardH - radius, radius);
    // Left edge up to below notch
    c.lineTo(0, perfY + notchR);
    // Left notch cutout (curving inward into card)
    c.arc(0, perfY, notchR, Math.PI / 2, -Math.PI / 2, true);
    // Left edge up to top-left corner
    c.lineTo(0, radius);
    // Top-left corner
    c.arcTo(0, 0, radius, 0, radius);
    c.closePath();

    // Fill ticket body with clean white
    c.fillStyle = '#ffffff';
    c.fill();

    // Outline stroke
    c.strokeStyle = '#ebd3b0';
    c.lineWidth = 2;
    c.stroke();
    c.restore();

    // 2. Inner luxury gold accent frame
    c.save();
    c.strokeStyle = 'rgba(200, 158, 82, 0.35)';
    c.lineWidth = 1;
    c.beginPath();
    c.roundRect(7, 7, cardW - 14, cardH - 14, radius - 4);
    c.stroke();
    c.restore();

    // 3. Ticket Header: Brand Logo & Confirmed Badge
    const padX = 30;
    c.fillStyle = '#791530';
    c.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    c.textAlign = 'left';
    c.fillText('❦  OFFICIAL DATE PASS', padX, 42);

    // Status Badge: CONFIRMED ✓
    const badgeText = 'CONFIRMED ✓';
    c.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
    const badgeW = c.measureText(badgeText).width + 18;
    const badgeX = cardW - padX - badgeW;
    const badgeY = 26;
    c.beginPath();
    c.roundRect(badgeX, badgeY, badgeW, 22, 6);
    c.fillStyle = '#e8f7ec';
    c.fill();
    c.strokeStyle = '#1b7a37';
    c.lineWidth = 1;
    c.stroke();
    c.fillStyle = '#1b7a37';
    c.fillText(badgeText, badgeX + 9, badgeY + 15);

    // Header divider line
    c.beginPath();
    c.moveTo(padX, 64);
    c.lineTo(cardW - padX, 64);
    c.strokeStyle = '#ebd8bd';
    c.lineWidth = 1.2;
    c.stroke();

    // 4. Ticket Content (2 Columns)
    const col1X = padX;
    const col2X = cardW / 2 + 10;
    const colWidth = cardW / 2 - padX - 10;

    // Row 1: Passenger / VIP & Destination
    c.fillStyle = '#8f7685';
    c.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
    c.fillText('PASSENGER / VIP', col1X, 94);
    c.fillStyle = '#d93b68';
    c.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
    c.fillText(INVITATION_CONFIG.petName, col1X, 118);

    c.fillStyle = '#8f7685';
    c.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
    c.fillText('DESTINATION', col2X, 94);
    c.fillStyle = '#2b1129';
    c.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    wrapCanvasText(c, 'To My Heart & A Great Time', col2X, 118, colWidth, 20);

    // Row 2: Planned Vibe & Schedule
    c.fillStyle = '#8f7685';
    c.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
    c.fillText('PLANNED VIBE', col1X, 185);
    c.fillStyle = '#2b1129';
    c.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    wrapCanvasText(c, selectedVibe, col1X, 208, colWidth, 21);

    c.fillStyle = '#8f7685';
    c.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
    c.fillText('SCHEDULE', col2X, 185);
    c.fillStyle = '#2b1129';
    c.font = 'bold 15px "Plus Jakarta Sans", sans-serif';
    wrapCanvasText(c, selectedSchedule, col2X, 208, colWidth, 21);

    // Row 3: Special Request (Full Width)
    c.fillStyle = '#8f7685';
    c.font = 'bold 10px "Plus Jakarta Sans", sans-serif';
    c.fillText('SPECIAL REQUEST', col1X, 280);
    c.fillStyle = '#553c52';
    c.font = 'italic 500 14px "Plus Jakarta Sans", sans-serif';
    const noteText = currentCustomNote ? `"${currentCustomNote}"` : `"Extra cute smiles & good vibes"`;
    wrapCanvasText(c, noteText, col1X, 304, cardW - padX * 2, 21);

    // 5. Perforation Dashed Line across notches
    c.beginPath();
    c.setLineDash([8, 6]);
    c.moveTo(notchR + 8, perfY);
    c.lineTo(cardW - notchR - 8, perfY);
    c.strokeStyle = '#dac2a1';
    c.lineWidth = 1.8;
    c.stroke();
    c.setLineDash([]); // Reset dash

    // 6. Footer: Barcode & Approved Stamp
    const barX = padX;
    const barY = perfY + 28;
    const barWidths = [3, 1, 4, 2, 1, 3, 2, 5, 2, 1, 3, 4, 1, 2, 3, 1, 5, 2, 2, 4, 1, 3, 2, 4];
    let curX = barX;
    c.fillStyle = '#1d0d1e';
    for (let i = 0; i < barWidths.length; i++) {
      const w = barWidths[i] * 1.7;
      if (i % 2 === 0) {
        c.fillRect(curX, barY, w, 34);
      }
      curX += w + 2.2;
    }

    c.fillStyle = '#7d6b79';
    c.font = '10px monospace';
    c.fillText('DATE-NO-REFUNDS-FOREVER-💖', barX, barY + 48);

    // Official Approved Stamp (tilted -8deg)
    c.save();
    c.translate(cardW - padX - 85, barY + 20);
    c.rotate((-8 * Math.PI) / 180);
    c.beginPath();
    c.roundRect(-75, -20, 150, 40, 5);
    c.strokeStyle = '#a61f3d';
    c.lineWidth = 2.2;
    c.stroke();
    c.fillStyle = 'rgba(166, 31, 61, 0.04)';
    c.fill();
    c.fillStyle = '#a61f3d';
    c.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
    c.textAlign = 'center';
    c.fillText('APPROVED WITH LOVE', 0, 5);
    c.restore();

    // 7. Download High-Resolution PNG of just the ticket
    try {
      const imageURL = offCanvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `Date-Pass-${INVITATION_CONFIG.recipientName.replace(/\s+/g, '-')}.png`;
      link.href = imageURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (downloadText) downloadText.textContent = "✓ Date Pass Saved!";
    } catch (err) {
      console.error("Ticket download error:", err);
      if (downloadText) downloadText.textContent = "Download Date Pass";
    }

    setTimeout(() => {
      if (downloadText) downloadText.textContent = "Download Date Pass";
    }, 3500);
  }

  const btnDownloadTicket = document.getElementById('btn-download-ticket');
  if (btnDownloadTicket) {
    btnDownloadTicket.addEventListener('click', downloadTicketImage);
  }

});

