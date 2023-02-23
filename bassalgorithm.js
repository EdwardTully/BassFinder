

let timeOfYear = document.getElementById("season")
let temp = document.getElementById("wattemp")
let baro = document.getElementById('baro')
let bchange = document.getElementById('barochange')

let clarity = document.getElementById('watclar')
let submit = document.getElementById('submit')
let adviseBox = document.getElementById('results')
let bestLure
let bestColor
let bestLocation
let baroBite
const Winter1clear="Jigging spoons, grubs, maribou jigs, float’n fly"
const Winter2clear="Jigging spoons, jerkbaits, swimbaits, finesse crankbaits, blade baits, grubs"
const Winter3clear="Jerkbait, lipless crankbait, shallow crankbait, vibrating jig, slow-rolled spinnerbait, jig, swimbait"
const Winter4clear="jerkbaits, crankbaits, spinnerbaits, jigs, shaky heads, buzzbaits, swimbaits"
const Winter1mud="Slow-rolled spinnerbait, crankbait, jig"
const Winter2mud="flatside crankbait, lipless crankbait, vibrating jig, spinnerbait"
const Winter3mud="shallow crank, lipless crankbait, jig, spinnerbait, vibrating jig"
const Winter4mud="Jig, flipping bugs, shallow crankbait, spinnerbait, vibrating jig, creature baits, punching baits"
const Spring1clear='Shallow jerkbaits, swimbaits, plastics like lizards, craws, tubes, creatures, and senkos, vibrating jig, swim jig, topwaters'
const Spring2clear='floating worm, most plastics, topwater, senko, frogs, swimbaits'
const Spring1mud='Jig, plastics, spinnerbait, buzzbait'
const Spring2mud='Plastics, buzzbaits, frogs, spinnerbaits'
const Summer1clear='Big plastics, topwater, offshore baits like deep crankbaits, flutter spoons, football jigs, deep swimbaits, drop shot. Topwaters, shallow crankbaits, spinnerbait, frogs, smaller plastics, punching baits, smaller soft swimbaits, wake bait'
const Summer1mud='Big plastics, jigs, big spinnerbaits, deep diving crankbaits, Punching baits, jigs, spinnerbaits, frogs, buzzbaits, swim jig'
const Fall1clear='Buzzbait, topwater, jerkbait, swimbait, vibrating jigs, small plastics, swim jig'
const Fall2clear='Jerkbait, swimbait, topwater, jig'
const Fall3clear='Blade baits, lipless crankbaits, spinnerbaits, buzzbait, shallow crankbait, swimbait, vibrating jig'
const Fall4clear='Blade bait, jigging spoon, swimbait, jig'
const Fall1mud='Swim jig, topwater, spinnerbait, jig'
const Fall2mud='Buzzbaits, spinnerbaits, carkbaits, jigs'
const Fall3mud='shallow crankbait, lipless crank, spinnerbait, jig'
const Fall4mud='Spinnerbait, crankbait, jig'
const mudColor='like chartreuse, yellow, white, etc. Anything bright.'
const clearColor='that mimic nature'
const preSpawn='Until the shallows begin to warm, shoreline points near deep water, sharp breaks that lead to large flats, channels or depressions in spawning coves, or any type of cover in deeper water located near shallow spawning areas will function as staging areas for pre-spawn bass. Many of these structures are not visible and must be located with electronics.'
const spawn='You will see spawning beds on the warmest, most protected sections of the lake first. Bass spawn in shallow water on a hard bottom, preferably next to some sort of cover like a stump, dock piling, tree or bush, which helps protect them from wind and predators All bass in a body of water dont spawn at the same time. Some bass are spawning while some are still moving up. So when shallow bass are unresponsive, target the bass that are staging in deeper water.'
const postSpawn='Post-spawn bass hold in shoreline cover as the spring weather stabilizes. There is a lot of fishing pressure at this time of year, and to catch more fish, you need to get your lure where most guys don’t. Weed lines have not yet set up, so bass are keying in on trees and brush. When fishing a laydown, pitch your bait deeper into the tree than most guys—don’t worry about getting snagged, it’s part of fishing.'
const summer='During the day, bass will move toward deeper water or deeper inside the weeds. When the sun is high, always fish the shady side of cover no matter how deep or shallow. Cast a frog into the weeds, pausing and twitching the bait at any openings. Pitch a jig into the same openings—you may need a heavy jig to break through the canopy.'
const fallLoc='As the lake turns over, fishing will be tough for a stretch. After turnover, when the lake has settled and cleared up again, bass will move to the steepest ledges leading to flats with the last remaining weeds on them. Pay attention to the weeds that get stuck on your hooks. Bass pile up next to the last remaining living (green) weeds. Dying (brown) weeds will deplete an area of oxygen, and bass will not linger in these places.'
const winterLoc='When water temperatures fall into the low 40s and 30s, it gets harder to catch bass—but not impossible. Their metabolism slows and they don’t need to feed as much, but they still will strike lures. Target the sharpest drop-offs you can find that have bait on them. Most bass will hunker down on the bottom in cover or suspend over points and humps.'
const lowPressure='slow fishing conditions, go with what you know at this time.'
const mediumPressure='favorable barometrics for fishing.'
const highPressure='slow biting in deeper water. These are less desirable conditions.'
const pressRise='if fishing is bad things can improve on a rising barometer.'
const pressFall='best fishing conditions, before a storm.'
const errorB = 'PLEASE INPUT A BAROMETER READING'

const getStarted=()=>{

    if (timeOfYear.value==='Winter'){
        
        if (temp.value>=30 && temp.value <40){
            if (clarity.value==='Clear'){
               return bestLure=Winter1clear+ winterLoc
               
            }
        }

    }
    if (timeOfYear.value==='Winter'){
        
        if (temp.value>=30 && temp.value <40){
            if (clarity.value==='Murky'){
                return bestLure=Winter1mud+ winterLoc
            }
        }

    }
    if (timeOfYear.value==='Winter'){
        
        if (temp.value>=40 && temp.value <50){
            if (clarity.value==='Clear'){
                return bestLure=Winter2clear+winterLoc
            }
        }

    }
    if (timeOfYear.value==='Winter'){
      
        if (temp.value>=40 && temp.value <50){
            if (clarity.value==='Murky'){
                return bestLure=Winter2mud+ winterLoc
            }
        }

    }
    if (timeOfYear.value==='Winter'){
        
        if (temp.value>=50 && temp.value <55){
            if (clarity.value==='Clear'){
                return bestLure=Winter3clear+ winterLoc
            }
        }

    }
    if (timeOfYear.value==='Winter'){
        
        if (temp.value>=50 && temp.value <55){
            if (clarity.value==='Murky'){
                return  bestLure=Winter3mud+ winterLoc
            }
        }

    }
    if (timeOfYear.value==='Winter'){
        
        if (temp.value>=55 && temp.value <60){
            if (clarity.value==='Clear'){
                return  bestLure=Winter4clear+ winterLoc
            }
        }

    }
     if (timeOfYear.value==='Winter'){
       
        if (temp.value>=55 && temp.value <60){
            if (clarity.value==='Murky'){
                return bestLure=Winter4mud+ winterLoc
            }
        }

    }
    if (timeOfYear.value==='Winter'){
            return bestLure=`NO TEMP GIVEN. Use lures that fit water conditions and this advise: ${winterLoc}`
               
            }
        

    if (timeOfYear.value==='Spring'){
       
        if (temp.value>=60 && temp.value <65){
            if (clarity.value==='Clear'){
                return  bestLure=Spring1clear+ spawn;
            }
        }

    }
    if (timeOfYear.value==='Spring'){
       
        if (temp.value>=60 && temp.value <65){
            if (clarity.value==='Murky'){
                return  bestLure=Spring1mud + spawn;
            }
        }

    }
    if (timeOfYear.value==='Spring'){
       
        if (temp.value>=65 && temp.value <70){
            if (clarity.value==='Clear'){
                return  bestLure=Spring2clear + postSpawn
            }
        }

    }
   if (timeOfYear.value==='Spring'){
       
        if (temp.value>=65 && temp.value <70){
            if (clarity.value==='Murky'){
                return   bestLure=Spring2mud +postSpawn
            }
        }

    }
    if (timeOfYear.value==='Spring'){
        return bestLure=`NO TEMP GIVEN. Use lures that fit water conditions and this advise: ${spawn} ${postSpawn}`
           
        }
     if (timeOfYear.value==='Summer'){
        
        if (temp.value>=70 ){
            if (clarity.value==='Clear'){
                return  bestLure=Summer1clear+ summer
            }
        }

    }
    if (timeOfYear.value==='Summer'){
       
        if (temp.value>=70 ){
            if (clarity.value==='Murky'){
                return  bestLure=Summer1mud +summer
            }
        }

    }
    if (timeOfYear.value==='Summer'){
        return bestLure=`NO TEMP GIVEN. Use lures that fit water conditions and this advise: ${summer}`
           
        }
     if (timeOfYear.value==='Fall'){
        
        if (temp.value>=65 && temp.value <70 ){
            if (clarity.value==='Clear'){
                return  bestLure=Fall1clear+fallLoc
            }
        }

    }
    if (timeOfYear.value==='Fall'){
        
        if (temp.value>=65 && temp.value <70 ){
            if (clarity.value==='Murky'){
                return  bestLure=Fall1mud +fallLoc
            }
        }

    }
     if (timeOfYear.value==='Fall'){
        
        if (temp.value>=55 && temp.value <65 ){
            if (clarity.value==='Clear'){
                return  bestLure=Fall2clear+ fallLoc
            }
        }

    }
     if (timeOfYear.value==='Fall'){
        
        if (temp.value>=55 && temp.value <65 ){
            if (clarity.value==='Murky'){
                return  bestLure=Fall2mud+ fallLoc
            }
        }

    }
    if (timeOfYear.value==='Fall'){
        
        if (temp.value>=50 && temp.value <55 ){
            if (clarity.value==='Clear'){
                return  bestLure=Fall3clear +fallLoc
            }
        }

    }
    if (timeOfYear.value==='Fall'){
       
        if (temp.value>=50 && temp.value <55 ){
            if (clarity.value==='Muddy'){
                return   bestLure=Fall3mud + fallLoc
            }
        }

    }
    if (timeOfYear.value==='Fall'){
        
        if (temp.value <50 ){
            if (clarity.value==='Clear'){
                return   bestLure=Fall4clear +fallLoc
            }
        }

    }
    if (timeOfYear.value==='Fall'){
        
        if (temp.value <50 ){
            if (clarity.value==='Muddy'){
                return   bestLure=Fall4mud +fallLoc
            }
        }

    }
    if (timeOfYear.value==='Fall'){
        return bestLure=`NO TEMP GIVEN. Use lures that fit water conditions and this advise: ${fallLoc}`
           
        }
}

const atmosphericBite =function(){
    if (baro.value>=27.0 && baro.value<29.70){
        if (bchange.value==='steady'){
           return baroBite=lowPressure
        }if (bchange.value==="rising"){
           return baroBite=lowPressure+pressRise
        }if (bchange.value==="falling"){
           return baroBite=lowPressure+pressFall
        }
    }
     if (baro.value>=29.70 && baro.value < 30.40){
        if (bchange.value==="steady"){
          return  baroBite=mediumPressure
        }else if (bchange.value==="rising"){
          return  baroBite=mediumPressure+pressRise
        }else if (bchange.value==="falling"){
          return  baroBite=mediumPressure+pressFall
        }
    }
     if (baro.value>=30.40){
        if (bchange.value==="steady"){
          return baroBite=highPressure
        }else if (bchange.value==="rising"){
          return  baroBite=highPressure+pressRise
        }else if (bchange.value==="falling"){
          return  baroBite=highPressure+pressFall
        }
    }else if (baro.value !== null){
        return baroBite= errorB
    }
}



const lureColor=()=>{
    if(clarity.value==='Clear'){
        bestColor=clearColor
    }else {
        bestColor=mudColor
    }
}

submit.onclick=function(){
  
    getStarted()
    atmosphericBite()
    lureColor()
 
const loadBox=function(){
    adviseBox.innerText=`I advise: ${bestLure} \
    Also due to clarity use lures with colors: ${bestColor}.\ 
    Due to reported barometer you can expect ${baroBite}`
}

  loadBox()

}

/*const thoughtGroup = [getStarted(),atmosphericBite(),lureColor()]

submit.onclick= function(){

    for(i=0; i<=thoughtGroup.length; i++){
        thoughtGroup[i]
        loadBox()

    }
}*/