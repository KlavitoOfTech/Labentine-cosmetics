import Perfume1 from '../images/perfume-pic.jpg';
import Perfume2 from '../images/perfume-pic2.jpg';
import Perfume3 from '../images/perfume-pic3.jpg';  // Make sure to adjust the path based on where the images are stored
import Lotion1 from '../images/lotion-pic.jpg';
import Lotion2 from '../images/lotion-pic2.jpg';
import Lotion3 from '../images/lotion-pic3.jpg';
import Soap1 from '../images/soap-pic.jpg';
import Soap2 from '../images/soap-pic2.jpg';
import Soap3 from '../images/soap-pic3.jpg';

export const products = [
  {
    name: 'Perfume',
    description: 'Elegant and long-lasting fragrance.',
    price: '$49.99',
    images: [Perfume1, Perfume2, Perfume3]
  },
  {
    name: 'Cream',
    description: 'Hydrating skin cream for daily use.',
    price: '$19.99',
    images: [Lotion1, Lotion2, Lotion3]
  },
  {
    name: 'Soap',
    description: 'Organic handmade soap bar.',
    price: '$9.99',
    images: [Soap1, Soap2, Soap3],
  },
];
