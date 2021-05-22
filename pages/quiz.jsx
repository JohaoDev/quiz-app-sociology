import { useRouter } from "next/router";
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
      {
        question:
          "C. Wright Mills argumenta que cuando logramos diferenciar los “problemas públicos” de las “inquietudes personales” empezamos a entender que los problemas públicos de la estructura social usualmente están relacionados con crisis en dispositivos institucionales que usualmente la sociología marxista identifica como:",
        options: [
          "Contradicciones o antagonismos.",
          "Lucha de clases o desigualdad social.",
          "Revolución comunista dictadura del proletariado.",
          "Estamentos o clases sociales.",
        ],
        answers: ["Contradicciones o antagonismos."],
      },
      {
        question:
          "Max Weber define al objeto de estudio de la sociología como la acción social. Lo que hace de una acción sea social es la constelación de sentidos que asignan los sujetos a sus acciones, cuando estas están orientadas hacia otros. ¿Cuál es el tipo de sentido más relevante, en términos metodológicos, para el desarrollo de la sociología comprensiva que propuso Weber?",
        options: [
          "Sentido mentado realmente (en la consideración histórica).",
          "Sentido construido científicamente (por medio del método tipológico).",
          "Sentido mentado en promedio (en la consideración sociológica en masa).",
          "Sentido puro construido científicamente (por medio del método positivista).",
        ],
        answers: [
          "Sentido construido científicamente (por medio del método tipológico).",
        ],
      },
      {
        question:
          "E. Durkheim teoriza el objeto de estudio de la sociología a través del concepto de hecho social, pero subraya que “tratar como cosas a los derechos de un cierto orden, no significa clasificarlos en cierta categoría de la realidad, sino enfrentarlos con cierta actitud mental”. En este sentido Durkheim concibe al “hecho social” como herramienta fundamental en el desarrollo del método sociológico como una “actitud mental” ante la investigación de fenómenos sociales. ¿cuál sería el primer paso para desarrollar esta “actitud mental” o método sociológico?",
        options: [
          "Definir e identificar claramente las categorías que definen al hecho social como externo a los individuos y, por lo tanto, su capacidad de imponerse ante este.",
          "Teorizar los elementos constitutivos de los hechos sociales a ser investigados en orden de su importancia para el orden social moderno, en relación a las funciones que los hechos sociales cumplen.",
          "Rechaza el sentido común que está plagado de abstracciones metafísicas e ídolos teológicos incompatibles en el desarrollo del estado positivo y el método sociológico.",
          "Identificar y controlar las prenociones que constituyen un obstáculo epistemológico de singular importancia en el desarrollo de la investigación científico-social.",
        ],
        answers: [
          "Identificar y controlar las prenociones que constituyen un obstáculo epistemológico de singular importancia en el desarrollo de la investigación científico-social.",
        ],
      },
      {
        question:
          "Las teorías de la dependencia, sostiene Beigel, trataban la categoría “dependencia” más como un problema teórico que como una teoría como tal. Este planteamiento cuestiones ciertas perspectivas mecanicistas y economicistas acerca de la situación de nuestras formaciones sociales. ¿Cuáles de los siguientes postulados corresponden a esta posición crítica al respecto de las teorías de la dependencia? Selecciona dos de la lista:",
        options: [
          "La situación de dependencia no puede entenderse únicamente en términos económicos, también implica a la dimensión política y cultural.",
          "No existe una influencia mecánica de los factores externos sino una interrelación de ellos con las condiciones internas de las formaciones sociales dependientes.",
          "El problema fundamental del subdesarrollo es el excesivo estatismo propio de las tradiciones políticas latinoamericanas.",
          "Las condiciones de dependencia se deben a la baja productividad de los sectores agroexportadores.",
        ],
        answers: [
          "La situación de dependencia no puede entenderse únicamente en términos económicos, también implica a la dimensión política y cultural.",
          "No existe una influencia mecánica de los factores externos sino una interrelación de ellos con las condiciones internas de las formaciones sociales dependientes.",
        ],
      },
      {
        question:
          "Max Weber discute el desafío de la construcción de la objetividad para las ciencias sociales en relación a una peligrosa “tentación”. Según Weber (en Bourdieu et. al., 1999) ¿cuál es la “tentación” que debe evitarse en el proceso de enseñanza-aprendizaje de la capacidad de teorizar objetos de estudio o investigación científica en las ciencias sociales?",
        options: [
          "La tentación de las prenociones.",
          "La tentación de la hipótesis positivista de la transparencia.",
          "La tentación del profetismo.",
          "La tentación de la naturalización.",
        ],
        answers: ["La tentación del profetismo."],
      },
      {
        question: "Según Luhmann, la sociedad mundial actual es:",
        options: [
          "Heterárquica y acéntrica.",
          "Jerárquica y centrada.",
          "Dominada y explotada.",
          "Desigual y dependiente.",
        ],
        answers: ["Heterárquica y acéntrica."],
      },
      {
        question:
          "De acuerdo a Beigel las teorías de dependencia se desarrollan como una crítica a los enfoques desarrollistas y nacionalistas. De acuerdo a esta tradición teórica era necesario una nueva interpretación de la situación de sociedades como las latinoamericanas. ¿En qué consistiría esta novedad, según la autora?",
        options: [
          "El desarrollo no es una cuestión meramente económica, requiere de instituciones democráticas sólidas.",
          "El capitalismo debe entenderse como un sistema mundial que se sustenta en la interrelación de centros y periferias.",
          "No es teoría del imperialismo la que explica la situación de las sociedades latinoamericanas sino la cuestión de las ventajas comparativas.",
          "El sector moderno de la economía en nuestros países era muy débil frente al peso de las formas tradicionales de producción.",
        ],
        answers: [
          "El capitalismo debe entenderse como un sistema mundial que se sustenta en la interrelación de centros y periferias.",
        ],
      },
      {
        question:
          "“Durkheim recuerda la complejidad de las determinaciones que una institución social debe a su pasado y al sistema de instituciones en el que se inserta” (Bourdieu et, al, 1999. p. 150). En este sentido una de las dos características fundamentales de un hecho social o institución es que se impone a la voluntad de los individuos. ¿Cuál es otra característica de los hechos sociales relacionados al desafío de entender su relación con el sistema de instituciones en el que cualquier hecho social está inserto?",
        options: [
          "El hecho social es autoritario a medida en que se impone homogéneamente sobre los individuos a pesar de los esfuerzos individuales por resistirlo.",
          "El hecho social se impone a los individuos con una fuerza generalmente irresistible por medio de procesos de socialización asociados a la educación.",
          "El hecho social es externo al individuo en tanto la sociedad no puede reducirse a la suma de los individuos pues si así fuera los hechos individuales o psicológicos fueron las causas fundamentales y no efectos a investigar.",
          "El hecho social es una cosa que genera la necesidad de un nuevo campo de investigación científica que haga un catálogo de este tipo de fenómenos complejos para investigación científica en general.",
        ],
        answers: [
          "El hecho social es externo al individuo en tanto la sociedad no puede reducirse a la suma de los individuos pues si así fuera los hechos individuales o psicológicos fueron las causas fundamentales y no efectos a investigar.",
        ],
      },
      {
        question:
          "¿En qué orden describen Berger y Luckmann el proceso histórico de institucionalización?",
        options: [
          "Externalización, Institucionalización, Internalización.",
          "Externalización, Internalización, Institucionalización.",
          "Institucionalización, Externalización, Internalización.",
          "Internalización, Institucionalización, Externalización.",
        ],
        answers: ["Externalización, Institucionalización, Internalización."],
      },
    ]),
    [actualQuestion, SetActualQuestion] = useState(),
    router = useRouter();

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
    let inputCollection = document.getElementsByName("option"),
      responses = [];

    for (let input of inputCollection) {
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

    if (actualQuestion.answers.length == 1) {
      if (responses[0] == actualQuestion.answers[0]) {
        Swal.fire({
          title: `${responses[0]}`,
          text: `Correcto :D`,
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
                text: `La motivación es lo que te pone en marcha, el hábito es lo que hace que sigas (Jim Ryun).`,
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
          }
        });
      });
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center lg:px-32 px-4">
      <h1 className="py-6">Pregunta N° ?</h1>
      <div>
        <h1 className="py-6">
          {actualQuestion ? actualQuestion.question : null}
        </h1>
        {actualQuestion
          ? actualQuestion.answers.length == 1
            ? actualQuestion.options.map((element, index) => (
                <div key={index} className="flex items-center py-1">
                  <input
                    type="radio"
                    name="option"
                    value={element}
                    id={index}
                  />
                  <p className="ml-2">{element}</p>
                </div>
              ))
            : actualQuestion.options.map((element, index) => (
                <div key={index} className="flex items-center py-1">
                  <input
                    type="checkbox"
                    name="option"
                    value={element}
                    id={index}
                  />
                  <p className="ml-2">{element}</p>
                </div>
              ))
          : null}
      </div>
      <div className="flex py-6">
        <div className="m-3">
          <button
            onClick={() => checkAnswers()}
            className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          >
            <span className="mr-2">Continuar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentcolor"
                d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="m-3">
          <button
            onClick={() => router.push("/")}
            className="bg-white text-gray-800 font-bold rounded border-b-2 border-red-500 hover:border-red-600 hover:bg-red-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          >
            <span className="mr-2">Salir</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
