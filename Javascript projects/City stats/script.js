
// 'Chennai'; population = 4646732
//            literacyRate = 90.20
//             language = 'Tamil'
// 'Bengaluru'; population = 8443675
//             literacyRate = 88.71
//              language = 'Kannada'
// 'Delhi';     population = 12442373
//              literacyRate = 88.71
//               language = 'Hindi'
// 'Mumbai';     population = 16787941
//              literacyRate = 86.12
//               language = 'Marathi'
const button = document.querySelector('button')
let resultdiv=document.createElement('div')
    resultdiv.id='result'
    document.getElementById('wrapper').appendChild(resultdiv)
//event listner
button.addEventListener('click',displayStats)
function displayStats(){
    const input=document.getElementById('input')
    const city=input.options[input.selectedIndex].value 
    let population=0, literacyRate=0,  language=''
    switch(city){
        case 'Bengaluru':population = 8443675
                         literacyRate = 88.71
                         language = 'Kannada'
                         break
        case 'Chennai':  population = 4646732
                        literacyRate = 90.20
                        language = 'Tamil'   
                        break
        case 'Mumbai': population = 12442373
                        literacyRate = 88.71
                        language = 'Marathi'
                       break 
        case 'Delhi':  population = 16787941
                       literacyRate = 86.12
                       language = 'Hindi'   
                        break
    }
    let text=`The Indian city of ${city} has a population of ${population}. language spoken is ${language} and literacy Rate is ${literacyRate}%`
    

    document.getElementById('result').innerHTML=text
}
