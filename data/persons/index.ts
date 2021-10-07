// Interface
import type { IPersonInformation } from '../../interfaces/interface/person';
// Enum
import {
  NameDirections,
  RUS_NameDirections,
  RUS_LivePeriod,
  PersonInitial,
  RUS_PersonInitial,
  LivePeriod,
} from 'interfaces/enum/person';
// Photo
import KARAMZIN_PHOTO_1 from 'public/photo/person/karamzin/1.jpg';
import KARAMZIN_PHOTO_2 from 'public/photo/person/karamzin/2.jpg';
import KARAMZIN_PHOTO_3 from 'public/photo/person/karamzin/3.jpg';

// Динамические параметр
const DYNAMIC_PARAMETER = 'name';
// Название напрвавлений
export const arrayDirections = [
  NameDirections.LITERATURE,
  NameDirections.PAINTING,
  NameDirections.HISTORY,
];

// Масим со всеми личностями
export const arrayPersons: Array<IPersonInformation> = [
  // Карамзин
  {
    // Инициалы
    initial: PersonInitial.KARAMZIN,
    RUS_initial: RUS_PersonInitial.KARAMZIN,
    // Века жизни
    century: [18, 19],
    // Направление
    working: [NameDirections.LITERATURE, NameDirections.HISTORY],
    // Напрвления на русском
    RUS_working: [RUS_NameDirections.LITERATURE, RUS_NameDirections.HISTORY],
    // Фотографии
    photos: [KARAMZIN_PHOTO_1, KARAMZIN_PHOTO_2, KARAMZIN_PHOTO_3],
    // Информация
    infarmation: [
      {
        period: LivePeriod.ALL,
        RUS_period: RUS_LivePeriod.ALL,
        information: [
          'Карамзин Николай Михайлович, Российский историк, крупнейший русский литератор эпохи сентиментализма, прозванный «русским Стерном». Создатель «Истории государства Российского» - одного из первых обобщающих трудов по истории России. Редактор «Московского журнала» и «Вестника Европы». Действительный статский советник.',
        ],
      },
      {
        period: LivePeriod.CHILDHOOD,
        RUS_period: RUS_LivePeriod.CHILDHOOD,
        information: [
          'Карамзин родился 1 (12) декабря 1766 года в селе Михайловка Бузулукского уезда Симбирской губернии. Вырос в деревне отца, потомственного дворянина. Интересно, что род Карамзиных имеет тюркские корни и происходит от татарского Кара-мурзы (аристократического сословия). О детстве писателя известно немного.В 12 лет его отправляют в Москву в пансион профессора Московского университета Иоганна Шадена, где молодой человек получает первое образование, изучает немецкий и французский языки.Еще через три года он начинает посещать лекции знаменитого профессора эстетики, просветителя Ивана Шварца в Московском университете.',
        ],
      },
      {
        period: LivePeriod.YOUTH,
        RUS_period: RUS_LivePeriod.YOUTH,
        information: [
          `В 1783 году по настоянию отца Карамзин поступает на службу в Преображенский гвардейский полк, но вскоре выходит в отставку и уезжает в родной Симбирск. В Симбирске происходит важное для молодого Карамзина событие — он вступает в масонскую ложу «Золотого венца». Это решение сыграет свою роль чуть позже, когда Карамзин вернется в Москву и сойдется со старым знакомым их дома — масоном Иваном Тургеневым, а также писателями и литераторами Николаем Новиковым, Алексеем Кутузовым, Александром Петровым.
          Тогда же начинаются первые попытки Карамзина в литературе — он участвует в издании первого русского журнала для детей — «Детское чтение для сердца и разума». Четыре года, проведенных им в обществе московских масонов, оказали серьезное влияние на его творческое развитие. В это время Карамзин много читает популярных тогда Руссо, Стерна, Гердера, Шекспира, пробует переводить.
          Поездка: В 1789 году следует разрыв с масонами, и Карамзин отправляется путешествовать по Европе. Он объехал Германию, Швейцарию, Францию и Англию, останавливаясь преимущественно в больших городах, центрах европейского просвещения. Карамзин посещает Иммануила Канта в Кёнигсберге, становится свидетелем Великой французской революции в Париже.
          Именно по результатам этой поездки он пишет знаменитые «Письма русского путешественника». Эти очерки в жанре документальной прозы быстро обрели популярность у читателя и сделали Карамзина известным и модным литератором. Тогда же, в Москве, из-под пера литератора появляется на свет повесть «Бедная Лиза» — признанный образец русской сентиментальной литературы. Многие специалисты по литературоведению считают, что именно с этих первых книг начинается современная русская литература.
          В 1791 году начинается деятельность Карамзина-журналиста. Это становится важной вехой в истории русской литературы — Карамзин основывает первый русский литературный журнал, отца-основателя нынешних «толстых» журналов — «Московский журнал». На его страницах выходит ряд сборников и альманахов: «Аглая», «Аониды», «Пантеон иностранной словесности», «Мои безделки». Эти публикации сделали сентиментализм основным литературным течением в России конца XIX века, а Карамзина — его признанным лидером.
          Но скоро следует глубокое разочарование Карамзина в прежних ценностях. Уже через год после ареста Новикова закрывается журнал, после смелой карамзинской оды «К Милости» милости «сильных мира» лишается сам Карамзин, едва не попав под следствие.
          Большую часть 1793–1795 годов Карамзин проводит в деревне и выпускает сборники: «Аглая», «Аониды» (1796). Он задумывает издать нечто вроде хрестоматии по иностранной литературе «Пантеон иностранной словесности», но с большим трудом пробивается через цензурные запреты, не допускавшие печатать даже Демосфена и Цицерона…
          В эти годы Карамзин все больше переходит от лирики и прозы к публицистике и развитию философских идей. Даже «Историческое похвальное слово императрице Екатерине II», составленное Карамзиным при восшествии на престол императора Александра I — преимущественно публицистика.
          В 1801–1802 годах Карамзин работает в журнале «Вестник Европы», где пишет в основном статьи. На практике его увлечение просвещением и философией выражается в написание трудов на исторические темы, все более создавая знаменитому литератору авторитет историка.
          Никакой лирики: Указом от 31 октября 1803 года император Александр I дарует Николаю Карамзину звание историографа. Интересно, что титул историографа в России после смерти Карамзина не возобновлялся.
          С этого момента Карамзин прекращает всякую литературную работу и в течение 22 лет занимается исключительно составлением исторического труда, знакомого нам как «История государства Российского».
          Карамзин ставит себе задачу составить историю для широкой образованной публики, не быть исследователем, а «выбрать, одушевить, раскрасить» все «привлекательное, сильное, достойное» из русской истории. Важный момент — труд должен быть рассчитан и на иностранного читателя, чтобы открыть Россию Европе.
          В годы работы над «Историей…» Карамзин в основном жил в Москве, откуда выезжал только в Тверь и в Нижний Новгород, на время занятия Москвы французами в 1812 году. Лето он обыкновенно проводил в Остафьеве, имении князя Андрея Ивановича Вяземского. В 1804 году Карамзин женился на дочери князя, Екатерине Андреевне, родившей писателю девятерых детей. Она стала второй женой писателя. Впервые писатель женился в 35 лет, в 1801 году на Елизавете Ивановне Протасовой, умершей через год после свадьбы от послеродовой горячки. От первого брака у Карамзина осталась дочь Софья, будущая знакомая Пушкина и Лермонтова.
          Главным общественным событием жизни писателя в эти годы стала «Записка о древней и новой России в ее политическом и гражданском отношениях», написанная в 1811 году. В «Записке…» отражались взгляды консервативных слоев общества, недовольных либеральными реформами императора. «Записка…» была передана императору. В ней, некогда либерал и «западник», как сказали бы сейчас, Карамзин предстает в роли консерватора и пытается доказать, что никаких фундаментальных преобразований проводить в стране не нужно.
          И вот в феврале 1818 года Карамзин выпускает в продажу первые восемь томов своей «Истории государства Российского». Тираж в 3000 экземпляров (огромный для того времени) распродается в течение месяца.
          `,
        ],
      },
    ],
  },
];

export const arrayPathsRouting = arrayPersons.map(
  (person: IPersonInformation) => {
    return {
      params: {
        [`${DYNAMIC_PARAMETER}`]: person.initial,
      },
    };
  }
);
