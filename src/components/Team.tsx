"use client";

import { useI18n } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Marquee } from "@/components/ui/marquee";

type L = "ru"|"kz"|"en";
interface Member { name: Record<L,string>; role: Record<L,string>; bio: Record<L,string>; tags: string[]; linkedin?: string; }

const team: Member[] = [
  { name:{ru:"Сергей А. Коновалов",kz:"Сергей А. Коновалов",en:"Sergey A. Konovalov"}, role:{ru:"Директор",kz:"Директор",en:"Director"}, bio:{ru:"Доктор социологии, доцент, член ISA. Автор Белой Книги (297 стр.). Докладчик CSW70, Church Center ООН, Нью-Йорк. Коллаборация с проф. Rosemary Barbaret и Jan Marie Fritz.",kz:"Әлеуметтану докторы, доцент, ISA мүшесі. Ақ Кітап авторы. БҰҰ CSW70 баяндамашысы.",en:"PhD Sociology, Associate Professor, ISA Member. White Book author (297 p.). CSW70 speaker at UN Church Center, New York."}, tags:["PhD","ISA","CSW70","White Book"], linkedin:"https://www.linkedin.com/in/sergey-konovalov-0b88b5290" },
  { name:{ru:"Каржаубаев Азамат",kz:"Қаржаубаев Азамат",en:"Azamat Karzhaubayev"}, role:{ru:"Соучредитель, зам. директора",kz:"Тең құрылтайшы, директордың орынбасары",en:"Co-founder, Deputy Director"}, bio:{ru:"Первый секретарь Посольства РК в Украине (2020–2024). Эксперт Администрации Президента (2019–2020). Бакалавр международных отношений, магистр госуправления.",kz:"Қазақстанның Украинадағы елшілігінің бірінші хатшысы (2020–2024).",en:"First Secretary, Kazakhstan Embassy in Ukraine (2020–2024). Expert, Presidential Administration (2019–2020)."}, tags:["Diplomat","Presidential Admin"] },
  { name:{ru:"Майгельдинов Казбек",kz:"Майгелдінов Қазбек",en:"Kazbek Maigeldhinov"}, role:{ru:"Эксперт",kz:"Сарапшы",en:"Expert"}, bio:{ru:"PhD политических наук (ЕНУ). 40+ статей, 4 монографии (800+ стр.). Орден «Құрмет» (2026). Член Национального курултая (2022–2024). Председатель Ассоциации исследователей Китая.",kz:"PhD саяси ғылымдар. 40+ мақала, «Құрмет» ордені.",en:"PhD Political Science (ENU). 40+ articles, 4 monographs (800+ p.). Order 'Kurmet' (2026). National Kurultai (2022–2024)."}, tags:["PhD","40+ Publications","Order of Kurmet"] },
  { name:{ru:"Бишенов Азамат",kz:"Бишенов Азамат",en:"Azamat Bishenov"}, role:{ru:"Юрист",kz:"Заңгер",en:"Lawyer"}, bio:{ru:"Академия финансовой полиции. Соавтор ISBN 978-601-08-4631-9. Проект IRN BR24993082 (2024–2026). Корп. секретарь КИОР, зам. директора ИЕИ.",kz:"Қаржы полициясы академиясы. ISBN 978-601-08-4631-9 тең авторы.",en:"Financial Police Academy. Co-author ISBN 978-601-08-4631-9. Research project IRN BR24993082 (2024–2026)."}, tags:["Jurisprudence","Published Author"] },
  { name:{ru:"Дария Д. Бакен",kz:"Дария Д. Бакен",en:"Dariya D. Baken"}, role:{ru:"Зам. директора по науке",kz:"Ғылыми жұмыстар жөніндегі директордың орынбасары",en:"Deputy Director for Science"}, bio:{ru:"Координатор международных проектов. Организация фокус-групп в 7 городах (81 участник из 150+ НПО).",kz:"Халықаралық жобалар координаторы.",en:"International projects coordinator. Focus groups across 7 cities (81 participants from 150+ NGOs)."}, tags:["Gender Studies","Field Research"], linkedin:"https://www.linkedin.com/in/dariya-baken-85827b17b" },
  { name:{ru:"Оразбекова С.Р.",kz:"Оразбекова С.Р.",en:"Orazbekova S.R."}, role:{ru:"Социолог",kz:"Әлеуметтанушы",en:"Sociologist"}, bio:{ru:"Рекомендации по учреждению Уполномоченного по домашнему насилию (модель Великобритании).",kz:"Отбасылық зорлық-зомбылық жөніндегі уәкіл институтын құру бойынша ұсыныстар.",en:"Recommendations for DV Commissioner (UK model)."}, tags:["Gender Policy","DV Commissioner"] },
  { name:{ru:"Гульнара Мукашева",kz:"Гүлнара Мұқашева",en:"Gulnara Mukasheva"}, role:{ru:"Бухгалтер",kz:"Бухгалтер",en:"Accountant"}, bio:{ru:"Полевые исследования, фокус-группы. 1 229 респондентов (72% казахи, 18,6% русские).",kz:"Далалық зерттеулер. 1 229 респондент.",en:"Field research, focus groups. 1,229 respondents (72% Kazakh, 18.6% Russian)."}, tags:["Field Research","Focus Groups"] },
];

const gradients = ["from-green-500 to-emerald-500","from-emerald-500 to-teal-500","from-teal-500 to-cyan-500","from-green-600 to-emerald-400","from-cyan-500 to-teal-500","from-emerald-400 to-green-500","from-teal-400 to-emerald-500"];

export default function Team() {
  const { t } = useI18n();
  const loc = (t("nav.home") === "Home" ? "en" : t("nav.home") === "Басты бет" ? "kz" : "ru") as L;

  return (
    <section id="team" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade delay={0.1} inView>
          <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#16a34a] mb-4">{t("team.title")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)] leading-snug mb-14">{t("team.subtitle")}</h2>
        </BlurFade>

        {/* Director — featured with border beam */}
        <BlurFade delay={0.2} inView>
          <div className="relative rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] p-6 sm:p-8 mb-8 overflow-hidden shadow-sm">
            <BorderBeam size={80} duration={10} colorFrom="#16a34a" colorTo="#34d399" />
            <div className="flex flex-col sm:flex-row gap-6">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${gradients[0]} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-xl sm:text-2xl font-bold">СК</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-[var(--fg)] mb-0.5">{team[0].name[loc]}</h3>
                <p className="text-sm font-semibold text-[#16a34a] mb-3">{team[0].role[loc]}</p>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-4">{team[0].bio[loc]}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {team[0].tags.map((tag) => <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-[var(--fg-muted)] px-2.5 py-1 rounded-full border border-[var(--border)]">{tag}</span>)}
                </div>
                {team[0].linkedin && <a href={team[0].linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-[#16a34a] hover:underline">LinkedIn <ArrowUpRight className="w-3 h-3" /></a>}
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Rest — grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.slice(1).map((m, i) => (
            <BlurFade key={i} delay={0.25 + i * 0.07} inView>
              <div className="rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] p-5 h-full group hover:border-[var(--fg-muted)] transition-all hover:-translate-y-1 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradients[i+1]} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-xs font-bold">{m.name.ru.split(" ").map(w=>w[0]).join("").slice(0,2)}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--fg)]">{m.name[loc]}</h3>
                    <p className="text-xs text-[#16a34a]">{m.role[loc]}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-3">{m.bio[loc]}</p>
                <div className="flex flex-wrap gap-1">
                  {m.tags.map((tag) => <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-[var(--fg-muted)] px-2 py-0.5 rounded-full border border-[var(--border)]">{tag}</span>)}
                </div>
                {m.linkedin && <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-[#16a34a] mt-2 hover:underline">LinkedIn <ArrowUpRight className="w-3 h-3" /></a>}
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Partner marquee */}
        <BlurFade delay={0.5} inView>
          <div className="mt-12 pt-8 border-t border-[var(--border)]">
            <p className="text-xs uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-4 text-center">Partners & Affiliations</p>
            <Marquee pauseOnHover className="[--duration:30s]">
              {["UN CSW70","ISA","CEDAW","ILO Convention 190","Ministry of Foreign Affairs","KIOP","Nazarbayev University","AlmaU","Park Inn Astana","Alliance of NGOs"].map((p) => (
                <span key={p} className="text-sm text-[var(--fg-muted)] font-medium mx-6">{p}</span>
              ))}
            </Marquee>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
