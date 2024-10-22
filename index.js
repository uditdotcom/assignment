//practice

// const express  = require('express');

// const app =  express();
// function sum(n){
//     let ans = 0;
//     for(let i=0;i<=n;i++){
//         ans+=i;
//     }
//     return ans;
// }

// app.get('/',function(req,res){
//     const n = req.query.n;
//     const ans =  sum(n);
//     res.send(ans.toString());

// })
// app.listen(3000);



// console.log("server is running on port 3000");       
const express  = require('express');

const app =  express();
app.listen(3000);
var users = [{
    name: 'udit',
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}];

app.get('/',function(req,res){
    const uditKidneys = users[0].kidneys;
    const nofKidneys = uditKidneys.length;
    let nofHelKidneys = 0;
    for(let i=0;i<nofKidneys;i++){
        if(uditKidneys[i].healthy){
            nofHelKidneys++;
        }
    }
    const nofunhealkidney = nofKidneys -nofHelKidneys;
    res.jsonp({
        nofKidneys,
        nofHelKidneys,
        nofunhealkidney
    })

})


app.post('/',function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.jsonp({
        msg:'Done!'
    })
})

app.put('/',function(req,res){
    for( let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;   
    }
    res.jsonp({});
})