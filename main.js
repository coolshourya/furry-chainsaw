Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function Gulper(){
    Webcam.snap(function (data_uri){
        document.getElementById("snappy").innerHTML='<img id="GULP" src="'+data_uri+'">';
    })
}

console.log("ml5 version",ml5.version)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rxnLPEOin/',modelLoaded);

function modelLoaded(){
console.log("model has been loaded");
}

function speak(){
    synth=window.speechSynthesis;
    data1="my first prediction is "+prediction1;
    data2="and my second prediction is "+prediction2;
    utterthis=new SpeechSynthesisUtterance(data1+data2);
    synth.speak(utterthis);
}

function king(){
    img=document.getElementById("GULP");
    classifier.classify(img,gotResult);
}

function gotResult(error,result){
if(error){
    console.error(error);
}
else{
    console.log(result);
    document.getElementById("rizz#1").innerHTML=result[0].label;
    document.getElementById("rizzler#1").innerHTML=result[1].label;
    prediction1=result[0].label;
    prediction2=result[1].label;
    speak();
    if(prediction1=="thumbs up"){
     document.getElementById("queen#1").innerHTML="&#128522;";
    }
  else if(prediction1=="spider-man hand"){
     document.getElementById("queen#1").innerHTML="&#128532";
    }
       else if(prediction1=="thumbs down"){
        document.getElementById("queen#1").innerHTML="&#128548";
       }
       if(prediction2=="thumbs up"){
        document.getElementById("kind#1").innerHTML="&#128522;";
       }
     else if(prediction2=="spider_man hand"){
           document.getElementById("kind#1").innerHTML="&#128532";
          }
          else if(prediction2=="thumbs down"){
           document.getElementById("kind#1").innerHTML="&#128548";
          }
}
}