import { Phone, ChevronDown, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, #eab308 0%, transparent 50%),
            radial-gradient(ellipse at 80% 20%, #f59e0b 0%, transparent 40%)`,
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent"
            style={{
              left: `${(i + 1) * 5}%`,
              height: '100%',
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-1.5 mb-8">
          <Zap className="w-4 h-4 text-yellow-400" fill="currentColor" />
          <span className="text-yellow-400 text-sm font-medium">Профессиональный электромонтаж</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Надёжные решения{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
            для вашей безопасности
          </span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Электромонтаж, видеонаблюдение, домофоны, турникеты — выполняем работы любой сложности
          быстро, качественно и с гарантией.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25"
          >
            Оставить заявку
          </a>
          <a
            href="tel:+996555112655"
            className="flex items-center gap-2 border border-gray-700 hover:border-yellow-500/50 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all hover:bg-white/5"
          >
            <Phone className="w-4 h-4 text-yellow-400" />
            +996 555-112-655
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '5+', label: 'лет опыта' },
            { value: '500+', label: 'объектов' },
            { value: '100%', label: 'гарантия' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-yellow-400">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-yellow-400 transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
