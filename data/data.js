const monsters = {
    id: 'monsters',
    title: 'Live-streaming from a den of monsters',
    requiredClout: 0,
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'something.jpg',
    description: `
        You walk into a dark industrial basement, phone held to record your venture.  You see piles of machine parts in the corners. There is a dank smell like an expired dairy product.  There is no sound but for the heavy echos of your footsteps and the thump of your heartbeat. You steady yourself, take a deep breath, and say "Don't forget to like, comment, and subscribe," as you hear a menacing growl from somewhere off in the darkness.  What do you do?
    `,
    choices: [{
        id: 'flee',
        description: 'Drop your phone and run away',
        result: `
            You are never going to be internet famous if you flee when the content creation gets tough.  Lose 5 clout points.
        `,
        clout: -5
    }, {
        id: 'investigate',
        description: 'Investigate the noise',
        result: `
            You make your way towards the noise, whispering to your future subscribers as the scene slowy illuminates before you.  You see a group of small, cat-like creatures, covered in reptilian scales, with three eyes instead of two. They rub against your leg and purr.  Gain 10 clout: the net is crazy for cats, even weird ones.
        `,
        clout: 10
    }, {
        id: 'stunt',
        description: 'You turn, face the camera, and dab.',
        result: `
            You cringe internally and realize your folly before your arms have even returned to your side. Lose 50 clout points. Ain't nobody got time for that.
        `,
        clout: -50
    }]
};

const shopping = {
    id: 'shopping',
    title: 'Zombies at the Apple Store',
    requiredClout: 0,
    map: {
        top: '17%',
        left: '37%'
    },
    image: 'appleStore.jpg',
    description: `
        You really need to get your computer fixed, but it is black friday and the apple store is bound to be packed.  That is why you camped outside the store all night to be the first in line when they open. You are alone but for a news van setting up to cover the black friday madness. As a putupon "genius" opens the doors to the oasis of modern design and technology, you hear a mob of what you assume are desperate consumers.  You turn to see a shambling horde of zombies.  Rotten flesh drips from their haggard frames in sheets. They only want to consume one thing: your brains! What do you do?
    `,
    choices: [{
        id: 'fight',
        description: 'Use your laptop as a club',
        result: `
            You feel the weight of your macbook in your hands, suddenly regretting that the computer was engineered to be so light and slim. You throw caution to the wind, grip the laptop tightly, and start swinging.  Gain 10 clout.  It would have been 20, but you can't post about this later with a broken computer.
        `,
        clout: 10
    }, {
        id: 'news',
        description: 'Run over and talk to the news crew',
        result: `
            You run over to the news crew, who is huddling behind a their van, out of sight of the zombies.  You are the only person in the vicinity who is not undead, so it is time for an interview!  Gain 20 clout; you are on tv!
        `,
        clout: 20
    }, {
        id: 'run',
        description: 'RUN AWAY!',
        result: `
            You take one look at the shambling horde, and decide that you have been sick of the walking dead for at least three seasons, and have no desire to LARP it.  You turn heal and run! Lose 5 clout. 
        `,
        clout: -5
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A walk interrupted',
    requiredClout: 0,
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'dragon.jpg',
    description: `
        You step outside your building into the morning sunlight. You squint from a combination of hangover and the intensity of the morning sun, and begin walking toward the coffee shop up the road.  Suddenly the sun is gone as a gargantuan dragon swoops overhead and lands on the ground before you.  Steam rises from its nostrils in plumes.  You stand, dumbfoudned, as it preens a bus-sized, pebbled leather wing. The dragon looks down at you with glowing golden eyes, and growls at you with a voice that shakes the windows of the houses around you. "Speak, little orc." What do you do?
    `,
    choices: [{
        id: 'befriend',
        description: 'Try to befriend the dragon',
        result: 'You stutter out a gretting.  The dragon rears its head and you prepare for the worst. The dragon bows in aquiescence, and growls an affirmation of friendship. Gain 50 clout: You are friends with a freaking dragon!',
        clout: 50
    }, {
        id: 'selfie',
        description: 'Take a Selfie with the Dragon',
        result: 'You turn your back to the dragon, and snap a selfie. Lose 20 clout.  Dragons do not take selfies',
        clout: -20
    }, {
        id: 'distract',
        description: 'Try to distract the dragon with the flash on your phone',
        result: 'Your phone promptly fades to black as you remember that it was only at 5 percent battery when you stepped outside. Whatever you were trying to do promptly puts you back at square one. Lose 10 clout.',
        clout: -10
    }]
};

const mars = {
    id: 'mars',
    title: 'Mars',
    requiredClout: 50,
    map: {
        top: '31%',
        left: '5%'
    },
    prerequisites: ['dragon', 'monsters'],
    image: 'mars.png',
    description: `You invested all of your money in DOGE coin and Elon sends you to Mars!`,
    choices: [{
        id: 'celebrate',
        description: 'Celebrate going into orbit with a shot',
        result: 'You take a drink as the rocket is in lift off and accidentally knock a control panel with your hip. This causes the rocket to crash burn. Your accident gets millions of views. Gain 50 clout.',
        clout: 50
    }, {
        id: 'death',
        description: 'You take your helmet off for the world to see you.',
        result: 'The vacuum of space causes you to implode. You cannot claim clout if you are dead. Lose 500 clout.',
        clout: -500
    }, {
        id: 'landing',
        description: 'You disembark on Mars after a long journey.',
        result: 'You are greeted with a squad of friendly robots and live happily ever after. Livestreaming from another planet changed the game entirely! Gain 100 clout.',
        clout: 100
    }]
};

const quests = [
    monsters, 
    shopping,
    dragon,
    mars
];


export default quests;