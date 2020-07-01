import { Injectable } from '@angular/core';
import {
  MessageDirectionEnum,
  MessageTypeEnum,
} from './comp/interface/common.interface';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor() {}

  dialogVisible = true;

  profileVisible = false;

  dialogs = [
    {
      id: 1,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'rebuild finished',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 2,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'generate lazy started',
      time: {
        created: new Date(),
      },
      category: 'family',
      online: true,
    },
    {
      id: 3,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'generate lazy finished in 141 ms',
      time: {
        created: new Date(),
      },
      category: 'friends',
      online: false,
    },
    {
      id: 4,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'Hello everyone!!!',
      time: {
        created: new Date(),
      },
      category: 'friends',
      online: true,
    },
    {
      id: 5,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'transpile started',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: false,
    },
    {
      id: 6,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'Hello everyone!!!',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: true,
    },
    {
      id: 7,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Anna Dalonzo',
      mess: 'Hello everyone!!!',
      time: {
        created: new Date(),
      },
      category: 'work',
      online: false,
    },
    {
      id: 8,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Saqhan Dalonzo',
      mess: 'Hello everyone!!!',
      time: {
        created: new Date(),
      },
      category: 'family',
      online: true,
    },
    {
      id: 9,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Saqhan Chrome',
      mess: 'Hello everyone!!! category',
      time: {
        created: new Date(),
      },
      category: 'friends',
      online: false,
    },
    {
      id: 10,
      img: 'https://via.placeholder.com/300x300?text=User',
      name: 'Saqhan Chrome',
      mess: 'Generate lazy started',
      time: {
        created: new Date(),
      },
      category: 'friends',
      online: false,
    },
  ];

  categories = [
    {
      name: 'All',
      id: 'all',
    },
    {
      name: 'Work',
      id: 'work',
    },
    {
      name: 'Family',
      id: 'family',
    },
    {
      name: 'Friends',
      id: 'friends',
    },
  ];

  logo = {
    id: 'logo',
    logo: 'https://via.placeholder.com/100x100?text=Text',
  };

  /**
   * Иконки навигации комп версии
   */
  navItems = [
    {
      id: 1,
      icon: 'fas fa-comment-alt',
    },
    {
      id: 2,
      icon: 'fas fa-shopping-bag',
    },
    {
      id: 3,
      icon: 'fas fa-cart-arrow-down',
    },
    {
      id: 5,
      icon: 'fas fa-calendar-alt',
    },
    {
      id: 6,
      icon: 'fas fa-cog',
    },
  ];

  MessageMock = [
    {
      content: 'Как твои дела',
      sender: {
        uid: 'test-id-1',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Сайхан',
        phone: '79291234567',
      },
      type: MessageTypeEnum.text,
      direction: MessageDirectionEnum.toMe,
      time: {
        created: new Date(),
      },
    },
    {
      content: 'https://via.placeholder.com/500',
      sender: {
        uid: 'test-id-2',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Сайхан',
        phone: '79291234567',
      },
      type: MessageTypeEnum.image,
      direction: MessageDirectionEnum.toMe,
      time: {
        created: new Date(),
      },
    },
    {
      content: 'Нормально',
      sender: {
        uid: 'test-id-2',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Адам',
        phone: '79291234567',
      },
      type: MessageTypeEnum.text,
      direction: MessageDirectionEnum.fromMe,
      time: {
        created: new Date(),
      },
    },
    {
      content: 'https://via.placeholder.com/500',
      sender: {
        uid: 'test-id-2',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Адам',
        phone: '79291234567',
      },
      type: MessageTypeEnum.image,
      direction: MessageDirectionEnum.fromMe,
      time: {
        created: new Date(),
      },
    },
    {
      content: 'Где ты?',
      sender: {
        uid: 'test-id-1',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Сайхан',
        phone: '79291234567',
      },
      type: MessageTypeEnum.text,
      direction: MessageDirectionEnum.toMe,
      time: {
        created: new Date(),
      },
    },
    {
      content: 'Чат пилю',
      sender: {
        uid: 'test-id-2',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Адам',
        phone: '79291234567',
      },
      type: MessageTypeEnum.text,
      direction: MessageDirectionEnum.fromMe,
      time: {
        created: new Date(),
      },
    },
    {
      content: 'Прикинь, я тоже',
      sender: {
        uid: 'test-id-1',
        icon: 'https://via.placeholder.com/60x60?text=User',
        name: 'Сайхан',
        phone: '79291234567',
      },
      type: MessageTypeEnum.text,
      direction: MessageDirectionEnum.toMe,
      time: {
        created: new Date(),
      },
    },
  ];

  getDialogs() {
    return this.dialogs;
  }
  getPersonalMessage() {
    return this.MessageMock;
  }
  getCategories() {
    return this.categories;
  }

  getMessages() {
    return this.MessageMock;
  }

  getNavItems() {
    return this.navItems;
  }

  getLogo() {
    return this.logo;
  }
}
