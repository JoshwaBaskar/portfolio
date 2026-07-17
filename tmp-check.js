const fs=require('fs');
const html=fs.readFileSync('Untitled-1.html','utf8');
const regex=/<script[^>]*>([\s\S]*?)<\/script>/i;
const match=regex.exec(html);
if(!match){ console.error('no script found'); process.exit(1); }
const script=match[1];
const lines=script.split(/\r?\n/);
let p=0,b=0,br=0;
for(let i=0;i<lines.length;i++){
  const line=lines[i];
  for(const ch of ['(',')','{','}','[',']']){
    const count=[...line].filter(c=>c===ch).length;
    if(ch==='(') p += count;
    if(ch===')') p -= count;
    if(ch==='{') b += count;
    if(ch==='}') b -= count;
    if(ch==='[') br += count;
    if(ch===']') br -= count;
  }
  if(p<0||b<0||br<0){
    console.log('negative at line',i+1,'p',p,'b',b,'br',br);
    console.log(line);
    process.exit(0);
  }
  if(i>=250 && i<=330) console.log(i+1,'p',p,'b',b,'br',br,line);
}
console.log('final',p,b,br);
