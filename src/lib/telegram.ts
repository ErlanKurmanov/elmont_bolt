const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export async function sendCallbackRequest(name: string, phone: string): Promise<boolean> {
  const text = `📞 *Новая заявка на перезвонить*\n\n👤 *Имя:* ${name}\n📱 *Телефон:* ${phone}\n\n⏰ ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Bishkek' })}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();
    return data.ok === true;
  } catch {
    return false;
  }
}
