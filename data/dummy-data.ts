import {Category, Meal} from "../interfaces";

export const CATEGORIES: Category[] = [
  {id: 1, name: 'Turkish', color: '#a839fc'},
  {id: 2, name: 'Italian', color: '#45fc39'},
  {id: 3, name: 'French', color: '#39b4fc'},
  {id: 4, name: 'Hamburgers', color: '#fc3942'},
  {id: 5, name: 'Asian', color: '#f0fc39'},
  {id: 6, name: 'German', color: '#39fcbd'},
  {id: 7, name: 'Exotic', color: '#fc39a5'},
  {id: 7, name: 'Steak', color: '#a839fc'},
];

export const MEALS: Meal[] = [
  {
    id: 1,
    categoryIds: [1,3],
    title: 'Zeytin yaglı Fasulye',
    affordability: 'afford',
    complexity: 'basic',
    imageUrl: 'https://i.nefisyemektarifleri.com/2014/06/taze-fasulye-tarif-fotografi.jpg',
    ingredients: [
      '1 çay bardağı zeytinyağı',
      '2 adet kuru soğan',
      '500 g taze fasulye',
      '3 adet domates',
      'Tuz'
    ],
    steps: ['Yarım çay bardağı zeytinyağı tencereye alınır.',
      'Yemeklik doğranmış soğanlar kavrulur.',
      'Temizlenip arzuya göre kesilmiş olan fasulyeler eklenir.',
      'Tencerenin kapağı kapatılarak 6-7 dk kavrulur.',
      'Daha sonra 3 adet kabuğu soyulup doğranmış domates eklenir.',
      '1 su bardağı sıcak su ilave edilir.',
      'Fasulyeler pişene kadar tencerenin kapağı kapatılarak pişirilir.',
      'Ocaktan almadan tuzu eklenir.',
      'Zeytinyağı da eklenerek servis kaselerine alınır.',
      'Soğuk olarak servis edilir.'
    ],
    duration: 30,
    isGlutenFree: true,
    isVegan: true,
    isLactoseFree: true,
    isVegetarian: true
  },
  {
    id: 2,
    categoryIds: [1,2],
    title: 'Patlıcan YEmeği',
    affordability: 'afford',
    complexity: 'basic',
    imageUrl: 'https://i.nefisyemektarifleri.com/2018/05/17/zeytinyagli-patlican-yemegi-yapimi-1.jpg',
    ingredients: [
      '1 çay bardağı zeytinyağı',
      '2 adet kuru soğan',
      '500 g patlıcan',
      '3 adet domates',
      'Tuz'
    ],
    steps: ['Yarım çay bardağı zeytinyağı tencereye alınır.',
      'Yemeklik doğranmış soğanlar kavrulur.',
      'Temizlenip arzuya göre kesilmiş olan patlıcanlar eklenir.',
      'Tencerenin kapağı kapatılarak 6-7 dk kavrulur.',
      'Daha sonra 3 adet kabuğu soyulup doğranmış domates eklenir.',
      '1 su bardağı sıcak su ilave edilir.',
      'Patlıcanlar pişene kadar tencerenin kapağı kapatılarak pişirilir.',
      'Ocaktan almadan tuzu eklenir.',
      'Zeytinyağı da eklenerek servis kaselerine alınır.',
      'Soğuk olarak servis edilir.'
    ],
    duration: 30,
    isGlutenFree: true,
    isVegan: true,
    isLactoseFree: true,
    isVegetarian: true
  },
];