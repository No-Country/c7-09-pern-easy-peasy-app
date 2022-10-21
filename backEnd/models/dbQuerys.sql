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

CREATE TABLE client_course (
  id SERIAL PRIMARY KEY,
  client_id INT NOT NULL,
  course_id INT NOT NULL,
  createdate TIMESTAMP NOT NULL DEFAULT 'now()',
  updatedate TIMESTAMP NOT NULL DEFAULT 'now()',
  FOREIGN KEY (client_id) REFERENCES client(id),
  FOREIGN KEY (course_id) REFERENCES course(id)
);

SELECT
  client.id,
  client.firstname,
  client.lastname,
  client.email,
  client.image_url,
  client.createdate,
  client.updatedate,
  course.id,
  course.title,
  course.description,
  course.image_url,
  course.createdate,
  course.updatedate
FROM
  client_course AS cc
  INNER JOIN  client ON cc.client_id = client.id
  INNER JOIN course ON cc.course_id = course.id
WHERE client.id = 5;


CREATE TABLE course (
  id SERIAL NOT NULL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price NUMERIC NOT NULL,
  duration VARCHAR(255) NOT NULL,
  puntuaction NUMERIC NOT NULL,
  level VARCHAR(255) NOT NULL,
  objetives VARCHAR(255) NOT NULL,
  modules NUMERIC NOT NULL,
  image_url VARCHAR(255),
  resurce_url VARCHAR(255),
  createdate TIMESTAMP NOT NULL DEFAULT 'now()',
  updatedate TIMESTAMP NOT NULL DEFAULT 'now()',
);

(
  'HTML + CSS desde cero',
  '¡Lleva tu diseño al navegador con este curso!',
  50,
  '12 horas',
  4.8,
  'Principiante',
  '   Construir una página web desde cero
        Aprender buenas prácticas de maquetación
        Entender CSS Box-model',
  11
),
(
  'JavaScript',
  'Curso completo de JavaScript : Básico + Avanzado',
  60,
  '20 horas',
  4.5,
  'Principiante a avanzado',
  '   Aprender sobre variables, funciones, objetos y arrays
        Enfasis en programación orientada a objetos
        Testing, security and deployment',
  16
),
(
  'React JS',
  '¡Aprende uno de los Frameworks más utilizados en la industria!',
  80,
  '20 horas',
  4.5,
  'Principiante',
  ' Aprender sobre variables, funciones, objetos y arrays
    Enfasis en programación orientada a objetos
    Testing, security and deployment',
  16
),
(
  'React JS Avanzado',
  '¡Lleva tus conocimientos de React JS al próximo nivel!',
  70,
  '30 horas',
  4.5,
  'Avanzado',
  'Utilizar PWA
    Profundizar en Jest
    Utilización y control de tipos',
  25
),
(
  'Android',
  '¡Curso de desarrollador de Android para principiantes, cree una cartera de aplicaciones, aprenda Java y Kotlin, inicie una nueva carrera!',
  45,
  '28 horas',
  4.6,
  'Principiante',
  'Obtener una base en XML y Java: pase a Kotlin, Fragments, RecyclerViews
    Archivos Java y lenguajes de programación
    Introducir a Kotlin',
  14
),
(
  'Angular',
  '¡Prepárate para trabajar con Angular! Domine la última versión de Angular y aprenda a crear aplicaciones a gran escala que lo diferencien!',
  80,
  '27 horas',
  4.5,
  'Principiante',
  'Desarrolle aplicaciones web modernas, complejas, receptivas y escalables con Angular.
    Aprende a usar TailwindCSS en una aplicación Angular
    Use Firebase para crear aplicaciones de pila completa',
  20
),
(
  'PHP',
  '¡Aprenda todo lo que necesita para convertirse en un desarrollador PHP profesional con ejercicios y proyectos prácticos!',
  70,
  '37 horas',
  4.2,
  'Intermedio',
  ' Aprenderá a crear un sistema de gestión de contenido (CMS) como WordPress, Drupal o Joomla
    Aprenderás MySQL
    Cómo usar AJAX para enviar datos al servidor sin actualizar la página',
  43
),
(
  'Angular Avanzado',
  '¡Domine Angular 13 y cree aplicaciones web sorprendentes y reactivas con el sucesor de Angular.js!',
  70,
  '37 horas',
  3.5,
  'Avanzado',
  'Desarrolle aplicaciones web modernas, complejas, receptivas y escalables con Angular 14
    Comprenda completamente la arquitectura detrás de una aplicación Angular y cómo usarla',
  33
),
(
  'C',
  '¡La programación en C aumentará las opciones de carrera. Conviértete en un mejor desarrollador en otros idiomas aprendiendo C!',
  80,
  '25 horas',
  4.5,
  'Principiante',
  'Crea tu primera aplicación C
    Comprender las variables y los diferentes tipos de datos.
    Comprender el lenguaje central en el que se basan la mayoría de los lenguajes modernos',
  17
),
(
  'C#',
  'Aprende uno de los lenguajes más útil porque da soluciones a problemas que otros lenguajes de programación no son capaces de resolver. Además, es un lenguaje nativo de . NET.',
  85,
  '25 horas',
  4.7,
  'Principiante',
  'Aprende los fundamentos de la programación usando C#
    Comprenda completamente cómo funciona la POO (Programación orientada a objetos) y cómo usarla.',
  18
),
(
  'C++',
  '¡Aprenda sobre semántica de movimiento, expresiones lambda, punteros inteligentes, simultaneidad, plantilla, STL y más!',
  60,
  '22 horas',
  4.5,
  'Intermedio',
  'Usa C++ como un lenguaje orientado a objetos
    Desmitificar plantillas de funciones y clases
    Escribir aplicaciones del mundo real en C++',
  20
),
(
  'Dart & Flutter',
  '¡Una guía completa de Flutter SDK y Flutter Framework para crear aplicaciones nativas de iOS y Android!',
  60,
  '42 horas',
  3.5,
  'Principiante',
  'Aprende Flutter y Dart desde cero, paso a paso
    Use funciones como Google Maps, la cámara del dispositivo, la autenticación y mucho más
    Cree atractivas aplicaciones móviles nativas para Android e iOS',
  19
),
(
  'Go',
  '¡Creación de aplicaciones web modernas con Go!',
  70,
  '29 horas',
  4.7,
  'Principiante',
  '    Cómo crear aplicaciones web modernas y seguras en el lenguaje de programación Go de Google
    Cómo organizar correctamente tu aplicación Go
    Cómo conectarse a una base de datos en Go
    Cómo crear páginas HTML usando HTML5',
  21
),
(
  'Product Design',
  '¡Una educación de diseño completa para diseñadores de productos: investigue la experiencia del usuario y luego diseñe una excelente interfaz de usuario!',
  60,
  '15 horas',
  4.0,
  'Intermedio',
  'Investigación de la experiencia del usuario
    Psicología Aplicada en Diseño
    Pruebas de usabilidad',
  19
),
(
  'Ionic',
  '¡Cree iOS y Android nativos, así como aplicaciones web progresivas con Angular, Capacitor y Ionic Framework!',
  62,
  '20 horas',
  4.5,
  'Principiante',
  'Cree aplicaciones nativas para iOS y Android utilizando Angular y las potentes funciones que ofrece Ionic
    Pruebe las aplicaciones de iOS y Android en dispositivos reales y publíquelas en las tiendas de aplicaciones de las dos plataformas.',
  22
),
(
  'Swift',
  '¡Guía para principiantes para aprender iOS, Swift, ARKit, CoreML, diseño de aplicaciones, programación avanzada y mucho más!',
  80,
  '90 horas',
  4.8,
  'Intermedio',
  'Trabaja con fluidez con Swift e iOS
    Cree aplicaciones ARKit y CoreML
    Trabajar como autónomo de iOS
    Enviar aplicaciones de iOS a la tienda de aplicaciones de Apple',
  35
),
(
  'Java',
  '¡Aprende java básico usando IntelliJ!',
  80,
  '24 horas',
  4.2,
  'Principiante',
  'Comprender los diferentes tipos de datos en Java y cómo usarlos de manera efectiva
    Más información sobre herencia y encapsulación
    Comprender qué es la sobrecarga de métodos, la sobrecarga de constructores y la sobrecarga de operadores',
  17
),
(
  'Lua',
  '¡Aprenda secuencias de comandos completas de Lua desde cero e incruste Lua con sus aplicaciones C y C++!',
  75,
  '14 horas',
  4.5,
  'Principiante',
  'Secuencias de comandos de Lua
    Integrar Lua con C y C++',
  15
),(
  'Mongo',
  '¡MongoDB para aplicaciones web y móviles. Operaciones CRUD, índices, marco de agregación: ¡Todo sobre MongoDB!',
  60,
  '17 horas',
  4.5,
  'Principiante',
  'Aprenda qué son las bases de datos de documentos y cómo se organizan los datos con MongoDB
    Aprenda todo sobre cómo escribir consultas MongoDB complejas, en profundidad y con ejemplos prácticos.',
  19
),
(
  'Node JS',
  '¡Domine Node JS y Deno.js, cree API REST con Node.js, API GraphQL, agregue autenticación, use MongoDB, SQL y mucho más!',
  80,
  '40 horas',
  4.7,
  'Intermedio',
  'Cree aplicaciones web del lado del servidor modernas, rápidas y escalables con NodeJS, bases de datos como SQL o MongoDB y más
    Comprender el ecosistema NodeJS y crear aplicaciones renderizadas del lado del servidor, API REST y API GraphQL',
  36
),
(
  'Python',
  '¡Aprenda ciencia de datos, automatización, cree sitios web, juegos y aplicaciones!',
  75,
  '32 horas',
  4.1,
  'Principiante',
  'Ser capaz de usar Python para la ciencia de datos y el aprendizaje automático
    Aprenderá automatización, desarrollo de juegos, aplicaciones y web, ciencia de datos y aprendizaje automático, todo usando Python.',
  26
),(
  'Ruby',
  '¡Una introducción completa a la codificación con el lenguaje de programación Ruby!',
  65,
  '31 horas',
  4.7,
  'Principiante',
  'Resuelva desafíos de codificación y algoritmos populares con Ruby
    Domine objetos comunes de Ruby como cadenas, arreglos, hashes y más
    Sumérjase en la programación orientada a objetos, incluidas clases y más',
  23
),
(
  'SQL',
  'Comprender SQL utilizando la base de datos MySQL. Aprenda diseño de bases de datos y análisis de datos con normalización y relaciones',
  70,
  '17 horas',
  4.3,
  'Principiante',
  'El conocimiento profundo del diseño de bases de datos les dará a los estudiantes una ventaja sobre otros solicitantes.
    Los conocimientos adquiridos de SQL y MySQL permiten a los estudiantes solicitar puestos de trabajo en el sector de TI.',
  14
),(
  'TypeScript',
  '¡Impulse sus proyectos de JavaScript con TypeScript!',
  75,
  '14 horas',
  4.6,
  'Intermedio',
  'Tener un conocimiento y una comprensión detallados del uso de MySQL, una de las bases de datos más utilizadas en el mundo.
    Los conocimientos adquiridos de SQL y MySQL permiten a los estudiantes solicitar puestos de trabajo en el sector de TI.',
  16
),
(
  'UI Designer',
  '¡Guía detallada para la mejor configuración de archivos, consejos y trucos para que su diseño de interfaz de usuario se codifique de la manera correcta con Figma!',
  80,
  '29 horas',
  4.5,
  'Principiante',
  'Configuración de la hoja de estilo de color
    Creación de diagramas de flujo y prototipos para el traspaso
    Comparando Figma, Sketch + herramienta de transferencia seleccionada (Zeplin, Abstract, InVision)',
  21
),
(
  'Unity',
  '¡Creado en colaboración con Unity Technologies: aprenda C# desarrollando juegos 2D y 3D con esta guía completa!',
  60,
  '21 horas',
  4.7,
  'Principiante',
  'Crea potenciadores que incluyen disparos triples, rayos láser, aumentos de velocidad y escudos
    Crea enemigos con el comportamiento básico de la IA
    Navegue por Unity Engine y descubra características únicas como Asset Store',
  21
),
INSERT INTO
  course (
    title,
    description,
    price,
    duration,
    puntuaction,
    level,
    objetives,
    modules
  )
VALUES
  (
    'UX Writing',
    '¡Aprenda a guionar la experiencia de usuario! De visa, tono y voz a una plataforma',
    60,
    '9 horas',
    4.0,
    'Principiante',
    'Comprender qué es la escritura UX y qué no es
    Conoce los criterios de calidad más importantes de una buena redacción de UX
    Practique cómo escribir CTA, mensajes de error, marcadores de posición y más',
    11
  ),
  (
    'VueJS',
    '¡Aprenda Vue JS 3 y Firebase creando e implementando aplicaciones web dinámicas (incluida la autenticación)!',
    70,
    '31 horas',
    3.5,
    'Intermedio',
    'Obtenga una experiencia práctica y profunda con las funciones más recientes de Vue 3 (como la API de composición 
    Aprenda a usar Firebase como back-end para sus aplicaciones Vue (como base de datos, servicio de autenticación, alojamiento, etc.)',
    28
  ),
  (
    'UX',
    '¡Aprenda los principios de la experiencia del usuario y los patrones de comportamiento humano y aplíquelos para mejorar el diseño UX de sitios web y aplicaciones móviles!',
    80,
    '15 horas',
    4.5,
    'Principiante',
    'Aplique los principios de Design Thinking y UX a cualquier producto que construya
    Aplica Modelos Mentales y Mapeo a tus productos
    Conozca todos los errores comunes de UX que cometen los diseñadores y desarrolladores',
    10
  );