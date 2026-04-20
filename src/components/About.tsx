import { ShieldCheck, Clock, Wrench, Award } from 'lucide-react';

const advantages = [
  {
    icon: ShieldCheck,
    title: 'Гарантия качества',
    description: 'Предоставляем письменную гарантию на все выполненные работы и установленное оборудование.',
  },
  {
    icon: Clock,
    title: 'Быстрые сроки',
    description: 'Выезжаем на объект в удобное для вас время. Небольшие работы выполняем в день обращения.',
  },
  {
    icon: Wrench,
    title: 'Опытные мастера',
    description: 'Наши специалисты имеют профильное образование и многолетний практический опыт.',
  },
  {
    icon: Award,
    title: 'Сертифицированное оборудование',
    description: 'Работаем только с проверенным оборудованием от надёжных производителей.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
              О компании
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-6">
              Элмонт — ваш надёжный партнёр
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Мы занимаемся профессиональным монтажом электрических систем, видеонаблюдения и контроля
              доступа уже более 5 лет. За это время выполнили сотни проектов — от квартир до крупных
              коммерческих объектов.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Каждый проект мы выполняем с максимальной ответственностью, соблюдая все нормы и стандарты.
              Ваша безопасность и комфорт — наш главный приоритет.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
            >
              Получить консультацию
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((adv) => {
              const Icon = adv.icon;
              return (
                <div
                  key={adv.title}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-yellow-500/30 transition-colors"
                >
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{adv.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{adv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
