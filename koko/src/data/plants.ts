import { Plant } from '../types';

export const medicinalPlants: Plant[] = [
  {
    id: 1,
    name: 'Echinacea',
    scientificName: 'Echinacea purpurea',
    description: 'Echinacea is a flowering plant used in traditional herbal medicine. The plant\'s extracts are commonly used to treat or prevent colds, flu, and other infections.',
    medicinalUses: [
      'Boost immune system',
      'Reduce inflammation',
      'Alleviate pain',
      'Treat upper respiratory infections'
    ],
    warnings: [
      'May cause allergic reactions in people allergic to plants in the daisy family',
      'Not recommended for people with autoimmune disorders',
      'May interact with medications that suppress the immune system'
    ],
    imageUrl: 'https://images.pexels.com/photos/5945741/pexels-photo-5945741.jpeg'
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
    imageUrl: 'https://images.pexels.com/photos/3712343/pexels-photo-3712343.jpeg'
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
    imageUrl: 'https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg'
  },
  {
    id: 4,
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    description: 'Ginger is a flowering plant whose rhizome (underground stem) is widely used as a spice and folk medicine. It has been used in traditional medicine for thousands of years.',
    medicinalUses: [
      'Relieve nausea and vomiting',
      'Reduce inflammation',
      'Aid digestion',
      'Relieve cold and flu symptoms'
    ],
    warnings: [
      'May increase bile production',
      'Can interact with blood-thinning medications',
      'May lower blood sugar'
    ],
    imageUrl: 'https://images.pexels.com/photos/1213493/pexels-photo-1213493.jpeg'
  },
  {
    id: 5,
    name: 'Chamomile',
    scientificName: 'Matricaria chamomilla',
    description: 'Chamomile is a daisy-like plant commonly used to make herbal tea. It has been used for centuries as a natural remedy for several health conditions.',
    medicinalUses: [
      'Promote sleep and relaxation',
      'Reduce inflammation',
      'Treat digestive issues',
      'Relieve menstrual pain'
    ],
    warnings: [
      'May cause allergic reactions in people allergic to plants in the daisy family',
      'Can increase the effects of blood-thinning medications',
      'May interact with sedative medications'
    ],
    imageUrl: 'https://images.pexels.com/photos/131915/pexels-photo-131915.jpeg'
  },
  {
    id: 6,
    name: 'Peppermint',
    scientificName: 'Mentha piperita',
    description: 'Peppermint is an aromatic herb in the mint family. It is a hybrid mint, a cross between watermint and spearmint, and is used in many traditional remedies.',
    medicinalUses: [
      'Relieve digestive symptoms',
      'Reduce headaches',
      'Relieve cold and flu symptoms',
      'Alleviate muscle pain'
    ],
    warnings: [
      'May worsen acid reflux or GERD',
      'Can interact with certain medications',
      'May cause skin irritation when applied topically'
    ],
    imageUrl: 'https://images.pexels.com/photos/6165976/pexels-photo-6165976.jpeg'
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