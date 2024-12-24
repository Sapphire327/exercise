const input = [
    {expires:true,order:4,value:'abcd'},
    {expires:true,order:2,value:'qwer'},
    {expires:true,order:1,value:'xyz1'},
    {expires:true,order:3,value:'abx2'},
]
let res =[...new Set(
    input.filter(x=>x.expires)
    .sort((a,b)=>a.order-b.order)
    .map(x=>x.value.split('').reverse())
    .flat())].join('')
console.log(res)