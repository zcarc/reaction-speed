


var screen = document.querySelector("#screen");

var status = {

};

// 시간차를 구하는 첫번째 방법
// var startTime = new Date();

// 두번째 방법
// 주의사항은 함수안에 들어가는 문자는 timeEnd 동일한 문자여야 한다.
// 이 함수는 실제 서비스할 때는 안쓰이고 디버깅할 때 주로 쓰인다.
// console.time('시간');

// 세번째 방법
// new Date()와 차이점은 정밀한 계산을 하고 싶을 때 이걸 쓰면 된다.
// 보통은 new Date()를 많이 사용한다.
// var start_p = performance.now();


// screen은 비동기이기 때문에 클릭되는 순간 function(){}이 실행되고 할일을 마치면 호출스택에서 사라진다.
// 그래서 변수를 바깥으로 빼야한다.
var startTime;
var endTime;

var timeHistory = [];
var timeout;

screen.addEventListener('click', function() {

    // var endTime = new Date();

    //console.timeEnd('시간');

    // var end_p = performance.now();
    // console.log(' end_p - start_p : ', end_p - start_p );

    // console.log('startTime: ', startTime);
    // console.log('endTime: ', endTime);
    // 클릭되는 순간 시간과 웹페이지가 로딩됐을 때의 시간을 빼서
    // 그 시간이 얼마나 걸렸는지 확인해본다.
    // 1초가 1000 밀리세컨드 라서 1000으로 나눠야한다.
    // console.log('endTime - startTime: ', endTime - startTime);
    // console.log(' (endTime - startTime) / 1000 : ', (endTime - startTime) / 1000);

    // classList.contains() 함수로 현재 클래스가 무엇인지 알 수 있다.
    console.log('screen.classList.contains(\'waiting\'): ', screen.classList.contains('waiting'));

    if ( screen.classList.contains('waiting') ) {
        console.log('클릭!');
        screen.classList.remove('waiting');
        screen.classList.add('ready'); // Red로 변경
        screen.textContent = '초록색이 되면 클릭하세요.';

        timeout = setTimeout(function(){
            startTime = new Date();
            screen.click();
        }, Math.floor(Math.random() * 1000) + 2000 );
        
    } else if(screen.classList.contains('ready')) { // 준비 상태 (Red)

        if(!startTime){
            clearTimeout(timeout);

            screen.classList.remove('ready');
            screen.classList.add('waiting');
            screen.textContent = '너무 성급하시군요!';

        } else {

            screen.classList.remove('ready');
            screen.classList.add('now');
            screen.textContent = '클릭하세요!';

        }

        

    } else if(screen.classList.contains('now')) { // Green

        endTime = new Date();
        console.log(startTime);
        console.log(endTime);
        console.log('ReactionSpeed: ', endTime - startTime , ' ms');
        
        timeHistory.push(endTime - startTime);

        startTime = null;
        endTime = null;

        screen.classList.remove('now');
        screen.classList.add('waiting');
        screen.textContent = '클릭해서 시작하세요.';
    }


    

});




// 호출스택
// function d() {
//     console.log('d');
// }

// function e() {
//     console.log('e');
// }


// function a() {
//     function b() {
//         function c() {
//             console.log('c');
//         }
//         c();
//         console.log('b');
//     }
//     b();
//      console.log('a');
// }

// d();
// e();
// a();