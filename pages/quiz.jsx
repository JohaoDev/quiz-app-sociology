import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [questions, SetQuestions] = useState([
      {
        question:
          "¿Cuáles de los siguientes elementos definen a la Teoría Crítica según Max Horkheimer? escoge dos:",
        options: [
          "División social del trabajo como función y resultado de la actividad social.",
          "El distanciamiento entre teoría y hechos o praxis revolucionaria.",
          "Reconocimiento crítico de las categorías que dominan la vida de la sociedad.",
          "Produce un sistema cerrado de proposiciones sobre la realidad.",
        ],
        answers: [
          "Reconocimiento crítico de las categorías que dominan la vida de la sociedad.",
          "División social del trabajo como función y resultado de la actividad social.",
        ],
      },
      {
        question:
          "Algunos analistas económicos consideran que Ecuador no ha aplicado medidas neoliberales en profundidad y que por lo tanto no puede hablarse de que haya habido neoliberalismo en el país. Alberto Acosta, adoptando un índice desarrollado por Marley, Machado y Pettinato para medir el alcance de la reforma neoliberal en varios países de América Latina, con corte al año 1995, muestra que Ecuador ha sobrepasado el promedio regional en algunas de las medidas neoliberales más significativas. Indique ¿cuáles de las siguientes son las medidas neoliberales que la Ecuador aplicado con mayor profundidad que el promedio de países latinoamericanos?",
        options: [
          "Una reforma tributaria y Liberalización comercial.",
          "Desregulación del mercado financiero y Privatización de empresas.",
          "Liberalización comercial y Desregulación del mercado financiero.",
          "Privatización de empresas e Índice global promedio de todas las reformas neoliberales.",
        ],
        answers: [
          "Liberalización comercial y Desregulación del mercado financiero.",
        ],
      },
    ]),
    [actualQuestion, SetActualQuestion] = useState();

  useEffect(() => {
    loadGame();
  }, []);

  let loadGame = async () => {
    if (questions.length !== 0) {
      let indexQuestion = await getRandomQuestion(0, questions.length - 1);
      SetActualQuestion(questions[indexQuestion]);
    } else {
      console.log("Questions Not Found");
    }
  };

  let getRandomQuestion = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let checkAnswers = async () => {
    let markedCheckbox = document.getElementsByName("option"),
      responses = [];

    for (let input of markedCheckbox) {
      if (input.type == "checkbox") {
        if (input.checked) {
          responses.push(input.value);
        }
      }

      if (input.type == "radio") {
        if (input.checked) {
          responses = [];
          responses.push(input.value);
        }
      }
    }

    if (responses.length == 1) {
      if (responses[0] == actualQuestion.answers[0]) {
        Swal.fire({
          title: "Correcto :D",
          text: `${responses[0]}`,
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Continuar",
        }).then((result) => {
          if (result.isConfirmed) {
            loadGame();
          }
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Incorrecto :c, vuelve a intentarlo.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      let counter = 0,
        answersLength = actualQuestion.answers.length;

      responses.forEach((response) => {
        actualQuestion.answers.forEach((answer) => {
          if (response == answer) {
            counter += 1;

            if (counter == answersLength) {
              Swal.fire({
                title: "Correcto :D",
                text: `${responses[0]}`,
                icon: "success",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Continuar",
              }).then((result) => {
                if (result.isConfirmed) {
                  loadGame();
                }
              });
            } else {
              Swal.fire({
                title: "Ya casi.",
                text: `Te faltan respuestas, vas por buen camino.`,
                icon: "warning",
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Volver",
              });
            }
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Incorrecto :c, vuelve a intentarlo.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1>Pregunta N° ?</h1>
      <div>
        <h1>{actualQuestion ? actualQuestion.question : null}</h1>
        {actualQuestion
          ? actualQuestion.answers.length == 1
            ? actualQuestion.options.map((element, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    name="option"
                    value={element}
                    id={index}
                  />
                  <p>{element}</p>
                </div>
              ))
            : actualQuestion.options.map((element, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    name="option"
                    value={element}
                    id={index}
                  />
                  <p>{element}</p>
                </label>
              ))
          : null}
      </div>
      <button onClick={() => checkAnswers()}>Comprobar</button>
      <button onClick={() => loadGame()}>Load</button>
    </div>
  );
}
