import React, { useRef, useEffect, useState } from "react";
import "./Components.scss";
import Panel from "./Panel";
import { useSelector } from "react-redux";
import ShowChart from "./ShowChart";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, OrbitControls, Stage } from "@react-three/drei";
import Keyboard from "./Keyboard";
import { useDispatch } from "react-redux";
import Jump from "./Jump";

var paragraph_1_medium =
  "Discovering new things can be both thrilling and rewarding. When you engage in learning, your brain becomes more adept and resilient. There are numerous pathways to acquire knowledge, such as reading books, seeking answers to questions, or watching informative videos. Different individuals possess unique learning preferences; some thrive when actively participating in hands-on experiences, while others absorb information more effectively through verbal explanations. Its essential to identify the learning method that suits you best. Remember, everyone learns at their own pace, so its completely normal if certain concepts take time to grasp. Persevere in your efforts and embrace the valuable lessons learned from mistakes, as they serve as stepping stones in your educational journey. Envision your brain as a muscle—the more you exercise it, the stronger it becomes. Challenge yourself to broaden your horizons each day, whether its by mastering a new vocabulary word, refining a skill, or uncovering fascinating facts about the world. Revel in the process of intellectual growth and self-improvement. Over time, you will be amazed at the vast expanse of knowledge you have accumulated and the progress you have made. Stay curious, keep exploring, and remain open to the endless possibilities waiting to be discovered! With determination and a thirst for knowledge, you will embark on an enriching journey of lifelong learning.Maintaining a healthy lifestyle is essential for overall well-being. It involves making wise choices regarding nutrition, exercise, sleep, and stress management. Eating a balanced diet rich in fruits, vegetables, lean proteins, and whole grains provides the body with essential nutrients to function optimally. Regular physical activity not only helps in maintaining a healthy weight but also improves cardiovascular health, boosts mood, and reduces the risk of chronic diseases like diabetes and hypertension. Adequate sleep is crucial for the body to rest and rejuvenate, promoting better cognitive function and emotional well-being. Managing stress through relaxation techniques such as meditation, deep breathing, or engaging in hobbies can significantly improve mental health and overall quality of life. Developing these healthy habits requires dedication and consistency but yields long-term benefits for both physical and mental health. By prioritizing wellness and adopting a holistic approach to health, individuals can enjoy a higher quality of life and reduce the risk of illness and disease.Protecting the environment is vital for the sustainability of our planet and future generations. It involves taking actions to reduce pollution, conserve natural resources, and preserve biodiversity. Simple everyday practices such as reducing, reusing, and recycling can significantly decrease waste production and lessen the strain on landfills. Conserving water by fixing leaks, using water-saving appliances, and practicing mindful consumption helps ensure access to clean water for all beings. Switching to renewable energy sources like solar or wind power reduces reliance on fossil fuels, mitigating climate change and its detrimental effects on the environment. Preserving natural habitats and supporting conservation efforts for endangered species helps maintain biodiversity and ecological balance. Engaging in community clean-up initiatives and advocating for environmentally-friendly policies can create positive change on a larger scale. By making conscious choices and taking collective action, individuals can contribute to the protection and preservation of our precious planet Earth.Understanding how to manage money effectively is crucial for financial stability and security. Financial literacy encompasses knowledge and skills related to budgeting, saving, investing, and debt management. Creating a budget helps track income and expenses, enabling individuals to prioritize spending and save for future goals. Building an emergency fund provides a financial safety net for unexpected expenses or emergencies, reducing reliance on credit and avoiding debt accumulation. Learning about different investment options such as stocks, bonds, and mutual funds can help grow wealth over time and achieve long-term financial goals like retirement. Managing debt responsibly by making timely payments and avoiding high-interest loans prevents financial strain and improves creditworthiness. Educating oneself about financial concepts like interest rates, inflation, and risk diversification empowers individuals to make informed decisions about their money. Teaching children about money management from a young age instills healthy financial habits and prepares them for financial independence in adulthood. By prioritizing financial education and adopting prudent financial practices, individuals can build a strong foundation for financial well-being and achieve financial freedom.";

var paragraph_1_hard =
  "Quantum mechanics, a fundamental theory in physics, describes the behavior of particles at the smallest scales of existence. It originated in the early 20th century as physicists sought to understand the behavior of atoms and subatomic particles. Unlike classical mechanics, which governs the motion of larger objects, quantum mechanics introduces concepts such as superposition and entanglement, challenging our intuitive understanding of the physical world. One of its key principles, the wave-particle duality, suggests that particles such as electrons exhibit both wave-like and particle-like properties, depending on the experimental context. Another intriguing aspect of quantum mechanics is the uncertainty principle, which states that it is impossible to simultaneously determine certain pairs of properties, such as position and momentum, with arbitrary precision. Despite its counterintuitive nature, quantum mechanics has found practical applications in various fields, including electronics, telecommunications, and cryptography. The development of quantum computing, harnessing the principles of quantum mechanics, holds the promise of revolutionizing computational power, potentially solving complex problems beyond the capabilities of classical computers.Existential philosophy explores the nature of existence and the individuals experience of being in the world. Rooted in the works of philosophers such as Søren Kierkegaard, Friedrich Nietzsche, and Jean-Paul Sartre, existentialism emphasizes subjective experience, freedom, and personal responsibility. It rejects the notion of a predetermined essence or purpose for human beings, asserting instead that individuals create their own meaning through their choices and actions. Existentialists grapple with fundamental questions about the nature of existence, the search for authenticity, and the inevitability of suffering and death. They confront the existential dilemma of confronting the void of meaning in a seemingly indifferent universe, yet finding significance and purpose in the face of absurdity. Existential philosophy challenges individuals to confront their own existence with courage and integrity, embracing the freedom to define themselves and their lives authentically, despite the inherent uncertainty and anxiety of human existence.String theory is a theoretical framework in physics that seeks to unify the fundamental forces of nature—gravity, electromagnetism, the weak nuclear force, and the strong nuclear force—by describing particles as one-dimensional strings rather than point-like particles. It emerged in the late 20th century as a candidate for a theory of everything, aiming to reconcile quantum mechanics and general relativity, which have remained incompatible within the current framework of physics. According to string theory, the properties of elementary particles arise from the vibrational modes of these strings, which can manifest as different particle types depending on their vibrational patterns. One of the intriguing features of string theory is its prediction of additional spatial dimensions beyond the familiar three dimensions of space and one dimension of time. While string theory has inspired significant mathematical developments and offers a compelling framework for understanding the fundamental structure of the universe, it remains a highly speculative and mathematically complex theory, lacking empirical confirmation. Despite its theoretical challenges, string theory continues to captivate physicists and mathematicians, driving ongoing research into its implications for our understanding of the cosmos.Postmodernism is a philosophical and cultural movement that emerged in the mid-20th century as a critique of modernism and its emphasis on grand narratives, universal truths, and objective reality. It rejects the notion of absolute truth and instead highlights the plurality of perspectives, experiences, and interpretations. Postmodernists argue that knowledge and truth are socially constructed and shaped by power dynamics, language, and historical context. They question the stability of identity, the authority of institutions, and the binary distinctions that structure society, such as gender, race, and class. Postmodernism is characterized by its skepticism towards metanarratives and its celebration of fragmentation, ambiguity, and irony. It has had a profound impact on various fields, including literature, art, architecture, and philosophy, challenging traditional notions of authorship, representation, and aesthetic value. Critics of postmodernism argue that its emphasis on relativism and skepticism can lead to moral and intellectual nihilism, undermining notions of objective reality and ethical principles. Nevertheless, postmodernism continues to shape contemporary discourse, offering insights into the complexities of culture, identity, and knowledge production in an increasingly interconnected and diverse world.";

var punctuation_paragraph =
  'The ! weather ; was : sunny, but the clouds  were " gathering – ominously. Birds chirped ( happily ) in the trees, - oblivious to the impending storm. * Suddenly, % a # gust of wind @ swept through, carrying with it leaves, branches, and debris. People hurriedly rushed to their homes, seeking shelter from the approaching tempest. The sky darkened, and thunder rumbled ominously in the distance.Despite the chaos outside, * inside + her cozy home, Sarah remained calm. She brewed a steaming cup of tea, lit a few candles, and nestled into her favorite chair.The ! party ; was : lively, but the guests were " growing – restless. Music played ( loudly ) in the background, - drowning out the chatter. * Suddenly, % a # burst of laughter @ erupted, filling the room with joy. People danced wildly, their movements fluid and uninhibited. The atmosphere crackled with excitement, and anticipation hung in the air.As the night wore on, the energy level rose, reaching a fever pitch. Conversations became animated, punctuated by exclamations and gestures. * Glasses clinked, % and # toasts @ were made, celebrating friendship and good times. Plates piled high with delicious food circulated, tempting even the most restrained of appetites.The ! journey ; was : long, but the travelers were " filled – with excitement. They embarked ( eagerly ) on their adventure, - eager to explore new horizons. * Suddenly, % a # breathtaking vista @ appeared before them, stretching as far as the eye could see. Mountains soared majestically into the sky, their peaks kissed by wisps of clouds. Valleys lay nestled between, verdant and inviting.With each step, the landscape unfolded like a living tapestry, each scene more stunning than the last. * Rivers meandered lazily, % their # waters @ sparkling in the sunlight. Fields of wildflowers swayed in the breeze, painting the countryside in a riot of colors. Birds soared overhead, their wings outstretched as if embracing the freedom of the open sky.As night fell, the travelers made camp, their laughter punctuating the stillness of the evening. * A # crackling fire @ cast dancing shadows on the trees, iAmpersand, ellipsis, question mark? Exclamation point! Colon: semicolon; hyphen-dash, underscore_ period. Comma, apostrophes, quotation marks" parentheses (brackets) and the interrobang?!';
var numbers_paragraph =
  "The 1 cat 2 jumped 3 over 4 the 5 fence, 6 chasing 7 after 8 a 9 butterfly 10 that 11 danced 12 in 13 the 14 air 15 like 16 a 17 fleeting 18 dream. 19 Meanwhile, 20 21 seven 22 birds 23 perched 24 on 25 the 26 nearby 27 branches, 28 chirping 29 melodies 30 that 31 echoed 32 through 33 the 34 tranquil 35 meadow. 36 A 37 squirrel 38 scurried 39 across 40 the 41 grass, 42 pausing 43 briefly 44 to 45 nibble 46 on 47 a 48 fallen 49 acorn. 50 As 51 the 52 sun 53 dipped 54 below 55 the 56 horizon, 57 casting 58 hues 59 of 60 orange 61 and 62 pink 63 across 64 the 65 sky, 66 a 67 group 68 of 69 three 70 children 71 laughed 72 and 73 played 74 in 75 the 76 fading 77 light, 78 their 79 joy 80 infectious 81 to 82 all 83 who 84 witnessed 85 it.The 100 cat 57 jumped 3 over -20 the 500 fence, 6 chasing 7 after 80 a 9 butterfly 450 that 11 danced 12 in -30 the 250 air 100 like 16 a -5 fleeting 18 dream. 19 Meanwhile, 800 21 seven 430 birds 23 perched -15 on 25 the 26 nearby -300 branches, 28 chirping 29 melodies 1000 that 31 echoed -50 through 33 the 34 tranquil 35 meadow. 36 A 900 squirrel 38 scurried 39 across 0 the 41 grass, 42 pausing 43 briefly 44 to 700 nibble 46 on 47 a 48 fallen 49 acorn. 50 As 999 the 2000 sun 53 dipped 54 below 300 the 56 horizon, 57 casting 700 hues -900 of 60 orange 61 and 62 pink 63 across 64 the 65 sky, 66 a 67 group 68 of -600 three 70 children 71 laughed 72 and 73 played 74 in 75 the -1000 fading 77 light, 78 their 79 joy 80 infectious -20 to 82 all 83 who 84 witnessed 85 it.The 123 cat 456 jumped -789 over 101 the -2020 fence, 303 chasing 404 after 505 a 606 butterfly 707 that 808 danced -909 in 1010 the -1111 air 1212 like 1313 a -1414 fleeting 1515 dream. 1616 Meanwhile, 1717 18 seven 19 birds -20 perched 21 on 22 the -23 nearby 24 branches, 25 chirping -26 melodies 27 that 28 echoed -29 through 30 the 31 tranquil 32 meadow. 33 A 34 squirrel 35 scurried 36 across -37 the 38 grass, 39 pausing 40 briefly -41 to 42 nibble 43 on 44 a -45 fallen 46 acorn. 47 As 48 the 49 sun -50 dipped 51 below 52 the 53 horizon, 54 casting -55 hues 56 of 57 orange -58 and 59 pink 60 across 61 the -62 sky, 63 a 64 group 65 of -66 three 67 children 68 laughed 69 and -70 played 71 in 72 the 73 fading 74 light, 75 their -76 joy 77 infectious 78 to -79 all 80 who 81 witnessed 82 it.";
var special_characters_paragraph =
  "The moon& shined brightly, casting a &mysterious glow upon the &landscape. Trees +danced in the wind, their leaves rustling like whispers in the night. A #cat^ prowled stealthily, its eyes gleaming with %curiosity. Suddenly, a flash of lightning struck, illuminating the sky with its electric brilliance. Rain began to fall, pitter-patter, on the rooftops.The $sun$ shines brightly in the sky. Birds sing their morning song, welcoming the dawn. Flowers +bloom in a riot of colors, painting the world with their beauty.The $sun$ shines brightly in the sky! Birds sing their morning song, welcoming the dawn. Flowers +bloom in a riot of colors, painting the world with their beauty&The* sun+ shines! brightly, illuminating@ the! world. Birds sing~ their~ morning song, welcoming& the dawn. Flowers+ bloom in a riot% of colors, painting the world with their beauty. @The* moon$ casts^ its# gentle+ glow& upon! the& earth. Stars* twinkle~ in! the* night% sky, shining+ like+ diamonds. Clouds# drift& lazily,^ their+ shapes@ morphing+ with& the+ breeze. A^ lone* owl$ hoots, its# call+ echoing+ through& the* darkness. The+ world+ sleeps,^ cradled& in+ the% arms& of* night,~ while^ the* universe& dances& around$ it. Every+ moment* is& a+ symphony% of* silence,^ punctuated& by+ the* occasional+ rustle& of$ leaves& and# the^ distant+ howl& of$ a+ wolf.~ And+ as^ the+ night* unfolds,^ it& reveals& its+ secrets,^ each* one& more& enchanting+ than& the^ last.@In$ the# heart& of* the+ forest,^ a+ stream! murmurs& softly+ to+ itself.~ Sunlight+ filters& through% the* canopy,^ dappling& the+ ground& with# patches@ of* light.~ Birds+ chirp& and# flutter& in+ the% branches,^ their+ songs& filling& the+ air& with+ melody.% Flowers$ sway& in+ the* gentle+ breeze,^ their+ petals& kissed& by+ the+ suns* warm% rays.~ Butterflies+ dance& among% the# blooms,^ their+ colorful& wings& adding& to+ the% tapestry& of* life.~ Its+ a+ tranquil& scene,^ a+ sanctuary& of* peace& and% serenity.~ Here,+ time* slows& and# worries& fade& away,^ replaced& by+ a+ sense& of* harmony& and+ connection.^ And+ as^ the+ day* fades& into+ dusk,^ the+ forest& whispers& its+ secrets& to+ those& who# listen.";

var paragraph_1_easy =
  "Once upon a time, in a small village nestled among green hills, there lived a boy named Tim. Tim was a curious lad with big dreams. Every morning, he would wake up to the chirping of birds and the gentle breeze blowing through his window. He would then set out on his adventures, exploring the nooks and crannies of the village.One day, while wandering in the forest, Tim stumbled upon a hidden cave. With excitement bubbling in his heart, he bravely entered the cave, eager to uncover its secrets. Inside, he found glittering rocks and mysterious symbols carved into the walls. As he ventured deeper, he discovered a chest filled with ancient treasures.Over time, Tim became known as the village hero, sharing his discoveries and tales of adventure with his friends and neighbors. He learned that courage and curiosity could lead to extraordinary experiences.From that day forward, Tim continued to explore the world around him, seeking out new wonders and making memories that would last a lifetime. And so, the story of Tim, the adventurous boy from the village, became legend.In a sunny town by the sea, there was a cheerful girl named Lily. Lily loved spending her days exploring the sandy shores and collecting colorful seashells. With each step she took, she felt the warmth of the sun on her face and the cool breeze in her hair. Sometimes, she would build sandcastles with towers so tall they reached the sky. Other times, she would chase seagulls along the waters edge, giggling as they soared into the clear blue sky.One day, while walking along the beach, Lily stumbled upon a message in a bottle washed ashore. With trembling hands, she carefully uncorked the bottle and read the note inside. It was a heartfelt message from a sailor on a faraway ship, longing to return home to his family. Touched by the message, Lily vowed to help the sailor find his way back home.Armed with determination and kindness in her heart, Lily embarked on a journey to find the sailors family. Along the way, she encountered friendly dolphins, playful crabs, and majestic whales. With each new friend she made, Lily felt her spirits soar higher.After many days of searching, Lily finally reached the sailors home village. With tears of joy, she reunited the sailor with his family, bringing happiness and hope to all who witnessed their reunion. And so, in the town by the sea, Lilys act of kindness became a beacon of light, reminding everyone that even the smallest gestures can make a big difference.Seeking out new knowledge can be an exhilarating journey. As you embark on the path of learning, your brain undergoes a transformative process, becoming more adept and resilient. There are myriad avenues through which one can acquire knowledge: delving into books, posing inquiries, or engaging with educational videos. Different individuals have distinct learning styles; while some thrive by actively participating in hands-on experiences, others absorb information more effectively through auditory instruction. Its crucial to discern the method that suits you best. Remember, the pace of learning varies from person to person, so its perfectly normal if concepts dont immediately click. Patience is key; persist in your efforts and embrace the lessons gleaned from mistakes, for they serve as invaluable stepping stones in your educational journey. Picture your brain as a muscle—the more you exercise it, the more robust it becomes. Challenge yourself to broaden your horizons daily, whether its by mastering a new vocabulary word, honing a skill, or discovering intriguing facts about the world. Revel in the process of intellectual growth and self-improvement. With time, youll marvel at the vast expanse of knowledge youve amassed and the strides you have made. Stay curious, keep exploring, and remain open to the endless possibilities that await discoveryLearning new things can be really fun! When you learn, your brain gets better and stronger. There are many ways to learn, like reading books, asking questions, or watching videos. Some people like to do things by themselves to learn, while others like when someone explains things to them. Its important to find what works best for you. Remember, everyone learns at their own speed, so dont worry if you dont get something right away. Take your time and keep trying. Making mistakes is okay because they help you learn too. Think of your brain like a muscle. The more you use it, the stronger it gets. So, try to learn something new every day. Maybe its a new word, a new skill, or a cool fact about the world. Enjoy the process of learning and growing. You will be surprised at how much you learn and improve over time. Keep exploring, keep asking questions, and keep that curiosity alive. Who knows what amazing things you will find out next";

const shuffleWords = (paragraph) => {
  const words = paragraph.split(" ");
  const shuffledWords = words.sort(() => Math.random() - 0.5);
  return shuffledWords.join(" ");
};

// On First Start of Website only the easy paragraph will be fetched
const paragraphs = [
  paragraph_1_easy,
  paragraph_1_medium,
  paragraph_1_hard,
  punctuation_paragraph,
  numbers_paragraph,
  special_characters_paragraph,
];
paragraphs[0] = shuffleWords(paragraphs[0]);

var characters = Array.from(paragraphs[0]);

const MainPart = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [charIndex, setCharIndex] = useState(0);
  const [correctIndexes, setCorrectIndexes] = useState([]);
  const [incorrectIndexes, setIncorrectIndexes] = useState([]);
  const [repaint, setrepaint] = useState("");
  const check = useSelector((store) => store.check);
  const isLoaded = useSelector((store) => store.isLoaded);
  const isLoadedJump = useSelector((store) => store.isLoadedJump);

  useEffect(() => {
    inputRef.current.focus();
  }, [isLoaded, isLoadedJump]);
  const [isTimer, setisTimer] = useState(true);

  const [isTimerForTrigger, setisTimerForTrigger] = useState(false); // const [nextLine, setnextLine] = useState(false);
  const [triggerCondition, settriggerCondition] = useState(false);
  const [countdownSecs, setcountdownSecs] = useState(60);
  const [handleBackSpace, sethandleBackspace] = useState(false);
  const [showChart, setshowChart] = useState(false);
  const [showTime, setshowTime] = useState(false);
  const [jumpScrollbar, setjumpScrollbar] = useState([]);
  const scrollbarRefrence = useRef();
  const [useEffectRun, setuseEffectRun] = useState(false);

  // Calculations
  const [totalWords, settotalWords] = useState(0);
  const [eachsecWPM, seteachsecWPM] = useState([]);
  const [eachsecWordCalculation, seteachsecWordCalculation] = useState(0);
  const [totalCharacters, settotalCharacters] = useState(0);
  const [timeOfEach, settimeOfEach] = useState(0);
  const [accuracy, setaccuracy] = useState(0);
  // Calculations
  const [previosIndexChar, setpreviosIndexChar] = useState(0);
  const [eachsecWrongIndexes, seteachsecWrongIndexes] = useState([]);
  const [stopCountdown, setstopCountdown] = useState(false);
  useEffect(() => {
    if (useEffectRun) {
      let eachSecCalculation,
        wordsCalclulation = 0;
      let wrongMistakes = 0;

      for (let i = previosIndexChar; i <= charIndex; i++) {
        if (correctIndexes.includes(i)) {
          wordsCalclulation = wordsCalclulation + 1;
        } else if (incorrectIndexes.includes(i)) {
          wrongMistakes = wrongMistakes + 1;
        }
      }
      seteachsecWPM([...eachsecWPM, wordsCalclulation]);
      seteachsecWrongIndexes([...eachsecWrongIndexes, wrongMistakes]);

      seteachsecWordCalculation(eachsecWordCalculation + 1);
      setpreviosIndexChar(charIndex);
    } else {
      setuseEffectRun(true);
    }
  }, [countdownSecs]);
  useEffect(() => {
    if (check === "") {
    } else if (check === "elementary") {
      paragraphs[0] = shuffleWords(paragraphs[0]);
      characters = Array.from(paragraphs[0]);
      setrepaint("e");
    } else if (check === "intermediate") {
      paragraphs[1] = shuffleWords(paragraphs[1]);
      characters = Array.from(paragraphs[1]);
      setrepaint("i");
    } else if (check === "master") {
      paragraphs[2] = shuffleWords(paragraphs[2]);
      characters = Array.from(paragraphs[2]);
      setrepaint("m");
    } else if (check === "punctuation") {
      paragraphs[3] = shuffleWords(paragraphs[3]);
      characters = Array.from(paragraphs[3]);
      setrepaint("p");
    } else if (check === "numbers") {
      paragraphs[4] = shuffleWords(paragraphs[4]);
      characters = Array.from(paragraphs[4]);
      setrepaint("n");
    } else if (check === "scharacters") {
      paragraphs[5] = shuffleWords(paragraphs[5]);
      characters = Array.from(paragraphs[5]);
      setrepaint("s");
    } else if (check === "fifteenSecs") {
      setshowTime(true);
      setisTimer(false);
    } else if (check === "thirtySecs") {
      setshowTime(true);
      setisTimer(false);
    } else if (check === "fourtySecs") {
      setshowTime(true);
      setisTimer(false);
    } else if (check === "fiftySecs") {
      setshowTime(true);
      setisTimer(false);
    } else if (check === "RETRY") {
      setCharIndex(0);
      setCorrectIndexes([]);
      setIncorrectIndexes([]);
      setrepaint("");
      setisTimer(true);
      setisTimerForTrigger(false);
      settriggerCondition(false);
      setcountdownSecs(60);
      sethandleBackspace(false);

      setshowChart(false);
      setshowTime(false);
      setjumpScrollbar([]);
      setuseEffectRun(false);
      settotalWords(0);
      seteachsecWPM([]);
      seteachsecWordCalculation(0);
      settotalCharacters(0);
      settimeOfEach(0);
      setaccuracy(0);
      setpreviosIndexChar(0);
      seteachsecWrongIndexes([]);
      setstopCountdown(false);
      setinitialTriggerzero(false);
    }
  }, [check]);

  useEffect(() => {
    inputRef.current.focus();
    for (let i = 0; i < 10; i++) {
      setjumpScrollbar(!jumpScrollbar[i]);
    }
  }, []);

  useEffect(() => {
    let intervalId;

    // Function to decrement countdown every second
    const decrementCountdown = () => {
      setcountdownSecs((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(intervalId); // Stop the countdown when it reaches 0
          let counter = 0;
          for (let i = 0; i <= charIndex; i++) {
            if (characters[i] === " ") {
              counter = counter + 1;
            }
          }
          settotalWords(counter);

          settotalCharacters(charIndex);
          switch (check) {
            case "fifteenSecs":
              settimeOfEach(15);
              break;
            case "thirtySecs":
              settimeOfEach(30);
              break;
            case "fourtySecs":
              settimeOfEach(45);
              break;
            case "fiftySecs":
              settimeOfEach(60);
              break;
          }

          setaccuracy(((correctIndexes.length / charIndex) * 100).toFixed(2));
          setshowChart(true);
          setrepaint("s");
          return 0;
        }
        if (stopCountdown) {
          clearInterval(intervalId);
          return 0;
        }
        return prevCountdown - 1;
      });
    };

    // Start the countdown when trigger condition is met
    if (triggerCondition) {
      intervalId = setInterval(decrementCountdown, 1000);
    }

    // Cleanup function to clear interval when trigger condition changes or component unmounts
    return () => clearInterval(intervalId);
  }, [triggerCondition, countdownSecs]);

  const [initialTriggerzero, setinitialTriggerzero] = useState(false);
  useEffect(() => {
    if (initialTriggerzero) {
      dispatch({ type: "SHOWANIMATIONS" });
    } else setinitialTriggerzero(true);
  }, [triggerCondition]);
  const handleChange = (e) => {
    if (charIndex === 0) {
      if (!isTimerForTrigger) {
        settriggerCondition(true);
        switch (check) {
          case "fifteenSecs":
            setcountdownSecs(15);
            break;

          case "thirtySecs":
            setcountdownSecs(30);
            break;

          case "fourtySecs":
            setcountdownSecs(45);
            break;

          case "fiftySecs":
            setcountdownSecs(60);
            break;
          default:
            setcountdownSecs(60);
            break;
        }
      }

      setisTimerForTrigger(true);
    }

    let typedChar = e.target.value.slice(-1);
    let characterToMatch = characters[charIndex];

    if (!handleBackSpace) {
      if (typedChar === characterToMatch) {
        setCorrectIndexes([...correctIndexes, charIndex]);
      } else {
        setIncorrectIndexes([...incorrectIndexes, charIndex]);
      }

      setCharIndex(charIndex + 1);
    }

    if (isTimer) {
      if (charIndex >= 149 || countdownSecs <= 0) {
        let counter = 0;
        for (let i = 0; i <= charIndex; i++) {
          if (characters[i] === " ") {
            counter = counter + 1;
          }
        }
        settotalWords(counter);
        settotalCharacters(charIndex);
        settimeOfEach(60);

        setaccuracy(((correctIndexes.length / charIndex) * 100).toFixed(2));
        setstopCountdown(true);
        setshowChart(true);
      }
    }

    let divUpp = document.getElementById("divUp");

    if (charIndex === 40 && !jumpScrollbar[0]) {
      setjumpScrollbar(!jumpScrollbar[0]);
      divUpp.classList.remove("overflow-hidden");
      divUpp.classList.add("overflow-auto");
      scrollbarRefrence.current.scrollTop += 36;
      divUpp.classList.remove("overflow-auto");
      divUpp.classList.add("overflow-hidden");
    } else if (charIndex === 80 && !jumpScrollbar[1]) {
      setjumpScrollbar(!jumpScrollbar[1]);
      divUpp.classList.remove("overflow-hidden");
      divUpp.classList.add("overflow-auto");
      scrollbarRefrence.current.scrollTop += 36;
      divUpp.classList.remove("overflow-auto");
      divUpp.classList.add("overflow-hidden");
    } else if (charIndex === 120 && !jumpScrollbar[2]) {
      setjumpScrollbar(!jumpScrollbar[2]);
      divUpp.classList.remove("overflow-hidden");
      divUpp.classList.add("overflow-auto");
      scrollbarRefrence.current.scrollTop += 36;
      divUpp.classList.remove("overflow-auto");
      divUpp.classList.add("overflow-hidden");
    } else if (charIndex === 160 && !jumpScrollbar[3]) {
      setjumpScrollbar(!jumpScrollbar[3]);
      divUpp.classList.remove("overflow-hidden");
      divUpp.classList.add("overflow-auto");
      scrollbarRefrence.current.scrollTop += 36;
      divUpp.classList.remove("overflow-auto");
      divUpp.classList.add("overflow-hidden");
    } else if (charIndex === 200 && !jumpScrollbar[4]) {
      setjumpScrollbar(!jumpScrollbar[4]);
      divUpp.classList.remove("overflow-hidden");
      divUpp.classList.add("overflow-auto");
      scrollbarRefrence.current.scrollTop += 36;
      divUpp.classList.remove("overflow-auto");
      divUpp.classList.add("overflow-hidden");
    } else if (charIndex === 240 && !jumpScrollbar[5]) {
      setjumpScrollbar(!jumpScrollbar[5]);
      divUpp.classList.remove("overflow-hidden");
      divUpp.classList.add("overflow-auto");
      scrollbarRefrence.current.scrollTop += 36;
      divUpp.classList.remove("overflow-auto");
      divUpp.classList.add("overflow-hidden");
    } else if (charIndex === 280 && !jumpScrollbar[6]) {
      setjumpScrollbar(!jumpScrollbar[6]);
      divUpp.classList.remove("overflow-hidden");
      divUpp.classList.add("overflow-auto");
      scrollbarRefrence.current.scrollTop += 36;
      divUpp.classList.remove("overflow-auto");
      divUpp.classList.add("overflow-hidden");
    } else if (charIndex === 320 && !jumpScrollbar[7]) {
      setjumpScrollbar(!jumpScrollbar[7]);
      divUpp.classList.remove("overflow-hidden");
      divUpp.classList.add("overflow-auto");
      scrollbarRefrence.current.scrollTop += 36;
      divUpp.classList.remove("overflow-auto");
      divUpp.classList.add("overflow-hidden");
    }
  };

  const isCorrect = (index) => correctIndexes.includes(index);
  const isIncorrect = (index) => incorrectIndexes.includes(index);

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      sethandleBackspace(true);
      setCharIndex(charIndex - 1);
      if (isCorrect(charIndex - 1)) {
        setCorrectIndexes((prevIndexes) => {
          // Filter out the index you want to exclude
          const newIndexes = prevIndexes.filter(
            (index) => index !== charIndex - 1
          );
          return newIndexes;
        });
      } else if (isIncorrect(charIndex - 1)) {
        setIncorrectIndexes((prevIndexes) => {
          // Filter out the index you want to exclude
          const newIndexes = prevIndexes.filter(
            (index) => index !== charIndex - 1
          );
          return newIndexes;
        });
      }
    } else sethandleBackspace(false);

    if (e.key === " ") {
      dispatch({ type: "JUMP" });

      const cursorPosition = e.target.selectionStart;

      var nextSpaceIndex = characters.indexOf(" ", cursorPosition);

      setCharIndex(nextSpaceIndex);
      var counter = 0;
      var counternextSpaceIndex = nextSpaceIndex;
      while (characters[counternextSpaceIndex + 1] != " ") {
        counter++;
        counternextSpaceIndex++;
      }

      const textArea = document.getElementById("myTextarea");

      for (let i = 0; i < nextSpaceIndex - cursorPosition; i++) {
        textArea.value = textArea.value + " ";
      }

      if (
        (cursorPosition < 40 && nextSpaceIndex > 40) ||
        (nextSpaceIndex < 40 && nextSpaceIndex + counter > 40)
      ) {
        textArea.value = textArea.value + "\n";
        e.preventDefault();
        setCharIndex(nextSpaceIndex + 1);
      } else if (
        (cursorPosition < 80 && nextSpaceIndex > 80) ||
        (nextSpaceIndex < 80 && nextSpaceIndex + counter > 80)
      ) {
        textArea.value = textArea.value + "\n";
        e.preventDefault();
        setCharIndex(nextSpaceIndex + 1);
      } else if (
        (cursorPosition < 120 && nextSpaceIndex > 120) ||
        (nextSpaceIndex < 120 && nextSpaceIndex + counter > 120)
      ) {
        textArea.value = textArea.value + "\n";
        e.preventDefault();
        setCharIndex(nextSpaceIndex + 1);
      } else if (
        (cursorPosition < 160 && nextSpaceIndex > 160) ||
        (nextSpaceIndex < 160 && nextSpaceIndex + counter > 160)
      ) {
        textArea.value = textArea.value + "\n";
        e.preventDefault();
        setCharIndex(nextSpaceIndex + 1);
        scrollbarRefrence.current.scrollTop += 36;
      } else if (
        (cursorPosition < 200 && nextSpaceIndex > 200) ||
        (nextSpaceIndex < 200 && nextSpaceIndex + counter > 200)
      ) {
        textArea.value = textArea.value + "\n";
        e.preventDefault();
        setCharIndex(nextSpaceIndex + 1);
      } else if (
        (cursorPosition < 240 && nextSpaceIndex > 240) ||
        (nextSpaceIndex < 240 && nextSpaceIndex + counter > 240)
      ) {
        textArea.value = textArea.value + "\n";
        e.preventDefault();
        setCharIndex(nextSpaceIndex + 1);
      }
    }
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  function handleSecsDisplay() {
    switch (check) {
      case "fifteenSecs":
        return "15";

      case "thirtySecs":
        return "30";

      case "fourtySecs":
        return "45";

      case "fiftySecs":
        return "60";
    }
  }

  useEffect(() => {
    function handleClickedOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        // Text input is not focused, so focus on it
        inputRef.current.focus();
      }
    }

    document.addEventListener("click", handleClickedOutside);

    return () => {
      document.removeEventListener("click", handleClickedOutside);
    };
  }, []);

  return (
    <>
      <div className="w-full  h-[80%] bg-[#323437] flex flex-col justify-around ">
        {showChart === true ? (
          <>
            <ShowChart
              totalWords={totalWords}
              totalCharacters={totalCharacters}
              timeOfEach={timeOfEach}
              accuracy={accuracy}
              eachsecWPM={eachsecWPM}
              eachsecWrongIndexes={eachsecWrongIndexes}
              incorrectIndexes={incorrectIndexes}
            ></ShowChart>
          </>
        ) : (
          <>
            <Panel></Panel>

            {showTime === false ? (
              <>
                {" "}
                <div className="text-end w-1/2 text-[#1fc8c5] font-bold text-2xl roboto opacity-0">
                  15
                </div>
              </>
            ) : (
              <>
                <div className=" text-end w-1/2 text-[#1fc8c5] font-bold text-2xl roboto">
                  {/* {handleSecsDisplay()} */}
                  {triggerCondition === false
                    ? handleSecsDisplay()
                    : countdownSecs}
                </div>
              </>
            )}

            <div className="w-full h-[50%] flex gap-x-[3%] ">
              <div className=" w-[30%]  mt-[-5%] ">
                <Canvas camera={{ position: [-170, 50, 150], fov: 40 }}>
                  <Stage environment="city" intensity={0.9}>
                    <Keyboard position={[0, -0.9, 1]} scale={[1, 1, 1]} />
                  </Stage>

                  <BakeShadows />
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                  />
                </Canvas>
              </div>
              <div
                ref={scrollbarRefrence}
                id="divUp"
                className={`w-[40%] relative  text-start text-mono  h-[45%]  text-[#9b9999]   text-3xl   overflow-hidden font-mono  `}
              >
                <textarea
                  type="text"
                  id="myTextarea"
                  className={` text-mono opacity-0 resize-none text-justify focus:outline-none text-black text-3xl  text-transparent bg-transparent border-hidden absolute w-full h-full top-0 left-0 cursor-text  caret-[#1fc8c5]  `}
                  ref={inputRef}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                />
                {isTimer === false ? (
                  <>
                    {characters.map((char, index) => (
                      <span
                        key={index}
                        className={`  ${
                          index === charIndex
                            ? "border-l-4 border-[#1fc8c5] animate-blink"
                            : ""
                        }
                         ${
                           isCorrect(index) ? "text-[#ffffff] font-bold" : ""
                         } ${isIncorrect(index) ? "bg-red-500" : ""}`}
                      >
                        {char}
                      </span>
                    ))}
                  </>
                ) : (
                  <>
                    {characters.slice(0, 150).map((char, index) => (
                      <span
                        key={index}
                        className={`  
                        ${
                          index === charIndex
                            ? "border-l-4 border-[#1fc8c5] animate-blink"
                            : ""
                        }
                        ${isCorrect(index) ? "text-[#ffffff] font-bold" : ""} ${
                          isIncorrect(index) ? "bg-red-500" : ""
                        }`}
                      >
                        {char}
                      </span>
                    ))}
                  </>
                )}
              </div>

              <div className=" w-[30%]  mt-[-5%]  flex flex-col items-center justify-center roboto text-4xl font-bold text-[#ffffff] gap-y-[4%]">
                <span>
                  Press{" "}
                  <span
                    className={` duration-500   ${
                      check === "JUMP" ? "text-[#1FC8C5]" : "text-[#EE6056]"
                    }`}
                  >
                    Space-Bar
                  </span>{" "}
                  to
                </span>
                <div className="w-[80%] ">
                  <Canvas camera={{ position: [150, 0, 150], fov: 40 }}>
                    <Stage environment="city" intensity={0.9}>
                      <Jump position={[0, -0.9, 0]} scale={[1, 1, 1]} />
                    </Stage>

                    <BakeShadows />
                    <OrbitControls
                      enableZoom={false}
                      enablePan={false}
                      // enableRotate={false}
                    />
                  </Canvas>
                </div>
                <span
                  className={` duration-500   ${
                    check === "JUMP" ? "text-[#1FC8C5]" : "text-[#EE6056]"
                  }`}
                >
                  Words
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainPart;
