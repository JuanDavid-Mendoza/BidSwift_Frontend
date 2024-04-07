export const auctions = [
  {
    id: 1,
    name: 'Anillo con diamante',
    description: 'Anillo con diamante incrustado, una joya deslumbrante para una ocasión especial',
    details: 'Este exquisito anillo está hecho de oro de 18 quilates y presenta un deslumbrante diamante central de corte brillante. El diseño elegante y atemporal de este anillo lo convierte en una pieza imprescindible para cualquier colección de joyas. El diamante de alta calidad está cuidadosamente engastado para maximizar su brillo y belleza.',
    principalImage: './imgs/AnilloDiamante.png',
    images: [
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
    ],
    startDate: '2024-06-16 14:30:00.000',
    timer: 300,
    price: 20000000,
    state: 'En espera'
},
  {
    id: 2,
    name: 'Collar de perlas',
    description: 'Collar elegante de perlas blancas con diseño exclusivo',
    details: 'Este exquisito collar está elaborado con perlas de agua dulce seleccionadas a mano. Cada perla ha sido cuidadosamente engarzada para crear un diseño único y elegante. El broche de plata sólida complementa perfectamente el conjunto, añadiendo un toque de sofisticación.',
    principalImage: './imgs/CollarPerlas.png',
    images: [
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
    ],
    startDate: '2024-06-18 12:00:00.000',
    timer: 240,
    price: 1500000,
    state: 'En espera'
  },
  {
    id: 3,
    name: 'Pintura al óleo',
    description: 'Pintura al óleo de paisaje montañoso, obra de un reconocido artista',
    details: 'Esta impresionante pintura al óleo captura la majestuosidad de un paisaje montañoso en todo su esplendor. Cada pincelada refleja la habilidad y el talento del artista, creando una obra maestra que seguramente será el centro de atención en cualquier espacio. El cuadro está elegantemente enmarcado para realzar su belleza y durabilidad.',
    principalImage: './imgs/PinturaOleo.png',
    images: [
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
    ],
    startDate: '2024-06-20 10:00:00.000',
    timer: 180,
    price: 5000000,
    state: 'En espera'
  },
  {
    id: 4,
    name: 'Juego de té',
    description: 'Juego de té de porcelana fina con diseño floral',
    details: 'Este encantador juego de té está hecho de porcelana de alta calidad y presenta un exquisito diseño floral en relieve. Cada pieza ha sido meticulosamente elaborada para combinar belleza y funcionalidad. Ya sea para disfrutar de una tarde tranquila o para impresionar a tus invitados, este juego de té añadirá un toque de elegancia a cualquier ocasión.',
    principalImage: './imgs/JuegoTe.png',
    images: [
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
    ],
    startDate: '2024-06-24 09:00:00.000',
    timer: 420,
    price: 200000,
    state: 'En espera'
  },
  {
    id: 5,
    name: 'Reloj de pulsera',
    description: 'Reloj de pulsera de lujo para caballero con funciones avanzadas',
    details: 'Este impresionante reloj automático es el epítome del estilo y la funcionalidad. Fabricado con acero inoxidable de alta calidad, ofrece durabilidad y resistencia al desgaste. Además de su elegante diseño, cuenta con un cronógrafo preciso y otras funciones avanzadas que lo convierten en una pieza indispensable para cualquier caballero moderno.',
    principalImage: './imgs/RelojPulsera.png',
    images: [
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
    ],
    startDate: '2024-03-22 15:30:00.000',
    timer: 0,
    price: 800000,
    finalPrice: 1000000,
    state: 'En espera'
  },
  {
    id: 6,
    name: 'Figura de cerámica',
    description: 'Figura decorativa de cerámica antigua representando un guerrero',
    details: 'Esta impresionante figura de cerámica representa a un valiente guerrero en todo su esplendor. Cada detalle, desde la expresión facial hasta la posición de combate, ha sido cuidadosamente esculpido por expertos artesanos. La cerámica policromada añade un toque de color y vida a esta obra maestra, que seguramente se convertirá en el centro de atención en cualquier espacio.',
    principalImage: './imgs/FiguraCeramica.png',
    images: [
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
      '/src/assets/reloj.jpg',
      '/src/assets/reloj2.jpeg',
    ],
    startDate: '2024-06-26 13:45:00.000',
    timer: 300,
    price: 1000000,
    state: 'En espera'
  }
]

export const bids = [
  {
    id: 1,
    auctionId: 4,
    value: 800000,
    userName: 'DonArturo5896'
  },
  {
    id: 2,
    auctionId: 4,
    value: 820000,
    userName: 'Hernando777'
  },
  {
    id: 3,
    auctionId: 4,
    value: 850000,
    userName: 'Hernando777'
  },
  {
    id: 4,
    auctionId: 4,
    value: 870000,
    userName: 'Hernando777'
  },
  {
    id: 5,
    auctionId: 4,
    value: 950000,
    userName: 'DonArturo5896'
  },
  {
    id: 6,
    auctionId: 4,
    value: 1000000,
    userName: 'Hernando777'
  },
  {
    id: 7,
    auctionId: 4,
    value: 1100000,
    userName: 'DonArturo5896'
  },
  {
    id: 8,
    auctionId: 4,
    value: 1200000,
    userName: 'Hernando777'
  },
  {
    id: 9,
    auctionId: 4,
    value: 1250000,
    userName: 'DonArturo5896'
  },
  {
    id: 10,
    auctionId: 4,
    value: 1350000,
    userName: 'Hernando777'
  },
]