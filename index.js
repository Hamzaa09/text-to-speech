let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select')

document.querySelector("#start").addEventListener("click", () => {
  speech.rate = 0.7;
  speech.text = document.querySelector("#text").value;
  window.speechSynthesis.speak(speech);
});

document.querySelector("#stop").addEventListener("click", () => {
  window.speechSynthesis.cancel()
});

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i)
  });
};


voiceSelect.addEventListener('change', () => {
    speech.voice = voices[voiceSelect.value]
})
