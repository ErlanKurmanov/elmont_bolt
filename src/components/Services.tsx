import {
  Zap,
  Camera,
  DoorOpen,
  Cpu,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Электромонтаж',
    description:
      'Полный комплекс электромонтажных работ: прокладка кабеля, монтаж щитов, розеток, освещения и автоматики.',
    items: [
      'Монтаж электропроводки',
      'Установка щитков и автоматов',
      'Подключение розеток и выключателей',
      'Монтаж наружного освещения',
      'Заземление и молниезащита',
    ],
    color: 'from-yellow-500/20 to-amber-500/10',
    accent: 'text-yellow-400',
    border: 'border-yellow-500/20 hover:border-yellow-500/50',
  },
  {
    icon: Camera,
    title: 'Видеонаблюдение',
    description:
      'Профессиональная установка систем видеонаблюдения для дома, офиса и производственных объектов.',
    items: [
      'IP и аналоговые камеры',
      'Запись и хранение архива',
      'Удалённый просмотр с телефона',
      'Установка домофонов',
      'Монтаж переговорных устройств',
    ],
    color: 'from-blue-500/20 to-cyan-500/10',
    accent: 'text-blue-400',
    border: 'border-blue-500/20 hover:border-blue-500/50',
  },
  {
    icon: DoorOpen,
    title: 'Домофонные системы',
    description:
      'Установка и настройка видеодомофонов и аудиодомофонов для квартир, офисов и жилых комплексов.',
    items: [
      'Видеодомофоны с записью',
      'Аудиодомофоны',
      'Системы контроля доступа',
      'Электромагнитные замки',
      'Интеграция с видеонаблюдением',
    ],
    color: 'from-green-500/20 to-emerald-500/10',
    accent: 'text-green-400',
    border: 'border-green-500/20 hover:border-green-500/50',
  },
  {
    icon: Cpu,
    title: 'Турникеты и СКУД',
    description:
      'Монтаж систем контроля и управления доступом: турникеты, считыватели карт, биометрические системы.',
    items: [
      'Турникеты и калитки',
      'Считыватели карт и брелоков',
      'Биометрический контроль',
      'Шлагбаумы и ворота',
      'Программное обеспечение',
    ],
    color: 'from-orange-500/20 to-red-500/10',
    accent: 'text-orange-400',
    border: 'border-orange-500/20 hover:border-orange-500/50',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Наши услуги
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Всё для вашей безопасности
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Выполняем работы под ключ — от проектирования до сдачи объекта с гарантией качества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`relative bg-gradient-to-br ${service.color} border ${service.border} rounded-2xl p-8 transition-all duration-300 group`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gray-900/50 flex items-center justify-center">
                    <Icon className={`w-6 h-6 ${service.accent}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 ${service.accent}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="#contact"
                  className={`mt-6 flex items-center gap-1 text-sm font-semibold ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  Заказать <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
