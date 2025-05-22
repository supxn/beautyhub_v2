import { MasterType } from "../api/types/dto";
import avatar1 from './files/image.png';
import avatar2 from './files/image (1).png';
import avatar3 from './files/image-23-09-23-07-18-1.png';

export const mastersList: MasterType[] = [
  {
    work: 'Мастер ногтевого сервиса, топ-мастер',
    name: 'Никитина Вероника',
    experience: 11,
    address: 'г.Саратов, Волжский район, ул.Вольская 10А',
    phone: '+79370000000',
    categories: [
      {
        category: 'Маникюр',
        services: [
          { name: 'Аппаратный маникюр', price: 550 },
          { name: 'Комбинированный маникюр', price: 550 },
          { name: 'Классический маникюр', price: 450 },
          { name: 'Укрепление ногтей', price: 0 }
        ]
      }
    ],
    avatar: avatar3,
    gender: 'Женщина',
    hasReviews: false,
    rating: 4.9,
    acceptsAt: 'У меня',

  },
  {
    work: 'Мастер ногтевого сервиса, мастер по ресницам',
    name: 'Мыльникова Анастасия',
    experience: 8,
    address: 'г.Саратов, Волжский район, ул.Вольская 10А',
    phone: '+79000000000',
    categories: [
      {
        category: 'Маникюр',
        services: [
          { name: 'Аппаратный маникюр', price: 550 },
          { name: 'Японский маникюр', price: 550 },
          { name: 'Комбинированный маникюр', price: 550 },
          { name: 'Классический маникюр', price: 450 },
          { name: 'Укрепление ногтей', price: 1000 },
          { name: 'Витражный маникюр', price: 1110 }
        ]
      },
      {
        category: 'Косметология',
        services: [
          { name: 'Увеличение губ', price: 5500 },
          { name: 'Контурная пластика', price: 11110 },
          { name: 'Пилинг', price: 820 },
          { name: 'Удаление образований на коже', price: 1000 },
        ]
      }
    ],
    avatar: avatar1,
    gender: 'Женщина',
    hasReviews: false,
    rating: 3.2,
    acceptsAt: 'У специалиста',
  },
  {
    work: 'Парикмахер, топ-мастер',
    name: 'Акишина Полина',
    experience: 6,
    address: 'г.Саратов, Волжский район, ул.Вольская 10А',
    phone: '+79610000000',
     categories: [
      {
        category: 'Парикмахер',
        services: [
          { name: 'Стрижка волос', price: 550 },
            { name: 'Укладка волос', price: 450 },
            { name: 'Окрашивание', price: 1000 },
        ]
      }
    ],
    avatar: avatar2,
    gender: 'Женщина',
    hasReviews: false,
    rating: 4.1,
    acceptsAt: 'У специалиста',

  },
];