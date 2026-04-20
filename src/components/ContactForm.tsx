import { useState } from 'react';
import { Phone, User, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { sendCallbackRequest } from '../lib/telegram';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setStatus('loading');
    const ok = await sendCallbackRequest(name.trim(), phone.trim());
    setStatus(ok ? 'success' : 'error');

    if (ok) {
      setName('');
      setPhone('');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
              Связаться с нами
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6">
              Оставьте заявку — перезвоним
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Оставьте своё имя и номер телефона, и мы свяжемся с вами в ближайшее время для
              бесплатной консультации.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Телефон / WhatsApp</div>
                  <a
                    href="tel:+996555112655"
                    className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors"
                  >
                    +996 555-112-655
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-yellow-400" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">WhatsApp</div>
                  <a
                    href="https://wa.me/996555112655"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold text-lg hover:text-yellow-400 transition-colors"
                  >
                    Написать в WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-2xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Заявка на перезвонить</h3>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-white font-bold text-lg">Заявка отправлена!</h4>
                <p className="text-gray-400">
                  Мы получили вашу заявку и перезвоним в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Ваше имя</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Введите ваше имя"
                      required
                      className="w-full bg-gray-900 border border-gray-700 focus:border-yellow-500 text-white placeholder-gray-600 rounded-xl py-3 pl-11 pr-4 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Номер телефона</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+996 XXX-XXX-XXX"
                      required
                      className="w-full bg-gray-900 border border-gray-700 focus:border-yellow-500 text-white placeholder-gray-600 rounded-xl py-3 pl-11 pr-4 outline-none transition-colors"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    Ошибка отправки. Пожалуйста, позвоните нам напрямую.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed text-gray-950 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Отправить заявку
                    </>
                  )}
                </button>

                <p className="text-gray-600 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
