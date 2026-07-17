const fs=require('fs');
const s=fs.readFileSync('c:/Users/joshw/OneDrive/Documents/Portfolio/portfolio.html','utf8');
let idx=s.indexOf('ReactDOM.createRoot');
if(idx===-1)idx=s.indexOf('(function(){');
let scriptStart=s.lastIndexOf('<script',idx);
let scriptTagEnd=s.indexOf('>',scriptStart);
let scriptEnd=s.indexOf('</script>',scriptTagEnd);
const script=s.slice(scriptTagEnd+1,scriptEnd);
const lines=script.split('\n');
for(let i=200;i<230;i++){
  const num=(i+1).toString().padStart(4,' ');
  console.log(num+': '+(lines[i]||'') );
}
