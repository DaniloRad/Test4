(function Test() {
    const bankOne = [{
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Heater-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    }, {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Heater-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    }, {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Heater-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    }, {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Heater-4',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    }, {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Clap',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    }, {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    }, {
        keyCode: 90,
        keyTrigger: 'Z',
        id: "Kick-n'-Hat",
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    }, {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    }, {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }, ];

    const bankTwo = [{
        keyCode: 81,
        keyTrigger: 'Q',
        id: 'Chord-1',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    }, {
        keyCode: 87,
        keyTrigger: 'W',
        id: 'Chord-2',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    }, {
        keyCode: 69,
        keyTrigger: 'E',
        id: 'Chord-3',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    }, {
        keyCode: 65,
        keyTrigger: 'A',
        id: 'Shaker',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    }, {
        keyCode: 83,
        keyTrigger: 'S',
        id: 'Open-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    }, {
        keyCode: 68,
        keyTrigger: 'D',
        id: 'Closed-HH',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    }, {
        keyCode: 90,
        keyTrigger: 'Z',
        id: 'Punchy-Kick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    }, {
        keyCode: 88,
        keyTrigger: 'X',
        id: 'Side-Stick',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    }, {
        keyCode: 67,
        keyTrigger: 'C',
        id: 'Snare',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }];

    function SearchForSrc1(Letter, Bank) {
        console.log("eo")
        var From;
        if (Bank === 1) {

            From = bankOne;

        } else {
            From = bankTwo;
        }

        for (let i = 0; i < From.length; i++) {
            console.log(Letter)
            if (From[i].keyTrigger === Letter) {
                return i;
            }

        }

    }
    //nemam vremena da stavim sve u jednu f-ju
    function SearchForSrc2(Code, Bank) {

        var From;
        if (Bank === 1) {

            From = bankOne;

        } else {
            From = bankTwo;
        }

        for (let i = 0; i < From.length; i++) {

            if (From[i].keyCode === Code) {
                return i;
            }

        }

    }
    var Power = document.getElementById("power");


    //Prvo sve da pozovemo
    var Keyboard = document.getElementsByClassName("keyboard")[0];
    Keyboard.addEventListener("click", PlaySoundOnClick);
    var Body = document.getElementsByTagName("body")[0];
    Body.addEventListener("keydown", PlaySoundOnKey);
    //Bank  i power
    var Bank = document.getElementById("bank");
    var snd = document.createElement("audio");


    var Volume = document.getElementById("volume");
    Volume.addEventListener("change", SliderVolume);
    var audioName=document.getElementById("audio_name");
    function SliderVolume(e) {

        snd.volume = e.target.value / 100;

    }

    function PlaySoundOnClick(e) {



        var KeyboardLetter = e.target.getAttribute("id");

        if (Bank.checked === false) {
            var NumberInBank = SearchForSrc1(KeyboardLetter, 1);
            snd.setAttribute("src", bankOne[NumberInBank].url);
            audioName.innerHTML=bankOne[NumberInBank].id;
        } else {
            var NumberInBank = SearchForSrc1(KeyboardLetter, 0);
            snd.setAttribute("src", bankTwo[NumberInBank].url);
            audioName.innerHTML=bankTwo[NumberInBank].id;

        }



        if (Power.checked) {
            snd.play();

        }

    }

    function PlaySoundOnKey(e) {

        var KeyboardLetter = e.keyCode;
        var ArrayOfKeyCode = [81, 87, 69, 65, 83, 68, 90, 88, 67];

        if (ArrayOfKeyCode.indexOf(KeyboardLetter) > -1) {
            if (Bank.checked === false) {
                var NumberInBank = SearchForSrc2(KeyboardLetter, 1);
                snd.setAttribute("src", bankOne[NumberInBank].url);

                audioName.innerHTML=bankOne[NumberInBank].id;


            } else {
                var NumberInBank = SearchForSrc2(KeyboardLetter, 0);
                snd.setAttribute("src", bankTwo[NumberInBank].url);
                audioName.innerHTML=bankTwo[NumberInBank].id;

            }



            if (Power.checked) {
                snd.play();

            }

        }





    }
})();