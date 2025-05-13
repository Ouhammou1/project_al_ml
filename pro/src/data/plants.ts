import { Plant } from '../types';

export const medicinalPlants: Plant[] = [
  {
  id: 1,
  name: 'Peppermint',
  scientificName: 'Mentha × piperita',
  description: 'Peppermint is a hybrid mint, a cross between watermint and spearmint. It is commonly used for its soothing effects on the digestive system and its refreshing flavor.',
  medicinalUses: [
    'Relieve digestive symptoms such as bloating and indigestion',
    'Soothe headaches and migraines',
    'Ease muscle pain',
    'Improve respiratory function'
  ],
  warnings: [
    'May cause allergic reactions in sensitive individuals',
    'Can cause heartburn or irritation in some people',
    'Not recommended for infants or young children due to risk of breathing problems'
  ],

    imageUrl: '/src/data/images/1.png'
  },
  {
    id: 2,
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    description: 'Aloe vera is a succulent plant species that has been used for thousands of years for its healing properties. The gel from the plant is often used topically to treat skin conditions.',
    medicinalUses: [
      'Treat burns and sunburns',
      'Moisturize skin',
      'Reduce inflammation',
      'Aid in digestion when consumed orally'
    ],
    warnings: [
      'May cause skin irritation in some people',
      'Oral consumption may cause digestive discomfort',
      'Not recommended for pregnant women or children'
    ],
    imageUrl: '/src/data/images/3.png'
  },
  {
    id: 3,
    name: 'Lavender',
    scientificName: 'Lavandula',
    description: 'Lavender is a flowering plant in the mint family known for its beauty, fragrance, and multiple uses. The flowers and oils have been used for centuries for their healing properties.',
    medicinalUses: [
      'Promote relaxation and sleep',
      'Reduce anxiety and stress',
      'Relieve headaches',
      'Treat minor burns and insect bites'
    ],
    warnings: [
      'May cause skin irritation in some people',
      'Can increase drowsiness when combined with sleep medications',
      'May interfere with blood pressure medications'
    ],
    imageUrl: '/src/data/images/12.jpeg'
  },
  {
    id: 4,
    name: 'Fresh Garlic',
    scientificName: 'Allium sativum',
    description: 'Fresh garlic is a widely used culinary and medicinal plant known for its strong flavor and numerous health benefits. It has been used for centuries in traditional medicine.',
    medicinalUses: [
      'Support cardiovascular health by lowering blood pressure and cholesterol',
      'Boost immune system function',
      'Possess antibacterial and antiviral properties',
      'Help reduce inflammation'
    ],
    warnings: [
      'May cause digestive discomfort or bad breath when consumed in large amounts',
      'Can thin the blood, so caution is advised when taking blood-thinning medications',
      'May cause allergic reactions in some individuals'
    ],
    imageUrl: '/src/data/images/6.png'
  }
  ,
  {
    id: 5,
    name: 'Dandelion Root',
    scientificName: 'Taraxacum officinale',
    description: 'Dandelion root is a traditional herbal remedy used for its detoxifying properties. It is often used to support liver function and aid digestion.',
    medicinalUses: [
      'Support liver health and detoxification',
      'Promote digestion and relieve constipation',
      'Act as a natural diuretic',
      'May help regulate blood sugar levels'
    ],
    warnings: [
      'May cause allergic reactions in people allergic to ragweed or related plants',
      'Can interact with diuretics, lithium, or diabetes medications',
      'Not recommended for people with gallbladder or kidney issues without medical supervision'
    ],
    imageUrl: '/src/data/images/13.jpeg'
  }
  ,
  {
    id: 6,
    name: 'Aubépine Fruit',
    scientificName: 'Crataegus monogyna',
    description: 'Aubépine, or hawthorn berry, is a traditional remedy used for heart-related conditions. It has been used in European herbal medicine for centuries to support cardiovascular health.',
    medicinalUses: [
      'Improve heart function and blood circulation',
      'Help manage mild heart failure and high blood pressure',
      'Reduce anxiety and nervousness',
      'Act as an antioxidant to support overall cardiovascular health'
    ],
    warnings: [
      'May interact with heart medications such as beta-blockers or digitalis',
      'Can cause dizziness or low blood pressure in some individuals',
      'Not recommended for use without medical advice if you have a heart condition'
    ],
    imageUrl: '/src/data/images/18.jpeg'
  },
  {
    id: 7,
    name: 'Amla',
    scientificName: 'Phyllanthus emblica',
    description: 'Amla, or Indian gooseberry, is a nutrient-rich fruit used extensively in Ayurvedic medicine. It is known for its high vitamin C content and powerful antioxidant properties.',
    medicinalUses: [
      'Boost immune system function',
      'Promote healthy skin and hair',
      'Support liver and digestive health',
      'Help regulate blood sugar and cholesterol levels'
    ],
    warnings: [
      'May lower blood sugar, so caution is advised for people with diabetes',
      'Can cause dryness or irritation in some individuals if consumed in excess',
      'May interact with blood-thinning medications'
    ],
    imageUrl: '/src/data/images/19.jpeg'
  },
  {
    id: 8,
    name: 'Chili Pepper',
    scientificName: 'Capsicum annuum',
    description: 'Chili peppers are fruits of plants from the Capsicum genus, widely used for culinary and medicinal purposes. Their active compound, capsaicin, has strong anti-inflammatory and pain-relieving properties.',
    medicinalUses: [
      'Relieve pain through topical application of capsaicin',
      'Boost metabolism and aid in weight loss',
      'Support cardiovascular health',
      'Improve digestion and reduce appetite'
    ],
    warnings: [
      'May cause irritation or burning sensation in mouth and stomach',
      'Can aggravate heartburn or ulcers in sensitive individuals',
      'Avoid contact with eyes and mucous membranes'
    ],
    imageUrl: '/src/data/images/20.jpeg'
  },
  {
    id: 9,
    name: 'Henna',
    scientificName: 'Lawsonia inermis',
    description: 'Henna is a flowering plant used for its natural dye properties. The leaves are commonly ground into powder and used to dye hair, skin, and nails, and also have medicinal uses.',
    medicinalUses: [
      'Used to treat skin conditions like eczema and fungal infections',
      'Helps reduce headaches when applied topically',
      'Promotes hair health and prevents hair loss',
      'Has cooling properties that can reduce fever'
    ],
    warnings: [
      'May cause allergic reactions in some individuals',
      'Should be used with caution on sensitive skin or if allergic to plants in the Lythraceae family',
      'Not recommended for internal use'
    ],
    imageUrl: '/src/data/images/24.jpeg'
  }
  
  
  
  
];

export const getPlantById = (id: number): Plant | undefined => {
  return medicinalPlants.find(plant => plant.id === id);
};

export const searchPlants = (query: string): Plant[] => {
  const lowerCaseQuery = query.toLowerCase();
  return medicinalPlants.filter(
    plant => 
      plant.name.toLowerCase().includes(lowerCaseQuery) || 
      plant.scientificName.toLowerCase().includes(lowerCaseQuery)
  );
};