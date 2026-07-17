const fs=require('fs'); const path=require('path'); const script=fs.readFileSync(path.join(__dirname,'tmp-inline.js'),'utf8'); const lines=script.split(/\r?\n/);
const start=lines.findIndex(l=>l.includes('function Blogs'));
const end=lines.findIndex((l,i)=>i>start && l.includes('function FAQ'));
console.log('Blogs start', start+1, 'end', end+1);
let p=0; let b=0; let c=0; const counts=[];
for(let i=start;i<end;i++){
  const line=lines[i];
  for(const ch of line){ if(ch==='(') p++; if(ch===')') p--; if(ch==='[') b++; if(ch===']') b--; if(ch==='{') c++; if(ch==='}') c--; }
  counts.push({line:i+1,p,b,c,code:line});
}
for(const item of counts){ if(item.p<0||item.b<0||item.c<0) console.log('NEG',item.line,item)
 else if(item.line>=500) console.log(item.line, item.p, item.b, item.c, item.code) }
console.log('final',p,b,c);