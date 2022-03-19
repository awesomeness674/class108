function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true }) //Accesing your microphone or audio
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DJ44CMMY0/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log('got Results')
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear- ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuarcy- ' + (results[0].confidence * 100).toFixed(2) + "%"
        document.getElementById("result_label").style.color = "rgb(" + random_number_b + "," +
            random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_b + "," +
            random_number_g + "," + random_number_r + ")";
        img1 = document.getElementById('alien1')
        img2 = document.getElementById('alien2')
        img3 = document.getElementById('alien3')
        img4 = document.getElementById('alien4')

        if (results[0].label == "Clapping") {
            img1.src = 'aliens-01.gif';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';
        } else if (results[0].label == "Bell") {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.gif';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';
        } else if (results[0].label == "Background Noise") {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.gif';
            img4.src = 'aliens-04.png';
        } else if (results[0].label == "drum") {
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.gif';
        }
    }
}