const fs=require('fs'); const html=fs.readFileSync('Untitled-1.html','utf8'); const rx=/\\<script[^>]*>([\\s\\S]*?)<\\/script>/g; let m,last=''; while((m=rx.exec(html))!==null){ last=m[1]; } const lines=last.split(/\\r?\\n/); const start=lines.findIndex(l=>l.includes('function Testimonials'));
const end=lines.findIndex((l,i)=>i>start && l.includes('function Blogs'));
console.log('start',start,'end',end);
let paren=0,brace=0,brack=0;
for(let i=start;i<end;i++){
  const line = lines[i];
  for(const ch of line){ if(ch==='(') paren++; if(ch===')') paren--; if(ch==='[') brack++; if(ch===']') brack--; if(ch==='{' ) brace++; if(ch==='}') brace--; }
  console.log(i+1, 'p='+paren,'b='+brack,'B='+brace, line);
}
console.log('final',paren,brack,brace);

