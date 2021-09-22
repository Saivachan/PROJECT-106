function startClassification_Audio() {
  navigator.mediaDevices.getUserMedia({
    audio: true
  });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/xQBpLvSjV/model.json', modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
}
var Cat = 0;
var Dog = 0;
var Parrot = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - ' + results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - ' + Dog + ' Detected Cat - ' + Cat +'Detected Parrot - ' + Parrot;
    document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
    document.getElementById("result_count").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Dog") {
      img.src = 'dog_bark.gif';
      Dog = Dog + 1;
      console.log(Dog);
    } else if (results[0].label == "Cat") {
      img.src = 'cat_meow.gif';
      Cat = Cat + 1;
      console.log(Cat);
    } else if (results[0].label == "Parrot") {
      img.src = 'giphy(1).gif';
      Parrot = Parrot + 1;
      console.log(Parrot);
    } else {
      img.src = 'giphy.gif';
    }
  }
}