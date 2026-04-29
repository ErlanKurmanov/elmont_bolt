// ── Year ──────────────────────────────────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Burger menu ───────────────────────────────────────────────────────────────
const burgerBtn   = document.getElementById('burger-btn');
const mobileMenu  = document.getElementById('mobile-menu');
const burgerIcon  = document.getElementById('burger-icon');
const closeIcon   = document.getElementById('close-icon');

burgerBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  if (isOpen) {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    burgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  } else {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    burgerIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    burgerIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

// ── Telegram form ─────────────────────────────────────────────────────────────
const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID   = import.meta.env.VITE_TELEGRAM_CHAT_ID;

async function sendCallbackRequest(name, phone) {
  const text =
    `📞 *Новая заявка на перезвонить*\n\n` +
    `👤 *Имя:* ${name}\n` +
    `📱 *Телефон:* ${phone}\n\n` +
    `⏰ ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Bishkek' })}`;

  try {
    const res = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text, parse_mode: 'Markdown' }),
      }
    );
    const data = await res.json();
    return data.ok === true;
  } catch {
    return false;
  }
}

const form       = document.getElementById('callback-form');
const successDiv = document.getElementById('form-success');
const errorDiv   = document.getElementById('form-error');
const submitBtn  = document.getElementById('submit-btn');
const btnText    = document.getElementById('btn-text');

const spinnerSVG = `<svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
</svg>`;

const sendSVG = `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
</svg>`;

function setLoading(loading) {
  submitBtn.disabled = loading;
  submitBtn.innerHTML = loading
    ? `${spinnerSVG}<span>Отправка...</span>`
    : `${sendSVG}<span>Отправить заявку</span>`;
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name  = document.getElementById('input-name').value.trim();
  const phone = document.getElementById('input-phone').value.trim();
  if (!name || !phone) return;

  errorDiv.classList.add('hidden');
  errorDiv.classList.remove('flex');
  setLoading(true);

  const ok = await sendCallbackRequest(name, phone);

  setLoading(false);

  if (ok) {
    form.classList.add('hidden');
    successDiv.classList.remove('hidden');
    successDiv.classList.add('flex');
    // Reset after 5 s so user could send again if needed
    setTimeout(() => {
      successDiv.classList.add('hidden');
      successDiv.classList.remove('flex');
      form.classList.remove('hidden');
      form.reset();
    }, 5000);
  } else {
    errorDiv.classList.remove('hidden');
    errorDiv.classList.add('flex');
  }
});
