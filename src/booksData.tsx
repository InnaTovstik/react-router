export interface Book {
  id: number;
  name: string;
  author: string;
  genre: string;
  rating: string;
  description: string;
  image: string;
}

export const books: Book[] = [
  {
    id: 1,
    name: 'Кобзар',
    author: 'Тарас Шевченко',
    genre: 'Поезія',
    rating: '4.9',
    description: 'Збірка віршів та поем великого українського поета Тараса Шевченка.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Тіні забутих предків',
    author: 'Михайло Коцюбинський',
    genre: 'Роман',
    rating: '4.8',
    description: 'Один з найвідоміших творів української літератури, роман про життя гуцулів.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Захар Беркут',
    author: 'Іван Франко',
    genre: 'Історична проза',
    rating: '4.7',
    description: 'Історична повість про боротьбу українського народу проти монголо-татарської навали.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: 'Місто',
    author: 'Валер’ян Підмогильний',
    genre: 'Роман',
    rating: '4.6',
    description: 'Психологічний роман про життя і становлення молодого українця в умовах великого міста.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    name: 'Чорна рада',
    author: 'Пантелеймон Куліш',
    genre: 'Історичний роман',
    rating: '4.5',
    description: 'Перший історичний роман в українській літературі, що описує події в Україні після смерті Богдана Хмельницького.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 6,
    name: 'Вершники',
    author: 'Юрій Яновський',
    genre: 'Новели',
    rating: '4.4',
    description: 'Збірка новел про події громадянської війни в Україні.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 7,
    name: 'Собор',
    author: 'Олесь Гончар',
    genre: 'Роман',
    rating: '4.3',
    description: 'Роман про духовні цінності та боротьбу за збереження культурної спадщини.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 8,
    name: 'Сад Гетсиманський',
    author: 'Іван Багряний',
    genre: 'Роман',
    rating: '4.2',
    description: 'Роман про жорстокі репресії в Радянському Союзі та боротьбу людини за свою гідність.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 9,
    name: 'Тигролови',
    author: 'Іван Багряний',
    genre: 'Роман',
    rating: '4.1',
    description: 'Роман про втечу героя з радянського концтабору та його пригоди в тайзі.',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 10,
    name: 'Маруся Чурай',
    author: 'Ліна Костенко',
    genre: 'Роман у віршах',
    rating: '5.0',
    description: 'Роман у віршах про трагічну долю легендарної української піснярки Марусі Чурай.',
    image: 'https://via.placeholder.com/150'
  }
];
