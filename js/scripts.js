// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

alert("Todas as perguntas foram desenvolvidas pelo ChatGPT 3.5")

// perguntas
const questions = [
  {
    "question": "Qual é o nome do brinquedo cowboy em 'Toy Story'?",
    "answers": [
      {
        "answer": "Buzz Lightyear",
        "correct": false
      },
      {
        "answer": "Rex",
        "correct": false
      },
      {
        "answer": "Slinky",
        "correct": false
      },
      {
        "answer": "Woody",
        "correct": true
      }
    ]
  },
  {
    "question": "Em qual série aparece o personagem Walter White?",
    "answers": [
      {
        "answer": "Lost",
        "correct": false
      },
      {
        "answer": "Friends",
        "correct": false
      },
      {
        "answer": "Game of Thrones",
        "correct": false
      },
      {
        "answer": "Breaking Bad",
        "correct": true
      }
    ]
  },
  {
    "question": "Qual é o super-herói da Marvel conhecido como 'O Primeiro Vingador'?",
    "answers": [
      {
        "answer": "Thor",
        "correct": false
      },
      {
        "answer": "Capitão América",
        "correct": true
      },
      {
        "answer": "Homem de Ferro",
        "correct": false
      },
      {
        "answer": "Hulk",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é o nome do hobbit protagonista de 'O Senhor dos Anéis'?",
    "answers": [
      {
        "answer": "Bilbo",
        "correct": false
      },
      {
        "answer": "Frodo",
        "correct": true
      },
      {
        "answer": "Sam",
        "correct": false
      },
      {
        "answer": "Merry",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual filme de animação apresenta uma cidade de animais chamada Zootopia?",
    "answers": [
      {
        "answer": "Madagascar",
        "correct": false
      },
      {
        "answer": "Kung Fu Panda",
        "correct": false
      },
      {
        "answer": "Zootopia",
        "correct": true
      },
      {
        "answer": "Rio",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é o nome da série sobre um grupo de cientistas sociais e nerds chamada 'The Big Bang Theory'?",
    "answers": [
      {
        "answer": "How I Met Your Mother",
        "correct": false
      },
      {
        "answer": "The Big Bang Theory",
        "correct": true
      },
      {
        "answer": "Parks and Recreation",
        "correct": false
      },
      {
        "answer": "Community",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual filme da Pixar tem um robô chamado Wall-E?",
    "answers": [
      {
        "answer": "Up",
        "correct": false
      },
      {
        "answer": "Ratatouille",
        "correct": false
      },
      {
        "answer": "Toy Story",
        "correct": false
      },
      {
        "answer": "Wall-E",
        "correct": true
      }
    ]
  },
  {
    "question": "Qual série de TV tem uma mãe e filha chamada Lorelai e Rory?",
    "answers": [
      {
        "answer": "Full House",
        "correct": false
      },
      {
        "answer": "Friends",
        "correct": false
      },
      {
        "answer": "Modern Family",
        "correct": false
      },
      {
        "answer": "Gilmore Girls",
        "correct": true
      }
    ]
  },
  {
    "question": "Qual filme da Disney apresenta a canção 'Let It Go'?",
    "answers": [
      {
        "answer": "Moana",
        "correct": false
      },
      {
        "answer": "Enrolados",
        "correct": false
      },
      {
        "answer": "Frozen",
        "correct": true
      },
      {
        "answer": "Valente",
        "correct": false
      }
    ]
  },
  {
    "question": "Quem é o vilão principal em 'Os Vingadores: Guerra Infinita'?",
    "answers": [
      {
        "answer": "Loki",
        "correct": false
      },
      {
        "answer": "Ultron",
        "correct": false
      },
      {
        "answer": "Hela",
        "correct": false
      },
      {
        "answer": "Thanos",
        "correct": true
      }
    ]
  },
  {
    "question": "Qual é o nome do parque temático de dinossauros em 'Jurassic Park'?",
    "answers": [
      {
        "answer": "Dino World",
        "correct": false
      },
      {
        "answer": "Jurassic Park",
        "correct": true
      },
      {
        "answer": "Prehistoric Park",
        "correct": false
      },
      {
        "answer": "Dinosaur Island",
        "correct": false
      }
    ]
  },
  {
    "question": "Quem é o amigo fiel do Shrek?",
    "answers": [
      {
        "answer": "Gato de Botas",
        "correct": false
      },
      {
        "answer": "Lord Farquaad",
        "correct": false
      },
      {
        "answer": "Burro",
        "correct": true
      },
      {
        "answer": "Fiona",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é o nome do navio onde se passa a história do filme 'Titanic'?",
    "answers": [
      {
        "answer": "Britannic",
        "correct": false
      },
      {
        "answer": "Lusitania",
        "correct": false
      },
      {
        "answer": "Titanic",
        "correct": true
      },
      {
        "answer": "Olympic",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é o nome do vilão em 'O Rei Leão'?",
    "answers": [
      {
        "answer": "Mufasa",
        "correct": false
      },
      {
        "answer": "Scar",
        "correct": true
      },
      {
        "answer": "Simba",
        "correct": false
      },
      {
        "answer": "Zazu",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual série apresenta um grupo de crianças em aventuras na cidade fictícia de Hawkins?",
    "answers": [
      {
        "answer": "The 100",
        "correct": false
      },
      {
        "answer": "Stranger Things",
        "correct": true
      },
      {
        "answer": "13 Reasons Why",
        "correct": false
      },
      {
        "answer": "Riverdale",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual filme de animação tem um panda chamado Po como personagem principal?",
    "answers": [
      {
        "answer": "Kung Fu Panda",
        "correct": true
      },
      {
        "answer": "Madagascar",
        "correct": false
      },
      {
        "answer": "Procurando Nemo",
        "correct": false
      },
      {
        "answer": "Os Incríveis",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual é o nome do super-herói que é o alter ego de Bruce Wayne?",
    "answers": [
      {
        "answer": "Superman",
        "correct": false
      },
      {
        "answer": "Batman",
        "correct": true
      },
      {
        "answer": "Homem-Aranha",
        "correct": false
      },
      {
        "answer": "Flash",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual série de TV é conhecida por suas inúmeras reviravoltas e personagens em uma luta pelo trono?",
    "answers": [
      {
        "answer": "Vikings",
        "correct": false
      },
      {
        "answer": "The Witcher",
        "correct": false
      },
      {
        "answer": "Game of Thrones",
        "correct": true
      },
      {
        "answer": "The Crown",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual filme da Disney apresenta a princesa chamada Ariel?",
    "answers": [
      {
        "answer": "Branca de Neve",
        "correct": false
      },
      {
        "answer": "A Bela Adormecida",
        "correct": false
      },
      {
        "answer": "A Pequena Sereia",
        "correct": true
      },
      {
        "answer": "Cinderela",
        "correct": false
      }
    ]
  },
  {
    "question": "Qual personagem da série 'Friends' é famoso por dizer 'How you doin'?'?",
    "answers": [
      {
        "answer": "Ross",
        "correct": false
      },
      {
        "answer": "Joey",
        "correct": true
      },
      {
        "answer": "Chandler",
        "correct": false
      },
      {
        "answer": "Rachel",
        "correct": false
      }
    ]
  }
]


// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 1200);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();
