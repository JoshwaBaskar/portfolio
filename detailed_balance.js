const fs=require('fs');
const s=fs.readFileSync('c:/Users/joshw/OneDrive/Documents/Portfolio/portfolio.html','utf8');
let idx=s.indexOf('ReactDOM.createRoot');
if(idx===-1)idx=s.indexOf('(function(){');
let scriptStart=s.lastIndexOf('<script',idx);
let scriptTagEnd=s.indexOf('>',scriptStart);
let scriptEnd=s.indexOf('</script>',scriptTagEnd);
const script=s.slice(scriptTagEnd+1,scriptEnd);
const pairs={ '(':')','{':'}','[':']' };
const stack=[];
for(let i=0;i<script.length;i++){
  const ch=script[i];
  if(ch==='('||ch==='{'||ch==='['){stack.push({ch,i})}
  else if(ch===')'||ch==='}'||ch===']'){
    const last=stack.pop();
    if(!last || pairs[last.ch]!==ch){
      console.log('Mismatch at index',i,'char',ch,'expected',last?pairs[last.ch]:null);
      console.log('\nTop of stack (most recent 10 entries):');
      const top = stack.slice(-10);
      top.forEach(function(it){
        const line = script.slice(0,it.i).split('\n').length;
        console.log('  index',it.i,'char',it.ch,'line',line);
      });
      // print context around i
      const before=script.slice(Math.max(0,i-120),i+120);
      console.log('\nContext:\n',before);
      process.exit(1);
    }
  }
}
if(stack.length>0){
  console.log('Unclosed tokens (top 20):');
  stack.slice(-20).forEach(function(it){
    const line = script.slice(0,it.i).split('\n').length;
    console.log('  index',it.i,'char',it.ch,'line',line);
  });
}else console.log('All balanced');
