function Hero(){
var typed=useTypingEffect(['Full Stack Developer','AI & Machine Learning Enthusiast','Java & Spring Boot Developer','React Frontend Developer']);
var floats=[
{icon:'fa-brands fa-java',top:'15%',left:'8%',d:'0s'},
{icon:'fa-brands fa-react',top:'25%',right:'10%',d:'1s'},
{icon:'fa-brands fa-python',bottom:'30%',left:'5%',d:'2s'},
{icon:'fa-solid fa-database',bottom:'20%',right:'8%',d:'.5s'},
{icon:'fa-brands fa-docker',top:'60%',left:'12%',d:'1.5s'},
{icon:'fa-solid fa-brain',top:'10%',right:'20%',d:'2.5s'}
];
return h('section',{id:'home',className:'min-h-screen flex items-center justify-center relative overflow-hidden'},
h('div',{className:'absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/20 rounded-full blur-[128px] anim-blob blob-d1'}),
h('div',{className:'absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-[128px] anim-blob blob-d2'}),
h('div',{className:'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] anim-blob blob-d3'}),
h('div',{className:'absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:64px_64px]'}),
floats.map(function(f,i){
var s={};if(f.top)s.top=f.top;if(f.bottom)s.bottom=f.bottom;if(f.left)s.left=f.left;if(f.right)s.right=f.right;s.animationDelay=f.d;
return h('div',{key:i,className:'absolute text-emerald-500/15 text-2xl anim-float hidden lg:block',style:s},h('i',{className:f.icon}))
}),
h('div',{className:'relative z-10 text-center px-4 max-w-4xl mx-auto'},
h('div',{className:'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8'},
h('span',{className:'w-2 h-2 rounded-full bg-emerald-400 animate-pulse'}),'Available for opportunities'),
h('h1',{className:'font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight'},
'Hi, I\'m ',h('span',{className:'bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-400 bg-clip-text text-transparent'},'Joshwa B')),
h('div',{className:'text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-6 h-10'},
h('span',null,typed),h('span',{className:'inline-block w-0.5 h-7 bg-emerald-400 anim-blink ml-1 align-middle'})),
h('p',{className:'text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed'},'I build intelligent web applications using Java, Spring Boot, React, AI, and Cloud technologies.'),
h('div',{className:'flex flex-wrap justify-center gap-4 mb-12'},
h('a',{href:'#',className:'px-7 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5'},
h('i',{className:'fas fa-download mr-2'}),'Download Resume'),
h('a',{href:'#projects',onClick:function(e){e.preventDefault();document.getElementById('projects').scrollIntoView({behavior:'smooth'})},className:'px-7 py-3.5 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 font-semibold rounded-xl transition-all hover:-translate-y-0.5'},
h('i',{className:'fas fa-eye mr-2'}),'View Projects'),
h('a',{href:'#contact',onClick:function(e){e.preventDefault();document.getElementById('contact').scrollIntoView({behavior:'smooth'})},className:'px-7 py-3.5 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 font-semibold rounded-xl transition-all hover:-translate-y-0.5'},
h('i',{className:'fas fa-handshake mr-2'}),'Hire Me')),
h('div',{className:'flex justify-center gap-4'},
SOCIAL_LINKS.map(function(s,i){
return h('a',{key:i,href:s.href,target:'_blank',rel:'noopener noreferrer','aria-label':s.label,
className:'w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all hover:-translate-y-1'},h('i',{className:s.icon}))
})),
h('div',{className:'absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500'},
h('span',{className:'text-xs tracking-[.2em] uppercase'},'Scroll'),
h('div',{className:'w-5 h-8 rounded-full border border-gray-600 flex justify-center pt-1.5'},
      h('div',{className:'w-1 h-2 bg-emerald-400 rounded-full animate-bounce'}))
    )
  );
}
