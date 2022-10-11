const translate = require("translate")
const fs = require("fs")
let codes = ["af","ak","sq","am","ar","hy","as","ae","ay","az","bm","ba","eu","be","bn","bh","bi","bs","br","bg","my","ca","km","ch","ce","ny","zh","cu","cv","kw","co","cr","hr","cs","da","dv","nl","dz","en","eo","et","ee","fo","fj","fi","fr","ff","gd","gl","lg","ka","de","ki","el","kl","gn","gu","ht","ha","he","hz","hi","ho","hu","is","io","ig","id","ia","ie","iu","ik","ga","it","ja","jv","kn","kr","ks","kk","rw","kv","kg","ko","kj","ku","ky","lo","la","lv","lb","li","ln","lt","lu","mk","mg","ms","ml","mt","gv","mi","mr","mh","ro","mn","na","nv","nd","ng","ne","se","no","nb","nn","ii","oc","oj","or","om","os","pi","pa","ps","fa","pl","pt","qu","rm","rn","ru","sm","sg","sa","sc","sr","sn","sd","si","sk","sl","so","st","nr","es","su","sw","ss","sv","tl","ty","tg","ta","tt","te","th","bo","ti","to","ts","tn","tr","tk","tw","ug","uk","ur","uz","ve","vi","vo","wa","cy","fy","wo","xh","yi","yo","za","zu"]
let w = "comment vas tu"
let n = 0
translate.from = 'fr'
function a(){
    translate.from = codes[n-1]
    translate(w,codes[n]).then((wo)=>{
            w = wo
            console.log(w)
        }).catch((err)=>{
        })
}
function b(){
    translate.from = codes[n-2]
    translate(w,"fr").then((word)=>{
        w = word
        console.log(w)
    })
}
while(n<=codes.length){
a()
n++
}
while(1<2){
setTimeout(()=>{
    b()
},6000)
break;
}