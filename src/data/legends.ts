export interface Legend {
  id: string;
  name: string;
  nickname: string;
  birthDate: string;
  position: string;
  clubs: string[];
  achievements: string[];
  biography: string;
  image: string;
}

export const legends: Legend[] = [
  {
    id: 'pele',
    name: 'Edson Arantes do Nascimento',
    nickname: 'Pelé',
    birthDate: '23 octobre 1940',
    position: 'Attaquant',
    clubs: ['Santos FC', 'New York Cosmos'],
    achievements: ['3 Coupes du Monde (1958, 1962, 1970)', 'Plus de 1000 buts marqués'],
    biography: 'Le Roi du Football. Pelé est largement considéré comme le plus grand joueur de tous les temps. Il a transformé le football en art et a mis le Brésil sur la carte mondiale du sport.',
    image: '/pele.jpeg'
  },
  {
    id: 'garrincha',
    name: 'Manuel Francisco dos Santos',
    nickname: 'Garrincha',
    birthDate: '28 octobre 1933',
    position: 'Ailier droit',
    clubs: ['Botafogo', 'Corinthians'],
    achievements: ['2 Coupes du Monde (1958, 1962)', 'Meilleur joueur du Mondial 1962'],
    biography: 'L\'Ange aux jambes courbées. Garrincha était le maître du dribble. On disait de lui qu\'il était la joie du peuple, capable de mystifier n\'importe quel défenseur.',
    image: '/garrincha.jpeg'
  },
  {
    id: 'zico',
    name: 'Arthur Antunes Coimbra',
    nickname: 'Zico',
    birthDate: '3 mars 1953',
    position: 'Milieu offensif',
    clubs: ['Flamengo', 'Udinese', 'Kashima Antlers'],
    achievements: ['Coupe Intercontinentale 1981', 'Meilleur buteur de l\'histoire du Flamengo'],
    biography: 'Le Pelé blanc. Zico était un génie du coup franc et de la passe. Il est l\'idole absolue du Flamengo et a mené le club à son premier titre mondial.',
    image: '/zico.jpg'
  },
  {
    id: 'ronaldo',
    name: 'Ronaldo Luís Nazário de Lima',
    nickname: 'Ronaldo Nazário',
    birthDate: '18 septembre 1976',
    position: 'Attaquant',
    clubs: ['Cruzeiro', 'PSV', 'Barcelone', 'Inter', 'Real Madrid', 'Milan', 'Corinthians'],
    achievements: ['2 Coupes du Monde (1994, 2002)', '2 Ballons d\'Or (1997, 2002)'],
    biography: 'Le Phénomène. Ronaldo a révolutionné le poste d\'avant-centre par sa puissance, sa vitesse et sa technique hors du commun. Son retour en 2002 après de graves blessures est légendaire.',
    image: '/ronaldonazario.jpg'
  },
  {
    id: 'ronaldinho',
    name: 'Ronaldo de Assis Moreira',
    nickname: 'Ronaldinho Gaúcho',
    birthDate: '21 mars 1980',
    position: 'Milieu offensif',
    clubs: ['Grêmio', 'PSG', 'Barcelone', 'Milan', 'Atlético Mineiro'],
    achievements: ['Coupe du Monde 2002', 'Ballon d\'Or 2005', 'Ligue des Champions 2006'],
    biography: 'Le magicien. Ronaldinho a ramené le sourire sur les terrains de foot. Ses dribbles improvisés et sa vision de jeu ont fait de lui l\'un des joueurs les plus aimés de l\'histoire.',
    image: '/ronaldinho.jpeg'
  },
  {
    id: 'romario',
    name: 'Romário de Souza Faria',
    nickname: 'Romário',
    birthDate: '29 janvier 1966',
    position: 'Attaquant',
    clubs: ['Vasco', 'PSV', 'Barcelone', 'Flamengo'],
    achievements: ['Coupe du Monde 1994', 'Meilleur joueur FIFA 1994'],
    biography: 'Le génie de la surface. Romário était un finisseur clinique, capable de marquer dans n\'importe quelle position. Il a été le grand artisan du sacre mondial de 1994.',
    image: '/romario.jpg'
  },
  {
    id: 'hulk',
    name: 'Givanildo Vieira de Sousa',
    nickname: 'Hulk',
    birthDate: '25 juillet 1986',
    position: 'Attaquant',
    clubs: ['FC Porto', 'Zenit', 'Atlético Mineiro'],
    achievements: ['Championnat du Brésil 2021', 'Ligue Europa 2011', 'Coupe des Confédérations 2013'],
    biography: 'La force de la nature. Célèbre pour sa puissance physique hors du commun et ses frappes de balle "atomiques", Hulk est devenu l\'idole de l\'Atlético Mineiro en remportant le Brasileirão après 50 ans d\'attente.',
    image: '/hulk.jpeg'
  },
  {
    id: 'vinijr',
    name: 'Vinícius José Paixão de Oliveira Júnior',
    nickname: 'Vini Jr.',
    birthDate: '12 juillet 2000',
    position: 'Ailier gauche',
    clubs: ['Flamengo', 'Real Madrid'],
    achievements: ['2 Ligues des Champions (2022, 2024)', '3 La Liga', 'Buteur en finale de C1'],
    biography: 'L\'étoile montante devenue géant. Formé au Flamengo, Vini Jr est aujourd\'hui l\'un des meilleurs joueurs du monde. Sa vitesse, ses dribbles et son efficacité devant le but font de lui le digne héritier des légendes brésiliennes au Real Madrid.',
    image: '/vinijr.jpg'
  },
  {
    id: 'neymar',
    name: 'Neymar da Silva Santos Júnior',
    nickname: 'Neymar Jr.',
    birthDate: '5 février 1992',
    position: 'Attaquant',
    clubs: ['Santos FC', 'Barcelone', 'PSG', 'Al-Hilal'],
    achievements: ['Ligue des Champions 2015', 'Médaille d\'Or Olympique 2016', 'Meilleur buteur de l\'histoire du Brésil'],
    biography: 'L\'héritier du Joga Bonito. Neymar est un génie créatif capable de gestes techniques incroyables. Il est devenu le meilleur buteur de l\'histoire de la Seleção, dépassant le record du Roi Pelé.',
    image: '/neymar.jpg'
  },
  {
    id: 'fernandinho',
    name: 'Fernando Luiz Roza',
    nickname: 'Fernandinho',
    birthDate: '4 mai 1985',
    position: 'Milieu de terrain',
    clubs: ['Athletico PR', 'Shakhtar Donetsk', 'Manchester City'],
    achievements: ['Copa Sudamericana 2021', '5 Premier League', 'Copa América 2019'],
    biography: 'Le moteur du Furacão. Après une carrière immense en Europe, Fernandinho est revenu dans son club de cœur, l\'Athletico Paranaense, pour continuer à écrire l\'histoire et guider les jeunes talents.',
    image: '/fernandinho.jpeg'
  },
  {
    id: 'kaka',
    name: 'Ricardo Izecson dos Santos Leite',
    nickname: 'Kaká',
    birthDate: '22 avril 1982',
    position: 'Milieu offensif',
    clubs: ['São Paulo', 'Milan', 'Real Madrid', 'Orlando City'],
    achievements: ['Coupe du Monde 2002', 'Ballon d\'Or 2007', 'Ligue des Champions 2007'],
    biography: 'Le dernier Ballon d\'Or humain avant l\'ère Messi-Ronaldo. Kaká était l\'élégance pure sur le terrain, capable de remontées de balle fulgurantes et de passes millimétrées.',
    image: '/kaka.jpg'
  },
  {
    id: 'taffarel',
    name: 'Cláudio André Mergen Taffarel',
    nickname: 'Taffarel',
    birthDate: '8 mai 1966',
    position: 'Gardien de but',
    clubs: ['Internacional', 'Parme', 'Atlético Mineiro', 'Galatasaray'],
    achievements: ['Coupe du Monde 1994', '2 Copa América (1989, 1997)', 'Coupe de l\'UEFA 2000'],
    biography: 'Le rempart du Brésil. Taffarel est l\'un des plus grands gardiens de l\'histoire de la Seleção. Ses arrêts décisifs lors de la séance de tirs au but en finale du Mondial 1994 contre l\'Italie ont marqué toute une génération de Brésiliens. "Sai que é sua, Taffarel!" est devenu un cri de ralliement légendaire.',
    image: '/taffarel.jpg'
  },
  {
    id: 'reinaldo',
    name: 'José Reinaldo de Lima',
    nickname: 'Reinaldo',
    birthDate: '11 janvier 1957',
    position: 'Attaquant',
    clubs: ['Atlético Mineiro', 'Palmeiras', 'Rio Branco'],
    achievements: ['Meilleur buteur de l\'histoire de l\'Atlético Mineiro (255 buts)', '8 Championnats Mineiros', 'Meilleur buteur du Brasileirão 1977'],
    biography: 'Le Roi de l\'Atlético. Reinaldo est considéré comme le plus grand joueur de l\'histoire du Galo. Célèbre pour son engagement politique et sa célébration du poing levé, il détenait le record de la meilleure moyenne de buts par match dans une saison du championnat brésilien.',
    image: '/reinaldo.jpg'
  },
  {
    id: 'dede',
    name: 'Anderson Vital da Silva',
    nickname: 'Dedé',
    birthDate: '1 juillet 1988',
    position: 'Défenseur central',
    clubs: ['Vasco da Gama', 'Cruzeiro', 'Athletico PR'],
    achievements: ['2 Championnats du Brésil (2013, 2014)', '3 Coupes du Brésil (2011, 2017, 2018)', 'Meilleur défenseur du Brasileirão (2010, 2011, 2013)'],
    biography: 'Surnommé "O Mito" (Le Mythe) par les supporters, Dedé a été l\'un des défenseurs les plus dominants du football brésilien moderne. Sa puissance physique, son timing aérien et son charisme ont fait de lui une idole absolue au Vasco da Gama et au Cruzeiro.',
    image: '/dede.jpeg'
  }
];
