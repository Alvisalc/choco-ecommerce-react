import pd1 from './Assets/pd-assort-1.jpg';
import pd2 from './Assets/pd-assort-2.jpg';
import pd3 from './Assets/pd-assort-3.jpg';
import pd4 from './Assets/pd-assort-4.jpg';
import pd5 from './Assets/pd-assort-5.jpg';
import pd6 from './Assets/pd-assort-6.jpg';
import pd7 from './Assets/pd-assort-7.jpg';
import pd8 from './Assets/pd-assort-8.jpg';
import pd9 from './Assets/pd-assort-9.jpg';
import pd10 from './Assets/pd-assort-10.jpg';
import pd11 from './Assets/pd-assort-11.jpg';
import pd12 from './Assets/pd-assort-12.jpg';
import pd13 from './Assets/pd-cake-1.jpg';
import pd14 from './Assets/pd-cake-2.jpg';
import pd15 from './Assets/pd-cake-3.jpg';
import pd16 from './Assets/pd-cake-4.jpg';
import pd17 from './Assets/pd-cake-5.jpg';
import pd18 from './Assets/pd-cake-6.jpg';
import pd19 from './Assets/pd-cake-7.jpg';
import pd20 from './Assets/pd-cake-8.jpg';
import pd21 from './Assets/pd-cake-9.jpg';
import pd22 from './Assets/pd-cake-10.jpg';
import pd23 from './Assets/pd-cake-11.jpg';
import pd24 from './Assets/pd-cake-12.jpg';
import pd25 from './Assets/pd-choco-1.jpg';
import pd26 from './Assets/pd-choco-2.jpg';
import pd27 from './Assets/pd-choco-3.jpg';
import pd28 from './Assets/pd-choco-4.jpg';
import pd29 from './Assets/pd-choco-5.jpg';
import pd30 from './Assets/pd-choco-6.jpg';
import pd31 from './Assets/pd-choco-7.jpg';
import pd32 from './Assets/pd-choco-8.jpg';
import pd33 from './Assets/pd-choco-9.jpg';
import pd34 from './Assets/pd-choco-10.jpg';
import pd35 from './Assets/pd-choco-11.jpg';
import pd36 from './Assets/pd-choco-12.jpg';



const productData = [
  // Assorted Selections
  { id: 1, 
    name: 'Milk Chocolates Assorted Selection', 
    price: 5.99, 
    imageUrl: pd1, 
    description: 'Delicious milk chocolates in assorted flavors.' },
  { id: 2, name: 'Royal Assorted Selection', price: 12.99, imageUrl: pd2, description: 'An exquisite assortment fit for royalty.' },
  { id: 3, name: 'Mixed Assorted Selection', price: 8.49, imageUrl: pd3, description: 'A delightful mix of assorted chocolates to tantalize your taste buds.' },
  { id: 4, name: 'Fruit Galaxy Assorted Selection', price: 7.99, imageUrl: pd4, description: 'Explore a galaxy of fruity flavors in this assorted collection.' },
  { id: 5, name: 'Color Ball Assorted Selection', price: 9.99, imageUrl: pd5, description: 'Vibrant and colorful chocolates in assorted shapes and sizes.' },
  { id: 6, name: '36 Delight Assorted Selection', price: 10.99, imageUrl: pd6, description: 'A delightful assortment of 36 chocolates to brighten your day.' },
  { id: 7, name: '24 Delight Assorted Selection', price: 6.49, imageUrl: pd7, description: 'A smaller assortment of 24 delightful chocolates.' },
  { id: 8, name: 'Strawberry Lover Assorted Selection', price: 8.99, imageUrl: pd8, description: 'Perfect for strawberry lovers, this assortment is a sweet treat.' },
  { id: 9, name: 'Strawberry Bliss Assorted Selection', price: 13.99, imageUrl: pd9, description: 'Indulge in the blissful combination of strawberries and chocolates.' },
  { id: 10, name: 'Mini Taste Assorted Selection', price: 5.99, imageUrl: pd10, description: 'Experience a burst of flavors with these mini-sized assorted chocolates.' },
  { id: 11, name: 'Coconut Assorted Selection', price: 12.99, imageUrl: pd11, description: 'A tropical twist with the delicious blend of coconut and chocolate.' },
  { id: 12, name: 'Darkness Assorted Selection', price: 24.99, imageUrl: pd12, description: 'For the dark chocolate enthusiasts, this assortment is pure indulgence.' },

  // Cake Flavored Chocolates
  { id: 13, name: 'Cake Delight Chocolates', price: 8.99, imageUrl: pd13, description: 'Indulge in the rich and cake-like flavors of these delightful chocolates.' },
  { id: 14, name: 'Double Layer Cake Chocolates', price: 11.99, imageUrl: pd14, description: 'Experience the double-layered goodness with these cake-flavored chocolates.' },
  { id: 15, name: 'Fruity Cake Chocolates', price: 10.49, imageUrl: pd15, description: 'A perfect blend of fruity and cake flavors in each chocolate.' },
  { id: 16, name: 'Chocolate Truffle Cake Chocolates', price: 14.99, imageUrl: pd16, description: 'Truffle-like chocolates with the essence of a decadent chocolate cake.' },
  { id: 17, name: 'Celebration Cake Chocolates', price: 13.99, imageUrl: pd17, description: 'Celebrate special moments with these cake-flavored chocolates.' },
  { id: 18, name: 'Chocolate Mint Cake Chocolates', price: 9.99, imageUrl: pd18, description: 'Minty freshness combined with the sweetness of chocolate cake.' },
  { id: 19, name: 'Strawberry Cake Chocolates', price: 12.49, imageUrl: pd19, description: 'A delightful fusion of strawberry sweetness and cake flavors.' },
  { id: 20, name: 'Caramel Cake Chocolates', price: 11.99, imageUrl: pd20, description: 'Indulge in the rich and gooey goodness of caramel cake chocolates.' },
  { id: 21, name: 'Peanut Butter Cake Chocolates', price: 15.99, imageUrl: pd21, description: 'Experience the nutty delight of peanut butter with cake-infused chocolates.' },
  { id: 22, name: 'Hazelnut Cake Chocolates', price: 14.49, imageUrl: pd22, description: 'A perfect blend of hazelnut goodness and the richness of chocolate cake.' },
  { id: 23, name: 'Red Velvet Cake Chocolates', price: 16.99, imageUrl: pd23, description: 'Indulge in the velvety goodness of red velvet cake-flavored chocolates.' },
  { id: 24, name: 'Coconut Cake Chocolates', price: 13.49, imageUrl: pd24, description: 'Experience a tropical twist with the coconut-infused cake chocolates.' },

  // Chocolate and bars
  { id: 25, name: 'Nutty Delight Chocolates', price: 7.99, imageUrl: pd25, description: 'A delightful assortment of chocolates filled with various nuts.' },
  { id: 26, name: 'Double Nut Fusion Chocolates', price: 9.99, imageUrl: pd26, description: 'Experience the fusion of two different nuts in each chocolate.' },
  { id: 27, name: 'Crunchy Almond Chocolates', price: 8.49, imageUrl: pd27, description: 'Crunchy almonds embedded in smooth and creamy chocolate.' },
  { id: 28, name: 'Hazelnut Heaven Chocolates', price: 11.99, imageUrl: pd28, description: 'Indulge in the heavenly combination of hazelnuts and chocolate.' },
  { id: 29, name: 'Peanut Crunch Chocolates', price: 10.99, imageUrl: pd29, description: 'Crunchy peanuts surrounded by velvety chocolate goodness.' },
  { id: 30, name: 'Cashew Bliss Chocolates', price: 12.99, imageUrl: pd30, description: 'Experience bliss with the creamy texture of cashews and chocolate.' },
  { id: 31, name: 'Mixed Nut Extravaganza Chocolates', price: 14.99, imageUrl: pd31, description: 'An extravagant mix of various nuts for the ultimate chocolate experience.' },
  { id: 32, name: 'Pecan Delight Chocolates', price: 13.49, imageUrl: pd32, description: 'Delight your taste buds with the rich flavor of pecans in each chocolate.' },
  { id: 33, name: 'Walnut Indulgence Chocolates', price: 15.99, imageUrl: pd33, description: 'Indulge in the indulgent combination of walnuts and decadent chocolate.' },
  { id: 34, name: 'Almond Joy Chocolates', price: 11.49, imageUrl: pd34, description: 'Experience the joy of almonds mixed with the sweetness of chocolate.' },
  { id: 35, name: 'Macadamia Dream Chocolates', price: 16.99, imageUrl: pd35, description: 'Dreamy macadamia nuts combined with rich and smooth chocolate.' },
  { id: 36, name: 'Pistachio Passion Chocolates', price: 14.49, imageUrl: pd36, description: 'Satisfy your passion for pistachios with these delectable chocolates.' },
];

export default productData;
