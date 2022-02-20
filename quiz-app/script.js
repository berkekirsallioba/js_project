const quizData = [
    {
        question: 'Kaç tane güç yüzüğü yapılmıştır?',
        a: '13',
        b: '16',
        c: '20',
        d: '19',
        correct: 'c'

    },
    {
            question: 'Frodo Baggins Tek Yüzük görevine başladığında kaç yaşındaydı?',
            a: '50',
            b: '43',
            c: '33',
            d: '24',
            correct: 'a'
    },
    {
        question: 'Elrond un Divanı neden toplanmıştır?',
        a: 'Yüzükğü Tom Bombadile kimlerin götüreceğini seçmek',
        b: 'Yüzükğün varlığından bütün ırkları haberdar etmek',
        c: 'Balinin Moriaya yaptığı yolculuk hakkında konuşmak',
        d: 'Tek Yüzüğe ne yapılacağını kararlaştırmak',
        correct: 'd'
    },
    {
        question: 'Gandalf Gölgeyeleyi nereden almıştır?',
        a: 'Mordor',
        b: 'Bree',
        c: 'Ayrıkvadi',
        d: 'Rohan',
        correct: 'd'
    },
    {
        question: 'Frodo, yaralandıktan sonra, ona kim yardım etmiştir?',
        a: 'Lindir',
        b: 'Glorfindel',
        c: 'Gildor',
        d: 'Arwen',
        correct: 'b'
    },
    {
        question: 'Sauron, kaç güç yüzüğü ele geçirebilmiştir?',
        a: '19',
        b: '9',
        c: '12',
        d: '16',
        correct: 'c'
    },
    {
        question: 'Moria kapısında suya kim taş atmıştır?',
        a: 'Merry',
        b: 'Pippin',
        c: 'Boromir',
        d: 'Gimli',
        correct: 'c'
    },
    {
        question: 'Eomerin, Aragorna taktığı lakap nedir?',
        a: 'Yolgezer',
        b: 'Kolcu',
        c: 'Kanatayak',
        d: 'Estel',
        correct: 'c'
    },
    {
        question: 'Frodo ile Bilbo arasındaki akrabalık ilişkisi nedir?',
        a: 'Dede-Torun',
        b: 'Baba-Oğul',
        c: 'Kuzen-Kuzen',
        d: 'Amca-Yeğen',
        correct: 'c'
    },
    {
        question: 'Barad-dur ne demektir?',
        a: 'Karanlık Kule',
        b: 'Kara Kale',
        c: 'Kıyamet Çatlakları',
        d: 'Demir Zindan',
        correct: 'a'
    }
    
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submitBtn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;
    d_text.innerText= currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {

        if(answerEl.checked)
        {
            answer = answerEl.id;
        }     
    });

    return answer;
}

function deselectAnswers()  {

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}



submitBtn.addEventListener('click', () => {
    
    const answer = getSelected();

    if(answer)
    {
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2> Sorulara ${score}/${quizData.length} oranında doğru cevap verdiniz.</h2>
            
            <button onclick="location.reload()">Tekrar Dene</button>
            
            `;
        }

    }


});