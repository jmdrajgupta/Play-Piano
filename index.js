const pianoKeys=document.querySelectorAll(".piano-keys .key"),
volumeSlider=document.querySelector(".volume-slider input"),
keysCheckbox=document.querySelector(".keys-checkbox input");
let allkeys = [],
 audio=new Audio("tunes/a.wav"); //by default audio src is "a" tune
 
const playTune=(key)=>{
    audio.src=`tunes/${key}.wav`; // paassing audio src based on key pressed 
    audio.play(); //playing audio
   

    const clickedkey=document.querySelector(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(()=>{
        //Removing active class after 150ms from the clicked the  element
        clickedkey.classList.remove("active");

    },150);

}

pianoKeys.forEach(key=>{
    allkeys.push(key.dataset.key) // adding datakey value to allkeys array 
    //callign playtune function with passing data-key value asan argument 
    key.addEventListener("click",()=>playTune(key.dataset.key));
});

const handleVolume=(e)=>{
    audio.volume=e.target.value; //passing the slider value as an audio volume
}

const showHideKeys =()=>{
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key=>key.classList.toggle("hide"));
}
const pressKey =(e)=>{
    // if the pressed key in the allkeys only call the playtune function
    if(allkeys.includes(e.keys))  playTune(e.key);
}

document.addEventListener("click",showHideKeys);
document.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressKey);

