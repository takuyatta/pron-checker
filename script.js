let button = document.querySelector('.rec__button');
let speech = new webkitSpeechRecognition();
let result = document.querySelector('.result__txt');

button.onclick = () => {
  speech.start();
  document.querySelector('.result').classList.remove('ok');
  document.querySelector('.result').classList.add('recording');
  result.innerHTML = '音声認識中...'
  speech.onresult = function (e) {
    speech.stop();      
    if (e.results[0].isFinal) {
      document.querySelector('.result').classList.remove('recording');
      if(e.results[0][0].transcript == "病気を見ます"){
        result.innerHTML = "病気を診ます";
      } else if(
        e.results[0][0].transcript == "明日から旅行 なんです" ||
        e.results[0][0].transcript == "私は運動会に行きません 用事があるんです" ||
        e.results[0][0].transcript == "私は運動会に行きません 都合が悪いんです" ||
        e.results[0][0].transcript == "a" ||
        e.results[0][0].transcript == "a" ||
        e.results[0][0].transcript == "a" ||
        e.results[0][0].transcript == "a" ||
        e.results[0][0].transcript == "a" ||
        e.results[0][0].transcript == "a" 
      ) {
        document.querySelector('.result').classList.add('ok');
        result.innerHTML = e.results[0][0].transcript;
      } else {
        result.innerHTML = e.results[0][0].transcript;
      }
    }
  } 
}