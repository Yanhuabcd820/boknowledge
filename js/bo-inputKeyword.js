const inputKeyword = document.querySelector('.input-keyword')
const inputKeywordBtn = document.querySelector('.input-keyword-btn')
const inputKeywordDist = document.querySelector('.input-keyword-dist')


// 當輸入區被按下鍵盤時
inputKeyword.addEventListener('keyup', function(){
	// 當按下的盤是enter時
    if(event.keyCode == 13) {
    	inputKeywordSetting()
    }
})

inputKeywordBtn.addEventListener("click", inputKeywordSetting)

function inputKeywordSetting(){
	console.log(55)
    if(inputKeyword.value.trim().length > 0){
        const A = document.createElement('a')
        A.innerHTML = `${inputKeyword.value}
                        <i class="fa fa-times" aria-hidden="true"></i>
                        `
        A.setAttribute('href', 'javascript:;');
        A.classList.add('inputKeyword-pick')
        inputKeywordDist.appendChild(A)
        inputKeyword.value = ''
        inputKeywordDele()

    }

}

inputKeywordDele()

function inputKeywordDele(){
    let inputKeywordPickAll = document.querySelectorAll('.inputKeyword-pick')
    let inputKeywordPick = document.querySelector('.inputKeyword-pick')

    inputKeywordPickAll.forEach(function(inputKeywordPick){
        inputKeywordPick.addEventListener('click', function(){
            console.log(event.target.tagName)
            if(event.target.tagName === 'A'){
                event.target.remove()
            }else if(event.target.tagName === 'I'){
                event.target.parentElement.remove()
            }
        })
    })
}