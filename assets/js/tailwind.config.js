tailwind.config = {
  theme: { extend: {
    fontFamily: { display: ['Fraunces','serif'], sans: ['"Plus Jakarta Sans"','sans-serif'] },
    colors: {
      shell:  '#FFF8F0',
      plum:   { DEFAULT:'#2D2A4A', soft:'#5B5779' },
      tang:   { 100:'#FFE4DA', 300:'#FFB4A2', 500:'#FF7A59', 600:'#F25F3A' },
      mint:   { 100:'#E3F8EF', 300:'#A8E6CF', 500:'#3CC49A', 700:'#1E8C6A' },
      butter: { 100:'#FFF6D6', 300:'#FFE699', 500:'#F7C948' },
      peri:   { 100:'#E8EDFF', 300:'#A0B4FF', 500:'#6C7FF2' },
      rose:   { 100:'#FFE8F1', 300:'#FFB3CF', 500:'#F2689B' }
    },
    keyframes: {
      bob:   { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-12px)' } },
      drift: { '0%':{ transform:'translateX(-30px)' }, '100%':{ transform:'translateX(30px)' } },
      spinS: { to:{ transform:'rotate(360deg)' } },
      sway:  { '0%,100%':{ transform:'rotate(-4deg)' }, '50%':{ transform:'rotate(4deg)' } },
      morph: { '0%,100%':{ borderRadius:'42% 58% 63% 37% / 41% 44% 56% 59%' }, '50%':{ borderRadius:'60% 40% 35% 65% / 55% 60% 40% 45%' } },
      rise:  { from:{ opacity:0, transform:'translateY(16px) scale(.96)' }, to:{ opacity:1, transform:'none' } },
      blink: { '0%,80%,100%':{ opacity:.25 }, '40%':{ opacity:1 } }
    },
    animation: {
      bob:'bob 4s ease-in-out infinite', 'bob-slow':'bob 7s ease-in-out infinite',
      drift:'drift 9s ease-in-out infinite alternate', 'drift-slow':'drift 14s ease-in-out infinite alternate',
      spinS:'spinS 22s linear infinite', sway:'sway 3s ease-in-out infinite',
      morph:'morph 12s ease-in-out infinite', rise:'rise .5s cubic-bezier(.2,.8,.2,1) both',
      blink:'blink 1.2s infinite'
    }
  } }
}
