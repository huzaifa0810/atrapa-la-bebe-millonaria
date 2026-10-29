/* ==========================================================================
   ATRAPA A LA BEBÉ MILLONARIA — Vídeos de transición
   --------------------------------------------------------------------------
   Copia tus vídeos MP4 en ESTA MISMA CARPETA (videos/transiciones/).
   El vídeo se reproduce ANTES de cada pregunta:
     COMENZAR A JUGAR → vídeo 1 → pregunta 1 → SIGUIENTE → vídeo 2 → pregunta 2 → …

   Cómo elige el juego el vídeo que va antes de la pregunta N:
     1) Si en "videos" de abajo hay una línea para N, usa ese archivo.
     2) Si no, busca transicion_N.mp4     (ej.: transicion_2.mp4 = antes de la pregunta 2)
     3) Si no existe, usa el vídeo general: transicion.mp4
     4) Si tampoco existe, hace una transición animada de la propia pantalla
        y el juego continúa sin bloquearse.
   Las preguntas se numeran en el orden de juego (1-5 fáciles, 6-10 medias, 11-15
   difíciles, 16-20 extremas). Después de la última no hay vídeo: se pasa a los resultados.
   ========================================================================== */
window.CONFIG_TRANSICIONES = {

  // Vídeo general para las preguntas que no tengan uno propio
  porDefecto: "transicion.mp4",

  // Vídeos concretos: número de la pregunta que VA A EMPEZAR  →  nombre del archivo.
  // Quita las dos barras // del principio de una línea para activarla.
  // Pon null para que antes de esa pregunta NO haya vídeo (solo la transición animada).
  videos: {
    // 1: "transicion_1.mp4",
    // 2: "transicion_2.mp4",
    // 3: "transicion_3.mp4",
    // 4: "transicion_4.mp4",
    // 5: "transicion_5.mp4",
    // 6: "transicion_6.mp4",
    // 7: "transicion_7.mp4",
    // 8: "transicion_8.mp4",
    // … hasta 20 (la partida tiene como máximo 20 preguntas)
  },

  // Segundos de espera tras el resultado antes de lanzar el siguiente vídeo.
  // 0 = el vídeo solo arranca al pulsar «SIGUIENTE» (o la tecla N).
  segundosAntesDelVideo: 0,

  // Volumen de los vídeos (de 0 a 1)
  volumen: 1
};
