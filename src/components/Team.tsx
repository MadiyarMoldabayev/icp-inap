"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type L = "ru"|"kz"|"en";
interface Member { name: Record<L,string>; role: Record<L,string>; bio: Record<L,string>; tags: string[]; linkedin?: string; }

const team: Member[] = [
  {
    name: { ru:"Сергей А. Коновалов", kz:"Сергей А. Коновалов", en:"Sergey A. Konovalov" },
    role: { ru:"Директор", kz:"Директор", en:"Director" },
    bio: {
      ru:"Доктор социологии, доцент, индивидуальный член ISA. Автор Белой Книги (297 стр., ISBN 978-601-08-4628-9). Докладчик на 70-й сессии Комиссии ООН по положению женщин (CSW70) в Church Center ООН, Нью-Йорк. Участник вебинара «Социологические подходы к гендерной справедливости» (13 марта 2026). Коллаборация с профессорами Rosemary Barbaret и Jan Marie Fritz.",
      kz:"Әлеуметтану докторы, доцент, ISA жеке мүшесі. Ақ Кітап авторы (297 б.). БҰҰ CSW70 баяндамашысы, Нью-Йорк.",
      en:"Doctor of Sociology, Associate Professor, ISA Individual Member. Author of the White Book (297 pages, ISBN 978-601-08-4628-9). Speaker at UN CSW70 at the Church Center of the UN, New York. Participant in the webinar 'Sociological Approaches to Gender Justice' (March 13, 2026). Collaboration with Professors Rosemary Barbaret and Jan Marie Fritz."
    },
    tags: ["PhD Sociology","ISA","CSW70 Speaker","White Book Author"],
    linkedin: "https://www.linkedin.com/in/sergey-konovalov-0b88b5290",
  },
  {
    name: { ru:"Каржаубаев Азамат", kz:"Қаржаубаев Азамат", en:"Azamat Karzhaubayev" },
    role: { ru:"Заместитель директора", kz:"Директордың орынбасары", en:"Deputy Director" },
    bio: {
      ru:"Бакалавр Каспийского госуниверситета (международные отношения), магистр ВК университета (государственное управление). Первый секретарь Посольства Казахстана в Украине (2020–2024). Эксперт Администрации Президента РК (2019–2020). Главный эксперт Министерства по делам религий (2015–2019). Курс по урегулированию конфликтов (2012).",
      kz:"Каспий мемлекеттік университетінің бакалавры. Қазақстанның Украинадағы елшілігінің бірінші хатшысы (2020–2024).",
      en:"Bachelor from Caspian State University (International Relations), Master from EKU (State Management). First Secretary, Kazakhstan Embassy in Ukraine (2020–2024). Expert, Presidential Administration (2019–2020). Chief Expert, Ministry of Religious Affairs (2015–2019)."
    },
    tags: ["Diplomat","Presidential Administration","International Relations"],
  },
  {
    name: { ru:"Майгельдинов Казбек", kz:"Майгелдінов Қазбек", en:"Kazbek Maigeldhinov" },
    role: { ru:"Эксперт-политолог", kz:"Саясаттанушы-сарапшы", en:"Political Scientist" },
    bio: {
      ru:"Доктор PhD политических наук (ЕНУ им. Гумилёва). 40+ научных статей, 4 монографии (800+ стр.). Орден «Құрмет» (2026), медаль «Ерен еңбегі үшін» (2022). Трижды благодарственные письма Президента К.К. Токаева. Член Национального курултая (2022–2024). Председатель Ассоциации исследователей Китая. Премия «Народный любимец» — «Лидер блогосферы 2020».",
      kz:"PhD саяси ғылымдар (ЕҰУ). 40+ ғылыми мақала, 4 монография. «Құрмет» ордені (2026). Ұлттық құрылтай мүшесі (2022–2024).",
      en:"PhD in Political Science (ENU). 40+ scientific articles, 4 monographs (800+ pages). Order 'Kurmet' (2026), Medal for Distinguished Labor (2022). Three Presidential thank-you letters. National Kurultai member (2022–2024). Chairman, Association of China Researchers."
    },
    tags: ["PhD Political Science","40+ Publications","Order of Kurmet","National Kurultai"],
  },
  {
    name: { ru:"Бишенов Азамат", kz:"Бишенов Азамат", en:"Azamat Bishenov" },
    role: { ru:"Эксперт по правовым вопросам", kz:"Құқықтық сарапшы", en:"Legal Expert" },
    bio: {
      ru:"Выпускник Академии финансовой полиции (юриспруденция). Соавтор монографии ISBN 978-601-08-4631-9. Участник научного проекта IRN BR24993082 «Информационная безопасность Казахстана» (2024–2026). Корпоративный секретарь КИОР, зам. директора Института евразийской интеграции, следователь ДБЭКП.",
      kz:"Қаржы полициясы академиясының түлегі. ISBN 978-601-08-4631-9 монографиясының тең авторы.",
      en:"Graduate of the Academy of Financial Police. Co-author of monograph ISBN 978-601-08-4631-9. Participant in IRN BR24993082 research project on information security (2024–2026). Former corporate secretary, deputy director, and investigator."
    },
    tags: ["Jurisprudence","Published Author","Anti-Corruption"],
  },
  {
    name: { ru:"Дария Д. Бакен", kz:"Дария Д. Бакен", en:"Dariya D. Baken" },
    role: { ru:"Координатор проектов", kz:"Жобалар координаторы", en:"Project Coordinator" },
    bio: {
      ru:"Координатор международных проектов, специалист по гендерным исследованиям. Организация фокус-групп в 7 городах Казахстана (81 участник из 150+ НПО).",
      kz:"Халықаралық жобалар координаторы, гендерлік зерттеулер маманы.",
      en:"International projects coordinator, gender studies specialist. Organized focus groups across 7 cities of Kazakhstan (81 participants from 150+ NGOs)."
    },
    tags: ["Gender Studies","Field Research"],
    linkedin: "https://www.linkedin.com/in/dariya-baken-85827b17b",
  },
  {
    name: { ru:"Оразбекова С.Р.", kz:"Оразбекова С.Р.", en:"Orazbekova S.R." },
    role: { ru:"Эксперт по гендерным вопросам", kz:"Гендерлік сарапшы", en:"Gender Expert" },
    bio: {
      ru:"Эксперт по гендерной политике и защите прав женщин. Участие в подготовке рекомендаций по учреждению института Уполномоченного по домашнему насилию по модели Великобритании.",
      kz:"Гендерлік саясат және әйелдер құқықтарын қорғау сарапшысы.",
      en:"Expert in gender policy. Contributed to recommendations for establishing a Domestic Violence Commissioner (UK model)."
    },
    tags: ["Gender Policy","DV Commissioner"],
  },
  {
    name: { ru:"Мукашева Г.", kz:"Мұқашева Г.", en:"Mukasheva G." },
    role: { ru:"Социолог-исследователь", kz:"Әлеуметтанушы-зерттеуші", en:"Sociologist-Researcher" },
    bio: {
      ru:"Проведение полевых социологических исследований и фокус-групп. Участие в исследовании 1 229 респондентов по всем регионам (72% казахи, 18,6% русские, 9,4% другие).",
      kz:"Далалық зерттеулер маманы. 1 229 респонденттік зерттеуге қатысу.",
      en:"Field sociological research and focus groups. Research with 1,229 respondents across all regions (72% Kazakh, 18.6% Russian, 9.4% other)."
    },
    tags: ["Field Research","Focus Groups"],
  },
];

export default function Team() {
  const { t } = useI18n();
  const loc = (t("nav.home") === "Home" ? "en" : t("nav.home") === "Басты бет" ? "kz" : "ru") as L;

  const gradients = [
    "from-blue-500 to-cyan-500","from-indigo-500 to-blue-500","from-violet-500 to-purple-500",
    "from-emerald-500 to-teal-500","from-pink-500 to-rose-500","from-amber-500 to-orange-500","from-cyan-500 to-blue-500",
  ];

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div className="absolute top-20 left-10 w-1.5 h-1.5 rounded-full bg-blue-400 opacity-10 float-up" style={{ animationDuration: "9s" }} />
      <svg className="absolute bottom-24 right-12 w-16 h-16 rotate-slow opacity-[0.03]" style={{ animationDuration: "50s" }} viewBox="0 0 60 60">
        <polygon points="30,5 55,20 55,50 30,65 5,50 5,20" fill="none" stroke="currentColor" strokeWidth="0.4" transform="translate(0,-5)" />
      </svg>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mb-4">{t("team.title")}</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] max-w-3xl leading-snug">{t("team.subtitle")}</h2>
        </motion.div>

        {/* Director — featured */}
        <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} className="mb-8">
          <div className="card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${gradients[0]} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-xl sm:text-2xl font-bold">СК</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[var(--fg)] mb-0.5">{team[0].name[loc]}</h3>
                <p className="text-xs font-semibold text-[var(--accent)] mb-3">{team[0].role[loc]}</p>
                <p className="text-xs text-[var(--fg-secondary)] leading-relaxed mb-4">{team[0].bio[loc]}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {team[0].tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-semibold uppercase tracking-wider text-[var(--fg-muted)] px-2.5 py-1 rounded-full border border-[var(--border)]">{tag}</span>
                  ))}
                </div>
                {team[0].linkedin && (
                  <a href={team[0].linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--accent)] hover:underline">
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.slice(1).map((m, i) => (
            <motion.div key={i} initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.07 }}>
              <div className="card p-5 h-full group">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[i+1]} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-bold">{m.name.ru.split(" ").map(w=>w[0]).join("").slice(0,2)}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--fg)]">{m.name[loc]}</h3>
                    <p className="text-[10px] text-[var(--accent)]">{m.role[loc]}</p>
                  </div>
                </div>
                <p className="text-[11px] text-[var(--fg-muted)] leading-relaxed mb-3">{m.bio[loc]}</p>
                <div className="flex flex-wrap gap-1">
                  {m.tags.map((tag) => (
                    <span key={tag} className="text-[8px] font-semibold uppercase tracking-wider text-[var(--fg-muted)] px-2 py-0.5 rounded-full border border-[var(--border)]">{tag}</span>
                  ))}
                </div>
                {m.linkedin && (
                  <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--accent)] mt-2 hover:underline">
                    LinkedIn <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
