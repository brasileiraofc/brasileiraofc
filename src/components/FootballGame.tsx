import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, RotateCcw, Target, Shield, Zap, Info } from 'lucide-react';
import { UI_TRANSLATIONS } from '../utils/translations';

interface FootballGameProps {
  lang?: 'fr' | 'pt';
}

export default function FootballGame({ lang = 'fr' }: FootballGameProps) {
  const t = (key: string) => UI_TRANSLATIONS[lang]?.[key] || key;
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'shooting' | 'result'>('idle');
  const [lastResult, setLastResult] = useState<'goal' | 'saved' | 'missed' | null>(null);
  const [ballPos, setBallPos] = useState({ x: 50, y: 80 });
  const [keeperPos, setKeeperPos] = useState(50);
  const [targetX, setTargetX] = useState(50);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  
  const gameLoopRef = useRef<number | null>(null);

  // Difficulty multiplier based on score
  const speed = 0.8 + (score * 0.1);

  useEffect(() => {
    if (gameState === 'idle') {
      const moveTarget = () => {
        setTargetX(prev => {
          let next = prev + (direction * speed);
          if (next > 85) {
            setDirection(-1);
            return 85;
          }
          if (next < 15) {
            setDirection(1);
            return 15;
          }
          return next;
        });
        gameLoopRef.current = requestAnimationFrame(moveTarget);
      };
      gameLoopRef.current = requestAnimationFrame(moveTarget);
    } else {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    }

    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameState, direction, speed]);

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setGameState('idle');
    setLastResult(null);
    setBallPos({ x: 50, y: 80 });
    setKeeperPos(50);
    setTargetX(50);
  };

  const shoot = () => {
    if (gameState !== 'idle') return;

    setGameState('shooting');
    setAttempts(prev => prev + 1);

    // Add slight random deviation (wind/skill factor)
    const deviation = (Math.random() - 0.5) * 10;
    const finalTargetX = targetX + deviation;

    // Keeper logic: tries to anticipate but has a reaction delay/error
    // The higher the score, the better the keeper
    const keeperError = Math.max(5, 25 - score);
    const keeperTargetX = finalTargetX + (Math.random() - 0.5) * keeperError * 2;
    
    // Clamp keeper to goal area
    const clampedKeeperX = Math.max(20, Math.min(80, keeperTargetX));
    
    setKeeperPos(clampedKeeperX);
    setBallPos({ x: finalTargetX, y: 20 });

    setTimeout(() => {
      const distance = Math.abs(finalTargetX - clampedKeeperX);
      let result: 'goal' | 'saved' | 'missed';

      if (finalTargetX < 15 || finalTargetX > 85) {
        result = 'missed';
      } else if (distance < 12) {
        result = 'saved';
      } else {
        result = 'goal';
        setScore(prev => prev + 1);
      }

      setLastResult(result);
      setGameState('result');
    }, 600);
  };

  const nextAttempt = () => {
    setGameState('idle');
    setLastResult(null);
    setBallPos({ x: 50, y: 80 });
    setKeeperPos(50);
    setTargetX(50);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video flex flex-col items-center justify-center cursor-crosshair" onClick={shoot}>
        {/* Pitch Background */}
        <div className="absolute inset-0 bg-emerald-900/40">
          <div className="absolute inset-x-0 top-0 h-1/2 border-b-2 border-white/20" />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1/2 h-1/3 border-x-2 border-b-2 border-white/40 rounded-b-xl" />
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1/4 h-1/6 border-x-2 border-b-2 border-white/60 rounded-b-lg" />
        </div>

        {/* Goal Post */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2/3 h-1/3 border-4 border-white border-b-0 rounded-t-lg shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />
        </div>

        {/* Moving Target Cursor (Idle only) */}
        {gameState === 'idle' && (
          <motion.div
            style={{ left: `${targetX}%` }}
            className="absolute top-[20%] z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <Target className="w-12 h-12 text-brasil-yellow animate-pulse" />
              <div className="absolute inset-0 border-2 border-brasil-yellow rounded-full animate-ping" />
            </div>
          </motion.div>
        )}

        {/* Goalkeeper */}
        <motion.div
          animate={{ x: `${keeperPos - 50}%` }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-14 h-20 bg-zinc-100 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-zinc-800">
            <Shield className="w-8 h-8 text-zinc-900" />
            <div className="w-full h-1 bg-brasil-blue mt-2" />
          </div>
        </motion.div>

        {/* Ball */}
        <motion.div
          animate={{ 
            left: `${ballPos.x}%`, 
            top: `${ballPos.y}%`,
            scale: gameState === 'shooting' ? 0.6 : 1,
            rotate: gameState === 'shooting' ? 1080 : 0
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-10 h-10 bg-white rounded-full border-2 border-zinc-800 flex items-center justify-center shadow-lg">
            <div className="w-full h-full rounded-full border-4 border-zinc-200 border-dashed animate-spin-slow" />
          </div>
        </motion.div>

        {/* Result Overlay */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {gameState === 'idle' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-12 flex flex-col items-center gap-2 pointer-events-none"
              >
                <p className="text-white font-black text-xl bg-black/60 px-8 py-3 rounded-full backdrop-blur-md border border-white/20 uppercase tracking-widest flex items-center gap-3">
                  <Zap className="text-brasil-yellow fill-brasil-yellow" />
                  {t('click_to_shoot')}
                </p>
                <p className="text-white/60 text-sm font-bold">{t('speed')}: x{speed.toFixed(1)}</p>
              </motion.div>
            )}

            {gameState === 'result' && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center gap-6 bg-black/80 backdrop-blur-xl p-10 rounded-[40px] border border-white/20 shadow-2xl"
              >
                <div className="text-center">
                  <h2 className={`text-6xl font-black uppercase tracking-tighter mb-2 ${
                    lastResult === 'goal' ? 'text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]' : 'text-rose-400 drop-shadow-[0_0_15px_rgba(251,113,113,0.5)]'
                  }`}>
                    {lastResult === 'goal' ? t('goal_message') : lastResult === 'saved' ? t('save_message') : t('miss_message')}
                  </h2>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-sm">
                    {lastResult === 'goal' ? t('goal_descr') : t('save_descr')}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextAttempt();
                  }}
                  className="px-10 py-4 bg-brasil-yellow text-brasil-blue rounded-full font-black text-lg hover:scale-105 transition-transform flex items-center gap-3 shadow-xl"
                >
                  <RotateCcw className="w-6 h-6" />
                  {t('shoot_again')}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Score Board */}
        <div className="absolute top-6 right-6 flex gap-4">
          <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-4 shadow-xl">
            <div className="flex flex-col">
              <span className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">{t('score_label')}</span>
              <span className="text-white font-mono text-3xl leading-none">{score}</span>
            </div>
            <Trophy className="w-8 h-8 text-brasil-yellow" />
          </div>
          <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 flex items-center gap-4 shadow-xl">
            <div className="flex flex-col">
              <span className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">{t('shots_label')}</span>
              <span className="text-white font-mono text-3xl leading-none">{attempts}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
          <Info className="w-4 h-4" />
          {t('game_hint')}
        </div>
        <button
          onClick={resetGame}
          className="text-zinc-500 hover:text-white transition-colors text-sm font-bold flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          {t('reset')}
        </button>
      </div>
    </div>
  );
}

