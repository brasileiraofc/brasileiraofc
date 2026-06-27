import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  MapPin, 
  Calendar, 
  Star, 
  MessageCircle, 
  X, 
  Send, 
  ChevronRight, 
  ChevronLeft,
  Search,
  Gamepad2,
  Info,
  HelpCircle,
  Moon,
  Sun
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { teams as rawTeams, Team } from './data/teams';
import { legends, Legend } from './data/legends';
import FootballGame from './components/FootballGame';
import StadiumsPage from './components/StadiumsPage';
import { UI_TRANSLATIONS, TEAM_TRANSLATIONS, LEGEND_TRANSLATIONS, QUIZ_TRANSLATIONS } from './utils/translations';

const teams = [...rawTeams].sort((a, b) => {
  if (a.name === 'Atlético Mineiro') return -1;
  if (b.name === 'Atlético Mineiro') return 1;
  return a.name.localeCompare(b.name);
});

// --- Components ---

const VotingPage = ({ teams, onVote, votes, votedTeamId, lang = 'fr' }: { teams: Team[], onVote: (id: string) => void, votes: Record<string, number>, votedTeamId: string | null, lang?: 'fr' | 'pt' }) => {
  const t = (key: string) => UI_TRANSLATIONS[lang]?.[key] || key;
  const sortedTeams = [...teams].sort((a, b) => (votes[b.id] || 0) - (votes[a.id] || 0));
  const maxVotes = Math.max(...Object.values(votes), 1);
  const hasVoted = votedTeamId !== null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-5xl font-black text-gray-900 dark:text-gray-100">{t('vote_favorite')}</h2>
        <p className="text-xl text-gray-500 dark:text-gray-400">{t('who_makes_heart')}</p>
        
        {hasVoted && (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 bg-brasil-green/10 text-brasil-green border border-brasil-green/20 px-6 py-2 rounded-full font-bold"
          >
            <Trophy size={18} /> {t('thanks_vote')}
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-black flex items-center gap-2">
            <Trophy className="text-brasil-yellow" size={24} /> {t('current_ranking')}
          </h3>
          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-sm space-y-8">
            {sortedTeams.slice(0, 6).map((team, index) => (
              <div key={team.id} className="space-y-3">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-black w-8 ${index === 0 ? 'text-brasil-yellow' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-amber-600' : 'text-gray-200 dark:text-gray-700'}`}>
                      {index + 1}
                    </span>
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg p-1.5">
                      <img src={team.logo} alt={team.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <span className="font-bold text-gray-900 dark:text-gray-100">{team.name} {votedTeamId === team.id && <span className="ml-1 text-[10px] bg-brasil-green text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">{t('ton_vote')}</span>}</span>
                  </div>
                  <span className="text-sm font-black text-brasil-green">{votes[team.id] || 0} {t('votes_count')}</span>
                </div>
                <div className="h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((votes[team.id] || 0) / maxVotes) * 100}%` }}
                    className="h-full bg-brasil-green"
                    transition={{ type: "spring", stiffness: 50 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-black flex items-center gap-2">
            <Star className="text-brasil-blue" size={24} /> {t('choose_team')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {teams.map(team => (
              <button
                key={team.id}
                onClick={() => onVote(team.id)}
                disabled={hasVoted && votedTeamId !== team.id}
                className={`group bg-white dark:bg-gray-900 border rounded-2xl p-4 shadow-sm transition-all flex flex-col items-center gap-3 text-center ${
                  votedTeamId === team.id
                    ? 'border-brasil-green ring-2 ring-brasil-green/20 scale-105'
                    : hasVoted
                      ? 'opacity-30 grayscale border-gray-100 dark:border-gray-800'
                      : 'border-gray-100 dark:border-gray-800 hover:shadow-md hover:border-brasil-green cursor-pointer'
                }`}
              >
                <div className={`w-14 h-14 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl p-2 transition-transform ${votedTeamId === team.id || !hasVoted ? 'group-hover:scale-110' : ''}`}>
                  <img src={team.logo} alt={team.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <span className="text-xs font-bold text-gray-700 dark:text-gray-300 line-clamp-1">{team.name}</span>
                {votedTeamId === team.id ? (
                  <div className="text-[10px] font-black text-red-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{t('cancel')}</div>
                ) : !hasVoted && (
                  <div className="text-[10px] font-black text-brasil-green uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">{t('vote_btn')}</div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const LegendCard = ({ legend, lang = 'fr' }: { legend: Legend; lang?: 'fr' | 'pt' }) => {
  const t = (key: string) => UI_TRANSLATIONS[lang]?.[key] || key;
  const ptLegend = lang === 'pt' ? LEGEND_TRANSLATIONS[legend.id] : null;
  const position = ptLegend?.position || legend.position;
  const biography = ptLegend?.biography || legend.biography;
  const achievements = ptLegend?.achievements || legend.achievements;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={legend.image} 
          alt={legend.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-6">
          <p className="text-brasil-yellow font-black text-xs uppercase tracking-widest mb-1">{position}</p>
          <h3 className="text-white text-2xl font-black">{legend.nickname}</h3>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {legend.clubs.map(club => (
            <span key={club} className="text-[10px] font-bold px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-md uppercase tracking-wider">
              {club}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
          "{biography}"
        </p>
        <div className="pt-4 border-t border-gray-50 dark:border-gray-800">
          <p className="text-[10px] font-black text-brasil-green uppercase tracking-widest mb-2">{t('major_achievements')}</p>
          <ul className="space-y-1">
            {achievements.map((ach, i) => (
              <li key={i} className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <div className="w-1 h-1 bg-brasil-yellow rounded-full" /> {ach}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const TeamCard = ({ team, onClick, lang = 'fr' }: { team: Team; onClick: () => void; lang?: 'fr' | 'pt' }) => {
  const ptTeam = lang === 'pt' ? TEAM_TRANSLATIONS[team.id] : null;
  const city = ptTeam?.city || team.city;
  const description = ptTeam?.description || team.description;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl p-2">
          <img 
            src={team.logo} 
            alt={team.name} 
            className="max-w-full max-h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 group-hover:text-brasil-green transition-colors">{team.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <MapPin size={14} /> {city}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">{description}</p>
      <div className="flex gap-2">
        {team.stars.slice(0, 2).map((star) => (
          <span key={star} className="text-[10px] font-semibold uppercase tracking-wider bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
            {star}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const TeamModal = ({ team, onClose, lang = 'fr' }: { team: Team; onClose: () => void; lang?: 'fr' | 'pt' }) => {
  const t = (key: string) => UI_TRANSLATIONS[lang]?.[key] || key;
  const ptTeam = lang === 'pt' ? TEAM_TRANSLATIONS[team.id] : null;
  const city = ptTeam?.city || team.city;
  const description = ptTeam?.description || team.description;
  const stadium = ptTeam?.stadium || team.stadium;
  const country = lang === 'pt' ? 'Brasil' : 'Brésil';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 bg-brasil-green overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute -bottom-12 left-8 w-32 h-32 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg flex items-center justify-center">
            <img 
              src={team.logo} 
              alt={team.name} 
              className="max-w-full max-h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        
        <div className="pt-16 px-8 pb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100">{team.name}</h2>
              <p className="text-brasil-green font-semibold">{city}, {country}</p>
            </div>
            <div className="flex gap-2">
              {team.colors.map((color, i) => (
                <div key={i} className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700 shadow-inner" style={{ backgroundColor: color }}></div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Info size={18} className="text-brasil-blue" /> {t('about_label')}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold mb-1">{t('stadium_label')}</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center gap-1">
                    <Trophy size={14} className="text-brasil-yellow" /> {stadium}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold mb-1">{t('founded_label')}</p>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200 flex items-center gap-1">
                    <Calendar size={14} className="text-brasil-blue" /> {team.founded}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <Star size={18} className="text-brasil-yellow" /> {t('legends_label')}
              </h4>
              <div className="space-y-2">
                {team.stars.map((star) => (
                  <div key={star} className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-brasil-yellow/20 rounded-full flex items-center justify-center text-brasil-yellow font-bold text-xs">
                      {star[0]}
                    </div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{star}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ChatAssistant = ({ lang = 'fr' }: { lang?: 'fr' | 'pt' }) => {
  const t = (key: string) => UI_TRANSLATIONS[lang]?.[key] || key;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Re-generate welcome message when language changes if no conversation exists
  useEffect(() => {
    if (messages.length <= 1) {
      setMessages([
        { role: 'assistant', content: t('chat_welcome') }
      ]);
    }
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: lang === 'pt'
            ? "Você é um especialista apaixonado do futebol brasileiro chamado BRAZUCA. Você fala com um público de 9 a 15 anos de idade. Seu tom é entusiasmado, claro e educativo. Use emojis relacionados ao futebol. Responda em português do Brasil. Se fizerem uma pergunta fora de assunto, mude gentilmente o assunto de volta para o futebol brasileiro."
            : "Tu es un expert passionné du football brésilien nommé BRAZUCA. Tu t'adresses à un public de 9 à 15 ans. Ton ton est enthousiaste, clair et éducatif. Utilise des emojis liés au foot. Réponds en français. Si on te pose une question hors sujet, ramène gentiment la conversation sur le football brésilien.",
        }
      });
      
      setMessages(prev => [...prev, { role: 'assistant', content: response.text || t('chat_error_generic') }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: t('chat_error_connection') }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-brasil-green text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40"
      >
        <MessageCircle size={28} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-28 right-8 w-80 md:w-96 h-[500px] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col z-50 border border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="p-4 bg-brasil-green text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shadow-sm">
                  <Trophy className="text-brasil-yellow" size={16} />
                </div>
                <span className="font-bold">Assistant BRAZUCA</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full"><X size={18} /></button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 dark:bg-gray-950/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-brasil-blue text-white rounded-tr-none' 
                      : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-700 rounded-tl-none'
                  }`}>
                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex gap-1">
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chat_placeholder')}
                className="flex-1 bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brasil-green"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brasil-green text-white p-2 rounded-full hover:bg-brasil-green/90 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Quiz Data ---
const QUIZ_QUESTIONS = [
  { q: "Quel club est surnommé 'O Rei' (Le Roi) ?", a: "Santos FC", options: ["Flamengo", "Santos FC", "Palmeiras", "Grêmio"] },
  { q: "Dans quelle ville joue le club de Flamengo ?", a: "Rio de Janeiro", options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"] },
  { q: "Quel est le nom du stade mythique de Rio ?", a: "Maracanã", options: ["Morumbi", "Mineirão", "Maracanã", "Allianz Parque"] },
  { q: "Quel club Pelé a-t-il représenté pendant presque toute sa carrière ?", a: "Santos FC", options: ["Corinthians", "Santos FC", "Vasco", "Botafogo"] },
  { q: "Quel club est surnommé le 'Furacão' (L'Ouragan) ?", a: "Athletico PR", options: ["Athletico PR", "Bahia", "Internacional", "Cruzeiro"] },
  { q: "Quel club est surnommé le 'Leão do Pici' ?", a: "Fortaleza EC", options: ["Fortaleza EC", "Ceará", "Sport Recife", "Bahia"] },
  { q: "En quelle année Kaká a-t-il remporté le Ballon d'Or ?", a: "2007", options: ["2005", "2007", "2009", "2011"] },
  { q: "Quel gardien a été le héros de la finale 1994 aux tirs au but ?", a: "Taffarel", options: ["Dida", "Marcos", "Taffarel", "Alisson"] },
  { q: "Quel club est surnommé le 'Moleque Travesso' ?", a: "CA Juventus", options: ["CA Juventus", "Portuguesa", "Ponte Preta", "Guarani"] },
  { q: "Quel club est surnommé le 'Mecão' ?", a: "America Football Club", options: ["America Football Club", "Bangu", "Madureira", "Olaria"] },
  { q: "Quel club est surnommé le 'Leão da Ilha' ?", a: "Avaí F.C.", options: ["Avaí F.C.", "Figueirense", "Criciúma", "Chapecoense"] },
  { q: "Quel est le nom du stade du Bangu Atlético Clube ?", a: "Moça Bonita", options: ["Moça Bonita", "São Januário", "Vila Belmiro", "Rua Javari"] },
  { q: "Quel est le surnom du Brasiliense Futebol Clube ?", a: "Jacaré", options: ["Jacaré", "Galo", "Leão", "Raposa"] },
  { q: "Quel club est surnommé le 'Tigre' ?", a: "Criciúma Esporte Clube", options: ["Criciúma Esporte Clube", "Vila Nova", "Amazonas FC", "Novorizontino"] },
  { q: "Quel est le nom du stade du Figueirense Futebol Clube ?", a: "Orlando Scarpelli", options: ["Orlando Scarpelli", "Ressacada", "Heriberto Hülse", "Arena Condá"] },
  { q: "Quel club est surnommé le 'Esmeraldino' ?", a: "Goiás Esporte Clube", options: ["Goiás Esporte Clube", "Guarani", "Palmeiras", "Coritiba"] },
  { q: "Quel club de l'intérieur est le seul à avoir été champion du Brésil (1978) ?", a: "Guarani", options: ["Guarani", "Ponte Preta", "Bragantino", "Juventude"] },
  { q: "Quel club a battu le FC Barcelone en finale du Mondial des Clubs 2006 ?", a: "Internacional", options: ["Internacional", "São Paulo", "Santos", "Flamengo"] },
  { q: "Quel est le surnom du Clube Náutico Capibaribe ?", a: "Timbu", options: ["Timbu", "Galo", "Leão", "Raposa"] },
  { q: "Quel club brésilien a battu Boca Juniors à la Bombonera lors de la Libertadores 2003 ?", a: "Paysandu", options: ["Paysandu", "Remo", "Santos", "Cruzeiro"] },
  { q: "Le Paraná Clube est né de la fusion de quels clubs en 1989 ?", a: "Colorado et Pinheiros", options: ["Colorado et Pinheiros", "Coritiba et Athletico", "Londrina et Operário", "Grêmio et Inter"] },
  { q: "Quel est le surnom de la Ponte Preta ?", a: "Macaca", options: ["Macaca", "Galo", "Leão", "Raposa"] },
  { q: "Quel club brésilien était surnommé 'Barcelusa' en 2011 ?", a: "Portuguesa", options: ["Portuguesa", "Palmeiras", "Santos", "Flamengo"] },
  { q: "Quel est le surnom du Santa Cruz FC ?", a: "Cobra Coral", options: ["Cobra Coral", "Timbu", "Leão", "Galo"] },
  { q: "Quel club a atteint la finale de la Libertadores 2002 seulement 13 ans après sa fondation ?", a: "São Caetano", options: ["São Caetano", "São Paulo", "Santos", "Grêmio"] },
  { q: "Quel club du Nord-Est a remporté la Coupe du Brésil en 2008 ?", a: "Sport Recife", options: ["Sport Recife", "Bahia", "Vitória", "Ceará"] },
  { q: "Quel club de Salvador est réputé pour son centre de formation ayant révélé Bebeto et Dida ?", a: "Vitória", options: ["Vitória", "Bahia", "Sport Recife", "Ceará"] },
  { q: "Quel club a été déclaré vainqueur de la Copa Sudamericana 2016 après une tragédie aérienne ?", a: "Chapecoense", options: ["Chapecoense", "Atlético Nacional", "Grêmio", "Flamengo"] },
  { q: "Quel club de Belém dispute le célèbre derby 'Re-Pa' contre Paysandu ?", a: "Remo", options: ["Remo", "Tuna Luso", "Manaus", "Sampaio Corrêa"] },
  { q: "Quel club a remporté la Coupe du Brésil 1999 en battant Botafogo au Maracanã ?", a: "Juventude", options: ["Juventude", "Caxias", "Grêmio", "Internacional"] },
  { q: "Quel est le surnom du Mirassol FC ?", a: "Leão da Alta Araraquarense", options: ["Leão da Alta Araraquarense", "Galo da Comarca", "Pantera", "Tigre"] },
  { q: "Quel club est surnommé le 'Tigre do Vale' ?", a: "Novorizontino", options: ["Novorizontino", "Criciúma", "Vila Nova", "Amazonas"] },
  { q: "Quel club est surnommé le 'Galo de Itu' ?", a: "Ituano", options: ["Ituano", "Atlético Mineiro", "CRB", "River-PI"] }
];

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const Quiz = ({ lang = 'fr' }: { lang?: 'fr' | 'pt' }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<{ q: string, a: string, options: string[] }[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const initQuiz = () => {
    // Dynamically map and translate questions if Portuguese (Brazil) is chosen
    const rawQuestions = QUIZ_QUESTIONS.map((q, idx) => {
      const trans = lang === 'pt' ? QUIZ_TRANSLATIONS[idx] : null;
      if (!trans) return q;
      return {
        q: trans.q,
        a: trans.a,
        options: q.options.map(opt => trans.optionsMap[opt] || opt)
      };
    });

    const shuffled = shuffleArray(rawQuestions).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));
    setShuffledQuestions(shuffled);
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
  };

  useEffect(() => {
    initQuiz();
  }, [lang]);

  const handleAnswer = (option: string) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === shuffledQuestions[current].a) setScore(score + 1);
    
    setTimeout(() => {
      if (current + 1 < shuffledQuestions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const reset = () => {
    initQuiz();
  };

  if (shuffledQuestions.length === 0) return null;

  const currentQuestion = shuffledQuestions[current];

  return (
    <div className="bg-brasil-blue rounded-3xl p-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <Gamepad2 className="text-brasil-yellow" size={32} />
        <h2 className="text-2xl font-black">{lang === 'pt' ? "Quiz Rápido!" : "Quiz Rapide !"}</h2>
      </div>

      {!showResult ? (
        <div className="space-y-6">
          <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-white/60">
            <span>{lang === 'pt' ? `Pergunta ${current + 1}/${shuffledQuestions.length}` : `Question ${current + 1}/${shuffledQuestions.length}`}</span>
            <span>{lang === 'pt' ? `Placar: ${score}` : `Score: ${score}`}</span>
          </div>
          <h3 className="text-xl font-bold leading-tight">{currentQuestion.q}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                disabled={selected !== null}
                className={`p-4 rounded-xl text-left font-semibold transition-all ${
                  selected === opt 
                    ? (opt === currentQuestion.a ? 'bg-brasil-green' : 'bg-red-500') 
                    : selected !== null && opt === currentQuestion.a
                      ? 'bg-brasil-green/50'
                      : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-8 space-y-6">
          <div className="text-6xl">🏆</div>
          <h3 className="text-3xl font-black">{lang === 'pt' ? "Conclúido!" : "Fini !"}</h3>
          <p className="text-xl">
            {lang === 'pt' ? "Seu placar é de " : "Ton score est de "}
            <span className="text-brasil-yellow font-black">{score}/{shuffledQuestions.length}</span>
          </p>
          <button 
            onClick={reset}
            className="bg-brasil-yellow text-brasil-blue px-8 py-3 rounded-full font-black hover:scale-105 transition-transform"
          >
            {lang === 'pt' ? "Recomeçar" : "Recommencer"}
          </button>
        </div>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<'fr' | 'pt'>(() => {
    return (localStorage.getItem('brasileirao_lang') as 'fr' | 'pt') || 'fr';
  });
  const t = (key: string) => UI_TRANSLATIONS[lang]?.[key] || key;

  const [showWelcome, setShowWelcome] = useState(true);
  const [showWelcomeDetails, setShowWelcomeDetails] = useState(false);
  const [view, setView] = useState<'home' | 'legends' | 'voting' | 'game' | 'stadiums'>('home');
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [votedTeamId, setVotedTeamId] = useState<string | null>(() => {
    return localStorage.getItem('brasileirao_voted_team_id');
  });
  const [votes, setVotes] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('brasileirao_votes');
    const parsed = saved ? JSON.parse(saved) : {};
    return { ...parsed, 'athletico-pr': 0, 'atletico-mineiro': 1 };
  });

  const handleVote = (teamId: string) => {
    let newVotes = { ...votes };
    let newVotedId = votedTeamId;

    if (votedTeamId === teamId) {
      // Remove vote
      newVotes[teamId] = Math.max(0, (newVotes[teamId] || 1) - 1);
      newVotedId = null;
    } else if (!votedTeamId) {
      // Add vote
      newVotes[teamId] = (newVotes[teamId] || 0) + 1;
      newVotedId = teamId;
    } else {
      // Already voted for someone else
      return;
    }

    setVotes(newVotes);
    setVotedTeamId(newVotedId);
    localStorage.setItem('brasileirao_votes', JSON.stringify(newVotes));
    localStorage.setItem('brasileirao_has_voted', newVotedId !== null ? 'true' : 'false');
    if (newVotedId) {
      localStorage.setItem('brasileirao_voted_team_id', newVotedId);
    } else {
      localStorage.removeItem('brasileirao_voted_team_id');
    }
  };

  useEffect(() => {
    if (showWelcome && !showWelcomeDetails) {
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showWelcome, showWelcomeDetails]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const filteredTeams = teams.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) || 
    t.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen font-sans bg-white dark:bg-gray-950 selection:bg-brasil-yellow selection:text-brasil-blue transition-colors duration-300">
      {/* Welcome Message */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
            className={`fixed top-24 right-6 z-50 ${showWelcomeDetails ? 'max-w-xl' : 'max-w-md'} bg-brasil-green text-white p-6 rounded-2xl shadow-2xl border-2 border-brasil-yellow/30 backdrop-blur-sm cursor-pointer hover:border-brasil-yellow transition-all`}
            onClick={() => !showWelcomeDetails && setShowWelcomeDetails(true)}
          >
            <div className="flex items-start gap-4">
              <img 
                src="/vinijr.jpg" 
                className="w-24 h-24 rounded-xl object-cover border-2 border-brasil-yellow/50 shadow-lg shrink-0" 
                alt="Vinicius Jr"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-3">
                  <div className="bg-brasil-yellow/20 p-2 rounded-lg shrink-0">
                    <Star className="text-brasil-yellow animate-pulse" size={20} />
                  </div>
                  <div className="space-y-1">
                    {showWelcomeDetails ? (
                  <div className="space-y-4">
                    <p className="font-bold leading-relaxed text-sm">
                      {t('welcome_details_intro')}
                    </p>
                    <p className="text-sm leading-relaxed opacity-90">
                      {t('welcome_details_body')}
                    </p>
                    <p className="font-black text-brasil-yellow pt-2">
                      {t('welcome_details_footer')}
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="font-bold leading-tight">
                      {t('welcome_title')}
                    </p>
                    <p className="text-xs text-brasil-yellow/80 mt-1 uppercase tracking-widest font-black">{t('click_more')}</p>
                    <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-3">
                      <motion.div 
                        initial={{ width: "100%" }}
                        animate={{ width: 0 }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="h-full bg-brasil-yellow"
                      />
                    </div>
                  </>
                )}
                </div>
              </div>
            </div>
            <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowWelcome(false);
                  setShowWelcomeDetails(false);
                }}
                className="text-white/60 hover:text-white transition-colors shrink-0"
                id="close-welcome"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
              <div className="w-12 h-12 flex items-center justify-center bg-brasil-green rounded-full border-2 border-brasil-green/40 overflow-hidden shadow-md">
                <img 
                  src="/ball_logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-cover scale-[1.15] hover:scale-125 transition-transform duration-300" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.classList.add('flex', 'items-center', 'justify-center', 'bg-brasil-green', 'text-white');
                      parent.innerHTML = '<span class="font-black text-xl">B</span>';
                    }
                  }}
                />
              </div>
              <h1 className="text-xl font-black tracking-tight text-gray-900 dark:text-gray-100 hidden sm:block">
                Brasileirão
              </h1>
            </div>
          
          <nav className="hidden md:flex items-center gap-8 mx-8">
            <button 
              onClick={() => setView('home')}
              className={`text-sm font-bold transition-colors ${view === 'home' ? 'text-brasil-green' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
            >
              {t('clubs')}
            </button>
            <button 
              onClick={() => setView('legends')}
              className={`text-sm font-bold transition-colors ${view === 'legends' ? 'text-brasil-green' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
            >
              {t('legends')}
            </button>
            <button 
              onClick={() => setView('stadiums')}
              className={`text-sm font-bold transition-colors ${view === 'stadiums' ? 'text-brasil-green' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
            >
              {t('stades')}
            </button>
            <button 
              onClick={() => setView('voting')}
              className={`text-sm font-bold transition-colors ${view === 'voting' ? 'text-brasil-green' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
            >
              {t('voter')}
            </button>
            <button 
              onClick={() => setView('game')}
              className={`text-sm font-bold transition-colors ${view === 'game' ? 'text-brasil-green' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
            >
              {t('minigame')}
            </button>
          </nav>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder={view === 'home' ? t('search_clubs') : t('search_legends')}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brasil-green transition-all"
            />
          </div>

          <div className="flex items-center gap-3 ml-4">
            <button 
              onClick={() => {
                const nextLang = lang === 'fr' ? 'pt' : 'fr';
                setLang(nextLang);
                localStorage.setItem('brasileirao_lang', nextLang);
              }}
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              title={lang === 'fr' ? "Mudar para Português (Brasil)" : "Changer en Français"}
            >
              <span className="text-xl leading-none">{lang === 'fr' ? '🇧🇷' : '🇫🇷'}</span>
              <span className="font-mono text-xs hidden sm:inline">{lang === 'fr' ? 'PT' : 'FR'}</span>
            </button>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={darkMode ? t('theme_light') : t('theme_dark')}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setShowWelcome(true)}
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              title={t('show_welcome')}
            >
              <HelpCircle size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        <AnimatePresence mode="wait">
          {view === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-20"
            >
              {/* Hero */}
              <section className="relative rounded-[40px] bg-gray-900 dark:bg-black text-white overflow-hidden p-8 md:p-16">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent dark:from-black dark:via-black/80"></div>
                
                <div className="relative z-10 max-w-2xl space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20"
                    >
                      <Trophy className="text-brasil-yellow" size={40} />
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center gap-2 bg-brasil-green/20 text-brasil-green border border-brasil-green/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                    >
                      <Trophy size={14} /> {t('earth_of_football')}
                    </motion.div>
                  </div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight text-white uppercase"
                  >
                    {t('discover_the')} <br />
                    <span className="text-brasil-yellow">GOLAÇO BRASILEIRO</span>
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-300 max-w-lg"
                  >
                    {lang === 'pt' ? "Explore os clubes lendários, conheça a história dos maiores jogadores e se torne um especialista em futebol brasileiro." : "Explore les clubs légendaires, apprends l'histoire des plus grands joueurs et deviens un expert du football brésilien."}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex gap-4 pt-4"
                  >
                    <button 
                      onClick={() => setView('legends')}
                      className="bg-brasil-yellow text-brasil-blue px-8 py-4 rounded-full font-black flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      {t('start_adventure')} <ChevronRight size={20} />
                    </button>
                    <button 
                      onClick={() => setView('voting')}
                      className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-black flex items-center gap-2 hover:bg-white/20 transition-all"
                    >
                      {t('vote_for_club')} <Star size={20} />
                    </button>
                  </motion.div>
                </div>
              </section>

              {/* Teams Grid */}
              <section className="space-y-8">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 dark:text-gray-100">{t('mythic_clubs')}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{t('explore_series_a')}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"><ChevronLeft size={20} /></button>
                    <button className="p-2 border border-gray-200 dark:border-gray-800 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"><ChevronRight size={20} /></button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredTeams.map((team) => (
                      <TeamCard key={team.id} team={team} onClick={() => setSelectedTeam(team)} lang={lang} />
                    ))}
                  </AnimatePresence>
                </div>
                
                {filteredTeams.length === 0 && (
                  <div className="text-center py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl">
                    <p className="text-gray-400 font-medium">{t('no_club_found').replace('{search}', search)}</p>
                  </div>
                )}
              </section>

              {/* Mini Game Section */}
              <section className="py-20 border-t border-gray-100 dark:border-gray-800">
                <div className="bg-brasil-green rounded-[40px] p-12 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:scale-110 transition-transform duration-700" />
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl text-center md:text-left">
                      <h3 className="text-4xl font-black tracking-tight mb-4">{t('want_to_score')}</h3>
                      <p className="text-white/80 text-lg mb-8">{t('test_reflexes')}</p>
                      <button 
                        onClick={() => setView('game')}
                        className="bg-white text-brasil-green px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-xl flex items-center gap-3 mx-auto md:mx-0"
                      >
                        <Gamepad2 size={24} />
                        {t('play_now')}
                      </button>
                    </div>
                    <div className="w-full max-w-sm aspect-square bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center p-8">
                      <div className="relative w-full h-full flex items-center justify-center">
                        <Trophy className="w-32 h-32 text-brasil-yellow animate-bounce" />
                        <div className="absolute inset-0 border-4 border-white/20 rounded-full animate-ping" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : view === 'legends' ? (
            <motion.div
              key="legends"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                  <h2 className="text-5xl font-black text-gray-900 dark:text-gray-100">{t('eternal_legends')}</h2>
                  <p className="text-xl text-gray-500 dark:text-gray-400">{t('players_history')}</p>
                </div>
                <button 
                  onClick={() => setView('home')}
                  className="flex items-center gap-2 text-brasil-green font-bold hover:gap-3 transition-all"
                >
                  <ChevronLeft size={20} /> {t('back_to_clubs')}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {legends
                  .filter(l => l.nickname.toLowerCase().includes(search.toLowerCase()) || l.name.toLowerCase().includes(search.toLowerCase()))
                  .map((legend) => (
                    <LegendCard key={legend.id} legend={legend} lang={lang} />
                  ))}
              </div>
            </motion.div>
          ) : view === 'voting' ? (
            <VotingPage teams={teams} votes={votes} onVote={handleVote} votedTeamId={votedTeamId} lang={lang} />
          ) : view === 'stadiums' ? (
            <StadiumsPage teams={teams} lang={lang} />
          ) : (
            <motion.div
              key="game"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-7xl mx-auto px-6 py-12"
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                  {t('penalty_shootout')}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                  {t('test_scorer_skills')}
                </p>
              </div>
              <FootballGame lang={lang} />
            </motion.div>
          )}
         </AnimatePresence>
 
         {/* Quiz & Stats Split */}
         <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <Quiz lang={lang} />
           <div className="bg-brasil-green rounded-3xl p-8 text-white flex flex-col justify-between">
             <div className="space-y-4">
               <h3 className="text-2xl font-black">{t('did_you_know')}</h3>
               <p className="text-lg text-white/90 leading-relaxed">
                 {t('did_you_know_desc')}
               </p>
             </div>
             <div className="pt-8 grid grid-cols-3 gap-4">
               <div className="text-center">
                 <p className="text-3xl font-black text-brasil-yellow">5</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">{t('world_cups')}</p>
               </div>
               <div className="text-center">
                 <p className="text-3xl font-black text-brasil-yellow">9</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">{t('copa_america')}</p>
               </div>
               <div className="text-center">
                 <p className="text-3xl font-black text-brasil-yellow">1200+</p>
                 <p className="text-[10px] uppercase font-bold tracking-widest opacity-70">{t('pele_goals')}</p>
               </div>
             </div>
           </div>
         </section>
       </main>
 
       {/* Footer */}
       <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-2">
             <img src="https://upload.wikimedia.org/wikipedia/pt/b/b4/CBF_Logo.png" alt="CBF Logo" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
             <span className="font-black text-gray-900 dark:text-gray-100">Brasileirão</span>
           </div>
           <p className="text-sm text-gray-400 dark:text-gray-500">{t('created_for_champs')}</p>
           <div className="flex gap-4">
           </div>
         </div>
       </footer>
 
       {/* Modals & Overlays */}
       <AnimatePresence>
         {selectedTeam && (
           <TeamModal team={selectedTeam} onClose={() => setSelectedTeam(null)} lang={lang} />
         )}
       </AnimatePresence>
 
       <ChatAssistant lang={lang} />
    </div>
  );
}
