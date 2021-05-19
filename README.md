## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## Game World
    - modern day D&D. 
        - Instead of Hp, lose social media influence until fading into obscurity 
        - Classes:
            - Data Wrangler (cowboy)
            - Techno Wizard 
            - Internet Troll 
            - Influencer (like a bard?)
        -Quests:
            1) Livestreaming from a Monster's Den 
                - Hear a spooky sound, how do you respond?
                    1) drop your phone and run away
                        - lose 5 clout points 
                    2) investigate the sound 
                        - gain 10 clout points
                    3) face the camera and do something stupid (dab?)
                        - lose 50 clout points.  Nobody got time for that.
            2) Shopping at the apple store during a zombie outbreak (Black Friday)
                - A hoarde of zombies is running at you; how to respond?
                    1) use your laptop as a blunt weapon
                        - gain 10 clout (was 20 but you lost 10 because you don't have a computer now)
                    2) run away
                        - lose 5 clout points
                    3) go and talk to the news crew filming the outbreak
                        - gain 20 clout, you are on tv
            3) Going outside and a Dragon swoops down and blocks your path
                - Do you?
                    1) talk to the dragon and try to be friends; connect on LinkedIn
                        - gain 50 clout. You are friends with a dragon.
                    2) take a selfie with the dragon
                        - lose 20 clout. Dragons don't selfie.
                    3) try to distract the dragon with your phone's camera flash and hope your battery doesn't die.
                        - lose 10 clout. Your phone was at 5 percent when you went outside.
            
## Character Object
        user = {
            completed: {},
            clout: 10
            name: 
            class: 
        }