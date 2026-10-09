(() => {
  let ctx;
  function tone(frequency, duration = .12) {
    try {
      ctx ||= new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.frequency.value = frequency; gain.gain.setValueAtTime(.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + duration);
      osc.connect(gain).connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + duration);
    } catch (_) { /* Audio is an enhancement; the game remains usable without it. */ }
  }
  window.gameAudio = { correct: () => tone(660), wrong: () => tone(180, .18) };
})();
