
(function(){
"use strict";
var h=React.createElement;
var useState=React.useState;
var useEffect=React.useEffect;
var useRef=React.useRef;
var useCallback=React.useCallback;

/* ===== SECTION IDS ===== */
var SECTION_IDS=['home','about','skills','projects','education','certifications','achievements','timeline','experience','contact'];

/* ===== DATA ===== */
var SKILL_CATS=[
{name:'Programming',icon:'fa-solid fa-code',items:['Java','Python','C','JavaScript']},
{name:'Frontend',icon:'fa-solid fa-palette',items:['React','HTML','CSS','Tailwind CSS','Bootstrap']},
{name:'Backend',icon:'fa-solid fa-server',items:['Spring Boot','REST API','JWT Authentication']},
{name:'Database',icon:'fa-solid fa-database',items:['MySQL','MongoDB','SQLite']},
{name:'Machine Learning',icon:'fa-solid fa-brain',items:['TensorFlow','Scikit-learn','Pandas','NumPy']},
{name:'Tools',icon:'fa-solid fa-wrench',items:['Git','GitHub','Docker','Swagger','VS Code','Postman']},
{name:'Cloud',icon:'fa-solid fa-cloud',items:['AWS Basics','Azure Basics']}
];
var PROJECTS=[
{title:'Employee Management System',desc:'Developed a secure Full Stack Employee Management System using Spring Boot, React, MySQL, JWT Authentication, Docker, and Swagger.',features:['Role-based Authentication','CRUD Operations','REST APIs','Responsive UI','JWT Login','Dockerized Application','Swagger Documentation'],tech:['React','Spring Boot','MySQL','JWT','Docker','Swagger'],cls:'emerald'},
{title:'Hire Sense AI',desc:'An AI-powered Resume Screening and Candidate Matching platform.',features:['Resume Parsing','ATS Score','Skill Extraction','AI Recommendations','Candidate Dashboard','Recruiter Dashboard','Authentication','Vector Database Integration','Google Gemini API'],tech:['React','FastAPI','MongoDB','JWT','Google Gemini','ChromaDB','Vector Search'],cls:'cyan'},
{title:'Online Payment Fraud Detection',desc:'Machine Learning project that detects fraudulent online payment transactions.',features:['Data Analysis','Fraud Prediction','ML Model','Visualization'],tech:['Python','Scikit-learn','Pandas','NumPy'],cls:'amber'},
{title:'Digital Complaint Management System',desc:'A web-based complaint tracking system that allows users to register complaints while administrators manage and resolve them efficiently.',features:['User Registration','Complaint Submission','Admin Dashboard','Status Tracking','Resolution Workflow'],tech:['React','Spring Boot','MySQL','REST API'],cls:'rose'}
];
var TIMELINE_DATA=[
{year:'2022',title:'Learning Programming',desc:'Started with C and Python fundamentals, building a solid foundation in logic and problem-solving.'},
{year:'2023',title:'Java Development',desc:'Deep dive into Java, OOP concepts, data structures, and algorithms. Built console applications.'},
{year:'2023',title:'Machine Learning',desc:'Explored ML algorithms, data preprocessing, and model evaluation with Python and scikit-learn.'},
{year:'2024',title:'Full Stack Development',desc:'Built full stack applications with Spring Boot backend and React frontend, deploying with Docker.'},
{year:'2024',title:'Cloud Learning',desc:'AWS and Azure fundamentals, containerization with Docker, and CI/CD pipeline concepts.'},
{year:'2025',title:'AI Projects',desc:'AI-powered applications with Google Gemini API, vector databases, and intelligent resume screening.'}
];
var FAQ_DATA=[
{q:'What technologies do you specialize in?',a:'I specialize in Java, Spring Boot, React, MySQL, and Machine Learning technologies including TensorFlow and Scikit-learn. I also have experience with Docker, AWS, and Azure.'},
{q:'Are you available for freelance work?',a:'Yes, I am open to freelance opportunities and collaborations on interesting full stack or AI-related projects.'},
{q:'What is your approach to learning new technologies?',a:'I follow a hands-on approach — building projects while learning. I leverage online courses, official documentation, and open-source contributions to deepen my understanding.'},
{q:'Can you work in a team environment?',a:'Absolutely. I have experience working in team settings during hackathons, internships at Intrainz and NSIC, and college projects including coordinating a cultural fest.'},
{q:'How can I contact you?',a:'You can reach me through the contact form below, or directly via email at joshwavsb@gmail.com. I typically respond within 24 hours.'},
{q:'What are your career goals?',a:'I aim to grow as a Software Developer working on production-grade applications, combining my full stack skills with AI/ML to build intelligent, scalable systems.'}
];
var STATS_DATA=[
{value:3,label:'Years Learning',suffix:'+'},
{value:4,label:'Projects Built',suffix:'+'},
{value:15,label:'Technologies',suffix:'+'},
{value:4,label:'Certificates',suffix:'+'}
];
var SOCIAL_LINKS=[
{icon:'fa-brands fa-github',href:'https://github.com/JoshwaBaskar',label:'GitHub'},
{icon:'fa-brands fa-linkedin-in',href:'https://linkedin.com/in/joshwa-b-322967291',label:'LinkedIn'},
{icon:'fa-solid fa-envelope',href:'mailto:joshwavsb@gmail.com',label:'Email'},
{icon:'fa-brands fa-leetcode',href:'https://leetcode.com/',label:'LeetCode'}
];

/* ===== CUSTOM HOOKS ===== */
function useTypingEffect(strings,speed,delSpeed,pause){
var ts=useState(''),text=ts[0],setText=ts[1];
var is=useState(0),idx=is[0],setIdx=is[1];
var ds=useState(false),del=ds[0],setDel=ds[1];
speed=speed||80;delSpeed=delSpeed||40;pause=pause||2000;
useEffect(function(){
var cur=strings[idx];var t;
if(!del&&text===cur){t=setTimeout(function(){setDel(true)},pause)}
else if(del&&text===''){setDel(false);setIdx(function(p){return(p+1)%strings.length})}
else{t=setTimeout(function(){setText(function(p){return del?p.substring(0,p.length-1):cur.substring(0,p.length+1)})},del?delSpeed:speed)}
return function(){clearTimeout(t)}
},[text,idx,del]);
return text;
}
function useActiveSection(ids){
var as=useState(''),active=as[0],setActive=as[1];
useEffect(function(){
var obs=ids.map(function(id){
var el=document.getElementById(id);if(!el)return null;
var o=new IntersectionObserver(function(e){if(e[0].isIntersecting)setActive(id)},{threshold:.25,rootMargin:'-80px 0px 0px 0px'});
o.observe(el);return o});
return function(){obs.forEach(function(o){if(o)o.disconnect()})}
},[]);
return active;
}

/* ===== REUSABLE COMPONENTS ===== */
function Reveal(props){
var ref=useRef(null);
useEffect(function(){
var el=ref.current;if(!el)return;
var o=new IntersectionObserver(function(e){if(e[0].isIntersecting){el.classList.add('revealed');o.unobserve(el)}},{threshold:.08});
o.observe(el);return function(){o.disconnect()}
},[]);
var cls=(props.className||'')+' scroll-reveal';
var style=props.style||{};
if(props.delay)style.transitionDelay=props.delay+'s';
return h(props.tag||'div',{ref:ref,className:cls,style:style},props.children);
}
function SectionWrap(id,extra,children){
return h('section',{id:id,className:'py-20 md:py-28 relative '+(extra||'')},children);
}
function SectionHead(label,title,sub){
return h('div',{className:'text-center mb-16'},
h('span',{className:'text-emerald-400 font-semibold text-sm tracking-[.2em] uppercase'},label),
h('h2',{className:'font-display text-3xl sm:text-4xl md:text-5xl font-extrabold mt-3 mb-4 text-white'},title),
sub?h('p',{className:'text-gray-400 max-w-2xl mx-auto leading-relaxed'},sub):null
);
}
function GlassCard(cls,children){
return h('div',{className:'glass rounded-2xl p-6 '+(cls||'')},children);
}
function StatCounter(props){
var ref=useRef(null);
var cs=useState(0),count=cs[0],setCount=cs[1];
var ss=useState(false),started=ss[0],setStarted=ss[1];
useEffect(function(){
var el=ref.current;if(!el)return;
var o=new IntersectionObserver(function(e){if(e[0].isIntersecting){setStarted(true);o.unobserve(el)}},{threshold:.5});
o.observe(el);return function(){o.disconnect()}
},[]);
useEffect(function(){
if(!started)return;var st=performance.now();
function u(now){var p=Math.min((now-st)/2000,1);var e=1-Math.pow(1-p,3);setCount(Math.floor(e*props.value));if(p<1)requestAnimationFrame(u)}
requestAnimationFrame(u);
},[started,props.value]);
return h('div',{ref:ref,className:'text-center'},
h('div',{className:'text-4xl md:text-5xl font-extrabold text-emerald-400 mb-2 font-display'},count+(props.suffix||'')),
h('div',{className:'text-gray-400 text-sm'},props.label)
);
}

/* ===== NAVBAR ===== */
function Navbar(){
var os=useState(false),open=os[0],setOpen=os[1];
var ss=useState(false),scrolled=ss[0],setScrolled=ss[1];
var active=useActiveSection(SECTION_IDS);
var links=[
{id:'home',label:'Home'},{id:'about',label:'About'},{id:'skills',label:'Skills'},
{id:'projects',label:'Projects'},{id:'education',label:'Education'},{id:'contact',label:'Contact'}
];
useEffect(function(){
function onS(){setScrolled(window.scrollY>50)}
window.addEventListener('scroll',onS);return function(){window.removeEventListener('scroll',onS)}
},[]);
function go(id,e){e.preventDefault();document.getElementById(id).scrollIntoView({behavior:'smooth'});setOpen(false)}
var navCls='fixed top-0 left-0 right-0 z-50 transition-all duration-300 '+(scrolled?'bg-gray-950/80 backdrop-blur-xl border-b border-white/5 py-3':'py-5');
return h('nav',{className:navCls},
h('div',{className:'max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between'},
h('a',{href:'#home',onClick:function(e){go('home',e)},className:'text-xl font-bold font-display text-white'},
h('span',{className:'text-emerald-400'},'J'),'oshwa'),
h('div',{className:'hidden lg:flex items-center gap-8'},
links.map(function(l){
return h('a',{key:l.id,href:'#'+l.id,onClick:function(e){go(l.id,e)},
className:'text-sm font-medium transition-colors '+(active===l.id?'text-emerald-400':'text-gray-400 hover:text-white')},l.label)
})),
h('a',{href:'#contact',onClick:function(e){go('contact',e)},
className:'hidden lg:inline-flex px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold text-sm rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/20'},'Hire Me'),
h('button',{className:'lg:hidden text-white text-xl focus:outline-none','aria-label':'Toggle menu',onClick:function(){setOpen(!open)}},
open?h('i',{className:'fas fa-times'}):h('i',{className:'fas fa-bars'}))
),
open?h('div',{className:'lg:hidden bg-gray-950/95 backdrop-blur-xl border-b border-white/5 px-4 pb-6 pt-2'},
links.map(function(l){
return h('a',{key:l.id,href:'#'+l.id,onClick:function(e){go(l.id,e)},
className:'block py-3 text-sm font-medium border-b border-white/5 '+(active===l.id?'text-emerald-400':'text-gray-400')},l.label)
}),
h('a',{href:'#contact',onClick:function(e){go('contact',e)},
className:'inline-flex mt-4 px-5 py-2.5 bg-emerald-500 text-gray-950 font-semibold text-sm rounded-xl'},'Hire Me')
):null
);
}

/* ===== HERO ===== */
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
);