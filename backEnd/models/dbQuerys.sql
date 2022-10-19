CREATE DATABASE easypeasy;

\ c easypeasy CREATE TABLE client (
  id SERIAL NOT NULL PRIMARY KEY,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  is_role VARCHAR(10) NOT NULL DEFAULT 'client',
  image_url VARCHAR(255),
  createdate TIMESTAMP NOT NULL,
  updatedate TIMESTAMP NOT NULL
);

CREATE TABLE user_course (
  id SERIAL PRIMARY KEY,
  client_id INT NOT NULL,
  course_id INT NOT NULL,
  createdate TIMESTAMP NOT NULL,
  updatedate TIMESTAMP NOT NULL,
  FOREIGN KEY (client_id) REFERENCES client(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
);

CREATE TABLE course (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price NUMERIC NOT NULL,
  duration VARCHAR(255) NOT NULL,
  puntuaction NUMERIC NOT NULL,
  level VARCHAR(255) NOT NULL,
  modules NUMERIC NOT NULL,
  comentaries VARCHAR(255),
  image_url VARCHAR(255) NOT NULL,
  resurce_url VARCHAR(255) NOT NULL,
  createdate TIMESTAMP NOT NULL DEFAULT 'now()',
  updatedate TIMESTAMP NOT NULL DEFAULT 'now()',
);

INSERT INTO
  course(
    title,
    description,
    price,
    duration,
    puntuaction,
    level,
    modules,
    comentaries,
    image_url,
    resurce_url
  )
VALUES
  (
    'JavaScript',
    'Curso completo de JavaScript : Básico + Avanzado
    Aprender sobre variables, funciones, objetos y arrays
    Enfasis en programación orientada a objetos
    Testing, security and deployment',
    40,
    '80 horas',
    '4.5',
    'Principiante a Avanzado',
    60,
    '“Explica de manera clara, pero es mucha información para procesar”
    “Realmente disfrute el curso. Se nota que sabe de lo que habla y explica de manera sencilla los conceptos”
    “Si no tienes base en programación recomiendo que tomes este curso”',
    'https://asset.cloudinary.com/dysrvmojy/be82e04c5aa6301112cd7cc999d84553gen',
    'COMMING SOON'
  ),
  (
    'React JS',
    '¡Aprende uno de los Frameworks más utilizados en la industria! Aprender sobre variables, funciones, objetos y arrays Enfasis en programación orientada a objetos Testing, security and deployment',
    16,
    '40 horas',
    4.5,
    'Principiante',
    30,
    '“Explica de manera clara, pero es mucha información para procesar”
    “Realmente disfrute el curso. Se nota que sabe de lo que habla y explica de manera sencilla los conceptos”
    “Si no tienes base en programación recomiendo que tomes este curso”',
    'https://asset.cloudinary.com/dysrvmojy/9ac4434445ee6bdf65159262bf832962',
    'COMMING SOON'
  ),
  (
    'React JS Avanzado',
    '¡Lleva tus conocimientos de React JS al próximo nivel! Utilizar PWA Profundizar en Jest Utilización y control de tipos',
    25,
    '30 horas',
    4.5,
    'Avanzado',
    20,
    '“Fantástico curso! Enseña muchos aspectos interesantes del desarrollo frontend avanzado.”
    “Gran contenido sobre sistemas de diseño. Muy bien estructurado y fácil de seguir. ¡Información valiosa!”
    “El curso es bastante bueno, pero está muy centrado en la parte de CSS y deja fuera otras cosas importantes como redux o cómo gestionar correctamente las APIs.”',
    'https://asset.cloudinary.com/dysrvmojy/527bd6ee2623a2e4a268a4b0b9032b5d',
    'COMMING SOON'
  ),
  (
    'Android',
    '¡Curso de desarrollador de Android para principiantes, cree una cartera de aplicaciones, aprenda Java y Kotlin, inicie una nueva carrera! Obtener una base en XML y Java: pase a Kotlin, Fragments, RecyclerViews Archivos Java y lenguajes de programación Introducir a Kotlin',
    45,
    '28 horas',
    4.6,
    'Principiante',
    14,
    '“Este curso es muy bueno, el instructor ha explicado todos los conceptos muy claramente, pero el curso aún está incompleto.”
    “Este es un excelente curso con una muy buena combinación de teoría y práctica.”
    “Excelente estilo de enseñanza, con todos los conceptos, bien explicados e ilustrados con ejemplos adecuados.”
    ',
    'https://asset.cloudinary.com/dysrvmojy/5ba6d4890a9442437c2c301ec91e046e',
    'COMMING SOON'
  ),
  (
    'Angular',
    '¡Prepárate para trabajar con Angular! Domine la última versión de Angular y aprenda a crear aplicaciones a gran escala que lo diferencien! Desarrolle aplicaciones web modernas, complejas, receptivas y escalables con Angular Aprende a usar TailwindCSS en una aplicación Angular Use Firebase para crear aplicaciones de pila completa',
    55,
    '27 horas',
    4.5,
    'Principiante ',
    45,
    '“Buen curso aprendi muchos conceptos.Gracias.” “ Hasta ahora, los instructores son claros, concisos y tienen un interés genuino en ayudarnos a aprender.” “ Puede aprender el concepto básico de Angular.El curso es bueno en la primera parte, pero a partir de rust y webAssembly se vuelve difícil de seguir.”',
    ' https://asset.cloudinary.com/dysrvmojy/5fefb3f64621db4447d9bac1a36e752e ',
    ' COMMING SOON '
  ),
  (
    ' PHP ',
    ' ¡ Aprenda todo lo que necesita para convertirse en un desarrollador PHP profesional con ejercicios y proyectos prácticos! Principiante Aprenderá a crear un sistema de gestión de contenido (CMS) como WordPress, Drupal o Joomla Aprenderás MySQL Cómo usar AJAX para enviar datos al servidor sin actualizar la página',
    45,
    ' 37 horas ',
    35,
    'principiante',
    4.2,
    '“ He aprendido mucho sobre PHP en este curso.El apoyo a través del curso es excelente cada vez que me quedé atascado en el error.” “ He estado explorando tutoriales durante años.No hay nada mejor que esto.Es mucho trabajo.Se necesita mucha disciplina y tener una buena base en otras tecnologías ayuda.” “ He trabajado en diseño de sitios web durante algunos años y este curso me enseñó muchas funcionalidades geniales que siempre me había preguntado.” ',
    ' https://asset.cloudinary.com/dysrvmojy/030bb219ea05e993df266c95cc0afcd3',
    ' COMMING SOON '
  ),
  (
    ' Angular Avanzado ',
    ' ¡ Domine Angular 13 y cree aplicaciones web sorprendentes y reactivas con el sucesor de Angular.js ! Módulo: 33 ' 38 horas ' Avanzado Desarrolle aplicaciones web modernas,
    complejas,
    receptivas y escalables con Angular 14 Comprenda completamente la arquitectura detrás de una aplicación Angular y cómo usarla “ Algunas demostraciones son demasiado rápidas sin suficiente explicación.Me tomó un tiempo entender estos contenidos.” “ A veces,
    cuando traté de escribir el código el 80 % del tiempo,
    debo hacer una pausa,
    porque cambia los archivos inmediatamente después de terminar la línea de código ” “ Me gusta mucho este curso sobre Angular.Es totalmente bueno para aclarar los fundamentos de Angular.” ',
    ' 70 ',
    ' 3.5 ',
    ' https: / / asset.cloudinary.com / dysrvmojy / 53ef3de697e3a57b6e7e455ed9fca266 ',
    ' COMMING SOON '
  ),
  (
    ' C ',
    ' ¡ La programación en C aumentará las opciones de carrera.Conviértete en un mejor desarrollador en otros idiomas aprendiendo C ! Módulo: 17 ' 25 horas ' Básico Crea tu primera aplicación C Comprender las variables y los diferentes tipos de datos.Comprender el lenguaje central en el que se basan la mayoría de los lenguajes modernos “ ¡ Este curso fue increíble ! Es una experiencia casi perfecta para aquellos que quieren aprender C,
    y realmente aprecio los tutoriales que se brindan después de cada desafío.” “ El curso está muy bueno,
    lo único que siento que falta es que se incluyan algunas pruebas de práctica más.Será más útil para los estudiantes como yo.” ',
    ' 80 ',
    ' 4.5 ',
    ' https: / / asset.cloudinary.com / dysrvmojy / 8c9987a31ef5736b18da749e035b299b ',
    ' COMMING SOON '
  ),
  (
    ' C #',
    'Aprende uno de los lenguajes más útil porque da soluciones a problemas que otros lenguajes de programación no son capaces de resolver. Además, es un lenguaje nativo de . NET.
    Módulo: 17
     ' 25 horas '
    
    Principiante
    
    Aprende los fundamentos de la programación usando C#
    Comprenda completamente cómo funciona la POO (Programación orientada a objetos) y cómo usarla.
    

    “Este curso tiene un gran comienzo cuando se trata de lo básico de C#.”
    “Constantemente va y viene durante los ejemplos de la lección, lo que se vuelve realmente confuso.”
    “Me gusto el curso, las lecciones son bastante detalladas y faciles de entender.”
    ',
    '85',
    '4.7',
    'https://asset.cloudinary.com/dysrvmojy/bba8268c2e9661927a1af5a57e28fd53',
    'COMMING SOON'
  ),
  (
    'C++',
    '¡Aprenda sobre semántica de movimiento, expresiones lambda, punteros inteligentes, simultaneidad, plantilla, STL y más!
    Módulo: 18
     ' 22 horas '
    
    Intermedio
    
    Usa C++ como un lenguaje orientado a objetos
    Desmitificar plantillas de funciones y clases
    Escribir aplicaciones del mundo real en C++
    

    “Este curso me ha enseñado mucho. Requiere un gran esfuerzo para explicar todos los detalles como lo explican en los COMMING SOONs”
    “Breve, simple, informativo y directo al grano. no es aburrido en absoluto”
    “Curso muy bien organizado con muchos ejemplos para explicar el concepto claramente.”
    ',
    '60',
    '4.5',
    'https://asset.cloudinary.com/dysrvmojy/c495311cbf602641e6bcd2a904c7bd15',
    'COMMING SOON'
  ),
  (
    'Dart & Flutter',
    '¡Una guía completa de Flutter SDK y Flutter Framework para crear aplicaciones nativas de iOS y Android!
    Módulo: 19
     ' 42 horas '
    
    Principiante
    
    Aprende Flutter y Dart desde cero, paso a paso
    Use funciones como Google Maps, la cámara del dispositivo, la autenticación y mucho más
    Cree atractivas aplicaciones móviles nativas para Android e iOS
    

    “Gran curso. buen contenido He aprendido Flutter y Dart con mayor detalle.”
    “Este curso cubre muchas cosas para crear una aplicación móvil. Sería bueno si también se incluye el pago y mostrar notificaciones automáticas específicas por dispositivo. ”
    “El contenido es excelente, pero puede ser difícil para aquellos que no tienen experiencia en programación.” 
    ',
    '60',
    '3.5',
    'https://asset.cloudinary.com/dysrvmojy/8b0c28f041507f1be144a6647e162789',
    'COMMING SOON'
  ),
  (
    'Go',
    '¡Creación de aplicaciones web modernas con Go!
    Módulo: 21
     ' 29 horas '
    
    Principiante
    
    Cómo crear aplicaciones web modernas y seguras en el lenguaje de programación Go de Google
    Cómo organizar correctamente tu aplicación Go
    Cómo conectarse a una base de datos en Go
    Cómo crear páginas HTML usando HTML5
    

    “Este curso tiene mucho contenido, cubre los conceptos básicos de Go hasta el nivel intermedio y es amigable para los recién llegados al idioma.”
    “Excelente. He aprendido mucho de una forma muy fácil. Ahora sólo queda practicar y seguir aprendeindo.”
    “Gran curso de Go. Lo recomendaré a mis amigos.”
    ',
    '70',
    '4.7',
    'https://asset.cloudinary.com/dysrvmojy/c149a1790e28c1cf4f6aa2ee93ebf033',
    'COMMING SOON'
  ),
  (
    'Product Design',
    '¡Una educación de diseño completa para diseñadores de productos: investigue la experiencia del usuario y luego diseñe una excelente interfaz de usuario!
    Módulo: 19
     ' 15 horas '
    
    Intermedio
    
    Investigación de la experiencia del usuario
    Psicología Aplicada en Diseño
    Pruebas de usabilidad
    

    “Este curso realmente me entregó los fundamentos del diseño.”
    “Me desafió a ampliar mi perspectiva para considerar otros campos del diseño en busca de inspiración. ”
    “Este ha sido un curso realmente bueno y perspicaz. Es diferente de los cursos regulares de diseño de productos que existen. Es más detallado y práctico. Me encanta.”
    ',
    '60',
    '4.0',
    'https://asset.cloudinary.com/dysrvmojy/b6eb6400ce7aef1ac43f755841b48dd6',
    'COMMING SOON'
  ),
  (
    'Ionic',
    '¡Cree iOS y Android nativos, así como aplicaciones web progresivas con Angular, Capacitor y Ionic Framework!
    Módulo: 18
     ' 20 horas '
    
    Principiante
    
    Cree aplicaciones nativas y aplicaciones web progresivas a partir de la misma base de código
    Cree aplicaciones nativas para iOS y Android utilizando Angular y las potentes funciones que ofrece Ionic
    Pruebe las aplicaciones de iOS y Android en dispositivos reales y publíquelas en las tiendas de aplicaciones de las dos plataformas.
    

    “Excelente curso, aprendí muchas cosas nuevas y emocionantes. Realmente disfruté todo el curso.”
    “Soy un novato en cosas Ionic y Angular. No he terminado el curso pero aprendí lo que buscaba.”
    “Este curso es increíble, espero poder reducir la velocidad cuando se mueve de una ventana a otra en el código.”
    ',
    '62',
    '4.5',
    'https://asset.cloudinary.com/dysrvmojy/2f0d11526fd2693004ddade8f85af191',
    'COMMING SOON'
  ),
  (
    'Swift',
    '¡Guía para principiantes para aprender iOS, Swift, ARKit, CoreML, diseño de aplicaciones, programación avanzada y mucho más!
    Módulo: 35
     ' 90 horas '
    
    Intermedio
    
    Trabaja con fluidez con Swift e iOS
    Cree aplicaciones ARKit y CoreML
    Trabajar como autónomo de iOS
    Enviar aplicaciones de iOS a la tienda de aplicaciones de Apple
    

    “¡Este curso es increíble! No me arrepiento ni un segundo. Aprendi mucho y estoy agradecido con todos los miembros del equipo de desarrollo.”
    “Gran ritmo, ideal para principiantes. Todo está claro. El curso definitivamente tiene lógica. Hasta ahora muy satisfecho.”
    “Lo mejor que tiene el curso es el plan de estudios”
    ',
    '80',
    '4.8',
    'https://asset.cloudinary.com/dysrvmojy/8fba914c9ff235abf544f761c1b15bdf',
    'COMMING SOON'
  ),
  (
    'Java',
    '¡Aprende java básico usando IntelliJ!
    Módulo: 17
     ' 24 horas '
    
    Principiante
    
    Comprender los diferentes tipos de datos en Java y cómo usarlos de manera efectiva
    Más información sobre herencia y encapsulación
    Comprender qué es la sobrecarga de métodos, la sobrecarga de constructores y la sobrecarga de operadores
    

    “No tengo las palabras correctas para describir lo satisfecho que estoy con este curso. ”
    “Cada tema ha sido explicado claramente con ejemplos en tiempo real. Increíble curso para los principiantes.”
    “Excelente curso, pero agregaria más problemas de Coding Challenge”
    ',
    '80',
    '4.2',
    'https://asset.cloudinary.com/dysrvmojy/e6b5c89ed6f5f14c05b6dc8ced386ecd',
    'COMMING SOON'
  ),
  (
    'Lua',
    '¡Aprenda secuencias de comandos completas de Lua desde cero e incruste Lua con sus aplicaciones C y C++!
    Módulo: 15
     ' 14 horas '
    
    Principiante
    
    Secuencias de comandos de Lua
    Integrar Lua con C y C++
    

    “Esto fue asombroso. Me costaba mucho entender las metatablas y los metamétodos antes de este curso, ¡pero ahora todo tiene mucho sentido!”
    “El material es muy interesante. No sabía que Lua es tan poderosa y versátil. ”
    “Es un poco extenso para mí, entiendo todo lo que sucede, así que probablemente me haya dado el nivel correcto.”
    ',
    '80',
    '4.5',
    'https://asset.cloudinary.com/dysrvmojy/ccba4c11c61b1be6a63fcc0365ba1d0b',
    'COMMING SOON'
  ),
  (
    'Mongo',
    '¡MongoDB para aplicaciones web y móviles. Operaciones CRUD, índices, marco de agregación: ¡Todo sobre MongoDB!
    Módulo: 19
     ' 17 horas '
    
    Principiante
    
    Aprenda qué son las bases de datos de documentos y cómo se organizan los datos con MongoDB
    No se detenga en lo básico: aprenda todo sobre cómo escribir consultas MongoDB complejas, en profundidad y con ejemplos prácticos.
    Aprenda a realizar operaciones CRUD con MongoDB
    

    “Me gustó mucho este curso, encontré lo que buscaba y mucho más.”
    “Todos los temas cubiertos, explicación simple, conceptos más profundos cubiertos y recursos adecuados provistos.”
    “Algunos de los temas aprendidos estaban desactualizados con los cambios realizados en Mongo, lo que dificultaba la comprensión de lo que había que hacer y causaba frustración.”
    ',
    '60',
    '3.8',
    'https://asset.cloudinary.com/dysrvmojy/097bd1cc8aa6194f9a6b9efe719216ce',
    'COMMING SOON'
  ),
  (
    'Node JS',
    '¡Domine Node JS y Deno.js, cree API REST con Node.js, API GraphQL, agregue autenticación, use MongoDB, SQL y mucho más!
    Módulo: 36
     ' 40 horas '
    
    Intermedio
    
    Trabaje con uno de los lenguajes de programación de desarrollo web más demandados
    Cree aplicaciones web del lado del servidor modernas, rápidas y escalables con NodeJS, bases de datos como SQL o MongoDB y más
    Comprender el ecosistema NodeJS y crear aplicaciones renderizadas del lado del servidor, API REST y API GraphQL
    

    “ No solo aprendes NodeJs, sino también todo lo relacionado con él. Además de eso, construirás a lo largo del curso grandes proyectos como una API de descanso y una tienda en línea.”
    “Con este curso, siento que tengo habilidades prácticas en Node js y estoy listo para llevar mis proyectos al siguiente nivel.”
    “Hay muchas secciones que deberían actualizarse, como enviar correos electrónicos.”
    ',
    '80',
    '4.7',
    'https://asset.cloudinary.com/dysrvmojy/67771fbb3398458847581bbd2da602a5',
    'COMMING SOON'
  ),
  (
    'Python',
    '¡Aprenda ciencia de datos, automatización, cree sitios web, juegos y aplicaciones!
    Módulo: 26
     ' 32 horas '
    
    Principiante
    
    Ser capaz de usar Python para la ciencia de datos y el aprendizaje automático
    Cree GUI y aplicaciones de escritorio con Python
    Aprenderá automatización, desarrollo de juegos, aplicaciones y web, ciencia de datos y aprendizaje automático, todo usando Python.
    

    “Simplemente perfecto y bien pensado, cubre todos los conceptos básicos hasta la parte avanzada de python”
    “Me encanta el curso, aprendiendo muchos conceptos con mucha práctica.”
    “Hay algunas soluciones que no son precisas o completas y algunos elementos que necesitan una mejor aclaración, pero en general, el curso está bien enseñado y puede ser tomado por principiantes.”
    ',
    '75',
    '4.1',
    'https://asset.cloudinary.com/dysrvmojy/e198826584a7e419338d0fd4e0b38cc6',
    'COMMING SOON'
  ),
  (
    'Ruby',
    '¡Una introducción completa a la codificación con el lenguaje de programación Ruby!
    Módulo: 23
     ' 31 horas '
    
    Principiante
    
    Resuelva desafíos de codificación y algoritmos populares con Ruby
    Domine objetos comunes de Ruby como cadenas, arreglos, hashes y más
    Sumérjase en la programación orientada a objetos, incluidas clases y más
    

    “Me pareció un muy buen curso. Se construyó de manera organizada y clara y proporciona una buena base para avanzar con el idioma.”
    “Este fue un curso muy completo. Me divertí mucho aprendiendo y codificando a lo largo de los COMMING SOONs.”
    “Excelente tutorial para principiantes, tiene muchos conceptos básicos interesantes, pero si sabe cómo codificar, es mucho más fácil leer la documentación”
    ',
    '65',
    '4.7',
    'https://asset.cloudinary.com/dysrvmojy/185b2580b83a5fe7851f67a2b5d7d5da',
    'COMMING SOON'
  ),
  (
    'SQL',
    'Comprender SQL utilizando la base de datos MySQL. Aprenda diseño de bases de datos y análisis de datos con normalización y relaciones
    Módulo: 14
     ' 7 horas '    
    Principiante
    
    Tener un conocimiento y una comprensión detallados del uso de MySQL, una de las bases de datos más utilizadas en el mundo.
    El conocimiento profundo del diseño de bases de datos les dará a los estudiantes una ventaja sobre otros solicitantes.
    Los conocimientos adquiridos de SQL y MySQL permiten a los estudiantes solicitar puestos de trabajo en el sector de TI.
    

    “Este es el mejor curso de mysql que he aprendido hasta ahora. La mejor explicación y fácil de aprender practicando los ejercicios. gracias por el curso.”
    “Fue un excelente curso inicial para mí para comenzar con SQL y puedo obtener conocimientos básicos para comenzar a profundizar en SQL.”
    “Estoy aprendiendo sobre la base de datos sql por primera vez y fue bueno hacérmelo saber fácilmente. Mientras seguía uno por uno, pude hacer una base de datos simple.”
    ',
    '70',
    '4.3',
    'https://asset.cloudinary.com/dysrvmojy/053e787ad14dc0eae761feea3e736eb1',
    'COMMING SOON'
  ),
  (
    'TypeScript',
    '¡Impulse sus proyectos de JavaScript con TypeScript!
    Módulo: 16
     ' 14 horas '
    
    Intermedio
    
    Use TypeScript y sus características como Tipos, Soporte ES6, Clases, Módulos, Interfaces y mucho más en cualquiera de sus Proyectos
    Aprende a combinar TypeScript con ReactJS o NodeJS/Express
    Aprenda TypeScript tanto en teoría como aplicado a casos de uso y proyectos reales.
    

    “Este es un curso muy completo sobre TS, el instructor nos muestra muchas características del lenguaje pero también cómo funciona en diferentes entornos”
    “Excelente inmersión profunda en TS. El proyecto de arrastrar y soltar fue muy, muy desafiante, pero fue muy divertido trabajar en él, ya que utiliza los conceptos de TS aprendidos y codificados de una manera orientada a objetos”
    “ Acabo de terminar y todo el contenido está bien equilibrado. Terminé no solo con conceptos básicos sino con un poco de aplicación práctica.”
    ',
    '75',
    '4.6',
    'https://asset.cloudinary.com/dysrvmojy/dc4a9fc19617673341d26f46270deb1e',
    'COMMING SOON'
  ),
  (
    'UI Designer',
    '¡Guía detallada para la mejor configuración de archivos, consejos y trucos para que su diseño de interfaz de usuario se codifique de la manera correcta con Figma!
    Módulo: 21
     ' 29 horas '
    
    Principiante
    
    Configuración de la hoja de estilo de color
    Creación de diagramas de flujo y prototipos para el traspaso
    Comparando Figma, Sketch + herramienta de transferencia seleccionada (Zeplin, Abstract, InVision)
    

    “Me gustó absolutamente este curso porque tengo problemas para entregar mis proyectos y esto es muy útil.”
    “Siendo un desarrollador Forntend, me gusta el ángulo de este curso, ya que estoy un poco interesado en el diseño de UI/UX, ya que es esencial la comunicación entre los diseñadores y desarrolladores”
    ',
    '80',
    '4.5',
    'https://asset.cloudinary.com/dysrvmojy/92dc23230033c48cf085445a826c64bf',
    'COMMING SOON'
  ),
  (
    'Unity',
    '¡Creado en colaboración con Unity Technologies: aprenda C# desarrollando juegos 2D y 3D con esta guía completa!
    Módulo: 36
     ' 21 horas '
    
    Principiante
    
    Crea potenciadores que incluyen disparos triples, rayos láser, aumentos de velocidad y escudos
    Crea enemigos con el comportamiento básico de la IA
    Navegue por Unity Engine y descubra características únicas como Asset Store
    

    “Se apega a los detalles más importantes del desarrollo del juego y proporciona muchas herramientas útiles para crear un juego sólido.”
    “Este curso fue bueno para aprender y comprender los componentes básicos del desarrollo de juegos y las secuencias de comandos C#. ”
    “Muy buen curso, me enseñó muchas cosas valiosas en la programación en Unity.”
    ',
    '60',
    '4.7',
    'https://asset.cloudinary.com/dysrvmojy/6f06a22228e15ce1168beb0a33ad9d2f',
    'COMMING SOON'
  ),
  (
    'UX Writing',
    '¡Aprenda a guionar la experiencia de usuario! De visa, tono y voz a una plataforma
    Módulo: 11
     ' 9 horas '    
    Principiante
    
    Comprender qué es la escritura UX y qué no es
    Conoce los criterios de calidad más importantes de una buena redacción de UX
    Practique cómo escribir CTA, mensajes de error, marcadores de posición y más
    

    “Realmente disfruté este curso. Era tan claro y fácil de seguir. También siento que aprendí mucho.”
    “Cada tema avanza sin problemas desde lo que es importante (a la escritura básica de UX), por qué es importante y cómo implementarlo.”
    “Como principiante total, en realidad me resultó fácil comprender y digerir la información. Pude hacer las actividades y pude dar sentido al tema de la escritura de UX.”
    ',
    '60',
    '4.0',
    'https://asset.cloudinary.com/dysrvmojy/4dfcfd6b894ecc151d0999cf52500e04',
    'COMMING SOON'
  ),
  (
    'VueJS',
    '¡Aprenda Vue JS 3 y Firebase creando e implementando aplicaciones web dinámicas (incluida la autenticación)!
    Módulo: 28
     ' 31 horas '
    
    Principiante
    
    Obtenga una experiencia práctica y profunda con las funciones más recientes de Vue 3 (como la API de composición)
    Cree e implemente 4 aplicaciones web del mundo real con Vue y Firebase
    Aprenda a usar Firebase como back-end para sus aplicaciones Vue (como base de datos, servicio de autenticación, alojamiento, etc.)
    

    “Un gran curso en profundidad que toca muchos aspectos de Vue y ES6 modernos, pero estaria bueno que el curso cubriera Vuex para una gestión de estado más compleja. ”
    “Este curso vale 1000 veces más que el precio indicado. Impresionante profesor. Si es nuevo en el desarrollo web y desea desarrollar su propio proyecto de pila completa.”
    “Uno de los mejores cursos que he tomado hasta ahora..”
    ',
    '70',
    '3.5',
    'https://asset.cloudinary.com/dysrvmojy/e3992ad05706f7d78c0f34d44231b689',
    'COMMING SOON'
  ),
  (
    'UX',
    '¡Aprenda los principios de la experiencia del usuario y los patrones de comportamiento humano y aplíquelos para mejorar el diseño UX de sitios web y aplicaciones móviles!
    Módulo: 10
     ' 15 horas '
    
    Principiante
    
    Aplique los principios de Design Thinking y UX a cualquier producto que construya
    Aplica Modelos Mentales y Mapeo a tus productos
    Conozca todos los errores comunes de UX que cometen los diseñadores y desarrolladores
    

    “Es fácil de entender para cada persona. Realmente disfruté todo el curso. Gracias por el gran curso.”
    “Si eres un principiante y quieres tener una comprensión básica de lo que se trata el diseño de UX, este curso es el recomendado para ti.”
    “Fue muy informativo y lo disfruté profundizando en la psicología del usuario. ”
    ',
    '80',
    '4.5',
    'https://asset.cloudinary.com/dysrvmojy/085aaad8c5ac32acd7156c1f33a72880',
    'COMMING SOON'
  )