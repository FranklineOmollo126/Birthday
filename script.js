      const target = new Date("July 6, 2026 12:35:00").getTime();

    function update() {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        document.getElementById("timer").innerHTML = `<div class="celebrate">🎉 HAPPY BIRTHDAY! 🎉</div>`;
        return;
      }

      const d = Math.floor(diff / (1000*60*60*24));
      const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
      const m = Math.floor((diff % (1000*60*60)) / (1000*60));
      const s = Math.floor((diff % (1000*60)) / 1000);

      document.getElementById("days").textContent = String(d).padStart(2, '0');
      document.getElementById("hours").textContent = String(h).padStart(2, '0');
      document.getElementById("minutes").textContent = String(m).padStart(2, '0');
      document.getElementById("seconds").textContent = String(s).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
  
