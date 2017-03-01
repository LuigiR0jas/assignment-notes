Diseño de compiladores
19-01-17---------------------------------------------------------
Para estudiar: libros que utilicen Regular Expressions (Cookbook)

lascariopacheco@hotmail.com
Leer acerca de compiladores y transpilers.


20-01-17---------------------------------------------------------
#Compiladores 101:
	Es una herramienta que permite detectar errores en el codigo traducir un codigo fuente a un codigo equivalente de un nivel inferior.
El enlazador toma ese archivo de código y todo el contenido de las librerías usadas, generando un ejecutable.
La herramienta que traduce un código fuente a un código equivalente en un lenguaje de alto nivel, es un transpilador. ALgunos ejemplos son los preprocesadores css (less, sass) o superset (CoffeScript, JSX, TypeScript).

Fases del proceso de compilación/transpilación:

=== Fase del análisis del código ===
Básicamente, la etapa en donde se buscan errores en el código.

	·Fase de análisis léxico: Evaluar cada una de las palabras usadas en el código, también llamados lexemas, que son unidad mínima de análisis léxico. Sólamente busca errores 'ortográficos', sin importar que hayan elementos que no pertenezcan al lenguaje. Es un primer barrido para señalar errores fáciles de identificar. El análisis léxico genera algo conocido como una tabla de símbolos, que posee dos columnas: La columna de Token y la columna de value, y establece la secuencia de valores por el orden en el que aparecen.

	·Fase de análisis sintáctico: Evalúa la coherencia de cada una de las líneas de código siguiendo el orden de la tabla de símbolos. Si existe un valor en una posición errónea (por ejemplo, un identificador de una variable no declarada anteriormente, sin un declarador de tipos), ésta es la fase en la que se identifica.

	·Análisis semántico: Busca fijar la coherencia de todas las líneas de código en el contexto (para evitar cambios de tipo de variables, o variables no declaradas, entre otros).


=== Fase de la síntesis de código ===
Donde ocurre la generación de código intermedio.

	·Fase de generación de código intermedio (No existe en los transpiladores): Se genera una traducción inicial en un lenguaje intermedio establecido por el creador del compilador, donde se establecen las mejores prácticas.

	·Fase de optimización de código (No existe en los transpiladores): En esta fase, se busca eliminar redundancias y buscar mejorar los algoritmos establecidos en el código inicial.

	·Fase de generación de código objeto: El código objeto, que es el lenguaje de alto o bajo nivel al que se busca traducir el código fuente.

#Intérpretes 101:
	Toma el código fuente, lo analiza y ejecuta los códigos sin generar un código objeto o un archivo ejecutable.
Las fases del proceso de interpretación son las mismas que en el de compilación a diferencia de que al finalizar el análisis léxico y el sintático, pasa seguidamente a la ejecución.

#Lenguajes 101:
	Conjunto de símbolos, caracteres y reglas que permiten formar lexemas. Un símbolo es la representación gráfica de una unidad linguística, que está sostenido por las reglas.

	Los lenguajes naturales son aquellos usados comúnmente por las personas para expresarse y transmitir información, cuya característica principal es que tienen mucho peso en el contexto y la cultura donde se emplean. Los lenguajes formales buscan imitar de forma más precisa, reducida y sintácticamente más estricta a los lenguajes naturales.


26-01-17
#Expresiones Regulares I
¿Qué son las expresiones regulares?
Son cadenas de caracteres que describen un patrón. Bajo ese patrón, se pueden hacer búsquedas o análisis de strings.


#Empleo de Expresiones regulares en programación
Se escribe la expresión entre dos "/" y se pueden poner flags al final, por último punto y coma. Ejemplo:

	/ab/ <==== ésta verificará si en el string existe la cadena sucesiva "ab".

Dos de los métodos que tienen las RegExp son prácticamente universales y se encuentran en casi todos los lenguajes, como lo son:

	·test: Devuelve true si el patron existe al menos una vez en la cadena de caracteres.
	·exec: Devuelve un arreglo con las conincidencias.
