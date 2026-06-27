import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Info } from 'lucide-react';
import { Team } from '../data/teams';
import { TEAM_TRANSLATIONS, UI_TRANSLATIONS } from '../utils/translations';

interface StadiumsPageProps {
  teams: Team[];
  lang?: 'fr' | 'pt';
}

export default function StadiumsPage({ teams, lang = 'fr' }: StadiumsPageProps) {
  const t = (key: string) => UI_TRANSLATIONS[lang]?.[key] || key;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          {t('temples_of_football')}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          {t('discover_stadiums_desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {teams.map((team, index) => {
          const ptTeam = lang === 'pt' ? TEAM_TRANSLATIONS[team.id] : null;
          const city = ptTeam?.city || team.city;
          const stadium = ptTeam?.stadium || team.stadium;
          const stadiumDescription = ptTeam?.stadiumDescription || team.stadiumDescription;

          return (
            <motion.div
              key={team.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[32px] aspect-[16/10] shadow-2xl mb-6">
                <img
                  src={team.stadiumImage}
                  alt={stadium}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 text-brasil-yellow mb-2">
                    <MapPin size={18} />
                    <span className="font-bold uppercase tracking-widest text-xs">{city}</span>
                  </div>
                  <h3 className="text-3xl font-black text-white tracking-tight">{stadium}</h3>
                </div>

                <div className="absolute top-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
                    <img src={team.logo} alt={team.name} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>

              <div className="px-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-brasil-green">
                    <Info size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-2">{t('about_stadium')}</h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                      {stadiumDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-brasil-green font-bold">
                      <span className="text-sm">{t('resident_club')}</span>
                      <span className="text-gray-900 dark:text-gray-100">{team.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
