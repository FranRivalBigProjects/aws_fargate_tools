function calc(){
let cpu=parseFloat(document.getElementById('a').value)||0;
let memory=parseFloat(document.getElementById('b').value)||0;
let hours=parseFloat(document.getElementById('c').value)||0;

// simplified pricing
let cost = (cpu * 0.04 + memory * 0.004) * hours;

let level = cost < 20 ? "Low cost ✅" :
            cost < 100 ? "Moderate cost ⚖️" :
            "High cost ⚠️";

let insights = "";
if(cpu > 4) insights += "High CPU allocation. Optimize usage.<br>";
if(memory > 16) insights += "High memory allocation. Optimize containers.<br>";
if(hours > 100) insights += "Long runtime. Consider scaling.<br>";

document.getElementById('result').innerHTML =
"Total Cost: $" + cost.toFixed(2) + "<br><br>" +
level + "<br><br>" + insights;
}
