const fs=require('fs');
const s=fs.readFileSync('c:/Users/joshw/OneDrive/Documents/Portfolio/portfolio.html','utf8');
let idx=s.indexOf('ReactDOM.createRoot');
if(idx===-1)idx=s.indexOf('(function(){');
let scriptStart=s.lastIndexOf('<script',idx);
let scriptTagEnd=s.indexOf('>',scriptStart);
let scriptEnd=s.indexOf('</script>',scriptTagEnd);
const script=s.slice(scriptTagEnd+1,scriptEnd);
// find the sequence
const needle="rounded-full animate-bounce'})))\n);\n}\n\n/* ===== ABOUT ===== */";
const pos=script.indexOf("rounded-full animate-bounce'");
console.log('pos',pos);
// compute line
const lines=script.split('\n');
let cum=0;let lineNum=0;for(let i=0;i<lines.length;i++){cum+=lines[i].length+1;if(cum>pos){lineNum=i+1;break}}
console.log('line',lineNum);
for(let i=lineNum-6;i<lineNum+6;i++){
  const num=(i+1).toString().padStart(4,' ');
  console.log(num+': '+(lines[i]||''));
}
