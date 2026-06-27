export interface TeamPatch {
  city?: string;
  stadium?: string;
  description?: string;
  stadiumDescription?: string;
}

export interface LegendPatch {
  position?: string;
  biography?: string;
  achievements?: string[];
}

export const TEAM_TRANSLATIONS: Record<string, TeamPatch> = {
  flamengo: {
    city: "Rio de Janeiro",
    stadium: "Maracanã",
    description: "O clube mais popular do Brasil. Conhecido por sua torcida apaixonada e ataque explosivo.",
    stadiumDescription: "O templo do futebol mundial. O Maracanã sediou duas finais de Copa do Mundo e continua sendo o símbolo supremo da paixão brasileira."
  },
  palmeiras: {
    city: "São Paulo",
    stadium: "Allianz Parque",
    description: "Um dos clubes mais vitoriosos do país. Uma categoria de base incrível que revela futuras estrelas do futebol.",
    stadiumDescription: "Uma das arenas mais modernas da América do Sul, conhecida por sua acústica impressionante e pressão da torcida."
  },
  'sao-paulo': {
    city: "São Paulo",
    stadium: "Morumbi",
    description: "O único clube brasileiro a vencer a Copa Intercontinental e o Mundial de Clubes da FIFA três vezes.",
    stadiumDescription: "O maior estádio particular do Brasil. Um monumento arquitetônico que testemunhou as maiores lendas do clube."
  },
  corinthians: {
    city: "São Paulo",
    stadium: "Neo Química Arena",
    description: "O 'Time do Povo'. Uma paixão inigualável e uma história rica em conquistas e superação.",
    stadiumDescription: "Uma joia tecnológica inaugurada para a Copa do Mundo de 2014. A casa da Fiel torcida."
  },
  santos: {
    city: "Santos",
    stadium: "Vila Belmiro",
    description: "O clube do Rei Pelé. Famoso no mundo inteiro por seu futebol ofensivo e por revelar os 'Meninos da Vila'.",
    stadiumDescription: "O estádio lendário onde o Rei Pelé fez história. Um lugar sagrado, íntimo e cheio de emoção."
  },
  gremio: {
    city: "Porto Alegre",
    stadium: "Arena do Grêmio",
    description: "Conhecido por sua garra imbatível, espírito copeiro e grandes conquistas na Copa Libertadores.",
    stadiumDescription: "Uma arena moderna de classe mundial, famosa pela atmosfera vibrante e o apoio fanático de seus torcedores."
  },
  'atletico-mineiro': {
    city: "Belo Horizonte",
    stadium: "Arena MRV",
    description: "O 'Galo'. Um clube de torcida fanática e apaixonada, com uma história rica de glórias nacionais e internacionais.",
    stadiumDescription: "A nova casa do Galo. Um estádio ultra-moderno projetado para oferecer a melhor acústica e pressão sobre o adversário."
  },
  vasco: {
    city: "Rio de Janeiro",
    stadium: "São Januário",
    description: "O 'Gigante da Colina'. Um clube pioneiro de relevância nacional na luta contra o preconceito racial e pela inclusão no futebol.",
    stadiumDescription: "Estádio histórico erguido pelos próprios torcedores na década de 1920. Símbolo eterno de orgulho popular."
  },
  bahia: {
    city: "Salvador",
    stadium: "Arena Fonte Nova",
    description: "O 'Esquadrão de Aço'. Primeiro campeão nacional em 1959 e uma das torcidas mais vibrantes do Nordeste.",
    stadiumDescription: "Bela e moderna arena reconstruída para a Copa de 2014, famosa pela abertura com vista para o Dique do Tororó."
  },
  fluminense: {
    city: "Rio de Janeiro",
    stadium: "Maracanã",
    description: "O 'Tricolor das Laranjeiras'. Clube de grande tradição e elegância, conhecido pelo futebol técnico e pelo clássico Fla-Flu.",
    stadiumDescription: "O Maracanã é também a casa do Fluminense, palco de suas maiores e mais emocionantes glórias continentais."
  },
  botafogo: {
    city: "Rio de Janeiro",
    stadium: "Nilton Santos",
    description: "O clube da 'Estrela Solitária'. Historicamente o maior fornecedor de craques para a Seleção Brasileira em Copas.",
    stadiumDescription: "Também conhecido como Engenhão, o estádio olímpico moderno serve de fortaleza para o Glorioso."
  },
  desportiva: {
    city: "Cariacica",
    stadium: "Engenheiro Araripe",
    description: "A 'Locomotiva Grená'. Um dos times mais tradicionais do Espírito Santo, com torcedores dedicados e muita história regional.",
    stadiumDescription: "O coração do futebol capixaba, um estádio repleto de memórias e partidas históricas locais."
  },
  fortaleza: {
    city: "Fortaleza",
    stadium: "Arena Castelão",
    description: "O 'Leão do Pici'. Força gigante do futebol nordestino, famosa por festas espetaculares da torcida e ascensão meteórica.",
    stadiumDescription: "O colossal palco cearense, conhecido por receber mosaicos de nível mundial organizados pela torcida tricolor."
  },
  figueirense: {
    city: "Florianópolis",
    stadium: "Orlando Scarpelli",
    description: "O 'Figueira'. Um dos clubes mais tradicionais de Santa Catarina, com uma bela história e torcedores fervorosos.",
    stadiumDescription: "Localizado na parte continental de Florianópolis, é um marco icônico do futebol catarinense."
  },
  goias: {
    city: "Goiânia",
    stadium: "Serrinha",
    description: "O 'Esmeraldino'. O clube mais vitorioso do estado de Goiás, famoso por revelar grandes talentos do futebol nacional.",
    stadiumDescription: "Estádio moderno e confortável onde o maior clube do Centro-Oeste manda seus jogos."
  },
  guarani: {
    city: "Campinas",
    stadium: "Brinco de Ouro",
    description: "O 'Bugre'. Único clube do interior do país campeão brasileiro (1978). Histórico revelador de craques renomados internacionalmente.",
    stadiumDescription: "O tradicional estádio de Campinas, apelidado carinhosamente de 'Brinco de Ouro da Princesa'."
  },
  internacional: {
    city: "Porto Alegre",
    stadium: "Beira-Rio",
    description: "O 'Colorado'. Campeão do Mundo Fifa em 2006, um dos gigantes do Sul e protagonista do histórico clássico Grenal.",
    stadiumDescription: "O Gigante da Beira-Rio, um estádio deslumbrante situado às margens do Rio Guaíba."
  },
  paysandu: {
    city: "Belém",
    stadium: "Curuzu",
    description: "O 'Papão da Curuzu'. Gigante da região Norte, lembrado pela lendária vitória sobre o Boca Juniors em plena Bombonera em 2003.",
    stadiumDescription: "O caldeirão bicolor em Belém, onde a paixão e a pressão da torcida são inigualáveis."
  },
  parana: {
    city: "Curitiba",
    stadium: "Vila Capanema",
    description: "O 'Tricolor da Vila'. Nascido de fusões vitoriosas em 1989, dominou o futebol paranaense nos anos 90 com o pentacampeonato.",
    stadiumDescription: "Estádio repleto de tradição ferroviária e orgulho tricolor na capital paranaense."
  },
  'santacruz': {
    city: "Recife",
    stadium: "Arruda",
    description: "O 'Cobra Coral'. Uma das torcidas mais apaixonadas e fiéis do Brasil, capaz de lotar o Arruda em qualquer divisão.",
    stadiumDescription: "Um dos maiores estádios do Brasil, palco de públicos históricos incríveis em Recife."
  },
  coritiba: {
    city: "Curitiba",
    stadium: "Couto Pereira",
    description: "O 'Coxa-Branca'. Um clube histórico do Paraná, campeão brasileiro em 1985 e conhecido por sua torcida fiel.",
    stadiumDescription: "Um estádio tradicional do Paraná, famoso pela proximidade dos torcedores com o gramado."
  },
  'athletico-pr': {
    city: "Curitiba",
    stadium: "Ligga Arena",
    description: "O 'Furacão'. Um clube moderno e inovador, campeão brasileiro em 2001 e bicampeão da Copa Sul-Americana.",
    stadiumDescription: "O primeiro estádio da América Latina com teto retrátil. Uma maravilha de tecnologia e conforto."
  },
  'juventus-sp': {
    city: "São Paulo",
    stadium: "Rua Javari",
    description: "O 'Moleque Travesso'. Um clube histórico do tradicional bairro da Mooca, famoso por sua atmosfera tradicional e pelo gol mais bonito da história de Pelé marcado em seu estádio.",
    stadiumDescription: "Um estádio romântico e tradicional no coração de São Paulo, famoso pelos cannoli servidos no intervalo do jogo."
  },
  'america-rj': {
    city: "Rio de Janeiro",
    stadium: "Giulite Coutinho",
    description: "O 'Mecão'. Um dos clubes mais tradicionais do Rio de Janeiro, conhecido por sua torcida fiel e sua importância histórica no futebol carioca.",
    stadiumDescription: "Um estádio acolhedor que representa a tradição do futebol carioca de bairro."
  },
  'avai-fc': {
    city: "Florianópolis",
    stadium: "Ressacada",
    description: "O 'Leão da Ilha'. O clube catarinense com maior tradição nacional, conhecido por sua torcida apaixonada e forte identidade com Florianópolis.",
    stadiumDescription: "Um estádio moderno na bela ilha de Florianópolis, oferecendo uma atmosfera única."
  },
  bangu: {
    city: "Rio de Janeiro",
    stadium: "Moça Bonita",
    description: "O 'Alvirrubro'. Um clube histórico do Rio de Janeiro, famoso por ser um dos pioneiros na inclusão de atletas negros e por seu vice-campeonato brasileiro de 1985.",
    stadiumDescription: "Estádio tradicional da Zona Oeste do Rio, conhecido por sua atmosfera calorosa."
  },
  brasiliense: {
    city: "Taguatinga",
    stadium: "Serejão",
    description: "O 'Jacaré'. Um clube jovem mas marcante da capital, famoso por alcançar a final da Copa do Brasil de 2002 apenas dois anos após sua fundação.",
    stadiumDescription: "O principal estádio de Taguatinga, palco da rápida ascensão e das glórias do clube."
  },
  criciuma: {
    city: "Criciúma",
    stadium: "Heriberto Hülse",
    description: "O 'Tigre'. O clube de Santa Catarina com maior glória nacional, campeão histórico da Copa do Brasil de 1991 sob o comando de Luiz Felipe Scolari.",
    stadiumDescription: "O majestoso Heriberto Hülse, um estádio vibrante que ferve com o cantar de sua torcida apaixonada."
  },
  nautico: {
    city: "Recife",
    stadium: "Aflitos",
    description: "O 'Timbu'. Um de nossos mais tradicionais clubes pernambucanos, famoso pelo histórico hexacampeonato estadual (1963-1968) e pelo icônico estádio dos Aflitos.",
    stadiumDescription: "Estádio histórico e aconchegante de Recife, famoso por sua atmosfera de pressão que assusta os adversários."
  },
  pontepreta: {
    city: "Campinas",
    stadium: "Moisés Lucarelli",
    description: "A 'Macaca'. Um dos clubes de futebol mais antigos do Brasil em atividade. Famoso pela rivalidade no Derby Campineiro com o Guarani e por seu lendário estádio construído pela própria torcida.",
    stadiumDescription: "O mítico estádio 'Majestoso', erguido de forma heróica pelo esforço físico e financeiro da apaixonada torcida pontepretana."
  },
  portuguesa: {
    city: "São Paulo",
    stadium: "Canindé",
    description: "A 'Lusa'. Clube histórico de São Paulo que carrega com orgulho a herança e o apoio da comunidade portuguesa. Célebre pelo time da 'Barcelusa' em 2011 e por revelar o craque genial Dener.",
    stadiumDescription: "Um estádio icônico em São Paulo, às margens do Tietê, que abriga festas tradicionais e acolhe a comunidade luso-brasileira."
  },
  saocaetano: {
    city: "São Caetano do Sul",
    stadium: "Anacleto Campanella",
    description: "O 'Azulão'. Marcante pela ascensão impressionante no começo dos anos 2000, quando disputou consecutivamente duas finais do Brasileirão (2000 e 2001) e a final da Libertadores de 2002.",
    stadiumDescription: "O Estádio Anacleto Campanella, testemunha maior das glórias e do sucesso nacional e internacional do São Caetano."
  },
  sport: {
    city: "Recife",
    stadium: "Ilha do Retiro",
    description: "O 'Leão da Ilha'. Campeão brasileiro de 1987 e vencedor da Copa do Brasil de 2008. Uma das potências máximas e das mais fervorosas torcidas do Nordeste.",
    stadiumDescription: "A mítica Ilha do Retiro, um verdadeiro caldeirão rubro-negro onde o Leão manda soberano sob enorme apoio de sua torcida."
  },
  chapecoense: {
    city: "Chapecó",
    stadium: "Arena Condá",
    description: "O 'Verdão do Oeste'. Reconhecido por sua incrível ascensão e lembrado com carinho eterno após a tragédia de 2016. Declarado campeão da Copa Sul-Americana como tributo eterno.",
    stadiumDescription: "Mundialmente conhecida pela resiliência e união, a Arena Condá é o coração pulsante da cidade de Chapecó."
  },
  remo: {
    city: "Belém",
    stadium: "Baenão",
    description: "O 'Leão Azul'. Um dos clubes de maior devoção popular do Norte brasileiro, coprotagonista do lendário 'RexPa', o clássico mais jogado do mundo.",
    stadiumDescription: "Estádio histórico e pulsante, o Baenão carrega décadas de histórias memoráveis na cidade de Belém."
  },
  vitoria: {
    city: "Salvador",
    stadium: "Barradão",
    description: "O 'Leão da Barra'. Renomada base formadora de talentos, revelando nomes como Bebeto, Vampeta, Dida e Hulk.",
    stadiumDescription: "O santuário rubro-negro em Salvador, sinônimo de garra, pressão e orgulho baiano."
  },
  juventude: {
    city: "Caxias do Sul",
    stadium: "Alfredo Jaconi",
    description: "O 'Papo'. Tradicional equipe da Serra Gaúcha, campeã histórica da Copa do Brasil de 1999 batendo o Botafogo no Maracanã.",
    stadiumDescription: "Estádio tradicional do Sul, conhecido pela neblina característica e atmosfera única."
  },
  mirassol: {
    city: "Mirassol",
    stadium: "José Maria de Campos",
    description: "O 'Leão'. Um exemplo de gestão eficiente no interior de São Paulo, alcançando espaço de destaque no cenário nacional.",
    stadiumDescription: "Estádio moderno e acolhedor do clube no interior paulista."
  },
  novorizontino: {
    city: "Novo Horizonte",
    stadium: "Jorge Ismael de Biasi",
    description: "O 'Tigre do Vale'. Equipe de ascensão surpreendente no futebol paulista e brasileiro, mostrando muita força competitiva.",
    stadiumDescription: "A casa do Tigre, palco do rápido e merecido sucesso do clube paulista."
  },
  ituano: {
    city: "Itu",
    stadium: "Novelli Júnior",
    description: "O 'Galo de Itu'. Bicampeão paulista (2002 e 2014) marcante no interior, clube revelador do astro Gabriel Martinelli.",
    stadiumDescription: "Estádio onde o clube de Itu fez história superando os gigantes estaduais."
  }
};

export const LEGEND_TRANSLATIONS: Record<string, LegendPatch> = {
  pele: {
    position: "Atacante",
    biography: "O Rei do Futebol. Pelé é amplamente considerado o maior jogador de todos os tempos. Ele transformou o futebol em arte e colocou o Brasil no topo do mapa esportivo mundial.",
    achievements: ["3 Copas do Mundo (1958, 1962, 1970)", "Mais de 1000 gols na carreira"]
  },
  garrincha: {
    position: "Ponta-direita",
    biography: "O Anjo das Pernas Tortas. Garrincha era o gênio indiscutível do drible. Conhecido como a 'Alegria do Povo', era capaz de desconcertar qualquer defensor com sua magia.",
    achievements: ["2 Copas do Mundo (1958, 1962)", "Melhor jogador da Copa do Mundo de 1962"]
  },
  zico: {
    position: "Meia ofensivo",
    biography: "O Galinho de Quintino. Zico foi um mestre das cobranças de falta e passes milimétricos. Ídolo supremo do Flamengo, liderou o clube na conquista de seu primeiro Mundial.",
    achievements: ["Copa Intercontinental de 1981", "Maior artilheiro da história do Flamengo"]
  },
  ronaldo: {
    position: "Atacante",
    biography: "O Fenômeno. Ronaldo revolucionou a posição de centroavante com sua potência fantástica, velocidade e drible arrebatador. Seu retorno em 2002 após graves lesões é lendário.",
    achievements: ["2 Copas do Mundo (1994, 2002)", "2 Bolas de Ouro (1997, 2002)"]
  },
  ronaldinho: {
    position: "Meia ofensivo",
    biography: "O Bruxo. Ronaldinho trouxe o sorriso de volta ao futebol mundial. Seus dribles inacreditáveis e alegria em campo fizeram dele um dos jogadores mais amados da história.",
    achievements: ["Copa do Mundo de 2002", "Melhor do Mundo FIFA em 2005", "Liga dos Campeões de 2006"]
  },
  romario: {
    position: "Atacante",
    biography: "O Gênio da Grande Área. Romário foi um finalizador implacável, marcando de ângulos impossíveis. Ele foi a grande estrela na conquista do tetracampeonato mundial do Brasil em 1994.",
    achievements: ["Copa do Mundo de 1994", "Melhor Jogador do Mundo FIFA em 1994"]
  },
  hulk: {
    position: "Atacante",
    biography: "Força da natureza. Famoso por seu porte físico intimidador e chutes potentes que desafiam a física. Tornou-se ídolo do Atlético Mineiro, liderando o título do Brasileirão 2021.",
    achievements: ["Campeonato Brasileiro de 2021", "Liga Europa de 2011", "Copa das Confederações de 2013"]
  },
  vinijr: {
    position: "Ponta-esquerda",
    biography: "Estrela mundial e ícone do futebol atual. Revelado pelo Flamengo, Vini Jr. destaca-se hoje como protagonista do Real Madrid, unindo velocidade, ginga e inteligência com golaços.",
    achievements: ["2 Champions League (2022, 2024)", "3 Campeonatos Espanhóis", "Gols decisivos em finais de Champions"]
  },
  neymar: {
    position: "Atacante",
    biography: "O herdeiro do Joga Bonito. Neymar é o sinônimo da criatividade e improvisação em campo. Superou o Rei Pelé como o maior artilheiro da história da Seleção Brasileira.",
    achievements: ["Champions League de 2015", "Medalha de Ouro Olímpica de 2016", "Maior artilheiro oficial da Seleção Brasileira"]
  },
  fernandinho: {
    position: "Volante",
    biography: "O maestro do Furacão. Após uma vitoriosa carreira na Europa, retornou ao seu clube formador, o Athletico Paranaense, para liderar novos talentos e buscar mais conquistas.",
    achievements: ["Copa Sul-Americana de 2021", "5 Premier League", "Copa América de 2019"]
  },
  kaka: {
    position: "Meia ofensivo",
    biography: "O último vencedor da Bola de Ouro antes da dinastia Messi-Ronaldo. Kaká desfilava elegância pura, com arrancadas em velocidade extraordinárias e passes brilhantes.",
    achievements: ["Copa do Mundo de 2002", "Bola de Ouro de 2007", "Champions League de 2007"]
  },
  taffarel: {
    position: "Goleiro",
    biography: "O herói sob as traves. Um dos goleiros mais emblemáticos da Seleção Brasileira. Seus milagres nos pênaltis na final de 1994 contra a Itália consagraram o grito eterno: 'Sai que é sua, Taffarel!'.",
    achievements: ["Copa do Mundo de 1994", "2 Copa América (1989, 1997)", "Copa da UEFA de 2000"]
  },
  reinaldo: {
    position: "Atacante",
    biography: "O Rei da Massa. Maior goleador da história do Atlético Mineiro. Célebre por seus gols acrobáticos, genialidade técnica e celebração icônica com o punho erguido contra as opressões.",
    achievements: ["Maior artilheiro histórico do Galo (255 gols)", "8 Campeonatos Mineiros", "Artilheiro do Brasileirão de 1977"]
  },
  dede: {
    position: "Zagueiro",
    biography: "Apelidado de 'O Mito', Dedé foi um dos zagueiros mais dominantes do futebol nacional recente. Unia força física soberana no jogo aéreo a uma liderança carismática e inesquecível.",
    achievements: ["2 Campeonatos Brasileiros (2013, 2014)", "3 Copas do Brasil (2011, 2017, 2018)", "Melhor zagueiro do Brasileirão (2010, 2011, 2013)"]
  }
};

export const QUIZ_TRANSLATIONS: Record<number, { q: string; a: string; optionsMap: Record<string, string> }> = {
  0: {
    q: "Qual clube é apelidado de 'O Rei'?",
    a: "Santos FC",
    optionsMap: { "Flamengo": "Flamengo", "Santos FC": "Santos FC", "Palmeiras": "Palmeiras", "Grêmio": "Grêmio" }
  },
  1: {
    q: "Em qual cidade joga o clube do Flamengo?",
    a: "Rio de Janeiro",
    optionsMap: { "São Paulo": "São Paulo", "Rio de Janeiro": "Rio de Janeiro", "Brasília": "Brasília", "Salvador": "Salvador" }
  },
  2: {
    q: "Qual é o nome do estádio mítico do Rio de Janeiro?",
    a: "Maracanã",
    optionsMap: { "Morumbi": "Morumbi", "Mineirão": "Mineirão", "Maracanã": "Maracanã", "Allianz Parque": "Allianz Parque" }
  },
  3: {
    q: "Qual equipe Pelé defendeu durante quase toda a sua carreira?",
    a: "Santos FC",
    optionsMap: { "Corinthians": "Corinthians", "Santos FC": "Santos FC", "Vasco": "Vasco", "Botafogo": "Botafogo" }
  },
  4: {
    q: "Qual clube é apelidado de 'Furacão'?",
    a: "Athletico PR",
    optionsMap: { "Athletico PR": "Athletico PR", "Bahia": "Bahia", "Internacional": "Internacional", "Cruzeiro": "Cruzeiro" }
  },
  5: {
    q: "Qual clube é conhecido como 'Leão do Pici'?",
    a: "Fortaleza EC",
    optionsMap: { "Fortaleza EC": "Fortaleza EC", "Ceará": "Ceará", "Sport Recife": "Sport Recife", "Bahia": "Bahia" }
  },
  6: {
    q: "Em que ano Kaká conquistou a Bola de Ouro (Ballon d'Or)?",
    a: "2007",
    optionsMap: { "2005": "2005", "2007": "2007", "2009": "2009", "2011": "2011" }
  },
  7: {
    q: "Qual goleiro foi o herói do tetra nos pênaltis na final de 1994?",
    a: "Taffarel",
    optionsMap: { "Dida": "Dida", "Marcos": "Marcos", "Taffarel": "Taffarel", "Alisson": "Alisson" }
  },
  8: {
    q: "Qual clube é conhecido como 'Moleque Travesso'?",
    a: "CA Juventus",
    optionsMap: { "CA Juventus": "CA Juventus", "Portuguesa": "Portuguesa", "Ponte Preta": "Ponte Preta", "Guarani": "Guarani" }
  },
  9: {
    q: "Qual clube carioca é conhecido como 'Mecão'?",
    a: "America Football Club",
    optionsMap: { "America Football Club": "America Football Club", "Bangu": "Bangu", "Madureira": "Madureira", "Olaria": "Olaria" }
  },
  10: {
    q: "Qual clube catarinense é apelidado de 'Leão da Ilha'?",
    a: "Avaí F.C.",
    optionsMap: { "Avaí F.C.": "Avaí F.C.", "Figueirense": "Figueirense", "Criciúma": "Criciúma", "Chapecoense": "Chapecoense" }
  },
  11: {
    q: "Qual é o nome do estádio do Bangu Atlético Clube?",
    a: "Moça Bonita",
    optionsMap: { "Moça Bonita": "Moça Bonita", "São Januário": "São Januário", "Vila Belmiro": "Vila Belmiro", "Rua Javari": "Rua Javari" }
  },
  12: {
    q: "Qual é o mascote/apelido do Brasiliense Futebol Clube?",
    a: "Jacaré",
    optionsMap: { "Jacaré": "Jacaré", "Galo": "Galo", "Leão": "Leão", "Raposa": "Raposa" }
  },
  13: {
    q: "Qual clube catarinense é conhecido como o 'Tigre'?",
    a: "Criciúma Esporte Clube",
    optionsMap: { "Criciúma Esporte Clube": "Criciúma Esporte Clube", "Vila Nova": "Vila Nova", "Amazonas FC": "Amazonas FC", "Novorizontino": "Novorizontino" }
  },
  14: {
    q: "Qual é o nome do estádio do Figueirense Futebol Clube?",
    a: "Orlando Scarpelli",
    optionsMap: { "Orlando Scarpelli": "Orlando Scarpelli", "Ressacada": "Ressacada", "Heriberto Hülse": "Heriberto Hülse", "Arena Condá": "Arena Condá" }
  },
  15: {
    q: "Qual clube goiano é conhecido como 'Esmeraldino'?",
    a: "Goiás Esporte Clube",
    optionsMap: { "Goiás Esporte Clube": "Goiás Esporte Clube", "Guarani": "Guarani", "Palmeiras": "Palmeiras", "Coritiba": "Coritiba" }
  },
  16: {
    q: "Qual clube do interior paulista foi o único campeão brasileiro (1978)?",
    a: "Guarani",
    optionsMap: { "Guarani": "Guarani", "Ponte Preta": "Ponte Preta", "Bragantino": "Bragantino", "Juventude": "Juventude" }
  },
  17: {
    q: "Qual clube venceu o FC Barcelona na final do Mundial de Clubes de 2006?",
    a: "Internacional",
    optionsMap: { "Internacional": "Internacional", "São Paulo": "São Paulo", "Santos": "Santos", "Flamengo": "Flamengo" }
  },
  18: {
    q: "Qual é o mascote do Clube Náutico Capibaribe?",
    a: "Timbu",
    optionsMap: { "Timbu": "Timbu", "Galo": "Galo", "Leão": "Leão", "Raposa": "Raposa" }
  },
  19: {
    q: "Qual clube do Norte venceu o Boca Juniors na Bombonera na Libertadores de 2003?",
    a: "Paysandu",
    optionsMap: { "Paysandu": "Paysandu", "Remo": "Remo", "Santos": "Santos", "Cruzeiro": "Cruzeiro" }
  },
  20: {
    q: "O Paraná Clube nasceu da fusão de quais clubes em 1989?",
    a: "Colorado e Pinheiros",
    optionsMap: { "Colorado et Pinheiros": "Colorado e Pinheiros", "Coritiba et Athletico": "Coritiba e Athletico", "Londrina et Operário": "Londrina e Operário", "Grêmio et Inter": "Grêmio e Inter" }
  },
  21: {
    q: "Qual é o mascote/apelido da Ponte Preta?",
    a: "Macaca",
    optionsMap: { "Macaca": "Macaca", "Galo": "Galo", "Leão": "Leão", "Raposa": "Raposa" }
  },
  22: {
    q: "Qual clube paulista foi apelidado de 'Barcelusa' em 2011?",
    a: "Portuguesa",
    optionsMap: { "Portuguesa": "Portuguesa", "Palmeiras": "Palmeiras", "Santos": "Santos", "Flamengo": "Flamengo" }
  },
  23: {
    q: "Qual é o mascote/apelido do Santa Cruz FC?",
    a: "Cobra Coral",
    optionsMap: { "Cobra Coral": "Cobra Coral", "Timbu": "Timbu", "Leão": "Leão", "Galo": "Galo" }
  },
  24: {
    q: "Qual clube foi finalista da Libertadores 2002 apenas 13 anos após a sua fundação?",
    a: "São Caetano",
    optionsMap: { "São Caetano": "São Caetano", "São Paulo": "São Paulo", "Santos": "Santos", "Grêmio": "Grêmio" }
  },
  25: {
    q: "Qual clube do Nordeste conquistou a Copa do Brasil de 2008?",
    a: "Sport Recife",
    optionsMap: { "Sport Recife": "Sport Recife", "Bahia": "Bahia", "Vitória": "Vitória", "Ceará": "Ceará" }
  },
  26: {
    q: "Qual clube baiano revelou Bebeto e Dida em sua base?",
    a: "Vitória",
    optionsMap: { "Vitória": "Vitória", "Bahia": "Bahia", "Sport Recife": "Sport Recife", "Ceará": "Ceará" }
  },
  27: {
    q: "Qual clube foi declarado campeão da Copa Sul-Americana de 2016 após uma tragédia?",
    a: "Chapecoense",
    optionsMap: { "Chapecoense": "Chapecoense", "Atlético Nacional": "Atlético Nacional", "Grêmio": "Grêmio", "Flamengo": "Flamengo" }
  },
  28: {
    q: "Qual equipe paraense protagoniza o clássico RexPa?",
    a: "Remo",
    optionsMap: { "Remo": "Remo", "Tuna Luso": "Tuna Luso", "Manaus": "Manaus", "Sampaio Corrêa": "Sampaio Corrêa" }
  },
  29: {
    q: "Qual clube de Caxias do Sul venceu a Copa do Brasil de 1999 ?",
    a: "Juventude",
    optionsMap: { "Juventude": "Juventude", "Caxias": "Caxias", "Grêmio": "Grêmio", "Internacional": "Internacional" }
  },
  30: {
    q: "Qual é o apelido do Mirassol FC?",
    a: "Leão da Alta Araraquarense",
    optionsMap: { "Leão da Alta Araraquarense": "Leão da Alta Araraquarense", "Galo da Comarca": "Galo da Comarca", "Pantera": "Pantera", "Tigre": "Tigre" }
  },
  31: {
    q: "Qual clube paulista é apelidado de 'Tigre do Vale'?",
    a: "Novorizontino",
    optionsMap: { "Novorizontino": "Novorizontino", "Criciúma": "Criciúma", "Vila Nova": "Vila Nova", "Amazonas": "Amazonas" }
  },
  32: {
    q: "Qual clube paulista é apelidado de 'Galo de Itu'?",
    a: "Ituano",
    optionsMap: { "Ituano": "Ituano", "Atlético Mineiro": "Atlético Mineiro", "CRB": "CRB", "River-PI": "River-PI" }
  }
};

export const UI_TRANSLATIONS: Record<'fr' | 'pt', Record<string, string>> = {
  fr: {
    clubs: "Clubs",
    legends: "Légendes",
    stades: "Stades",
    voter: "Voter",
    minigame: "Mini-Jeu",
    search_clubs: "Cherche ton club préféré...",
    search_legends: "Cherche une légende...",
    
    welcome_title: "BONJOUR À TOI, FUTURE STAR DU FOOT ! ICI, TU TROUVERAS TOUTES LES INFOS DONT TU AS BESOIN !!!",
    click_more: "Clique pour en savoir plus",
    welcome_details_intro: "Bonjour, si tu as cliqué ici, c'est sûrement que tu veux plus d'informations. Voici quelques infos supplémentaires :",
    welcome_details_body: "Le bouton vert en bas à droite t'ouvre une zone de messagerie dans laquelle tu pourras parler à un assistant IA nommé Brazuca. Si tu souhaites annuler ton vote, il te suffit de recliquer sur le club pour lequel tu as voté et ton choix sera réinitialisé. Le bouton en haut à droite en forme de lune ou de soleil te permet d'alterner entre le mode sombre et le mode clair selon ton envie. Enfin, le bouton Commencer l'aventure te mène à la page des légendes et le bouton Voter pour ton club te mène à une page pour désigner ton club préféré.",
    welcome_details_footer: "Voilà, tu sais tout ! À toi de jouer maintenant 👍 🇧🇷🇧🇷🇧🇷",
    
    theme_light: "Mode clair",
    theme_dark: "Mode sombre",
    show_welcome: "Afficher le message de bienvenue",
    
    earth_of_football: "La Terre du Football",
    discover_the: "DÉCOUVRE LE",
    start_adventure: "Commencer l'aventure",
    vote_for_club: "Voter pour ton club",
    
    mythic_clubs: "Les Clubs Mythiques",
    explore_series_a: "Explore les géants de la Série A brésilienne.",
    no_club_found: 'Aucun club trouvé pour "{search}"... ⚽',
    want_to_score: "Envie de marquer un but ?",
    test_reflexes: "Testez vos réflexes dans notre mini-jeu de tirs au but. Deviendrez-vous la prochaine légende du Maracanã ?",
    play_now: "Jouer maintenant",
    
    eternal_legends: "Légendes Éternelles",
    players_history: "Les joueurs qui ont écrit l'histoire du football mondial.",
    back_to_clubs: "Retour aux clubs",
    major_achievements: "Palmarès Majeur",
    ton_vote: "Ton Vote",
    
    vote_favorite: "Vote pour ton Club Préféré !",
    who_makes_heart: "Lequel de ces géants fait battre ton cœur ? ⚽❤️",
    thanks_vote: "Merci pour ton vote ! (Clique sur ton club pour annuler)",
    current_ranking: "Classement Actuel",
    votes_count: "votes",
    choose_team: "Choisis ton équipe",
    cancel: "Annuler",
    vote_btn: "Voter !",
    
    temples_of_football: "Les Temples du Football",
    discover_stadiums_desc: "Découvrez les stades mythiques qui font battre le cœur du Brésil. Chaque arène raconte une histoire de passion et de gloire.",
    about_stadium: "À propos du stade",
    resident_club: "Club résident :",
    stadium_label: "Stade",
    founded_label: "Fondé en",
    legends_label: "Légendes du club",
    about_label: "À propos",
    
    penalty_shootout: "Penalty Shootout",
    test_scorer_skills: "Testez vos talents de buteur ! Choisissez une direction et essayez de tromper le gardien.",
    click_to_shoot: "Cliquez pour tirer !",
    speed: "Vitesse",
    shoot_again: "Tirer à nouveau",
    score_label: "Score",
    shots_label: "Tirs",
    game_hint: "Plus vous marquez, plus la cible va vite !",
    reset: "Réinitialiser",
    goal_message: "GOOOOOL !!!",
    save_message: "PARADÃO !",
    miss_message: "FORA !",
    goal_descr: "Quelle frappe magnifique !",
    save_descr: "Le gardien était imbattable !",
    
    did_you_know: "Le Savais-tu ?",
    did_you_know_desc: "Le Brésil est le seul pays au monde à avoir participé à **toutes** les phases finales de la Coupe du Monde de la FIFA. C'est aussi la nation la plus titrée avec **5 étoiles** ! ⭐️⭐️⭐️⭐️⭐️",
    world_cups: "Coupes du Monde",
    copa_america: "Copa América",
    pele_goals: "Buts de Pelé",
    created_for_champs: "© 2024 - Créé pour les futurs champions. BRAZUCA !",
    
    chat_placeholder: "Pose ta question...",
    chat_welcome: "Salut ! Je suis ton assistant **BRAZUCA**. Pose-moi n'importe quelle question sur le football brésilien !",
    chat_error_connection: "Désolé, je n'arrive pas à me connecter au terrain pour l'instant !",
    chat_error_generic: "Oups, j'ai eu un petit problème technique. Réessaie !",
    close_welcome: "Fermer le message"
  },
  pt: {
    clubs: "Clubes",
    legends: "Lendas",
    stades: "Estádios",
    voter: "Votar",
    minigame: "Mini-Jogo",
    search_clubs: "Busque seu clube favorito...",
    search_legends: "Busque uma lenda...",
    
    welcome_title: "OLÁ PARA VOCÊ, FUTURA ESTRELA DO FUTEBOL, AQUI VOCÊ ENCONTRARÁ TODAS AS INFORMAÇÕES QUE PRECISA!!!",
    click_more: "Clique para saber mais",
    welcome_details_intro: "Olá, se você clicou aqui é porque provavelmente quer mais informações, aqui vão algumas:",
    welcome_details_body: "o botão verde no canto inferior direito abre uma área de chat onde você pode conversar com um assistente de IA (cujo nome é brazuca). Se quiser retirar seu voto, basta clicar novamente no clube pelo qual votou e o voto será desfeito. O botão no canto superior direito que parece uma lua (ou sol) ativa o modo escuro (ou claro). O botão começar a aventura te leva para a página de lendas e o botão votar no seu clube te leva para a página de votação.",
    welcome_details_footer: "pronto, agora você sabe tudo, é a sua vez de jogar 👍 🇧🇷🇧🇷🇧🇷",
    
    theme_light: "Modo claro",
    theme_dark: "Modo escuro",
    show_welcome: "Mostrar mensagem de boas-vindas",
    
    earth_of_football: "A Terra do Futebol",
    discover_the: "DESCUBRA O",
    start_adventure: "Começar a aventura",
    vote_for_club: "Votar no seu clube",
    
    mythic_clubs: "Clubes Míticos",
    explore_series_a: "Explore os gigantes da Série A do Brasileirão.",
    no_club_found: 'Nenhum clube encontrado para "{search}"... ⚽',
    want_to_score: "Quer marcar um gol?",
    test_reflexes: "Teste seus reflexos no nosso mini-jogo de pênaltis. Você se tornará a próxima lenda do Maracanã?",
    play_now: "Jogar agora",
    
    eternal_legends: "Lendas Eternas",
    players_history: "Os jogadores que escreveram a história do futebol mundial.",
    back_to_clubs: "Voltar para os clubes",
    major_achievements: "Principais Conquistas",
    ton_vote: "Seu Voto",
    
    vote_favorite: "Vote no seu Clube Favorito!",
    who_makes_heart: "Qual desses gigantes faz seu coração bater mais forte? ⚽❤️",
    thanks_vote: "Obrigado pelo seu voto! (Clique no clube para cancelar)",
    current_ranking: "Classificação Atual",
    votes_count: "votos",
    choose_team: "Escolha seu time",
    cancel: "Cancelar",
    vote_btn: "Votar!",
    
    temples_of_football: "Os Templos do Futebol",
    discover_stadiums_desc: "Descubra os estádios míticos que fazem o coração do Brasil bater. Cada arena conta uma história de paixão e glória.",
    about_stadium: "Sobre o estádio",
    resident_club: "Clube residente:",
    stadium_label: "Estádio",
    founded_label: "Fundado em",
    legends_label: "Lendas do clube",
    about_label: "Sobre",
    
    penalty_shootout: "Disputa de Pênaltis",
    test_scorer_skills: "Teste suas habilidades de artilheiro! Escolha uma direção e tente enganar o goleiro.",
    click_to_shoot: "Clique para chutar!",
    speed: "Velocidade",
    shoot_again: "Chutar novamente",
    score_label: "Placar",
    shots_label: "Chutes",
    game_hint: "Quanto mais gols você fizer, mais rápida a mira fica!",
    reset: "Reiniciar",
    goal_message: "GOOOOOL !!!",
    save_message: "DEFESAÇA !",
    miss_message: "FORA !",
    goal_descr: "Que chute espetacular !",
    save_descr: "O goleiro fez uma defesaça !",
    
    did_you_know: "Você Sabia?",
    did_you_know_desc: "O Brasil é o único país do mundo a participar de **todas** as edições da Copa do Mundo da FIFA. É também a nação mais vitoriosa, com **5 estrelas**! ⭐️⭐️⭐️⭐️⭐️",
    world_cups: "Copas do Mundo",
    copa_america: "Copa América",
    pele_goals: "Gols de Pelé",
    created_for_champs: "© 2024 - Criado para os futuros campeões. BRAZUCA!",
    
    chat_placeholder: "Faça sua pergunta...",
    chat_welcome: "Olá! Sou seu assistente **BRAZUCA**. Pergunte-me qualquer coisa sobre o futebol brasileiro!",
    chat_error_connection: "Desculpe, não consigo me conectar ao campo agora!",
    chat_error_generic: "Ops, tive um probleminha técnico. Tente novamente!",
    close_welcome: "Fechar mensagem"
  }
};
