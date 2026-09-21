import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Music, Pause, ChevronRight, ChevronLeft } from 'lucide-react';
import './index.css';
import rohmah1 from './assets/img/rohmah1.jpg';
import rohmah2 from './assets/img/rohmah2.jpeg';
import rohmah3 from './assets/img/rohmah3.jpg';
import bgImage from './assets/img/bg.png';
import bgMusic from './assets/music/melukis-senja.mp3';

/* ─── Background Layer ─────────────────────────────────── */
const BackgroundElements = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    {/* Photo BG */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})`, opacity: 0.55 }}
    />
    {/* Warm overlay */}
    <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(253,248,240,0.45) 0%, rgba(254,243,232,0.3) 100%)' }} />

    {/* Soft glow orbs */}
    <motion.div
      animate={{ x: [0, 60, 0, -40, 0], y: [0, 40, -20, 20, 0] }}
      transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      className="absolute -top-20 -left-20 w-[55vw] h-[55vw] md:w-[35vw] md:h-[35vw] rounded-full"
      style={{ background: 'radial-gradient(circle, rgba(245,201,168,0.5) 0%, transparent 70%)' }}
    />
    <motion.div
      animate={{ x: [0, -50, 30, -20, 0], y: [0, -60, 30, -30, 0] }}
      transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      className="absolute -bottom-20 -right-20 w-[65vw] h-[65vw] md:w-[42vw] md:h-[42vw] rounded-full"
      style={{ background: 'radial-gradient(circle, rgba(242,180,160,0.35) 0%, transparent 70%)' }}
    />
    <motion.div
      animate={{ x: [0, 30, -20, 40, 0], y: [0, -30, 50, -20, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full"
      style={{ background: 'radial-gradient(circle, rgba(254,230,200,0.25) 0%, transparent 70%)' }}
    />

    {/* Floating particles */}
    {[...Array(18)].map((_, i) => (
      <motion.span
        key={i}
        initial={{
          opacity: 0,
          y: `${85 + Math.random() * 20}vh`,
          x: `${Math.random() * 100}vw`,
          scale: 0.5 + Math.random() * 0.5,
        }}
        animate={{
          opacity: [0, 0.5 + Math.random() * 0.3, 0],
          y: '-15vh',
          rotate: Math.random() * 360,
        }}
        transition={{
          duration: 18 + Math.random() * 14,
          repeat: Infinity,
          delay: Math.random() * 12,
          ease: 'linear',
        }}
        className="absolute text-base md:text-xl select-none"
      >
        {['✨', '🌸', '🌟', '💫', '🤍', '⭐'][i % 6]}
      </motion.span>
    ))}
  </div>
);

/* ─── Cover ────────────────────────────────────────────── */
const Cover = ({ onOpen }) => (
  <motion.div
    className="fixed inset-0 flex flex-col items-center justify-center z-50 px-6"
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
      className="text-center flex flex-col items-center gap-8"
    >
      {/* Badge tanggal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="glass rounded-full px-5 py-2 shadow-card"
      >
        <p className="text-muted text-xs tracking-[0.2em] uppercase font-medium">22 September 2004 — 2026</p>
      </motion.div>

      {/* Heading utama */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="space-y-1"
      >
        <p className="text-muted text-sm md:text-base tracking-wide font-light">Selamat Ulang Tahun</p>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-dark leading-tight">
          Rohmah
        </h1>
        <p className="text-gradient font-serif italic text-2xl md:text-3xl">22 tahun 🎂</p>
      </motion.div>

      {/* Divider dekoratif */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="flex items-center gap-3 w-48"
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-peach" />
        <span className="text-peach text-lg">✦</span>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-peach" />
      </motion.div>

      {/* Tombol buka */}
      <motion.button
        onClick={onOpen}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="shimmer relative group px-8 py-4 rounded-2xl font-medium text-sm md:text-base text-white shadow-glow transition-all duration-300"
        style={{ background: 'linear-gradient(135deg, #d4845a 0%, #e8a87c 60%, #d4845a 100%)' }}
      >
        <span className="relative z-10 flex items-center gap-2">
          <span>Ada sesuatu buat kamu</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >→</motion.span>
        </span>
      </motion.button>
    </motion.div>
  </motion.div>
);

/* ─── Letter ────────────────────────────────────────────── */
const Letter = () => (
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -60 }}
    transition={{ duration: 0.55, ease: 'easeOut' }}
    className="max-w-2xl mx-auto w-full px-2"
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="glass rounded-3xl p-7 sm:p-10 md:p-14 shadow-card relative overflow-hidden"
    >
      {/* Dekorasi sudut */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-30"
        style={{ background: 'radial-gradient(circle at top right, #f5c9a8, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-full opacity-20"
        style={{ background: 'radial-gradient(circle at bottom left, #f2b4a0, transparent 70%)' }} />

      {/* Ornamen atas */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">✉️</span>
        <div className="flex-1 h-px bg-gradient-to-r from-peach to-transparent" />
      </div>

      <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-dark leading-snug">
        Selamat ulang tahun yang ke-22,{' '}
        <span className="text-gradient italic">Rohmah</span> ✨
      </h2>
      <div className="space-y-4 text-dark/75 leading-relaxed text-sm sm:text-base md:text-lg font-light">
        <p>
          Hai Rohmah, selamat ulang tahun ya! 22 tahun bukan angka yang kecil — itu adalah bukti nyata
          bahwa kamu sudah melewati begitu banyak hal, tumbuh, belajar, dan terus melangkah meski tidak selalu mudah.
        </p>
        <p>
          Kamu berharga. Bukan karena pencapaianmu, bukan karena kamu berguna bagi orang lain —
          tapi karena kamu ada, dan kehadiranmu di dunia ini sudah cukup jadi alasan untuk bersyukur.
          Kamu layak untuk bahagia, layak untuk dicintai, dan layak untuk hidup dengan penuh.
        </p>
        <p>
          Semoga di usia 22 ini, kamu makin berani bermimpi, makin percaya pada dirimu sendiri, dan terus melangkah{' '}
          <span className="font-medium text-dark/90">— satu hari dalam satu waktu.</span> 🌟
        </p>
      </div>

      {/* Footer letter */}
      <div className="mt-8 pt-5 border-t border-peach/30 flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div key={i} animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
              className="w-1.5 h-1.5 rounded-full bg-peach" />
          ))}
        </div>
        <p className="font-script text-muted text-base ml-1">dengan tulus 🤍</p>
      </div>
    </motion.div>
  </motion.div>
);

/* ─── Cake ──────────────────────────────────────────────── */
const Cake = () => {
  const [blown, setBlown] = useState(false);

  const handleBlow = (e) => {
    e.stopPropagation();
    setBlown(true);
    const duration = 5000;
    const end = Date.now() + duration;
    const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff922b', '#cc5de8'];

    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 50, origin: { x: 0, y: 1 }, colors, startVelocity: 70, zIndex: 999 });
      confetti({ particleCount: 5, angle: 120, spread: 50, origin: { x: 1, y: 1 }, colors, startVelocity: 70, zIndex: 999 });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());

    const rnd = (a, b) => Math.random() * (b - a) + a;
    const iv = setInterval(() => {
      const left = end - Date.now();
      if (left <= 0) return clearInterval(iv);
      confetti({ particleCount: Math.floor(rnd(60, 110)), startVelocity: rnd(22, 44), spread: 360, ticks: 90, origin: { x: rnd(0.1, 0.9), y: rnd(0.05, 0.4) }, colors, zIndex: 999, gravity: 0.75 });
    }, 450);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-full gap-8"
    >
      {/* Cake card */}
      <div className="glass rounded-3xl p-10 md:p-14 shadow-card flex flex-col items-center gap-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 0%, #f5c9a8, transparent 60%)' }} />

        {/* Lilin & kue */}
        <div className="relative flex flex-col items-center">
          <AnimatePresence>
            {!blown && (
              <motion.div exit={{ opacity: 0, y: -20, scale: 0 }} className="flex flex-col items-center mb-1">
                {/* Flame */}
                <motion.div
                  className="flame w-5 h-8 rounded-full"
                  style={{ background: 'linear-gradient(to top, #ff6b35, #ffd93d 60%, #fff 100%)' }}
                />
                {/* Lilin */}
                <div className="w-3 h-10 rounded-sm" style={{ background: 'linear-gradient(to bottom, #ffd93d, #ff922b)' }} />
              </motion.div>
            )}
          </AnimatePresence>
          {blown && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-3xl mb-2"
            >✨</motion.div>
          )}
          <span className="text-7xl md:text-8xl drop-shadow-lg select-none">🎂</span>
        </div>

        <div className="text-center">
          <p className="font-serif text-xl md:text-2xl text-dark/80 mb-1">
            {blown ? 'Yeay! Buat wish-mu ya 🌟' : 'Tiup lilinnya & buat wish!'}
          </p>
          {!blown && <p className="text-muted text-sm">Klik tombol di bawah</p>}
        </div>

        <motion.button
          onClick={handleBlow}
          disabled={blown}
          whileHover={!blown ? { scale: 1.05, y: -2 } : {}}
          whileTap={!blown ? { scale: 0.95 } : {}}
          className={`px-8 py-3.5 rounded-2xl font-semibold text-sm md:text-base transition-all duration-500 ${
            blown
              ? 'bg-peach/40 text-dark/40 cursor-default'
              : 'text-white shadow-glow'
          }`}
          style={!blown ? { background: 'linear-gradient(135deg, #d4845a, #e8a87c)' } : {}}
        >
          {blown ? 'Make a wish ✨' : '🎂 Tiup lilinnya!'}
        </motion.button>
      </div>
    </motion.div>
  );
};

/* ─── Gallery ───────────────────────────────────────────── */
const Gallery = () => {
  const photos = [
    { id: 1, url: rohmah2, caption: 'Tetap ceria ya 😊', rotate: '-rotate-6 md:-rotate-3' },
    { id: 2, url: rohmah1, caption: 'Semangat terus!', rotate: 'rotate-2 md:rotate-2', zIndex: 'z-10' },
    { id: 3, url: rohmah3, caption: 'Kamu keren 🌟', rotate: 'rotate-6 md:rotate-3' },
  ];

  // Duplikasi foto agar bisa infinite scroll (marquee)
  const marqueePhotos = [...photos, ...photos, ...photos, ...photos];

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -60 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="max-w-5xl mx-auto w-full flex flex-col items-center gap-8 px-2"
    >
      <div className="text-center">
        <p className="text-muted text-xs tracking-[0.2em] uppercase mb-1">Apresiasi</p>
        <h3 className="font-serif text-2xl md:text-3xl text-dark font-semibold">Kamu yang luar biasa...</h3>
      </div>

      {/* Marquee Container */}
      <div 
        className="w-full overflow-hidden pb-8 relative" 
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
          className="flex flex-row items-end gap-6 md:gap-10 w-max"
        >
          {marqueePhotos.map((photo, i) => (
            <motion.div
              key={`${photo.id}-${i}`}
              whileHover={{ scale: 1.08, rotate: 0, y: -8, zIndex: 50 }}
              className={`bg-white shadow-card-hover rounded-sm flex-shrink-0 cursor-pointer relative ${photo.rotate}`}
              style={{ padding: '10px 10px 40px' }}
            >
              <div className="w-36 sm:w-44 md:w-52 aspect-square overflow-hidden bg-gray-100">
                <img src={photo.url} alt="Memory" className="w-full h-full object-cover pointer-events-none" />
              </div>
              <p className="text-center mt-3 font-script text-dark/70 text-sm md:text-base pointer-events-none">{photo.caption}</p>
              {/* Pin decoratif */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-peach border-2 border-white shadow-sm pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ─── Quotes Jar ────────────────────────────────────────── */
const QuotesJar = () => {
  const quotes = [
    "Kamu lebih kuat dari yang kamu kira.",
    "Tidak apa-apa untuk merasa lelah, istirahatlah sebentar.",
    "Setiap langkah kecil yang kamu ambil itu berharga.",
    "Jangan terlalu keras pada dirimu sendiri.",
    "Kamu sudah melakukan yang terbaik hari ini.",
    "Tarik napas dalam-dalam, kamu pasti bisa melewati ini.",
    "Menangis bukan berarti lemah, itu tanda kamu manusia.",
    "Percayalah pada prosesmu sendiri.",
    "Kamu berhak mendapatkan hal-hal baik di dunia ini.",
    "Jangan lupa berterima kasih pada dirimu sendiri karena sudah bertahan.",
    "Hari yang buruk tidak berarti hidup yang buruk.",
    "Pelan-pelan saja, tidak perlu terburu-buru.",
    "Kamu cukup, dengan segala kelebihan dan kekuranganmu.",
    "Badai pasti berlalu, percayalah.",
    "Fokus pada apa yang bisa kamu kendalikan.",
    "Jangan lupa tersenyum hari ini.",
    "Kamu berhak bahagia.",
    "Setiap hari adalah kesempatan baru.",
    "Jangan bandingkan dirimu dengan orang lain, kamu punya waktumu sendiri.",
    "Semua akan baik-baik saja pada akhirnya.",
    "Jaga kesehatanmu ya, itu yang paling penting sekarang.",
    "Jangan lupa makan yang teratur, tubuhmu butuh energi untuk terus melangkah.",
    "Jaga dirimu baik-baik, karena kamu sangat berharga.",
    "Istirahatlah yang cukup, dunia masih bisa menunggu besok."
  ];

  const [currentQuote, setCurrentQuote] = useState("Ketuk amplop ini saat kamu butuh semangat...");
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    setIsOpened(true);
    // confetti tipis
    confetti({ particleCount: 15, spread: 40, origin: { y: 0.7 }, colors: ['#f5c9a8', '#f2b4a0', '#ffffff'], zIndex: 100 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md mx-auto flex flex-col items-center justify-center gap-6 px-4"
    >
      <div className="text-center mb-2">
        <h3 className="font-serif text-2xl md:text-3xl text-dark font-semibold">Amplop Penyemangat</h3>
        <p className="text-muted text-sm mt-1">Buka saat kamu merasa lelah</p>
      </div>

      <motion.div 
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="glass rounded-3xl p-8 w-full shadow-card flex flex-col items-center justify-center cursor-pointer relative overflow-hidden min-h-[200px]"
      >
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="closed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-6xl drop-shadow-sm"
            >
              💌
            </motion.div>
          ) : (
            <motion.div
              key="opened"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="text-3xl mb-2">✨</div>
              <p className="font-serif text-lg md:text-xl text-dark/80 italic">"{currentQuote}"</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {isOpened && (
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-muted text-xs cursor-pointer hover:text-peach transition-colors"
          onClick={(e) => { e.stopPropagation(); handleOpen(); }}
        >
          Ambil kutipan lain ↺
        </motion.p>
      )}
    </motion.div>
  );
};

/* ─── Breathing Exercise ────────────────────────────────── */
const BreathingExercise = () => {
  const [phase, setPhase] = useState('Tarik napas...');
  
  useEffect(() => {
    const cycleDuration = 10000;
    
    let isMounted = true;
    
    const breatheCycle = () => {
      if (!isMounted) return;
      setPhase('Tarik napas...');
      
      setTimeout(() => {
        if (!isMounted) return;
        setPhase('Hembuskan...');
      }, 4000);
    };

    breatheCycle();
    const interval = setInterval(breatheCycle, cycleDuration);
    
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center justify-center gap-12 px-4"
    >
      <div className="text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-dark font-semibold">Berhenti sejenak</h3>
        <p className="text-muted text-sm mt-2 max-w-xs mx-auto">Ikuti ritme lingkaran ini untuk menenangkan pikiranmu.</p>
      </div>

      <div className="relative w-64 h-64 flex items-center justify-center">
        <motion.div
          animate={{
            scale: phase === 'Tarik napas...' ? 1.5 : 1,
            opacity: phase === 'Tarik napas...' ? 0.6 : 0.2,
          }}
          transition={{
            duration: phase === 'Tarik napas...' ? 4 : 6,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full"
          style={{ background: 'radial-gradient(circle, #f5c9a8, transparent 70%)' }}
        />
        <motion.div
          animate={{
            scale: phase === 'Tarik napas...' ? 1.2 : 1,
          }}
          transition={{
            duration: phase === 'Tarik napas...' ? 4 : 6,
            ease: "easeInOut"
          }}
          className="glass w-32 h-32 rounded-full flex items-center justify-center shadow-glow z-10"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={phase}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-dark font-medium"
            >
              {phase}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ─── Release Burden ────────────────────────────────────── */
const ReleaseBurden = () => {
  const [text, setText] = useState('');
  const [isReleased, setIsReleased] = useState(false);

  const handleRelease = (e) => {
    e.stopPropagation();
    if (!text.trim()) return;
    
    setIsReleased(true);
    
    const duration = 2000;
    const end = Date.now() + duration;
    const colors = ['#ffffff', '#fdf8f0', '#d4845a', '#f5c9a8'];

    (function frame() {
      confetti({ particleCount: 5, angle: 90, spread: 80, origin: { y: 0.6 }, colors, startVelocity: 40, gravity: 0.3, zIndex: 100 });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg mx-auto flex flex-col items-center justify-center px-4"
    >
      <div className="glass rounded-3xl p-8 md:p-12 shadow-card w-full relative overflow-hidden flex flex-col items-center">
        
        <AnimatePresence mode="wait">
          {!isReleased ? (
            <motion.div
              key="input"
              exit={{ opacity: 0, y: -50, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full flex flex-col gap-6"
            >
              <div className="text-center">
                <span className="text-3xl mb-2 block">🍃</span>
                <h3 className="font-serif text-xl md:text-2xl text-dark font-semibold">Buang Bebanmu</h3>
                <p className="text-muted text-sm mt-2">Tuliskan apa yang membuatmu sedih atau lelah hari ini. Lalu lepaskan.</p>
              </div>

              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Aku merasa..."
                className="w-full bg-white/40 border border-white/60 focus:outline-none focus:border-peach/80 rounded-2xl p-4 min-h-[120px] text-dark/80 resize-none placeholder:text-muted/60"
                onClick={(e) => e.stopPropagation()}
              />

              <motion.button
                onClick={handleRelease}
                disabled={!text.trim()}
                whileHover={text.trim() ? { scale: 1.05 } : {}}
                whileTap={text.trim() ? { scale: 0.95 } : {}}
                className={`w-full py-3.5 rounded-2xl font-semibold transition-all duration-500 ${
                  text.trim()
                    ? 'text-white shadow-glow'
                    : 'bg-white/30 text-dark/30 cursor-not-allowed'
                }`}
                style={text.trim() ? { background: 'linear-gradient(135deg, #d4845a, #e8a87c)' } : {}}
              >
                Lepaskan
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="released"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-center py-8"
            >
              <div className="text-4xl mb-4">🤍</div>
              <p className="font-serif text-xl md:text-2xl text-dark font-semibold mb-2">Sudah dilepaskan.</p>
              <p className="text-dark/70 text-sm md:text-base">Semua akan baik-baik saja. Kamu aman.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ─── Final Message ─────────────────────────────────────── */
const FinalMessage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.92 }}
    transition={{ duration: 0.55 }}
    className="w-full flex flex-col items-center justify-center px-4"
  >
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="glass rounded-3xl p-8 md:p-14 shadow-card max-w-lg mx-auto relative overflow-hidden"
    >
      {/* Glow dekorasi */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, #f5c9a8, transparent 70%)' }} />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #f2b4a0, transparent 70%)' }} />

      {/* Ornamen atas */}
      <div className="flex justify-center mb-5">
        <div className="flex items-center gap-2 glass rounded-full px-4 py-1.5">
          <span className="text-xl">🌸</span>
          <span className="text-muted text-xs font-medium tracking-widest uppercase">Satu hal untukmu</span>
          <span className="text-xl">🌸</span>
        </div>
      </div>

      <h2 className="font-serif text-xl md:text-2xl font-semibold text-dark text-center mb-6 leading-snug">
        Kamu berharga,{' '}
        <span className="text-gradient italic">Rohmah.</span>
      </h2>

      <div className="space-y-4 text-dark/70 leading-relaxed text-sm md:text-base font-light text-center">
        <p>
          Kamu berharga — bukan karena kamu sempurna, bukan karena kamu selalu kuat,
          tapi karena kamu ada. Kehadiranmu di dunia ini punya makna, dan itu tidak bisa digantikan oleh siapapun.
        </p>
        <p>
          Kamu pantas untuk hidup dengan baik. Pantas untuk bahagia, untuk didengar, untuk dirawat —
          termasuk oleh dirimu sendiri. Jangan pernah merasa sebaliknya.
        </p>
        <p>
          Di usia 22 ini, semoga kamu makin percaya pada nilaimu sendiri, terus melangkah,
          dan ingat — ada yang selalu mendoakanmu dari jauh dan percaya kamu akan baik-baik saja. 🌟
        </p>
      </div>

      {/* Quote penutup */}
      <div className="mt-8 pt-5 border-t border-peach/40 text-center">
        <p className="font-script text-lg md:text-xl text-dark/80 italic">
          "Keep going, Rohmah.
        </p>
        <p className="font-script text-lg md:text-xl text-gradient italic font-semibold">
          The best is yet to come." 🌸
        </p>
      </div>
    </motion.div>
  </motion.div>
);

/* ─── Music Player Button ───────────────────────────────── */
const MusicButton = ({ isPlaying, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-glow transition-all duration-300"
    style={{
      background: isPlaying
        ? 'linear-gradient(135deg, #d4845a, #e8a87c)'
        : 'rgba(255,255,255,0.75)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.8)',
    }}
  >
    {isPlaying ? (
      <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>
        <Pause className="w-5 h-5 text-white" />
      </motion.div>
    ) : (
      <Music className="w-5 h-5 text-dark/70" />
    )}
  </motion.button>
);

/* ─── Slide Indicator ───────────────────────────────────── */
const sliderLabels = ['Surat', 'Toples', 'Wish', 'Foto', 'Napas', 'Beban', 'Pesan'];

const SlideNav = ({ current, total, onPrev, onNext }) => (
  <div className="absolute bottom-8 md:bottom-10 left-0 right-0 flex justify-center items-center gap-5 z-30">
    <motion.button
      onClick={onPrev}
      disabled={current === 0}
      whileHover={current !== 0 ? { scale: 1.1 } : {}}
      whileTap={current !== 0 ? { scale: 0.9 } : {}}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
        current === 0
          ? 'opacity-25 cursor-not-allowed'
          : 'glass shadow-card hover:shadow-card-hover'
      }`}
    >
      <ChevronLeft className="w-4 h-4 text-dark/80" />
    </motion.button>

    {/* Dots */}
    <div className="flex items-center gap-2">
      {[...Array(total)].map((_, idx) => (
        <div key={idx} className="flex flex-col items-center gap-1">
          <motion.div
            animate={{ width: idx === current ? 24 : 8, opacity: idx === current ? 1 : 0.35 }}
            transition={{ duration: 0.3 }}
            className="h-2 rounded-full"
            style={{ background: idx === current ? 'linear-gradient(90deg, #d4845a, #e8a87c)' : '#c9a08a' }}
          />
        </div>
      ))}
    </div>

    <motion.button
      onClick={onNext}
      disabled={current === total - 1}
      whileHover={current !== total - 1 ? { scale: 1.1 } : {}}
      whileTap={current !== total - 1 ? { scale: 0.9 } : {}}
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
        current === total - 1
          ? 'opacity-25 cursor-not-allowed'
          : 'shadow-glow'
      }`}
      style={current !== total - 1 ? {
        background: 'linear-gradient(135deg, #d4845a, #e8a87c)',
      } : { background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(8px)' }}
    >
      <ChevronRight className="w-4 h-4 text-white" />
    </motion.button>
  </div>
);

/* ─── App ───────────────────────────────────────────────── */
export default function App() {
  const [opened, setOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const audioRef = useRef(null);

  const slides = [
    <Letter key="letter" />,
    <QuotesJar key="quotes" />,
    <Cake key="cake" />,
    <Gallery key="gallery" />,
    <BreathingExercise key="breathe" />,
    <ReleaseBurden key="release" />,
    <FinalMessage key="final" />,
  ];

  const handleNext = () => { if (currentSlide < slides.length - 1) setCurrentSlide(p => p + 1); };
  const handlePrev = () => { if (currentSlide > 0) setCurrentSlide(p => p - 1); };

  const handleContainerClick = (e) => {
    if (e.target.closest('button') || e.target.closest('img')) return;
    handleNext();
  };

  const handleOpen = () => {
    setOpened(true);
    if (audioRef.current) { audioRef.current.play(); setIsPlaying(true); }
    const end = Date.now() + 3000;
    const colors = ['#f5c9a8', '#fdf8f0', '#f2b4a0', '#ffd93d'];
    (function frame() {
      confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors });
      confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    }());
  };

  const toggleMusic = () => {
    if (isPlaying) audioRef.current?.pause();
    else audioRef.current?.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen overflow-hidden relative" style={{ background: '#fdf8f0' }}>
      <BackgroundElements />
      <audio ref={audioRef} src={bgMusic} loop />

      {/* Music button — always visible after open */}
      {opened && <MusicButton isPlaying={isPlaying} onClick={toggleMusic} />}

      {/* Cover */}
      <AnimatePresence>{!opened && <Cover onOpen={handleOpen} />}</AnimatePresence>

      {/* Main slides */}
      <div className={`transition-opacity duration-1000 ${opened ? 'opacity-100' : 'opacity-0 pointer-events-none'} relative z-10`}
        onClick={handleContainerClick}
      >
        <main className="container mx-auto px-4 md:px-6 h-screen flex flex-col items-center justify-center relative cursor-default">
          <div className="w-full flex items-center justify-center flex-1 pb-24 pt-8">
            <AnimatePresence mode="wait">
              {slides[currentSlide]}
            </AnimatePresence>
          </div>

          {opened && (
            <SlideNav
              current={currentSlide}
              total={slides.length}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}
        </main>
      </div>
    </div>
  );
}
