
const menuCover =  document.querySelector('#menu-cover')
const box =  document.querySelector('#box')
const header =  document.querySelector('header')
const searchKeyword =  document.querySelector('.search-keyword')
const bowSearch =  document.querySelector('.bow-search')

menuCover.addEventListener('click', function(event){
    if(event.target.classList.contains('search-keyword-text')){
        searchKeyword.classList.add('display')
        bowSearch.classList.add('display')
        box.style.display = 'none'
    }
    else if(event.target.classList.contains('search-out')){
        searchKeyword.classList.remove('display')
        bowSearch.classList.remove('display')
        box.style.display = 'block'
    }else if(event.target.classList.contains('bow-search')){
        searchKeyword.classList.remove('display')
        bowSearch.classList.remove('display')
        box.style.display = 'block'
    }
    // console.log(event.target.classList)
})
header.addEventListener('click', function(event){
    searchKeyword.classList.remove('display')
        bowSearch.classList.remove('dsplay')
        box.style.display = 'block'
})



const keywordRangeAll = document.querySelectorAll('.keyword-range')
const keywordRange = document.querySelectorAll('.keyword-range')
const searchKeywordPickWrap = document.querySelector('.search-keyword-pick-wrap')
const keywordArr = []

keywordRangeAll.forEach(function(keywordRange){
    keywordRange.addEventListener('click', function(){
        event.target.classList.toggle('pick')
            // console.log(keywordArr)
            // console.log(keywordArr.includes(event.target.innerText))
        if(event.target.tagName === 'A' && keywordArr.includes(event.target.innerText) === false){
            // event.target.classList.add('pick')
            const A = document.createElement('a')
            A.innerHTML = `${event.target.textContent}
                            <i class="fa fa-times" aria-hidden="true"></i>
                            `
            A.setAttribute('href', 'javascript:;');
            A.classList.add('search-keyword-pick', 'top')
            event.target.classList.add('pick')
            
            addArr()
            const searchKeywordPick = document.querySelectorAll('.search-keyword-pick')
            searchKeywordPickWrap.insertBefore(A, searchKeywordPickWrap.children[searchKeywordPick.length])
            searchKeywordPickDele()

            
        }else if(event.target.tagName === 'A' && keywordArr.includes(event.target.textContent.trim()) === true){
            
            deleArr()


        }

    })
})

let keywordRangeDetail1 = document.querySelectorAll('.keyword-range-detail1 a')
let keywordRangeDetail2 = document.querySelectorAll('.keyword-range-detail2 a')
// console.log(keywordRangeDetail1.length)


// console.log('ss'+searchKeywordPickWrapA.length)
searchKeywordPickWrap.addEventListener('click', function(){

    if(keywordArr.includes(event.target.textContent.trim())){
        // console.log('noIncludes')
        for(let a = 0; a < keywordRangeDetail1.length; a++){
            if(keywordRangeDetail1[a].textContent.trim() === event.target.textContent.trim()){
                keywordRangeDetail1[a].classList.remove('pick')
                console.log(keywordArr)
                console.log(555)

            }
        }
        for(let b = 0; b < keywordRangeDetail2.length; b++){
            if(keywordRangeDetail2[b].textContent.trim() === event.target.textContent.trim()){
                keywordRangeDetail2[b].classList.remove('pick')
                console.log(keywordArr)

            }


        }

        let searchKeywordPickAll = document.querySelectorAll('.search-keyword-pick')

        

        for(let x = 0; x < searchKeywordPickAll.length; x++){
            searchKeywordPickAll[x].addEventListener('click', function(){
                console.log(event.target.innerText.trim())
                keywordArr.splice(x,1)
                console.log('x:'+x)
                console.log(keywordArr)
            })
        }
       
    }
})

function addArr(){
    keywordArr.push(event.target.innerText)
    console.log(keywordArr)
}
function deleArr(){            
    let keywordMatch = event.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.children
    // let keywordMatch = document.querySelector('.search-keyword-pick-wrap')
    for(let i = 0; i < keywordMatch.length; i++){
        if(keywordMatch[i].innerText.trim() === event.target.innerText.trim()){
            event.target.classList.remove('pick')
            keywordMatch[i].remove()
            // console.log(i)
            keywordArr.splice(i,1)

        }
                        
    }
}

const searchKeywordText = document.querySelector('.search-keyword-text')
// console.log(searchKeywordText.value)


// 當輸入區被按下鍵盤時
searchKeywordText.addEventListener('keyup', function(){
    // console.log(searchKeywordText.value)
    // 當按下的盤是enter時
    if(event.keyCode == 13) {
        if(searchKeywordText.value.trim().length > 0){
            const A = document.createElement('a')
            A.innerHTML = `${searchKeywordText.value}
                            <i class="fa fa-times" aria-hidden="true"></i>
                            `
            A.setAttribute('href', 'javascript:;');
            A.classList.add('search-keyword-pick', 'top')
            const searchKeywordPick = document.querySelectorAll('.search-keyword-pick')
            searchKeywordPickWrap.insertBefore(A, searchKeywordPickWrap.children[searchKeywordPick.length])
            searchKeywordText.value = ''
            searchKeywordPickDele()


        }
    }
})

searchKeywordPickDele()
function searchKeywordPickDele(){
    let searchKeywordPickAll = document.querySelectorAll('.search-keyword-pick')
    let searchKeywordPick = document.querySelector('.search-keyword-pick')

    searchKeywordPickAll.forEach(function(searchKeywordPick){
        searchKeywordPick.addEventListener('click', function(){
            // console.log(event.target.tagName)
            if(event.target.tagName === 'A'){
                event.target.remove()
            }else if(event.target.tagName === 'I'){
                event.target.parentElement.remove()
            }


        })
    })
}