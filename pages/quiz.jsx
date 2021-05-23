import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [questions] = useState([
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
      {
        question:
          "¿Cuáles de los siguientes elementos son claves para una sociología renovada, según Boaventura de Sousa Santos? Selecciona dos:",
        options: [
          "Sociología de las ausencias.",
          "Sociología crítica.",
          "Sociología científica.",
          "Sociología de las emergencias.",
          "Sociología pública.",
          "Sociología marxista.",
        ],
        answers: [
          "Sociología de las ausencias.",
          "Sociología de las emergencias.",
        ],
      },
      {
        question:
          "El sistema de acción social consiste, según Parsons, en tres sistemas interdependientes ¿Cuáles son? Selecciona tres:",
        options: [
          "Sistema social.",
          "Sistema de personalidad.",
          "Sistema funcional.",
          "Sistema capitalista.",
          "Sistema cultural.",
        ],
        answers: [
          "Sistema de personalidad.",
          "Sistema cultural.",
          "Sistema social.",
        ],
      },
      {
        question:
          "M. Burawoy argumenta que “la sociología crítica es la conciencia de la sociología profesional en tanto que la sociología pública es la conciencia de la sociología práctica”. (2005, p. 206). ¿Cuál es la diferencia y la similitud entre la sociología crítica y la sociología profesional?",
        options: [
          "La sociología crítica (re)produce conocimiento reflexivo mientras la sociología profesional se sostiene sobre el conocimiento instrumental, pero las dos interpelan a audiencias académicas.",
          "La sociología pública y la sociología práctica responden a audiencias extra-académicas, si bien la primer se genera conocimiento reflexivo y dialógico con estos públicos y la práctica se basa en conocimiento instrumental para sus clientes.",
          "La sociología pública apunta audiencias de extra-académicas mientras que la sociología crítica interpela generalmente audiencias académicas, pero las dos (re)producen conocimiento reflexivo.",
          "La sociología profesional (re)produce conocimiento práctico mientras que la sociología crítica produce conocimiento público, si bien las dos apuntan audiencias extra-académicas.",
        ],
        answers: [
          "La sociología profesional (re)produce conocimiento práctico mientras que la sociología crítica produce conocimiento público, si bien las dos apuntan audiencias extra-académicas.",
        ],
      },
      {
        question:
          "Alberto Acosta señala que los programas de estabilización y de ajuste han estado orientados a garantizar el servicio de la deuda. Junto a este objetivo explícito de dichos programas aparece el pretendido reordenamiento de la economía. ¿Cuál de las siguientes frases recoge mejor manera este planteamiento?",
        options: [
          "Las cartas de intención firmadas por los gobiernos sirvieron para obtener recursos para pagar la deuda externa.",
          "La deuda externa y su servicio fue la mejor palanca para obligar al país a adoptar orientaciones neoliberales en sus políticas.",
          "Para renegociar la deuda externa, Ecuador estaba obligado a comprometerse con las cartas de intención propuestas por los acreedores.",
          "Más allá del pago de la deuda externa, era indispensable reordenar la visión desarrollista de la economía en una perspectiva neoliberal.",
        ],
        answers: [
          "La deuda externa y su servicio fue la mejor palanca para obligar al país a adoptar orientaciones neoliberales en sus políticas.",
        ],
      },
      {
        question:
          "Aguste Comte argumenta que el estado positivo es incompatible con el estado teológico pues este (re)produce conocimiento absoluto. Durante el estado metafísico sufre una estrategia epistemológica necesaria aunque insuficiente para superar el conocimiento absoluto. Según Comte ¿cuál es la mejor forma de caracterizar esta estrategia epistemológica o “tipo de conocimiento” propio del estado metafísico?",
        options: [
          "Critica positiva/científica.",
          "Critica negativa/destructiva.",
          "Conocimiento ficticio.",
          "Conocimiento absoluto.",
        ],
        answers: ["Critica negativa/destructiva."],
      },
      {
        question:
          "Juan Maiguashca y Lisa North citan el siguiente párrafo de E. P Thomson: “Las clases y la conciencia de clase son siempre las ultimas, no las primeras, fases del proceso real histórico. Pero, si implementamos la categoría estática de clases, o si obtenemos esta categoría de un modelo teórico previo de una totalidad estructurada, supondremos que la clase esta instantáneamente presente (derivada como una proyección geométrica, de las relaciones de producción) y de ello la lucha de clases” ¿Cuál es el significado de este párrafo para el análisis que realiza sobre el Velasquismo?",
        options: [
          "El Velasquismo expresaba la conciencia de las clases terratenientes y del partido conservador.",
          "No puede analizar el Velasquismo en términos de expresiones de clases o de lucha de estas.",
          "Las clases capitalistas modernas estaban en formación durante el periodo velasquista y, por ende, se debe analizar cómo se expresaba la lucha de estas a través del Velasquismo.",
          "El Velasquismo muestra la lucha de los sectores populares en su impulso para expresar como actores políticos de derecho propio.",
        ],
        answers: [
          "Las clases capitalistas modernas estaban en formación durante el periodo velasquista y, por ende, se debe analizar cómo se expresaba la lucha de estas a través del Velasquismo.",
        ],
      },
      {
        question:
          "La tipología de las ciudades que desarrolla Weber para analizar “la dominación no legitima” a través de la historia del desarrollo urbano ayuda a identificar elementos comunes a diferentes tipos de ciudades. Entre estos están el ser asentamientos de mercado relacionando esta caracterización al concepto griego de Oikos- y el reconocimiento que las ciudades realmente existentes como tipos mixtos. Weber identifica una especificidad histórica en ciudades modernas occidentales como Londres, París, o Berlín. ¿Cuál es esta especificidad relacionada con la economía urbana de las metrópolis modernas?",
        options: [
          "La centralidad del capital financiero internacional.",
          "Su naturaleza de ciudades industriales.",
          "El estatuto jurídico-político de estos burgos.",
          "Su naturaleza de ciudades de consumidores y de productores a la vez.",
        ],
        answers: ["La centralidad del capital financiero internacional."],
      },
      {
        question:
          "La última obra de Emilie Durkheim titulada Las Formas Elementales de la Vida Religiosa (1912) argumenta que, desde una perspectiva sociológica, no hay religiones falsas pues todas responden, aunque de maneras diferentes, a formas de organización social históricamente determinadas. Es decir, para la sociología el estudio de las religiones y su devenir histórico se convierte en la investigación científica respecto de:",
        options: [
          "Las formas esenciales que dominan nuestra vida intelectual y que nos ayuda a comprehender y dar sentido a lo que existe realmente en la sociedad y el universo.",
          "Las formas elementales de la capacidad que tienen los grupos humanos para (re)crear la “sociedad” que constantemente aparecen en la vida religiosa y que revelan la naturaleza de los vínculos sociales fundamentales.",
          "Una de las diferentes etapas en el desarrollo del intelecto humano, como argumento Auguste Comte en su ley de los 3 estados y que cita Durkheim en la introducción de su estudio.",
          "Las formas elementales del entendimiento humano pues son mero reflejo de los hechos, los cuales existen independientemente de estas categorías y por lo tanto explican las creencias religiosas en última instancia.",
        ],
        answers: [
          "Las formas elementales de la capacidad que tienen los grupos humanos para (re)crear la “sociedad” que constantemente aparecen en la vida religiosa y que revelan la naturaleza de los vínculos sociales fundamentales.",
        ],
      },
      {
        question:
          "A partir del análisis de datos demográficos y electorales, los autores J. Maiguashca y L.North muestran algunas tendencias claras, especialmente para los tres últimos velasquismos (1952, 1960 1965). Indique cuales de las siguientes afirmaciones corresponden a los autores:",
        options: [
          "La base principal de apoyo a Velasco fueron las provincias de influencia conservadora, En la elección de 1968 se expresó el mayor apoyo a Velasco en Costa y Sierra, Dado el tamaño reducido del electorado hasta los años 60, las masas populares marginales no ejercieron influencia decisiva en los resultados de las elecciones.",
          "Velasco tuvo respaldo mayoritario en la costa y provincias de la sierra norte, El velasquismo se desarrolló independientemente y en competencia con los partidos conservador y liberal, Dado el tamaño reducido del electorado hasta los años 60, las masas populares marginales no ejercieron influencia decisiva en los resultados de las elecciones.",
          "El velasquismo se desarrolló independientemente y en competencia con los partidos conservador y liberal, En la elección de 1968 se expresó el mayor apoyo a Velasco en Costa y Sierra, 5.	Dado el tamaño reducido del electorado hasta los años 60, las masas populares marginales no ejercieron influencia decisiva en los resultados de las elecciones.",
          "Velasco tuvo respaldo mayoritario en la costa y provincias de la sierra norte, La base principal de apoyo a Velasco fueron las provincias de influencia conservadora, 4.	En la elección de 1968 se expresó el mayor apoyo a Velasco en Costa y Sierra.",
        ],
        answers: [
          "Velasco tuvo respaldo mayoritario en la costa y provincias de la sierra norte, El velasquismo se desarrolló independientemente y en competencia con los partidos conservador y liberal, Dado el tamaño reducido del electorado hasta los años 60, las masas populares marginales no ejercieron influencia decisiva en los resultados de las elecciones.",
        ],
      },
      {
        question:
          "C. Wrigth Mills propone el concepto de “imaginación sociológica” como “la cualidad mental esencial para percibir la interrelación del hombre y la sociedad, de la biografía y de la historia, del yo y el mundo” ¿Quiénes necesitan desarrollar esta cualidad mental?",
        options: [
          "Las y los profesores de sociología para disponer de una herramienta pedagógica que introduzca a los estudiantes a la promesa de la sociología como ciencia de la sociedad.",
          "Los y las estudiantes de sociología para entender conceptos clave básicos como estructura, historia, biografía y agencia.",
          "Las personas que se sienten atrapadas al no entender que ni la vida de un individuo ni la historia de la sociedad pueden entenderse sin comprender ambas cosas.",
          "Los y las investigadoras sociales para desarrollar marcos teóricos que permitan guiar y concluir con éxitos sus investigaciones.",
        ],
        answers: [
          "Las personas que se sienten atrapadas al no entender que ni la vida de un individuo ni la historia de la sociedad pueden entenderse sin comprender ambas cosas.",
        ],
      },
      {
        question:
          "Un argumento influyente del Manifiesto del Partido Comunista (Marx & Engels) y parte importante del núcleo duro del programa de investigación del materialismo histórico (Buraway,1990) es: “la historia de todas las sociedades hasta nuestros días es la historia de la lucha de clases “. Según los autores, ¿Cuál es la especificidad de la lucha de clases que caracteriza a la modernidad capitalista a diferencia de sus formas anteriores?",
        options: [
          "Se simplifican las contradicciones de clase debido a la tendencia en las sociedades modernas de una creciente polarización en dos grandes clases antagónicas: burguesía/propietarios y proletariado/asalariados.",
          "Se expande geográficamente a medida en que la burguesía es la única clase en la historia que logra superar las fronteras nacionales y proteccionismo de los estados-nación así como consolidar un mercado mundial.",
          "La lucha de clases implica relaciones de opresión y explotación suavizadas por el aparecimiento del trabajo asalariado en reemplazo de viejas formas de esclavitud.",
          "La lucha de clases se vuelve más compleja en términos del aparecimiento de nuevos estamentos sociales como la clase media.",
        ],
        answers: [
          "Se simplifican las contradicciones de clase debido a la tendencia en las sociedades modernas de una creciente polarización en dos grandes clases antagónicas: burguesía/propietarios y proletariado/asalariados.",
        ],
      },
      {
        question:
          "Marx argumentaba en carta a su amigo Arnold Ruge que la tarea del científico social no consiste en adelantar dogmáticamente el futuro sino investigar críticamente. Pues “si construir el futuro y asentar todo definitivamente no es nuestro asunto, es más claro aun lo que, al presente, debemos llevar a cabo: me refiero a la crítica despiadada de todo lo existente” (Marx, 1843). ¿A qué se refiere Marx cuando argumentaba que la teoría sociológica critica debe ser despiadada?",
        options: [
          "La teoría sociológica crítica debe adoptar posiciones políticas radicales para poder producir investigación revolucionaria que sea despiadada con cualquiera que se le oponga.",
          "La teoría sociológica crítica debe delinear leyes que permitan identificar verdades absolutas así producir una ciencia incuestionable.",
          "La teoría sociológica crítica no debe temer los resultados a los que conduzca su investigación socio histórica aun que esta tienda a generar conflictos en los poderosos.",
          "La teoría sociológica crítica no debe admitir ningún tipo de cuestionamiento que no sea el resultado de la tendencia de anticipar el futuro inherente a la razón científica.",
        ],
        answers: [
          "La teoría sociológica crítica no debe temer los resultados a los que conduzca su investigación socio histórica aun que esta tienda a generar conflictos en los poderosos.",
        ],
      },
      {
        question:
          "El programa de investigación del materialismo histórico (Burawoy, 1990) nace de la crítica de la economía política clásica (Marx & Engels). Dicha critica, en términos metodológicos, pone énfasis en la importancia de la historia para la investigación científico-social y rechaza la naturalización de las relaciones sociales de producción que aparecen en el trabajo de los economistas ortodoxos. ¿en qué consiste el peligro de la naturalización en el análisis de las relaciones de producción?",
        options: [
          "Marx critica a los capitalistas ya que éstos no difieren sustancialmente de los señores feudales, particularmente en lo que respecta a su relación con los y las trabajadoras que producen sus riquezas.",
          "Marx crítica a los capitalistas que minimizan el desarrollo histórico de instituciones sociales y económicas que no sean propias de la lógica de la acumulación capitalista pues esto implica perder la oportunidad de considerar otros modos de producción posible.",
          "Marx critica a los economistas que caracterizan a las instituciones sociales pasadas como “artificiales” y a las instituciones de la modernidad capitalista como “naturales” a medida en que estás aparecen como “superiores” y representarían una suerte de “fin de la historia”.",
          "Marx crítica a los economistas que caracterizan a las instituciones económicas como “naturales” mientras que relegan el resto de instituciones sociales a la calidad de “artificial” pues así se cierra toda posibilidad de entender las relaciones entre economía y sociedad.",
        ],
        answers: [
          "Marx critica a los economistas que caracterizan a las instituciones sociales pasadas como “artificiales” y a las instituciones de la modernidad capitalista como “naturales” a medida en que estás aparecen como “superiores” y representarían una suerte de “fin de la historia”.",
        ],
      },
      {
        question:
          "Pierre Bourdieu define el habitus como un sistema de disposiciones para la práctica, la acción, el pensamiento y la sensibilidad. Son estructuras de mediana y larga duración que operan de modo inconsciente en los agentes sociales y les permite tener acciones sensatas y regulares. En este sentido el habitus hace posible.",
        options: [
          "La ruptura con un orden socio histórico establecido.",
          "Que los agentes operen conscientemente en sus prácticas cotidianas.",
          "La continuidad de una tradición cultural y social.",
          "Que se equivoque en el sentido de las acciones reflexivas que realizan.",
        ],
        answers: ["La continuidad de una tradición cultural y social."],
      },
      {
        question:
          "Michael Lowy argumenta que pese al sentido común generalizado de que las teorías sociológicas clásicas de Weber y de Marx son irreconciliables, el trabajo de estos dos teóricos clásicos tenía importantes puntos de encuentro en su evaluación critica del desarrollo del capitalismo ¿cuál es la mejor forma de distinguir entre lo que Lowy llama la “critica inmanente” que caracteriza al trabajo de Marx?",
        options: [
          "La crítica de Marx pretende ser inmanente, en la medida en que es revolucionaria y se constituye como herramienta política de la clase obrera, a diferencia de la crítica trascendente de Weber construida sobre la neutralidad valorativa que caracterizaba su construcción de un método científico social.",
          "La crítica de Marx es trascendente porque logra vincular la objetividad científico social con el compromiso político en tanto que Weber no es capaz de superar la crítica negativa o inmanente.",
          "La crítica de Marx pretende se inmanente en la medida en que está hecha desde el posicionamiento estructural de la fuerza social real de la clase obrera y su potencial transformador, a diferencia de la crítica trascendente de Weber construida sobre el deber-ser asociado a la racionalidad con arreglo a fines.",
          "La crítica de Weber es trascendente porque logra mantener la objetividad científico social mientras que los compromisos políticos de Marx le impiden realmente superar una crítica negativa o inmanente.",
        ],
        answers: [
          "La crítica de Marx pretende ser inmanente, en la medida en que es revolucionaria y se constituye como herramienta política de la clase obrera, a diferencia de la crítica trascendente de Weber construida sobre la neutralidad valorativa que caracterizaba su construcción de un método científico social.",
        ],
      },
      {
        question:
          "Beigel considera que las teorías de la dependencia establecieron un campo de debate que desplegó dimensiones específicas. En cierto modo la heterogeneidad de aquellas teorías es producto de las trayectorias que esos aspectos particulares tuvieron en la discusión sobre la situación de dependencia. ¿Cuáles son esas problemáticas especificas? Escoge tres de la lista:",
        options: [
          "La contraposición entre un enfoque de clase y un enfoque nacional.",
          "La persistencia de un enfoque desarrollista en la noción de dependencia y la especificidad del desarrollo capitalista.",
          "La originalidad de la teoría de dependencia o la posibilidad de que ella este contenida en la teoría del imperialismo.",
          "El antagonismo estructural entre el sector tradicional y el sector moderno.",
          "La discusión acerca de la necesidad de un estado regulador o interventor.",
        ],
        answers: [
          "La contraposición entre un enfoque de clase y un enfoque nacional.",
        ],
      },
      {
        question:
          "Según Connel ¿cuál de las siguientes disciplinas es dominante actualmente dentro del campo de las ciencias sociales?",
        options: [
          "Antropología.",
          "Sociología.",
          "Economía.",
          "Ciencias políticas",
        ],
        answers: ["Economía."],
      },
      {
        question:
          "Alberto Acosta señalo algunas dificultades que provocó la dolarización, aprobada por el gobierno de Jaime Mahuad, en el año 2000, en la economía del país. Señale cuales de las siguientes opciones dan cuenta de estas dificultades indicadas por el autor:",
        options: [
          "Pérdida de competitividad y Aumento de endeudamiento de sectores productivos privados.",
          "Aumento de endeudamiento de sectores productivos privados y Estabilidad macroeconómica ficticia.",
          "Pérdida de competitividad y Estabilidad macroeconómica ficticia.",
          "Encarecimiento de los precios internos y Aumento de endeudamiento de sectores productivos privados.",
        ],
        answers: [
          "Pérdida de competitividad y Estabilidad macroeconómica ficticia.",
        ],
      },
      {
        question:
          "A. Cueva anota que los procesos de transformación y crisis de los estados oligárquicos fueron marcados por su diversidad y heterogeneidad. ¿En qué países latinoamericanos el fin de los estados oligárquicos se dio por la irrupción revolucionaria de las masas en la vida pública?",
        options: [
          "Argentina y Colombia.",
          "México y Argentina.",
          "Colombia y Bolivia.",
          "México y Bolivia.",
        ],
        answers: ["México y Bolivia."],
      },
      {
        question:
          "A juicio de A. Cueva ¿Cuál sería el talón de Aquiles de los procesos de industrialización de América Latina?",
        options: [
          "Que la mayoría de ellos inició después de la Segunda Guerra Mundial.",
          "Que no lograron superar su dependencia de los ingresos del sector exportador.",
          "Que no fueron acompañados de un proceso político democrático.",
          "Que sólo se pusieron en marcha de forma espontánea gracias a la crisis de 1929.",
        ],
        answers: [
          "Que no lograron superar su dependencia de los ingresos del sector exportador.",
        ],
      },
      {
        question:
          "Alberto Acosta señala algunas dificultades que provocó la dolarización, aprobada por el gobierno de Jamil Mahuad, en el año 2000, en la economía del país. Señale cuáles de las siguientes opciones dan cuenta de esas dificultades indicadas por el autor:",
        options: [
          "Encarecimiento de los precios internos y  Aumento del endeudamiento de sectores productivos privados.",
          "Aumento del endeudamiento de sectores productivos privados y Estabilidad macroeconómica ficticia",
          "Pérdida de competitividad y Aumento del endeudamiento de sectores productivos privados.",
          "Pérdida de competitividad y Estabilidad macroeconómica ficticia.",
        ],
        answers: [
          "Pérdida de competitividad y Estabilidad macroeconómica ficticia.",
        ],
      },
      {
        question:
          "Alberto Acosta señala que los programas de estabilización y de ajuste han estado orientados a garantizar el servicio de la deuda. Junto a este objetivo explícito de dichos programas aparece el pretendido reordenamiento de la economía ¿Cuál de las siguientes frases recoge de mejor manera este planteamiento?",
        options: [
          "Más allá del pago de la deuda externa, era indispensable reordenar la visión desarrollista de la economía en una perspectiva neoliberal.",
          "Las cartas de intención firmadas por los gobiernos sirvieron para obtener recursos para pagar la deuda externa.",
          "La deuda externa y su servicio fue la mejor palanca para obligar al país a adoptar orientaciones neoliberales en sus políticas.",
          "Para renegociar la deuda externa, Ecuador estaba obligado a comprometerse con las cartas de intención propuestas por los acreedores.",
        ],
        answers: [
          "La deuda externa y su servicio fue la mejor palanca para obligar al país a adoptar orientaciones neoliberales en sus políticas.",
        ],
      },
      {
        question:
          "Alberto Acosta señala que los programas de estabilización y de ajuste han estado orientados a garantizar el servicio de la deuda. Junto a este objetivo explícito de dichos programas aparece el pretendido reordenamiento de la economía ¿Cuál de las siguientes frases recoge de mejor manera este planteamiento?",
        options: [
          "Más allá del pago de la deuda externa, era indispensable reordenar la visión desarrollista de la economía en una perspectiva neoliberal.",
          "Las cartas de intención firmadas por los gobiernos sirvieron para obtener recursos para pagar la deuda externa.",
          "La deuda externa y su servicio fue la mejor palanca para obligar al país a adoptar orientaciones neoliberales en sus políticas.",
          "Para renegociar la deuda externa, Ecuador estaba obligado a comprometerse con las cartas de intención propuestas por los acreedores.",
        ],
        answers: [
          "La deuda externa y su servicio fue la mejor palanca para obligar al país a adoptar orientaciones neoliberales en sus políticas.",
        ],
      },
      {
        question:
          "Algunos analistas económicos consideran que Ecuador no ha aplicado medidas neoliberales en profundidad y que, por lo tanto, no puede hablarse de que haya habido neoliberalismo en el país. Alberto Acosta, adoptando un índice desarrollado por Morley, Machado y Pettinato para medir el alcance de la reforma neoliberal en varios países de América Latina, con corte al año 1995, muestra que Ecuador ha sobrepasado el promedio regional en algunas de las medidas neoliberales más significativas. Indique ¿Cuáles de las siguientes son las medidas neoliberales que Ecuador aplicación con mayor profundidad que el promedio de países latinoamericanos?",
        options: [
          "Desregulación del mercado financiero y Privatización de empresas.",
          "Liberalización comercial y Desregulación del mercado financiero.",
          "Privatización de empresas y Indice global promedio de todas las reformas neoliberales.",
          "Reforma Tributaria y Liberalización comercial.",
        ],
        answers: [
          "Liberalización comercial y Desregulación del mercado financiero.",
        ],
      },
      {
        question:
          "A partir del análisis de datos demográficos y electorales, los autores J. Maiguashca y L. North muestran algunas tendencias claras, especialmente para los tres últimos velasquismos (1952, 1960, 1968). Indique cuáles de las siguientes afirmaciones corresponden a los autores:",
        options: [
          "Velasco tuvo respaldo mayoritario en la costa y provincias de la sierra norte, El velasquismo se desarrolló independientemente y en competencia con los partidos conservador y liberal, Dado el reducido tamaño del electorado hasta los años 60, las masas populares marginales no ejercieron influencia decisiva en los resultados de las elecciones.",
          "El velasquismo se desarrolló independientemente y en competencia con los partidos conservador y liberal, En la elección de 1968 se expresó el mayor apoyo a Velasco en Costa y Sierra, Dado el reducido tamaño del electorado hasta los años 60, las masas populares marginales no ejercieron influencia decisiva en los resultados de las elecciones.",
          "La base principal de apoyo de Velasco fueron las provincias de influencia conservadora, En la elección de 1968 se expresó el mayor apoyo a Velasco en Costa y Sierra, Dado el reducido tamaño del electorado hasta los años 60, las masas populares marginales no ejercieron influencia decisiva en los resultados de las elecciones.",
          "Velasco tuvo respaldo mayoritario en la costa y provincias de la sierra norte, La base principal de apoyo de Velasco fueron las provincias de influencia conservadora, En la elección de 1968 se expresó el mayor apoyo a Velasco en Costa y Sierra.",
        ],
        answers: [
          "Velasco tuvo respaldo mayoritario en la costa y provincias de la sierra norte, El velasquismo se desarrolló independientemente y en competencia con los partidos conservador y liberal, Dado el reducido tamaño del electorado hasta los años 60, las masas populares marginales no ejercieron influencia decisiva en los resultados de las elecciones.",
        ],
      },
      {
        question:
          "¿Cuáles de los siguientes elementos fueron característicos del Estado oligárquico en América Latina, según A Cueva?",
        options: [
          "Represión contra los elementos democrático burgueses, Consolidación del poder del Estado, Expropiación de los productores directos.",
          "Represión contra los elementos democrático burgueses, Expropiación de los productores directos, Respeto por los territorios indígenas.",
          "Supresión total del poder de los terratenientes feudales, Consolidación del poder del Estado, Expropiación de los productores directos.",
          "Represión contra los elementos democrático burgueses, Supresión total del poder de los terratenientes feudales, Consolidación del poder del Estado.",
        ],
        answers: [
          "Represión contra los elementos democrático burgueses, Consolidación del poder del Estado, Expropiación de los productores directos.",
        ],
      },
      {
        question:
          "De acuerdo a Cueva ¿En qué periodo de la historia de América Latina hubo serios esfuerzos por desarrollar un sector capitalista de estado como promotor del desarrollo nacional, asumiendo actividades económicas estratégicas que la iniciativa privada era incapaz de emprender?",
        options: [
          "Finales del SXX",
          "Inicios del SXX",
          "Mediados del SXX",
          "Finales del S.XIX",
        ],
        answers: ["Mediados del SXX"],
      },
      {
        question:
          "De acuerdo a Mark Thurner ¿Cuáles serían las consecuencias más notables de las reforma liberales para la población indígena?",
        options: [
          "Disminución de las haciendas, colectivización del tributo y crecimiento de las tierras comunales.",
          "Abolición de las haciendas, crecimiento del tributo, colectivización de tierras.",
          "Privatización de tierras comunales, abolición del tributo y crecimiento de las haciendas.",
          "Colectivización de tierras, aumento del tributo y crecimiento de las haciendas.",
        ],
        answers: [
          "Privatización de tierras comunales, abolición del tributo y crecimiento de las haciendas.",
        ],
      },
      {
        question:
          "El economista John Williamson acuñó el término Consenso de Washington para referirse a un conjunto de medidas ortodoxas neoliberales, aplicadas de manera reiterativa por organismos multilaterales, gobiernos y conglomerados transnacionales, las que forman parte de una estrategia global para la reestructuración capitalista de la economía y que se aplicaron a partir de la década de los ochenta del siglo XX en todo el mundo ¿Cuáles de las siguientes medidas forman parte de dicho Consenso?",
        options: [
          "Inversión estatal en industrias estratégicas, Flexibilización laboral, Apertura a inversión extranjera.",
          "Inversión estatal en industrias estratégicas, Control de precios de productos básicos, Apertura a inversión extranjera.",
          "Flexibilización laboral, Apertura a inversión extranjera, Austeridad y disciplina fiscal.",
          "Flexibilización laboral, Control de precios de productos básicos, Austeridad y disciplina fiscal.",
        ],
        answers: [
          "Flexibilización laboral, Apertura a inversión extranjera, Austeridad y disciplina fiscal.",
        ],
      },
      {
        question:
          "Juan Maiguashca y Liisa North citan el siguiente párrafo de E. P. Thomson: 'La clase y la conciencia de clase son siempre las últimas, no las primeras, fases del proceso real histórico. Pero, si empleamos la categoría estática de clase, o si obtenemos esta categoría de un modelo teórico previo de una totalidad estructurada, supondremos que la clase está instantáneamente presente (derivada como una proyección geométrica, de las relaciones de producción) y de ello la lucha de clases' ¿Cuál es el significado de este párrafo para el análisis que realizan los autores sobre el Velasquismo?",
        options: [
          "No puede analizarse el Velasquismo en términos de expresiones de clases o de lucha de estas.",
          "El Velasquismo expresaba la conciencia de la clase terrateniente y del partido conservador.",
          "El Velasquismo muestra la lucha de los sectores populares en su impulso para expresarse como actores políticos por derecho propio.",
          "Las clases capitalistas modernas estaban en formación durante el periodo velasquista y, por ende, se debe analizar cómo se expresaba la lucha de éstas a través del Velasquismo.",
        ],
        answers: [
          "Las clases capitalistas modernas estaban en formación durante el periodo velasquista y, por ende, se debe analizar cómo se expresaba la lucha de éstas a través del Velasquismo.",
        ],
      },
      {
        question:
          "¿Qué ocurrió con los intermediarios étnicos (Caciques y Kuracas) durante los gobiernos republicanos, de acuerdo a lo planteado por Mark Thurner?",
        options: [
          "Fueron eximidos del tributo a las haciendas.",
          "Fueron reconocidos e integrados como funcionarios al Estado.",
          "Mantuvieron los fueros y prestaron servicio militar.",
          "Fueron debilitados y sustituidos por funcionarios locales.",
        ],
        answers: ["Fueron debilitados y sustituidos por funcionarios locales."],
      },
      {
        question:
          "¿Qué ocurrió de acuerdo a Mark Thurner con la demografía de la población indígena en siglo XIX?",
        options: [
          "Creció en términos absolutos Venezuela, Colombia y Panamá.",
          "Se redujo en términos absolutos en todo el continente.",
          "Creció en términos relativos todo el continente.",
          "Creció en términos absolutos en Bolivia, Perú y Ecuador.",
        ],
        answers: ["Creció en términos absolutos en Bolivia, Perú y Ecuador."],
      },
      {
        question:
          "Señale las frases que considere verdaderas en cuanto al marco interpretativo del velasquismo y su época que proponen los autores J. Maiguashca y L. North~.",
        options: [
          "El discurso velasquista expresa el carácter caudillista y clientelar de este líder, Velasco expresaba la alianza entre la burguesía comercial costeña y los terratenientes serranos, Velasco buscaba la unidad nacional y el progreso social como resultado de la ampliación de los servicios públicos.",
          "El discurso velasquista expresa el carácter caudillista y clientelar de este líder, Los grupos dominantes y dominados del Ecuador se hallaban fraccionados regionalmente y en ese marco surgió el velasquismo, Velasco expresaba la alianza entre la burguesía comercial costeña y los terratenientes serranos.",
          "Los grupos dominantes y dominados del Ecuador se hallaban fraccionados regionalmente y en ese marco surgió el velasquismo, La ideología de Velasco representa una respuesta al legado histórico cultural del país y al del espacio normativo producido por la desestructuración social, Velasco buscaba la unidad nacional y el progreso social como resultado de la ampliación de los servicios públicos.",
          "La ideología de Velasco representa una respuesta al legado histórico cultural del país y al del espacio normativo producido por la desestructuración social, Velasco expresaba la alianza entre la burguesía comercial costeña y los terratenientes serranos, Velasco buscaba la unidad nacional y el progreso social como resultado de la ampliación de los servicios públicos.",
        ],
        answers: [
          "Los grupos dominantes y dominados del Ecuador se hallaban fraccionados regionalmente y en ese marco surgió el velasquismo, La ideología de Velasco representa una respuesta al legado histórico cultural del país y al del espacio normativo producido por la desestructuración social, Velasco buscaba la unidad nacional y el progreso social como resultado de la ampliación de los servicios públicos.",
        ],
      },
      {
        question:
          "Si bien A. Cueva no está del todo de acuerdo con la categoría periodo populista, reconoce algunos elementos comunes a las experiencias de Argentina y Brasil conceptualizadas generalmente como populistas ¿Cuáles de los siguientes elementos fueron típicos de ambos procesos?",
        options: [
          "Arbitraje estatal de tipo bonapartista, El sector burgués-industrial impuso su hegemonía al sector agroexportador, El Estado respetó por completo la autonomía política del proletariado.",
          "El sector burgués-industrial impuso su hegemonía al sector agroexportador, El Estado respetó por completo la autonomía política del proletariado, Se desarrollaron elementos anti oligárquicos y nacionalistas en materia económica.",
          "El sector burgués-industrial impuso su hegemonía al sector agroexportador, Se desarrollaron elementos anti oligárquicos y nacionalistas en materia económica, El populismo de ambos países puede ser concebido como una simple manipulación de las masas.",
          "Arbitraje estatal de tipo bonapartista, El sector burgués-industrial impuso su hegemonía al sector agroexportador, Se desarrollaron elementos anti oligárquicos y nacionalistas en materia económica.",
        ],
        answers: [
          "Arbitraje estatal de tipo bonapartista, El sector burgués-industrial impuso su hegemonía al sector agroexportador, Se desarrollaron elementos anti oligárquicos y nacionalistas en materia económica.",
        ],
      },
      {
        question:
          "De las siguientes afirmaciones ¿cuál es la que mejor refleja la posición de Keynes respecto al problema de la racionalidad de los agentes económicos?",
        options: [
          "La racionalidad es una ficción; ningún agente económico posee racionalidad alguna.",
          "La racionalidad económica consiste siempre en la maximización de los ingresos.",
          "Hay diferentes tipos de racionalidad económica según el agente que se trate.",
          "Todos los agentes económicos poseen el mismo tipo de racionalidad.",
        ],
        answers: [
          "Hay diferentes tipos de racionalidad económica según el agente que se trate.",
        ],
      },
      {
        question:
          "De las siguientes ideas, cuáles son centrales en la teoría de J.M. Keynes:",
        options: [
          "El nivel de actividad económica está determinado por la 'demanda efectiva', Los incrementos en el gasto gubernamental ayudan a la reducción del desempleo, El libre mercado no tiende al equilibrio.",
          "El nivel de actividad económica está determinado por la 'demanda efectiva', Los incrementos en el gasto gubernamental son interpretados como gastos improductivos, El libre mercado no tiende al equilibrio.",
          "El nivel de la actividad económica está determinado por la ley de la oferta y la demanda, El nivel de actividad económica está determinado por la 'demanda efectiva', Los incrementos en el gasto gubernamental ayudan a la reducción del desempleo.",
          "El nivel de la actividad económica está determinado por la ley de la oferta y la demanda, El nivel de actividad económica está determinado por la 'demanda efectiva', El libre mercado no tiende al equilibrio.",
        ],
        answers: [
          "El nivel de actividad económica está determinado por la 'demanda efectiva', Los incrementos en el gasto gubernamental ayudan a la reducción del desempleo, El libre mercado no tiende al equilibrio.",
        ],
      },
    ]),
    [actualQuestion, SetActualQuestion] = useState(),
    [loading, SetLoading] = useState(false),
    router = useRouter();

  useEffect(() => {
    loadGame();
  }, []);

  let loadGame = async () => {
    SetLoading(true);
    if (questions.length !== 0) {
      let indexQuestion = await getRandomQuestion(0, questions.length - 1);
      SetActualQuestion(questions[indexQuestion]);
      SetLoading(false);
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
    SetLoading(true);

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
            SetLoading(false);
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
        }).then(() => SetLoading(false));
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
                  SetLoading(false);
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
              }).then(() => SetLoading(false));
            }
          }
        });
      });
    }
  };

  return (
    <div className="w-full h-screen lg:px-32 px-6 ml-auto mr-auto flex flex-col justify-center items-center">
      <h1 className="py-6 uppercase lg:text-2xl text-xl font-bold text-center">
        Sociology
      </h1>
      <div>
        <h1 className="py-6 text-justify lg:text-xl text-sm">
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
                  <p className="ml-2 text-sm">{element}</p>
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
                  <p className="ml-2 text-sm">{element}</p>
                </div>
              ))
          : null}
      </div>
      <div className="flex flex-wrap py-6">
        <div className="m-3">
          <button
            onClick={() => checkAnswers()}
            className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
          >
            <span className="mr-2">Comprobar</span>
            {loading ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="animate-spin"
              >
                <path
                  fill="currentcolor"
                  d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"
                ></path>
              </svg>
            ) : (
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
            )}
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
