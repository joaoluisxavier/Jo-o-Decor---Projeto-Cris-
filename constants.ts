import { ClientInfo, ProductItem, RenderImage } from './types';

export const CLIENT_DATA: ClientInfo = {
  name: "Cris",
  city: "São José",
  state: "Santa Catarina",
  projectTitle: "Renovação Apartamento Ocean View"
};

export const PROJECT_RENDERS: RenderImage[] = [
  {
    id: '1',
    url: 'https://picsum.photos/800/1422?random=1',
    title: 'Sala de Estar Integrada',
    description: 'Conceito aberto com tons terrosos, pé direito duplo e iluminação indireta para criar amplitude.'
  },
  {
    id: '2',
    url: 'https://picsum.photos/800/1422?random=2',
    title: 'Cozinha Gourmet',
    description: 'Bancada em pedra natural escura, metais dourados e ilha central funcional para receber amigos.'
  },
  {
    id: '3',
    url: 'https://picsum.photos/800/1422?random=3',
    title: 'Suíte Master',
    description: 'Cabeceira estofada até o teto, pendentes modernos e paleta de cores neutras para relaxamento.'
  },
  {
    id: '4',
    url: 'https://picsum.photos/800/1422?random=4',
    title: 'Banheiro Social',
    description: 'Revestimento 3D, espelho orgânico com led e metais em acabamento preto fosco.'
  }
];

export const SHOPPING_LIST: ProductItem[] = [
  {
    id: 'p1',
    name: 'Chuveiro Ducha Eletrônica Intense Fame 7800w Super Potente Preta Inox 220v',
    category: 'Hidráulica',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_903207-MLA99874058235_112025-F.webp',
    purchaseUrl: 'https://mercadolivre.com/sec/2iFqKxW',
    priceEstimate: 'R$ 293,00',
    description: 'Ducha eletrônica com design moderno e controle gradual de temperatura.'
  },
  {
    id: 'p2',
    name: 'Kit Lavabo Luxo Preto/Dourado 22x12cm',
    category: 'Decoração',
    imageUrl: 'https://down-br.img.susercontent.com/file/7ba2a4142596b0da83002b48c5d4f5c4@resize_w450_nl.webp',
    purchaseUrl: 'https://s.shopee.com.br/8V267eqYg3',
    priceEstimate: 'R$ 79,90',
    description: 'Inclui difusor de ambiente, saboneteira, bandeja, 2 passarinhos e porta escova.'
  },
  {
    id: 'p3',
    name: 'Vaso Planta Artificial Decoração Casa Lavabo Kit 3 Unid Cor Preto',
    category: 'Decoração',
    imageUrl: 'https://http2.mlstatic.com/D_Q_NP_669076-MLA82198093420_022025-F.webp',
    purchaseUrl: 'https://mercadolivre.com/sec/1NS7JXm',
    priceEstimate: 'R$ 27,00',
    description: 'Conjunto com 3 vasos decorativos ideais para nichos e bancadas.'
  },
  {
    id: 'p4',
    name: 'Painel Plafon De Led Taschibra 24w Redondo Sobrepor Preto Cor LUZ NEUTRA 4000K',
    category: 'Iluminação',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_776718-MLA99952954497_112025-F.webp',
    purchaseUrl: 'https://mercadolivre.com/sec/2pGdX5r',
    priceEstimate: 'R$ 41,50',
    description: 'Sobrepor preto, luz neutra 4000K. Design slim moderno e alta eficiência luminosa.'
  },
  {
    id: 'p5',
    name: 'Kit Acessórios Para Banheiro Preto Com 5 Peças',
    category: 'Metais',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_629155-MLA100067597583_122025-F.webp',
    purchaseUrl: 'https://mercadolivre.com/sec/2iWZHwS',
    priceEstimate: 'R$ 44,45',
    description: 'Alumínio preto fosco. Contém porta toalhas (rosto/banho), papeleira e ganchos.'
  },
  {
    id: 'p6',
    name: 'Torneira De Banheiro Lavabo Luxo Metal Cromada Moderna Preta Preto',
    category: 'Hidráulica',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_649739-MLB96632922241_102025-F.webp',
    purchaseUrl: 'https://mercadolivre.com/sec/1fM1JAh',
    priceEstimate: 'R$ 52,99',
    description: 'Metal preto fosco, comando 1/4 de volta. Design moderno e acabamento premium.'
  }
];