


var screen = document.querySelector("#screen");

var status = {

};


screen.addEventListener('click', function() {

    // classList.contains() 함수로 현재 클래스가 무엇인지 알 수 있다.
    console.log('screen.classList.contains(\'waiting\'): ', screen.classList.contains('waiting'));

    if ( screen.classList.contains('waiting') ) {
        console.log('클릭!');
        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent = '초록색이 되면 클릭하세요.';
    } else if(screen.classList.contains('ready')) {

        screen.classList.remove('ready');
        screen.classList.add('now');
        screen.textContent = '클릭하세요!';

    } else if(screen.classList.contains('now')) {

        screen.classList.remove('now');
        screen.classList.add('ready');
        screen.textContent = '클릭해서 시작하세요.';
    }


    

});