import type { Question } from '../lib/quiz';

export const allQuestions: Question[] = [

// ══════════════════════════════════════
// ALTA — 4 pts (banco: 53 preguntas)
// ══════════════════════════════════════
{weight:'high',topic:"Prelación en vía (Art. 70)",
q:"En una intersección sin señalización, dos vehículos llegan al mismo tiempo. ¿Quién tiene prelación?",
options:["El vehículo que va más rápido","El vehículo que viene por la derecha","El vehículo más grande","El que toca la bocina primero"],
correct:1,
explanation:"El Art. 70 de la Ley 769/2002 establece que en intersecciones no señalizadas (salvo glorietas) tiene prelación el vehículo que se encuentre a la derecha."},

{weight:'high',topic:"Prelación en vía (Art. 70)",
q:"Cuando un vehículo se encuentra dentro de una glorieta y otro intenta ingresar, ¿quién tiene prelación?",
options:["El que entra, porque llega con impulso","El que está dentro de la glorieta, siempre que esté en movimiento","El más pequeño para facilitar el tráfico","Ninguno; deben negociar el paso"],
correct:1,
explanation:"El Art. 70 indica expresamente: cuando un vehículo se encuentre dentro de una glorieta, tiene prelación sobre los que van a entrar a ella, siempre y cuando esté en movimiento."},

{weight:'high',topic:"Prelación en vía (Art. 70)",
q:"En una vía de doble sentido, dos vehículos en sentido contrario intentan girar al mismo lado. ¿Quién tiene prelación?",
options:["El que gira a la izquierda","El que gira a la derecha","El de mayor velocidad","El de servicio público"],
correct:1,
explanation:"Según el Art. 70, cuando dos vehículos transiten en sentido contrario e intenten girar al mismo lado, tiene prelación el que va a girar a la derecha."},

{weight:'high',topic:"Prelación en vía (Art. 70)",
q:"Dos vehículos llegan a una intersección desde vías diferentes; uno va a girar a la derecha. ¿Quién tiene prelación?",
options:["El que va derecho siempre","El que se encuentra a la derecha del otro","El de mayor cilindraje","El que lleva más pasajeros"],
correct:1,
explanation:"El Art. 70 establece: cuando dos vehículos de vías diferentes llegan a una intersección y uno va a girar a la derecha, tiene prelación el vehículo que se encuentra a la derecha."},

{weight:'high',topic:"Embriaguez y sanciones (Arts. 131, 152)",
q:"Conducir en estado de embriaguez acarrea, además de la multa de 30 SMLDV:",
options:["Solo una amonestación verbal","Suspensión de la licencia entre 8 meses y 1 año e inmovilización del vehículo","Cancelación inmediata y definitiva de la licencia","Multa adicional de 100 SMLDV"],
correct:1,
explanation:"El Art. 131 literal D y el Art. 152 establecen que conducir en estado de embriaguez implica multa de 30 SMLDV, suspensión de la licencia de 8 meses a 1 año e inmovilización del vehículo."},

{weight:'high',topic:"Embriaguez y sanciones (Art. 152)",
q:"La reincidencia en tercer grado de embriaguez es causal para:",
options:["Una multa del doble","La suspensión de la licencia por 10 años","La cancelación definitiva de la licencia de conducción","Un curso obligatorio de 80 horas"],
correct:2,
explanation:"El parágrafo del Art. 152 establece que la reincidencia en un tercer grado de embriaguez es causal para determinar la cancelación definitiva de la licencia de conducción."},

{weight:'high',topic:"Paso peatonal (Arts. 57, 63)",
q:"Al aproximarse a un paso peatonal sin semáforo donde hay personas cruzando, el conductor debe:",
options:["Acelerar para pasar antes de que crucen","Pitar para que el peatón espere","Detenerse o reducir velocidad y ceder el paso al peatón","Ceder solo si el peatón ya está en la mitad de la calzada"],
correct:2,
explanation:"El Art. 63 establece que los conductores deben respetar los derechos e integridad de los peatones dándoles prelación en la vía; el Art. 57 indica que el peatón puede cruzar respetando las señales."},

{weight:'high',topic:"Accidente de tránsito con heridos",
q:"Al ser implicado en un accidente con personas heridas, el conductor debe:",
options:["Huir para evitar problemas legales","Detenerse, prestar auxilio, llamar al 123 y no mover los vehículos sin autorización","Mover inmediatamente los vehículos para no obstruir el tráfico","Esperar 24 horas antes de reportarlo"],
correct:1,
explanation:"Abandonar el lugar de un accidente con heridos constituye infracción grave con posibles consecuencias penales. El conductor debe detenerse, prestar primeros auxilios, llamar al 123 y esperar a las autoridades."},

{weight:'high',topic:"Señal PARE (Art. 110)",
q:"Una señal octogonal roja con la palabra PARE obliga al conductor a:",
options:["Reducir la velocidad a 30 km/h y continuar","Detenerse completamente antes de la línea de pare y verificar que la vía esté libre","Ceder el paso solo si hay peatones","Disminuir gradualmente la velocidad"],
correct:1,
explanation:"La señal PARE (stop) es reglamentaria y obliga a detención completa antes de la línea de pare. Continuar sin detenerse plenamente constituye infracción grave (Art. 131 literal D.4)."},

{weight:'high',topic:"Semáforo en rojo (Art. 118, 131 D.4)",
q:"No detenerse ante una luz roja de semáforo está sancionado con:",
options:["8 SMLDV","15 SMLDV","30 SMLDV e inmovilización","Solo amonestación"],
correct:2,
explanation:"El Art. 131 literal D.4 sanciona con multa de 30 SMLDV no detenerse ante una luz roja o amarilla de semáforo, señal de PARE o semáforo intermitente en rojo."},

{weight:'high',topic:"Cinturón de seguridad (Art. 82)",
q:"El cinturón de seguridad es obligatorio para:",
options:["Solo el conductor en vías nacionales","El conductor y pasajeros del asiento delantero en todas las vías","El conductor y todos los ocupantes en todas las vías del territorio nacional","Solo en vías de alta velocidad"],
correct:2,
explanation:"El Art. 82 establece que es obligatorio el uso del cinturón por el conductor y todos los ocupantes del vehículo en todas las vías del territorio nacional, incluyendo las urbanas."},

{weight:'high',topic:"Vehículos de emergencia (Art. 64)",
q:"Al escuchar sirenas de una ambulancia acercándose, el conductor debe:",
options:["Acelerar para no obstruir","Continuar normalmente y ceder si puede","Orillarse al costado derecho de la calzada y detenerse","Detenerse en cualquier lugar de la vía"],
correct:2,
explanation:"El Art. 64 establece que todo conductor debe ceder el paso a los vehículos de emergencia orillándose al costado derecho de la calzada y deteniendo el movimiento del vehículo cuando anuncien su presencia."},

{weight:'high',topic:"Suspensión de licencia (Art. 26)",
q:"La licencia de conducción se CANCELA (no solo suspende) cuando:",
options:["El conductor acumula 3 comparendos en un año","Hay reincidencia en conducir bajo embriaguez o imposibilidad permanente médica para conducir","El SOAT vence por más de 6 meses","El vehículo no pasa la revisión técnico-mecánica"],
correct:1,
explanation:"El Art. 26 establece como causales de cancelación: imposibilidad permanente física o mental para conducir, decisión judicial, muerte del titular, reincidencia en embriaguez o en prestar servicio público con vehículo particular."},

{weight:'high',topic:"Adelantamiento prohibido (Art. 73)",
q:"¿En cuál de estos lugares está PROHIBIDO adelantar a otro vehículo?",
options:["En rectas largas con buena visibilidad","En curvas, pendientes, túneles, puentes y pasos a nivel","En vías de doble sentido con carril disponible","En zonas urbanas de 50 km/h"],
correct:1,
explanation:"El Art. 73 prohíbe adelantar en: intersecciones, tramos con línea continua, curvas o pendientes, visibilidad desfavorable, proximidades de pasos peatonales, intersecciones férrreas, por la berma o por la derecha, y en general cuando la maniobra ofrezca peligro."},

{weight:'high',topic:"Reincidencia (Art. 124)",
q:"Según la Ley 769/2002, se considera reincidencia:",
options:["Cometer la misma infracción dos veces en toda la vida","Haber cometido más de una falta a las normas de tránsito en un período de seis meses","Tener tres comparendos en un año","No pagar una multa dentro de los 30 días"],
correct:1,
explanation:"El Art. 124 define reincidencia como haber cometido más de una falta a las normas de tránsito en un periodo de seis meses; en ese caso se suspende la licencia por seis meses."},

{weight:'high',topic:"RCP y primeros auxilios",
q:"Al encontrar en un accidente una víctima sin respiración ni pulso, lo correcto es:",
options:["Darle agua para que reaccione","Iniciar RCP (30 compresiones + 2 ventilaciones) y llamar al 123","Moverla a un lugar más cómodo y esperar","Aplicarle alcohol en la frente"],
correct:1,
explanation:"Ante ausencia de respiración y pulso se debe iniciar RCP de inmediato y llamar al 123. Cada minuto sin circulación reduce drásticamente las posibilidades de supervivencia."},

{weight:'high',topic:"Primeros auxilios",
q:"En caso de hemorragia externa grave en una víctima de accidente, la medida inmediata es:",
options:["Retirar cualquier objeto incrustado","Aplicar presión directa sobre la herida con un paño limpio","Sumergir la herida en agua fría","Administrar analgésicos orales"],
correct:1,
explanation:"La presión directa y sostenida sobre la herida con un paño limpio o gasa es la primera medida para controlar una hemorragia externa, mientras se activa el sistema de emergencias."},

{weight:'high',topic:"Conducir sin licencia (Art. 131 D.1)",
q:"Guiar un vehículo sin haber obtenido la licencia de conducción acarrea:",
options:["Multa de 8 SMLDV","Multa de 15 SMLDV","Multa de 30 SMLDV e inmovilización del vehículo","Solo amonestación y curso vial"],
correct:2,
explanation:"El Art. 131 literal D.1 sanciona con multa de 30 SMLDV guiar un vehículo sin haber obtenido la licencia. Además, el vehículo es inmovilizado hasta que sea retirado por persona autorizada con licencia."},

{weight:'high',topic:"Sentido contrario (Art. 131 D.3)",
q:"Transitar en sentido contrario al estipulado para la vía está sancionado con:",
options:["8 SMLDV","15 SMLDV","30 SMLDV","Amonestación"],
correct:2,
explanation:"El Art. 131 literal D.3 sanciona con 30 SMLDV transitar en sentido contrario al estipulado para la vía, calzada o carril."},

{weight:'high',topic:"Maniobras peligrosas (Art. 131 D.7)",
q:"Conducir realizando maniobras altamente peligrosas e irresponsables que pongan en peligro a personas o cosas está sancionado con:",
options:["8 SMLDV","15 SMLDV","30 SMLDV","Solo inmovilización"],
correct:2,
explanation:"El Art. 131 literal D.7 sanciona con 30 SMLDV conducir realizando maniobras altamente peligrosas e irresponsables que pongan en peligro a las personas o las cosas."},

{weight:'high',topic:"Velocidad en zona escolar (Arts. 74, 106)",
q:"En zonas escolares y zonas residenciales, el límite máximo de velocidad es:",
options:["20 km/h","30 km/h","40 km/h","50 km/h"],
correct:1,
explanation:"El Art. 106 establece que la velocidad en zonas escolares y residenciales será hasta de 30 km/h. El Art. 74 también ordena reducir a 30 km/h en lugares de concentración de personas."},

{weight:'high',topic:"No ceder paso a peatón (Art. 131 C.32)",
q:"No respetar el paso de peatones que cruzan una vía en sitio permitido está sancionado con:",
options:["4 SMLDV","8 SMLDV","15 SMLDV","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.32 sanciona con 15 SMLDV no respetar el paso de peatones que cruzan en sitio permitido o no darles prelación en las franjas establecidas."},

{weight:'high',topic:"Alcohol: prueba (Art. 150)",
q:"Las autoridades de tránsito pueden solicitar al conductor la práctica de examen de embriaguez para verificar:",
options:["Solo el nivel de alcohol en sangre","Si se encuentra bajo efectos del alcohol, drogas, estupefacientes, alucinógenos o hipnóticos","Solo el nivel de marihuana","El nivel de cansancio del conductor"],
correct:1,
explanation:"El Art. 150 establece que las autoridades pueden solicitar examen de embriaguez para determinar si el conductor está bajo efectos del alcohol, drogas o sustancias estupefacientes, alucinógenas o hipnóticas."},

{weight:'high',topic:"Accidente: abandono (Art. 151)",
q:"Quien cause lesiones u homicidio en accidente de tránsito y abandone injustificadamente el lugar de los hechos, además de las sanciones penales:",
options:["Solo paga una multa de 30 SMLDV","Se hace acreedor a la suspensión de la licencia por 5 años","Pierde definitivamente la licencia de conducción","Debe pagar el 100% de los daños sin seguro"],
correct:1,
explanation:"El Art. 151 establece que quien cause lesiones u homicidio en accidente y abandone injustificadamente el lugar se hará acreedor a la suspensión de su licencia por 5 años, además de las sanciones del Código Penal."},

{weight:'high',topic:"Luces exteriores (Art. 86)",
q:"Los vehículos deben tener encendidas las luces exteriores:",
options:["Solo de noche entre las 22:00 y las 5:00 horas","Desde las 18:00 hasta las 6:00 horas y cuando las condiciones de visibilidad sean adversas","Solo en carreteras nacionales","Solo cuando lo indique un agente de tránsito"],
correct:1,
explanation:"El Art. 86 establece que todo vehículo debe llevar encendidas las luces exteriores desde las 18:00 hasta las 6:00 horas del día siguiente, y cuando las condiciones de visibilidad sean adversas."},

{weight:'high',topic:"Cinturones traseros (Art. 82)",
q:"Los menores de cuántos años NO pueden viajar en el asiento delantero del vehículo?",
options:["6 años","8 años","10 años","12 años"],
correct:2,
explanation:"El Art. 82 establece que los menores de 10 años no podrán viajar en el asiento delantero del vehículo."},

{weight:'high',topic:"No permitir vehículo emergencia (Art. 131 D.9)",
q:"No permitir el paso de los vehículos de emergencia está sancionado con:",
options:["8 SMLDV","15 SMLDV","30 SMLDV","Solo amonestación"],
correct:2,
explanation:"El Art. 131 literal D.9 sanciona con 30 SMLDV no permitir el paso de los vehículos de emergencia."},

{weight:'high',topic:"Suspensión licencia (Art. 26)",
q:"¿En cuál de estos casos SE SUSPENDE (no cancela) la licencia de conducción?",
options:["Por muerte del titular","Por decisión judicial que así lo ordene (suspensión)","Por imposibilidad permanente médica para conducir","Por reincidencia en embriaguez"],
correct:1,
explanation:"El Art. 26 distingue suspensión y cancelación. La suspensión procede por: disposición de autoridades por imposibilidad TRANSITORIA, decisión judicial, flagrante embriaguez, reincidencia en la misma norma en menos de un año, o prestar servicio público con vehículo particular."},

// ══════════════════════════════════════
// MEDIA — 2 pts (banco: 65 preguntas)
// ══════════════════════════════════════
{weight:'med',topic:"Señales preventivas (Art. 110)",
q:"Las señales triangulares con borde rojo y fondo blanco son señales:",
options:["Reglamentarias que indican una prohibición","Preventivas que advierten sobre un peligro o condición especial","Informativas de destinos y distancias","Transitorias de obras en la vía"],
correct:1,
explanation:"El Art. 110 clasifica las señales preventivas como aquellas que tienen por objeto advertir al usuario de la vía la existencia de un peligro y la naturaleza de éste."},

{weight:'med',topic:"Señales reglamentarias (Art. 110)",
q:"Las señales reglamentarias tienen por objeto:",
options:["Advertir sobre peligros en la vía","Indicar limitaciones, prohibiciones o restricciones cuya violación es sancionable","Guiar al usuario proporcionando información","Modificar transitoriamente el régimen de la vía"],
correct:1,
explanation:"Según el Art. 110, las señales reglamentarias indican a los usuarios las limitaciones, prohibiciones o restricciones sobre el uso de la vía, y su violación constituye falta sancionable."},

{weight:'med',topic:"Señales informativas (Art. 110)",
q:"Las señales informativas tienen por objeto:",
options:["Prohibir ciertas maniobras","Advertir sobre peligros","Identificar las vías y guiar al usuario proporcionando información que pueda necesitar","Modificar el régimen de velocidades"],
correct:2,
explanation:"El Art. 110 define las señales informativas como aquellas que tienen por objeto identificar las vías y guiar al usuario, proporcionándole la información que pueda necesitar."},

{weight:'med',topic:"Prelación de señales (Art. 111)",
q:"¿Cuál es el orden correcto de prelación de las señales de tránsito de mayor a menor?",
options:["Semáforos → señales verticales → agentes de tránsito → marcas viales","Agentes de tránsito → señales transitorias → semáforos → señales verticales → señales horizontales","Señales verticales → semáforos → agentes → marcas viales","Marcas viales → semáforos → agentes → señales verticales"],
correct:1,
explanation:"El Art. 111 establece la prelación: 1) Señales y órdenes de agentes de tránsito, 2) Señales transitorias, 3) Semáforos, 4) Señales verticales, 5) Señales horizontales o marcas viales."},

{weight:'med',topic:"Semáforos (Art. 118)",
q:"La luz AMARILLA del semáforo indica:",
options:["Vía libre para continuar","Detenerse obligatoriamente igual que el rojo","Atención para cambio de luces; no iniciar marcha ni incrementar velocidad","Que se puede continuar con precaución"],
correct:2,
explanation:"El Art. 118 establece que la luz amarilla indica atención para cambio de luces, que el cruce sea desalojado, y que no debe iniciarse la marcha ni incrementarse la velocidad en ese lapso."},

{weight:'med',topic:"Semáforos (Art. 118)",
q:"La luz intermitente ROJA del semáforo se asimila a:",
options:["Señal de ceda el paso","Señal de PARE","Luz amarilla intermitente","Una señal informativa"],
correct:1,
explanation:"El Art. 118 establece expresamente que la señal intermitente roja se asimila a una señal de PARE."},

{weight:'med',topic:"Límite velocidad urbano (Art. 106)",
q:"En vías urbanas, la velocidad máxima general que no puede sobrepasar ningún vehículo es:",
options:["30 km/h","50 km/h","80 km/h","100 km/h"],
correct:1,
explanation:"El Art. 106 establece que en vías urbanas en ningún caso la velocidad podrá sobrepasar los 50 km/h, salvo señalización diferente de la autoridad competente."},

{weight:'med',topic:"Límite velocidad carretera (Art. 107)",
q:"En carreteras nacionales y departamentales, la velocidad máxima general es:",
options:["80 km/h","90 km/h","100 km/h","120 km/h"],
correct:1,
explanation:"El Art. 107 establece que en carreteras nacionales y departamentales en ningún caso se podrá sobrepasar los 90 km/h. Para vías doble calzada sin pasos peatonales puede ser hasta 120 km/h."},

{weight:'med',topic:"Distancia de seguimiento (Art. 108)",
q:"Para velocidades entre 60 y 80 km/h, la distancia mínima de seguimiento entre vehículos es:",
options:["10 metros","20 metros","25 metros","30 metros"],
correct:2,
explanation:"El Art. 108 establece distancias según velocidad: hasta 30 km/h → 10 m; 30-60 km/h → 20 m; 60-80 km/h → 25 m; más de 80 km/h → 30 m."},

{weight:'med',topic:"Distancia de seguimiento (Art. 108)",
q:"Para velocidades de hasta 30 km/h, la distancia mínima de seguimiento es:",
options:["5 metros","10 metros","15 metros","20 metros"],
correct:1,
explanation:"El Art. 108 establece que para velocidades de hasta 30 km/h la distancia mínima de seguimiento entre vehículos es de 10 metros."},

{weight:'med',topic:"Señales del conductor (Art. 67)",
q:"Para indicar reducción de velocidad o detención del vehículo mediante señal manual, el conductor saca:",
options:["El brazo izquierdo extendido horizontalmente","El brazo izquierdo en escuadra con la mano hacia arriba","El brazo izquierdo en escuadra con la mano hacia abajo","El brazo derecho extendido"],
correct:2,
explanation:"El Art. 67 establece que para indicar reducción de velocidad o detención, se saca el brazo izquierdo formando escuadra con la mano hacia abajo."},

{weight:'med',topic:"Señales del conductor (Art. 67)",
q:"Para indicar un cruce o cambio de carril a la derecha mediante señal manual, el conductor:",
options:["Extiende el brazo derecho horizontalmente","Saca el brazo izquierdo en escuadra con la mano hacia arriba","Saca el brazo izquierdo en escuadra con la mano hacia abajo","Extiende el brazo izquierdo horizontalmente"],
correct:1,
explanation:"El Art. 67 establece que para indicar cruce a la derecha o cambio de carril, se saca el brazo izquierdo formando escuadra con la mano hacia arriba."},

{weight:'med',topic:"Carriles (Art. 68)",
q:"En una vía de doble sentido con dos carriles, los vehículos deben circular por:",
options:["El carril izquierdo siempre","El carril derecho, usando el izquierdo solo para adelantar","Cualquier carril libremente","El carril central"],
correct:1,
explanation:"El Art. 68 establece que en vías de doble sentido de dos carriles, los vehículos circularán por el carril derecho y usarán el izquierdo con precaución solo para maniobras de adelantamiento."},

{weight:'med',topic:"Reducción de velocidad (Art. 74)",
q:"Los conductores deben reducir la velocidad a 30 km/h cuando:",
options:["Ven una señal verde","Circulan por autopista","Se aproximan a una intersección, zonas escolares o de concentración de personas","Llevan carga liviana"],
correct:2,
explanation:"El Art. 74 ordena reducir a 30 km/h en: lugares de concentración de personas, zonas escolares, cuando se reduzca la visibilidad, cuando las señales lo ordenen, y al aproximarse a una intersección."},

{weight:'med',topic:"Estacionamiento prohibido (Art. 76)",
q:"¿En cuál de estos lugares está PROHIBIDO estacionar?",
options:["En vías secundarias a más de 5 metros de una intersección","Frente a hidrantes, en doble fila, o en pasos peatonales","En zonas residenciales durante el día","En vías de doble sentido con dos carriles"],
correct:1,
explanation:"El Art. 76 prohíbe estacionar frente a hidrantes, en doble fila, en pasos peatonales, en curvas, en puentes y viaductos, en zonas verdes, en autopistas, entre otros."},

{weight:'med',topic:"Luces en zona urbana (Art. 86)",
q:"Dentro del perímetro urbano, ¿qué tipo de luz debe usar el vehículo?",
options:["Luz plena o alta siempre","Luz baja o media","Luces de emergencia","Ninguna si hay iluminación pública"],
correct:1,
explanation:"El Art. 86 establece que dentro del perímetro urbano se usará la luz media (baja). La luz plena o alta solo se permite fuera del perímetro urbano, excepto cuando se aproxime un vehículo en sentido contrario."},

{weight:'med',topic:"Comparendo (Arts. 2, 135)",
q:"El comparendo es:",
options:["El certificado de revisión técnico-mecánica","La orden formal de notificación para que el presunto contraventor se presente ante la autoridad de tránsito","La multa en dinero impuesta en el sitio","El documento que acredita el pago de la infracción"],
correct:1,
explanation:"El Art. 2 define el comparendo como la orden formal de notificación para que el presunto contraventor o implicado se presente ante la autoridad de tránsito por la comisión de una infracción."},

{weight:'med',topic:"Reducción de multa (Art. 136)",
q:"Si el infractor acepta la infracción y paga dentro de los 5 días siguientes al comparendo asistiendo al curso de normas de tránsito, paga:",
options:["El 100% de la multa","El 75% de la multa","El 50% de la multa","El 25% de la multa"],
correct:2,
explanation:"El Art. 136 establece que el infractor puede cancelar el 50% de la multa dentro de los 5 días siguientes, siempre y cuando asista obligatoriamente a un curso sobre normas de tránsito."},

{weight:'med',topic:"Inmovilización (Arts. 2, 125)",
q:"La inmovilización de un vehículo consiste en:",
options:["La cancelación definitiva de la licencia de tránsito","La suspensión temporal de la circulación del vehículo por las vías","El embargo del vehículo por deudas","El cambio obligatorio de placas"],
correct:1,
explanation:"El Art. 2 define inmovilización como la suspensión temporal de la circulación de un vehículo. El Art. 125 precisa que el vehículo es conducido a parqueaderos autorizados hasta que se subsane la causa."},

{weight:'med',topic:"Tipos de sanciones (Art. 122)",
q:"Las sanciones por infracciones al Código de Tránsito incluyen:",
options:["Solo multas económicas","Amonestación, multa, suspensión de licencia, inmovilización y cancelación de licencia, entre otras","Solo suspensión e inmovilización","Arrestos de 1 a 30 días"],
correct:1,
explanation:"El Art. 122 enumera los tipos de sanciones: amonestación, multa, suspensión de la licencia, suspensión o cancelación del permiso, inmovilización, retención preventiva y cancelación definitiva de la licencia."},

{weight:'med',topic:"RUNT (Art. 8)",
q:"El RUNT incorpora entre otros los siguientes registros:",
options:["Solo el registro de vehículos y conductores","Automotores, conductores, empresas de transporte, licencias, infracciones, accidentes, seguros y más","Solo el registro de infracciones y accidentes","Solo el registro de licencias de conducción"],
correct:1,
explanation:"El Art. 8 establece que el RUNT incorpora al menos 10 registros: automotores, conductores, empresas de transporte, licencias de tránsito, infracciones, centros de enseñanza, seguros, personas del sector, remolques y accidentes."},

{weight:'med',topic:"Licencia de conducción (Art. 22)",
q:"La licencia de conducción para vehículos particulares tiene una vigencia:",
options:["De 5 años","De 10 años","Indefinida","De 3 años renovables"],
correct:2,
explanation:"El Art. 22 establece que las licencias de conducción para vehículos particulares tendrán una vigencia indefinida. Solo las de servicio público tienen vigencia de 3 años."},

{weight:'med',topic:"Licencia de conducción (Art. 19)",
q:"Para obtener por primera vez la licencia de conducción para vehículos particulares se requiere:",
options:["Solo aprobar el examen teórico","Tener 18 años, aprobar examen teórico-práctico, certificado del CEA y certificado médico del CRC","Tener 16 años, certificado del CEA, certificado médico del CRC y aprobar examen teórico-práctico","Solo el certificado del CEA y la cédula"],
correct:2,
explanation:"El Art. 19 exige para vehículos particulares: saber leer y escribir, tener 16 años cumplidos, aprobar examen teórico y práctico, certificado de capacitación del CEA y certificado de aptitud física y mental del CRC."},

{weight:'med',topic:"SOAT (Art. 42)",
q:"Para transitar en el territorio nacional todos los vehículos deben estar amparados por:",
options:["Un seguro de responsabilidad civil voluntario","Un seguro obligatorio de accidentes de tránsito (SOAT) vigente","Una póliza de daños a terceros","El registro en el RUNT únicamente"],
correct:1,
explanation:"El Art. 42 establece que para poder transitar en el territorio nacional todos los vehículos deben estar amparados por un seguro obligatorio vigente (SOAT)."},

{weight:'med',topic:"RTM (Art. 51)",
q:"La revisión técnico-mecánica verifica, entre otros aspectos:",
options:["Solo las emisiones de gases contaminantes","Estado de carrocería, emisiones, sistema mecánico, sistema eléctrico, frenos, llantas y elementos de seguridad","Solo el sistema de frenos y luces","Solo las condiciones externas del vehículo"],
correct:1,
explanation:"El Art. 51 establece que la revisión verifica: estado de carrocería, niveles de emisión de gases, sistema mecánico, sistema eléctrico y óptico, eficiencia de combustión, elementos de seguridad, frenos, llantas y puerta de emergencia."},

{weight:'med',topic:"RTM primera vez (Art. 52)",
q:"Los vehículos nuevos de servicio particular (diferentes de motos) se someten a la primera RTM:",
options:["Al año de matriculados","A los 3 años de matriculados","A los 5 años de matriculados","A los 2 años de matriculados"],
correct:2,
explanation:"El Art. 52 establece que los vehículos nuevos de servicio particular (no motos) se someten a la primera revisión técnico-mecánica a partir del quinto año contado desde su matrícula."},

{weight:'med',topic:"RTM motos (Art. 52)",
q:"Las motocicletas nuevas se someten a la primera RTM:",
options:["Al año de matriculadas","A los 2 años de matriculadas","A los 3 años de matriculadas","A los 5 años de matriculadas"],
correct:1,
explanation:"El Art. 52 establece que los vehículos de servicio público y las motocicletas y similares se someten a la primera revisión técnico-mecánica al cumplir 2 años contados desde su matrícula."},

{weight:'med',topic:"Equipo de carretera (Art. 30)",
q:"¿Cuál de estos elementos NO es parte del equipo de carretera obligatorio según el Art. 30?",
options:["Botiquín de primeros auxilios","Extintor","Dos señales de carretera reflectivas triangulares","Paraguas o impermeable"],
correct:3,
explanation:"El Art. 30 establece el equipo obligatorio: gato, cruceta, dos señales reflectivas triangulares, botiquín, extintor, dos tacos, caja de herramienta básica, llanta de repuesto y linterna. El paraguas no está incluido."},

{weight:'med',topic:"Motocicletas (Art. 96)",
q:"Las motocicletas deben transitar con las luces delanteras y traseras:",
options:["Solo de noche","Solo en condiciones de lluvia o niebla","En todo momento mientras transiten por vías de uso público","Solo cuando lo exija el agente de tránsito"],
correct:2,
explanation:"El Art. 96 numeral 4 establece que todo el tiempo que las motocicletas transiten por las vías de uso público deben hacerlo con las luces delanteras y traseras encendidas."},

{weight:'med',topic:"Casco (Art. 94)",
q:"La no utilización del casco de seguridad cuando corresponda da lugar a:",
options:["Solo una amonestación verbal","Multa de 4 SMLDV","La inmovilización del vehículo","Suspensión de la licencia por 3 meses"],
correct:2,
explanation:"El Art. 94 establece que la no utilización del casco de seguridad cuando corresponda dará lugar a la inmovilización del vehículo."},

{weight:'med',topic:"Ciclistas (Art. 95)",
q:"Las bicicletas cuando circulen en horas nocturnas deben llevar:",
options:["Solo chaleco reflectivo","Dispositivos de luz blanca delantera y reflectores de luz roja trasera","Solo luces de emergencia","Nada, basta con el chaleco reflectivo del conductor"],
correct:1,
explanation:"El Art. 95 numeral 5 establece que cuando circulen en horas nocturnas, las bicicletas deben llevar dispositivos en la parte delantera que proyecten luz blanca y en la parte trasera que reflecte luz roja."},

{weight:'med',topic:"No usar cinturón (Art. 131 C.6)",
q:"La infracción por no utilizar el cinturón de seguridad está sancionada con:",
options:["4 SMLDV","8 SMLDV","15 SMLDV","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.6 sanciona con 15 SMLDV no utilizar el cinturón de seguridad por parte de los ocupantes del vehículo."},

{weight:'med',topic:"Uso de celular (Art. 131 C.38)",
q:"Usar el teléfono celular al conducir sin manos libres está sancionado con:",
options:["4 SMLDV","8 SMLDV","15 SMLDV","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.38 sanciona con 15 SMLDV usar sistemas móviles de comunicación o teléfonos al momento de conducir, exceptuando si se utilizan con accesorios que permitan tener las manos libres."},

{weight:'med',topic:"Placas (Art. 45)",
q:"¿Cuántas placas deben llevar los vehículos automotores (excepto motos)?",
options:["Una sola, en la parte trasera","Dos iguales: una delantera y una trasera","Una delantera y dos traseras","Las que determine el organismo de tránsito local"],
correct:1,
explanation:"El Art. 45 establece que los vehículos automotores llevarán dos placas iguales: una en el extremo delantero y otra en el extremo trasero."},

// ══════════════════════════════════════
// BAJA — 0.5 pts (banco: 26 preguntas)
// ══════════════════════════════════════
{weight:'low',topic:"Definición: andén (Art. 2)",
q:"Según el Art. 2 de la Ley 769/2002, la acera o andén es:",
options:["La zona de la vía destinada a la circulación de vehículos","Franja longitudinal de la vía urbana destinada exclusivamente a la circulación de peatones","La zona de transición entre calzada y andén para estacionar vehículos","El espacio entre dos carriles de la calzada"],
correct:1,
explanation:"El Art. 2 define la acera o andén como la franja longitudinal de la vía urbana, destinada exclusivamente a la circulación de peatones, ubicada a los costados de ésta."},

{weight:'low',topic:"Definición: bahía (Art. 2)",
q:"Según el Art. 2, la bahía de estacionamiento es:",
options:["Un carril exclusivo para buses","La parte complementaria de la vía usada como zona de transición entre la calzada y el andén para estacionar vehículos","Un tipo de glorieta pequeña","El separador entre dos calzadas"],
correct:1,
explanation:"El Art. 2 define bahía de estacionamiento como la parte complementaria de la estructura de la vía utilizada como zona de transición entre la calzada y el andén, destinada al estacionamiento de vehículos."},

{weight:'low',topic:"Definición: calzada (Art. 2)",
q:"Según el Art. 2, la calzada es:",
options:["La franja para peatones a los costados de la vía","El espacio estrecho que separa dos calzadas","La zona de la vía destinada a la circulación de vehículos","El carril exclusivo para transporte masivo"],
correct:2,
explanation:"El Art. 2 define calzada como la zona de la vía destinada a la circulación de vehículos."},

{weight:'low',topic:"Definición: bocacalle (Art. 2)",
q:"Según el Art. 2, la bocacalle es:",
options:["El nombre del carril de emergencia en autopistas","La embocadura de una calle en una intersección","Un tipo de señal preventiva","El área de parqueo frente a un establecimiento"],
correct:1,
explanation:"El Art. 2 define bocacalle como la embocadura de una calle en una intersección."},

{weight:'low',topic:"Definición: separador (Art. 2)",
q:"Según el Art. 2, el separador es:",
options:["La línea amarilla pintada sobre la calzada","El espacio estrecho y saliente que independiza dos calzadas de una vía","El área de parqueo entre dos carriles","La franja peatonal entre andén y calzada"],
correct:1,
explanation:"El Art. 2 define separador como el espacio estrecho y saliente que independiza dos calzadas de una vía."},

{weight:'low',topic:"Definición: glorieta (Art. 2)",
q:"Según el Art. 2, la glorieta es:",
options:["Una señal preventiva de cruce peligroso","Una intersección donde no hay cruces directos sino maniobras de entrecruzamiento alrededor de una isleta central","Un tipo de semáforo especial","El nombre del carril de alta velocidad"],
correct:1,
explanation:"El Art. 2 define glorieta como la intersección donde no hay cruces directos sino maniobras de entrecruzamientos y movimientos alrededor de una isleta o plazoleta central."},

{weight:'low',topic:"Definición: prelación (Art. 2)",
q:"Según el Art. 2, la prelación es:",
options:["La multa aplicada a quien no cede el paso","La prioridad o preferencia que tiene una vía o vehículo respecto a otras vías u otros vehículos","El derecho a circular a mayor velocidad","El nombre del carril de emergencia"],
correct:1,
explanation:"El Art. 2 define prelación como la prioridad o preferencia que tiene una vía o vehículo con respecto a otras vías u otros vehículos."},

{weight:'low',topic:"Definición: infracción (Art. 2)",
q:"Según el Art. 2, la infracción es COMPLEJA cuando:",
options:["Se viola por primera vez una norma de tránsito","Se produce un daño material además de la violación a la norma","Solo se viola la mera norma sin daños","El infractor no tiene licencia de conducción"],
correct:1,
explanation:"El Art. 2 establece que la infracción será compleja si se produce un daño material (además de la violación a la norma). Será simple cuando se trate de violación a la mera norma."},

{weight:'low',topic:"Definición: vía (Art. 2)",
q:"Según el Art. 2, la vía es:",
options:["Solo la calzada de uso exclusivo para vehículos","Zona de uso público o privado, abierta al público, destinada al tránsito de vehículos, personas y animales","La autopista de doble calzada","Solo las carreteras nacionales"],
correct:1,
explanation:"El Art. 2 define vía como la zona de uso público o privado, abierta al público, destinada al tránsito de vehículos, personas y animales."},

{weight:'low',topic:"Definición: licencia de conducción (Art. 2)",
q:"La licencia de conducción es:",
options:["Un documento transferible a familiares directos","Un documento público, personal e intransferible expedido por autoridad competente que autoriza a conducir vehículos","Un documento solo válido en el municipio donde fue expedida","Una tarjeta de identificación sin validez legal en carreteras"],
correct:1,
explanation:"El Art. 2 define la licencia de conducción como el documento público de carácter personal e intransferible expedido por autoridad competente, que autoriza a una persona para la conducción de vehículos con validez en todo el territorio nacional."},

{weight:'low',topic:"Definición: multa (Art. 2)",
q:"Para efectos del Código de Tránsito, la multa se entiende en:",
options:["Salarios mínimos mensuales legales vigentes (SMMLV)","Salarios mínimos diarios legales vigentes (SMLDV)","Unidades de Valor Tributario (UVT)","Porcentaje del valor del vehículo"],
correct:1,
explanation:"El Art. 2 establece que para efectos del código y salvo disposición en contrario, la multa debe entenderse en salarios mínimos diarios legales vigentes (SMLDV)."},

{weight:'low',topic:"Sanción RTM (Art. 131 C.35)",
q:"No realizar la revisión técnico-mecánica en el plazo legal establecido está sancionado con:",
options:["4 SMLDV","8 SMLDV","15 SMLDV e inmovilización","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.35 sanciona con 15 SMLDV no realizar la revisión técnico-mecánica en el plazo legal, o cuando el vehículo no esté en adecuadas condiciones técnico-mecánicas. Además el vehículo es inmovilizado."},

{weight:'low',topic:"Sanción SOAT (Art. 131 D.2)",
q:"Conducir sin portar los seguros ordenados por la ley (SOAT) está sancionado con:",
options:["8 SMLDV","15 SMLDV","30 SMLDV e inmovilización del vehículo","Solo amonestación"],
correct:2,
explanation:"El Art. 131 literal D.2 sanciona con 30 SMLDV conducir sin portar los seguros ordenados por la ley. Además, el vehículo será inmovilizado."},

{weight:'low',topic:"Licencia de tránsito (Art. 2)",
q:"La licencia de tránsito es:",
options:["Lo mismo que la licencia de conducción","El documento público que identifica un vehículo automotor, acredita su propiedad y lo autoriza para circular","El permiso temporal para conducir un vehículo ajeno","El seguro obligatorio del vehículo"],
correct:1,
explanation:"El Art. 2 define la licencia de tránsito como el documento público que identifica un vehículo automotor, acredita su propiedad e identifica a su propietario y autoriza a dicho vehículo para circular por las vías."},

{weight:'low',topic:"Equipo de carretera (Art. 30)",
q:"Entre los elementos del equipo de carretera obligatorio del Art. 30 se incluye:",
options:["GPS de navegación","Dos tacos para bloquear el vehículo y una linterna","Cámara de video y silla infantil","Casco para el conductor"],
correct:1,
explanation:"El Art. 30 incluye entre los elementos obligatorios del equipo de carretera: dos tacos para bloquear el vehículo y linterna, además de gato, cruceta, señales reflectivas triangulares, botiquín, extintor, herramienta básica y llanta de repuesto."},

{weight:'low',topic:"Automóvil antiguo (Art. 2)",
q:"Según el Art. 2, un automóvil antiguo es aquel que:",
options:["Tiene más de 20 años y está en mal estado","Ha cumplido 35 años y conserva sus especificaciones originales","Ha cumplido 50 años y está catalogado internacionalmente como clásico","Tiene más de 10 años sin revisión técnica"],
correct:1,
explanation:"El Art. 2 define automóvil antiguo como el automotor que haya cumplido 35 años y que conserve sus especificaciones y características originales de fábrica, presentación y funcionamiento."},

{weight:'low',topic:"Zona escolar (Art. 2)",
q:"Según el Art. 2, la zona escolar comprende:",
options:["Solo el frente del establecimiento educativo","La parte de la vía frente al establecimiento de enseñanza y que se extiende 50 metros al frente y a los lados del mismo","Un radio de 200 metros alrededor de la institución","Solo el área del parqueadero del colegio"],
correct:1,
explanation:"El Art. 2 define zona escolar como la parte de la vía situada frente a un establecimiento de enseñanza y que se extiende 50 metros al frente y a los lados del límite del establecimiento."},

{weight:'low',topic:"Línea de emergencias",
q:"El número de emergencias unificado en Colombia al que se debe llamar en caso de accidente es:",
options:["119","123","112","911"],
correct:1,
explanation:"El número de emergencias unificado en Colombia es el 123, que coordina la atención de policía, bomberos y ambulancias en todo el territorio nacional."},

{weight:'low',topic:"Amonestación (Art. 123)",
q:"La amonestación como sanción de tránsito consiste en:",
options:["Una multa reducida de 2 SMLDV","La asistencia obligatoria a cursos de educación vial","La suspensión temporal de la licencia por 15 días","Una advertencia verbal sin registro"],
correct:1,
explanation:"El Art. 123 define la amonestación como la asistencia a cursos obligatorios de educación vial. El infractor que incumpla la citación al curso será sancionado con multa de 5 SMLDV."},

{weight:'low',topic:"Definición: alcoholemia (Art. 2)",
q:"Según el Art. 2, la alcoholemia es:",
options:["La prueba de laboratorio que detecta alcohol en orina","La cantidad de alcohol que tiene una persona en determinado momento en su sangre","El dispositivo para medir alcohol en aire exhalado","El examen que determina el nivel de alcohol en la orina"],
correct:1,
explanation:"El Art. 2 define alcoholemia como la cantidad de alcohol que tiene una persona en determinado momento en su sangre. El alcohosensor mide el alcohol en el aire exhalado y la alcoholuria en la orina."},

// ══════ NUEVAS PREGUNTAS POR ARTÍCULO ══════

// ART. 108 – Distancias de seguimiento
{weight:'med',topic:"Distancia de seguimiento (Art. 108)",
q:"¿Qué factor adicional debe considerar el conductor para definir la distancia de seguimiento, más allá de la velocidad?",
options:["El modelo y año del vehículo que lo precede","El estado del suelo, humedad, visibilidad, peso del vehículo y otras condiciones que afecten el frenado","El número de carriles de la vía","El tipo de combustible que usa el vehículo adelante"],
correct:1,
explanation:"El Art. 108 establece que en todos los casos el conductor debe atender al estado del suelo, humedad, visibilidad, peso del vehículo y otras condiciones que puedan alterar la capacidad de frenado, manteniendo una distancia prudente con el vehículo que antecede."},

{weight:'med',topic:"Distancia de seguimiento (Art. 108)",
q:"Para velocidades entre 30 y 60 km/h, la distancia mínima de seguimiento entre vehículos es:",
options:["10 metros","20 metros","25 metros","30 metros"],
correct:1,
explanation:"El Art. 108 establece que para velocidades entre 30 y 60 km/h la distancia mínima de seguimiento es de 20 metros. Recuerda: hasta 30 km/h → 10 m; 30-60 km/h → 20 m; 60-80 km/h → 25 m; más de 80 km/h → 30 m."},

{weight:'high',topic:"Distancia de seguimiento (Art. 108)",
q:"Un conductor va a 85 km/h en una vía nacional. ¿Cuál es la distancia mínima de seguimiento que debe mantener?",
options:["20 metros","25 metros","30 metros o la que indique la autoridad competente","10 metros"],
correct:2,
explanation:"El Art. 108 establece que para velocidades de 80 km/h en adelante la distancia mínima de seguimiento es de 30 metros o la que la autoridad competente indique, considerando además el estado de la vía y condiciones de frenado."},

// ART. 150 – Examen de embriaguez
{weight:'med',topic:"Examen de embriaguez (Art. 150)",
q:"¿Quién puede solicitar a un conductor la práctica del examen de embriaguez?",
options:["Cualquier ciudadano que sospeche del conductor","Las autoridades de tránsito","Solo el Instituto de Medicina Legal","Solo los agentes de policía judicial"],
correct:1,
explanation:"El Art. 150 establece que las autoridades de tránsito podrán solicitar a todo conductor de vehículo automotor la práctica del examen de embriaguez para determinar si se encuentra bajo efectos del alcohol, drogas o sustancias alucinógenas o hipnóticas."},

{weight:'med',topic:"Examen de embriaguez (Art. 150)",
q:"Las autoridades de tránsito pueden contratar con clínicas u hospitales la práctica de pruebas de embriaguez con el fin de:",
options:["Reducir los costos del examen para el infractor","Verificar el estado de aptitud de los conductores","Reemplazar al Instituto de Medicina Legal en todos los casos","Aplicar sanciones inmediatas sin proceso"],
correct:1,
explanation:"El Art. 150 establece que las autoridades de tránsito podrán contratar con clínicas u hospitales la práctica de pruebas de embriaguez para verificar el estado de aptitud de los conductores."},

// ART. 122 – Tipos de sanciones
{weight:'med',topic:"Tipos de sanciones (Art. 122)",
q:"Las sanciones por infracciones al Código de Tránsito pueden imponerse como:",
options:["Solo sanciones principales","Solo sanciones accesorias","Principales o accesorias, independientemente de las sanciones ambientales","Solo cuando hay daños materiales"],
correct:2,
explanation:"El Art. 122 establece que las sanciones se impondrán como principales o accesorias al responsable de la infracción, independientemente de las sanciones ambientales a que haya lugar por violación de regulaciones sobre emisiones contaminantes y ruido."},

{weight:'high',topic:"Tipos de sanciones (Art. 122)",
q:"¿Cuál de las siguientes NO es una sanción contemplada en el Art. 122 del Código de Tránsito?",
options:["Amonestación","Suspensión de la licencia de conducción","Arresto de 1 a 30 días","Inmovilización del vehículo"],
correct:2,
explanation:"El Art. 122 enumera: amonestación, multa, suspensión de la licencia, suspensión o cancelación del permiso o registro, inmovilización, retención preventiva y cancelación definitiva de la licencia. El arresto NO está entre las sanciones de tránsito (salvo casos penales)."},

// ART. 131 – Multas específicas
{weight:'high',topic:"Multas (Art. 131)",
q:"Conducir un vehículo sobre andenes, plazas, vías peatonales, separadores o zonas verdes está sancionado con:",
options:["8 SMLDV","15 SMLDV","30 SMLDV","Solo inmovilización sin multa"],
correct:2,
explanation:"El Art. 131 literal D.5 sanciona con 30 SMLDV conducir un vehículo sobre aceras, plazas, vías peatonales, separadores, bermas, demarcaciones de canalización, zonas verdes o vías especiales para vehículos no motorizados."},

{weight:'med',topic:"Multas (Art. 131)",
q:"No portar el equipo de prevención y seguridad establecido en el Código (botiquín, extintor, etc.) está sancionado con:",
options:["4 SMLDV","8 SMLDV","15 SMLDV","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.11 sanciona con 15 SMLDV no portar el equipo de prevención y seguridad establecido en el código o en la reglamentación correspondiente."},

{weight:'med',topic:"Multas (Art. 131)",
q:"Usar el celular al conducir sin dispositivo de manos libres está clasificado como infracción tipo:",
options:["A – 4 SMLDV","B – 8 SMLDV","C – 15 SMLDV","D – 30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.38 clasifica el uso de sistemas móviles de comunicación al conducir sin manos libres como infracción tipo C, sancionable con 15 SMLDV."},

{weight:'high',topic:"Multas (Art. 131)",
q:"Adelantar a otro vehículo en un túnel, puente, curva o paso a nivel está sancionado con:",
options:["8 SMLDV","15 SMLDV","30 SMLDV","Solo amonestación"],
correct:2,
explanation:"El Art. 131 literal D.6 sanciona con 30 SMLDV adelantar a otro vehículo en berma, túnel, puente, curva, pasos a nivel, cruces no regulados o al aproximarse a la cima de una cuesta o donde la señal lo indique."},

{weight:'med',topic:"Multas (Art. 131)",
q:"Conducir un vehículo con una o varias puertas abiertas está sancionado con:",
options:["4 SMLDV","8 SMLDV","15 SMLDV","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.10 sanciona con 15 SMLDV conducir un vehículo con una o varias puertas abiertas."},

{weight:'med',topic:"Multas (Art. 131)",
q:"Conducir un vehículo sin llevar consigo la licencia de conducción (la tiene en casa, pero no la porta) es infracción tipo:",
options:["A – 4 SMLDV","B – 8 SMLDV","C – 15 SMLDV","D – 30 SMLDV"],
correct:1,
explanation:"El Art. 131 literal B.1 sanciona con 8 SMLDV conducir un vehículo sin llevar consigo la licencia de conducción. Es diferente a no tenerla (D.1 → 30 SMLDV)."},

// ART. 30 – Equipo de carretera
{weight:'med',topic:"Equipo de carretera (Art. 30)",
q:"Las señales de carretera que debe llevar el vehículo según el Art. 30 son:",
options:["Una señal circular roja","Dos señales en forma de triángulo en material reflectivo con soportes para colocarse verticalmente","Una linterna y un cono naranja","Tres conos y dos bengalas"],
correct:1,
explanation:"El Art. 30 establece que el equipo debe incluir dos señales de carretera en forma de triángulo en material reflectivo, provistas de soportes para ser colocadas en forma vertical, o lámparas de señal de luz amarilla intermitente."},

{weight:'low',topic:"Equipo de carretera (Art. 30)",
q:"¿Cuántos tacos para bloquear el vehículo exige el Art. 30 como parte del equipo de carretera?",
options:["Uno","Dos","Tres","Cuatro"],
correct:1,
explanation:"El Art. 30 numeral 6 establece que el equipo de carretera debe incluir dos tacos para bloquear el vehículo, además de gato, cruceta, señales triangulares reflectivas, botiquín, extintor, herramienta básica, llanta de repuesto y linterna."},

// ART. 60 – Carriles demarcados
{weight:'med',topic:"Carriles demarcados (Art. 60)",
q:"Según el Art. 60, los vehículos deben transitar obligatoriamente por sus respectivos carriles y solo pueden atravesarlos para:",
options:["Evitar el tráfico","Efectuar maniobras de adelantamiento o de cruce","Estacionar en doble fila momentáneamente","Esquivar un hueco en la vía"],
correct:1,
explanation:"El Art. 60 establece que los vehículos deben transitar obligatoriamente por sus respectivos carriles, dentro de las líneas de demarcación, y atravesarlos solamente para efectuar maniobras de adelantamiento o de cruce."},

{weight:'high',topic:"Carriles demarcados (Art. 60)",
q:"Antes de efectuar un adelantamiento o cruce de carril, el conductor debe:",
options:["Solo mirar por el espejo retrovisor","Anunciar su intención con las luces direccionales y señales ópticas o audibles, y efectuar la maniobra sin entorpecer el tránsito","Tocar la bocina dos veces y acelerar","Esperar que el otro vehículo se detenga"],
correct:1,
explanation:"El Art. 60 parágrafo 2 establece que todo conductor, antes de efectuar un adelantamiento o cruce de carril, debe anunciar su intención por medio de las luces direccionales y señales ópticas o audibles, y efectuar la maniobra de forma que no entorpezca el tránsito ni ponga en peligro a otros."},

{weight:'med',topic:"Carriles demarcados (Art. 60)",
q:"Al adelantar a un ciclista, el conductor de un vehículo automotor debe hacerlo a una distancia no menor de:",
options:["0.5 metros","1 metro","1.5 metros","2 metros"],
correct:2,
explanation:"El Art. 60 parágrafo 3 establece que todo conductor de vehículo automotor deberá realizar el adelantamiento de un ciclista a una distancia no menor de un metro con cincuenta centímetros (1.50 m)."},

// ART. 68 – Uso de carriles
{weight:'med',topic:"Uso de carriles (Art. 68)",
q:"En una vía de tres carriles de doble sentido, ¿cómo deben circular los vehículos?",
options:["Por cualquier carril libremente","Por los carriles extremos que queden a su derecha; el carril central solo en el sentido que señale la autoridad","Siempre por el carril central","Por el carril izquierdo para mayor velocidad"],
correct:1,
explanation:"El Art. 68 establece que en vías de doble sentido de tres carriles, los vehículos deben transitar por los carriles extremos a su derecha; el carril central solo se utilizará en el sentido que señale la autoridad competente."},

{weight:'med',topic:"Uso de carriles (Art. 68)",
q:"En una vía de cuatro carriles de doble sentido, ¿para qué sirven los carriles interiores?",
options:["Para el tránsito ordinario de vehículos lentos","Para maniobras de adelantamiento o circular a mayores velocidades dentro de los límites establecidos","Para vehículos de servicio público exclusivamente","Para bicicletas y motos solamente"],
correct:1,
explanation:"El Art. 68 establece que en vías de cuatro carriles los carriles exteriores se usan para el tránsito ordinario, y los interiores para maniobras de adelantamiento o circular a mayores velocidades dentro de los límites establecidos."},

// ART. 66 – Giros en intersecciones
{weight:'med',topic:"Giros en intersecciones (Art. 66)",
q:"El conductor que transite por una vía sin prelación al llegar a un cruce sin semáforo debe:",
options:["Continuar sin detenerse si no ve vehículos","Detener completamente su vehículo y, donde no haya semáforo, tomar precauciones e iniciar la marcha cuando le corresponda","Acelerar para pasar rápido la intersección","Usar la bocina y continuar"],
correct:1,
explanation:"El Art. 66 establece que el conductor que transite por una vía sin prelación deberá detener completamente su vehículo al llegar a un cruce y, donde no haya semáforo, tomará las precauciones debidas e iniciará la marcha cuando le corresponda."},

{weight:'high',topic:"Giros en intersecciones (Art. 66)",
q:"En ningún caso el conductor podrá detener su vehículo sobre:",
options:["El costado derecho de la vía","Una vía férrea, un paso peatonal o dentro de una intersección","Una vía de doble sentido con dos carriles","Una vía arteria de cuatro carriles"],
correct:1,
explanation:"El Art. 66 prohíbe expresamente detener el vehículo sobre una vía férrea, un paso peatonal, una intersección o un carril exclusivo de transporte masivo. Además, todo conductor debe permanecer a una distancia mínima de 5 metros de la vía férrea."},

// ART. 64 – Ceder paso a vehículos de emergencia
{weight:'high',topic:"Vehículos de emergencia (Art. 64)",
q:"En una calzada de tres carriles, cuando se aproxima un vehículo de emergencia, ¿qué carril debe despejarse como mínimo?",
options:["El carril derecho","El carril del medio","El carril izquierdo","Cualquier carril disponible"],
correct:1,
explanation:"El Art. 64 parágrafo establece que en calzadas de tres carriles debe procurarse despejar como mínimo el carril del medio para el paso de vehículos de emergencia. Si hay más de tres, se despejará el siguiente al carril más rápido o el indicado por la señalización."},

{weight:'med',topic:"Vehículos de emergencia (Art. 64)",
q:"Los vehículos de emergencia al cruzar una intersección deben:",
options:["Pasar a cualquier velocidad sin detenerse nunca","Reducir la velocidad y constatar que les han cedido el derecho de paso","Mantener la velocidad máxima en todo momento","Solo usar sirena, no reducir velocidad"],
correct:1,
explanation:"El Art. 64 establece que en todo caso los vehículos de emergencia deben reducir la velocidad y constatar que les han cedido el derecho de paso al cruzar una intersección, incluso cuando anuncian su presencia con luces y sirenas."},

// ART. 67 – Señales del conductor
{weight:'med',topic:"Señales del conductor (Art. 67)",
q:"En carreteras o vías rápidas, la señal direccional debe ponerse como mínimo con cuánta antelación al giro:",
options:["30 metros","60 metros","100 metros","50 metros"],
correct:1,
explanation:"El Art. 67 parágrafo 1 establece que en carreteras o vías rápidas la indicación intermitente de la señal direccional deberá ponerse por lo menos con 60 metros de antelación al giro; en zonas urbanas, por lo menos con 30 metros de antelación."},

{weight:'low',topic:"Señales del conductor (Art. 67)",
q:"Para indicar un cruce a la izquierda o cambio de carril a la izquierda mediante señal manual, el conductor:",
options:["Saca el brazo derecho extendido horizontalmente","Saca el brazo izquierdo extendido horizontalmente","Saca el brazo izquierdo en escuadra hacia arriba","Saca el brazo izquierdo en escuadra hacia abajo"],
correct:1,
explanation:"El Art. 67 establece que para indicar cruce a la izquierda o cambio de carril, el conductor sacará el brazo izquierdo y lo extenderá horizontalmente."},

// ART. 116 – Señales de agentes de tránsito
{weight:'med',topic:"Señales de agentes (Art. 116)",
q:"Cuando un agente de tránsito muestra su espalda o frente a los conductores, indica que:",
options:["La vía está libre para circular","Está cerrada la circulación y el conductor debe detenerse","Está previniendo un cambio de vía libre a cerrada","Permite el giro a la derecha únicamente"],
correct:1,
explanation:"El Art. 116 establece que la espalda o el frente del agente indican que está cerrada la circulación y el conductor deberá detenerse."},

{weight:'med',topic:"Señales de agentes (Art. 116)",
q:"Cuando un agente de tránsito muestra sus flancos (costados) a los conductores, indica que:",
options:["La vía está cerrada","La vía está libre","Está previniendo un cambio de sentido","Solo los peatones pueden cruzar"],
correct:1,
explanation:"El Art. 116 establece que los flancos del agente (mostrando el costado) indican que la vía está libre para circular."},

{weight:'high',topic:"Señales de agentes (Art. 116)",
q:"Para dirigir el tránsito en la noche, los agentes de tránsito deben proveerse de:",
options:["Solo un chaleco reflectivo","Bastones luminosos y prendas reflectivas","Una linterna ordinaria y guantes blancos","Conos reflectivos y silbato"],
correct:1,
explanation:"El Art. 116 establece que para dirigir el tránsito durante la noche, los agentes de tránsito se proveerán de bastones luminosos y de prendas reflectivas."},

// ART. 111 – Prelación de señales
{weight:'high',topic:"Prelación de señales (Art. 111)",
q:"Si en una intersección hay un semáforo en verde pero un agente de tránsito ordena detenerse, ¿qué debe hacer el conductor?",
options:["Obedecer el semáforo porque tiene prelación sobre el agente","Obedecer al agente de tránsito porque tiene mayor prelación que el semáforo","Decidir libremente cuál seguir","Detenerse solo si el agente toca el pito"],
correct:1,
explanation:"El Art. 111 establece que las señales y órdenes de los agentes de tránsito tienen primera prelación, por encima de los semáforos y cualquier otra señal. Si un agente ordena detenerse, prevalece su instrucción sobre el semáforo."},

{weight:'med',topic:"Prelación de señales (Art. 111)",
q:"Las señales transitorias (de color naranja, usadas en obras) tienen prelación sobre:",
options:["Solo las marcas viales","Los semáforos, las señales verticales y las marcas viales, pero no sobre las órdenes de los agentes","Solo las señales informativas","Todas las señales incluyendo los agentes de tránsito"],
correct:1,
explanation:"El Art. 111 establece el orden: 1) Agentes de tránsito, 2) Señales transitorias, 3) Semáforos, 4) Señales verticales, 5) Señales horizontales. Las transitorias superan a semáforos y señales fijas, pero no a los agentes."},

// ══════════════════════════════════════
// INFRACCIONES DE TRÁNSITO (Art. 131)
// ══════════════════════════════════════

{weight:'high',topic:"Infracciones (Art. 131 D)",
q:"Un conductor va a 110 km/h en una vía urbana donde el límite es 50 km/h. ¿Cuál es la sanción?",
options:["8 SMLDV – infracción leve por exceso de velocidad","15 SMLDV – infracción tipo C","30 SMLDV – infracción tipo D e inmovilización posible","Solo amonestación verbal"],
correct:2,
explanation:"El Art. 131 literal C.29 sanciona con 15 SMLDV conducir a velocidad superior a la máxima permitida. Sin embargo, si la conducción es altamente peligrosa e irresponsable (D.7), puede escalar a 30 SMLDV. El exceso de velocidad es siempre infracción tipo C o D según la gravedad."},

{weight:'high',topic:"Infracciones (Art. 131 B)",
q:"Un conductor lleva placas adulteradas en su vehículo. Además de la multa de 8 SMLDV, ¿qué procede?",
options:["Solo la multa, sin medida adicional","La inmovilización del vehículo","La cancelación inmediata de la licencia","Un comparendo informativo sin sanción"],
correct:1,
explanation:"El Art. 131 literal B.4 establece que conducir con placas adulteradas acarrea multa de 8 SMLDV y además el vehículo será inmovilizado. Lo mismo aplica para placas falsas, sin placas o con una sola placa."},

{weight:'med',topic:"Infracciones (Art. 131 C)",
q:"Bloquear una calzada o intersección con un vehículo (sin que sea por accidente) está sancionado con:",
options:["4 SMLDV","8 SMLDV","15 SMLDV","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.3 sanciona con 15 SMLDV bloquear una calzada o intersección con un vehículo, salvo cuando el bloqueo obedezca a la ocurrencia de un accidente de tránsito."},

{weight:'med',topic:"Infracciones (Art. 131 C)",
q:"No señalizar con las luces direccionales y con la debida anticipación una maniobra de giro o cambio de carril está sancionado con:",
options:["4 SMLDV","8 SMLDV","15 SMLDV","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.7 sanciona con 15 SMLDV dejar de señalizar con las luces direccionales o mediante señales de mano y con la debida anticipación la maniobra de giro o cambio de carril."},

{weight:'med',topic:"Infracciones (Art. 131 C)",
q:"Transitar por sitios restringidos o en horas prohibidas por la autoridad competente acarrea:",
options:["4 SMLDV","8 SMLDV","15 SMLDV e inmovilización","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.14 sanciona con 15 SMLDV transitar por sitios restringidos o en horas prohibidas. Además, el vehículo será inmovilizado."},

{weight:'high',topic:"Infracciones (Art. 131 D)",
q:"Un conductor transita en sentido contrario por una vía de un solo sentido. ¿Cuál es la sanción?",
options:["8 SMLDV e inmovilización","15 SMLDV","30 SMLDV","Solo amonestación y cursos viales"],
correct:2,
explanation:"El Art. 131 literal D.3 sanciona con 30 SMLDV transitar en sentido contrario al estipulado para la vía, calzada o carril. Es una de las infracciones más graves porque pone en riesgo la vida de todos los usuarios."},

{weight:'high',topic:"Infracciones (Art. 131 D)",
q:"Un conductor conduce su vehículo sobre el andén para evitar un trancón. ¿Cuál es la sanción?",
options:["8 SMLDV","15 SMLDV","30 SMLDV","Solo comparendo informativo"],
correct:2,
explanation:"El Art. 131 literal D.5 sanciona con 30 SMLDV conducir un vehículo sobre aceras, plazas, vías peatonales, separadores, bermas, demarcaciones de canalización, zonas verdes o vías especiales para no motorizados."},

{weight:'med',topic:"Infracciones (Art. 131 C)",
q:"Un conductor no se detiene ante una señal de 'Ceda el paso'. La sanción es:",
options:["4 SMLDV","8 SMLDV","15 SMLDV","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.30 sanciona con 15 SMLDV no atender una señal de ceda el paso."},

{weight:'med',topic:"Infracciones (Art. 131 C)",
q:"Un conductor de bus provee de combustible al vehículo con el motor encendido. ¿Cuál es la sanción?",
options:["4 SMLDV","8 SMLDV","15 SMLDV","30 SMLDV"],
correct:2,
explanation:"El Art. 131 literal C.12 sanciona con 15 SMLDV proveer de combustible un vehículo automotor con el motor encendido. El Art. 85 prohíbe esta práctica por razones de seguridad."},

{weight:'low',topic:"Infracciones (Art. 131 A)",
q:"Un ciclista transita por el andén (zona peatonal). La sanción es:",
options:["4 SMLDV","8 SMLDV","15 SMLDV","No aplica ninguna sanción para ciclistas"],
correct:0,
explanation:"El Art. 131 literal A.4 sanciona con 4 SMLDV a conductores de vehículos no motorizados que transiten por andenes y demás lugares destinados al tránsito de peatones."},

{weight:'low',topic:"Infracciones (Art. 131 B)",
q:"Un conductor lleva a un niño de 8 años en el asiento delantero del vehículo. La sanción es:",
options:["4 SMLDV","8 SMLDV","15 SMLDV","No hay sanción si el niño usa cinturón"],
correct:1,
explanation:"El Art. 131 literal B.22 sanciona con 8 SMLDV llevar niños menores de 10 años en el asiento delantero del vehículo. El Art. 82 prohíbe esta práctica por razones de seguridad."},

{weight:'med',topic:"Infracciones (Art. 131 D)",
q:"No permitir el paso de un vehículo de bomberos en emergencia está sancionado con:",
options:["8 SMLDV","15 SMLDV","30 SMLDV","Solo amonestación"],
correct:2,
explanation:"El Art. 131 literal D.9 sanciona con 30 SMLDV no permitir el paso de los vehículos de emergencia. El Art. 64 obliga a todos los conductores a ceder el paso a ambulancias, bomberos, policía y socorro."},

{weight:'high',topic:"Infracciones: gradualidad (Art. 130)",
q:"Según el Art. 130, ¿cómo se aplican las sanciones por infracciones de tránsito?",
options:["Igual para todas las infracciones sin importar la gravedad","Teniendo en cuenta la gravedad de la infracción y el grado de peligro para peatones y automovilistas; en caso de fuga se duplica la multa","Solo dependen del tipo de vehículo","Según el criterio exclusivo del agente de tránsito"],
correct:1,
explanation:"El Art. 130 establece el principio de gradualidad: las sanciones se aplican teniendo en cuenta la gravedad de la infracción y el grado de peligro para peatones y automovilistas. En caso de fuga del infractor, la multa se duplica."},

// ══════════════════════════════════════
// LEYES DE NEWTON APLICADAS AL FRENADO
// ══════════════════════════════════════

{weight:'high',topic:"Física del frenado (1ª Ley de Newton)",
q:"Un vehículo que va a 80 km/h frena de emergencia. ¿Qué principio físico explica por qué los ocupantes tienden a seguir moviéndose hacia adelante?",
options:["El principio de acción y reacción (3ª Ley de Newton)","La inercia o 1ª Ley de Newton: un cuerpo en movimiento tiende a permanecer en movimiento hasta que una fuerza lo detenga","La 2ª Ley de Newton: la aceleración es proporcional a la fuerza","La ley de la gravedad de Newton"],
correct:1,
explanation:"La 1ª Ley de Newton (Ley de la Inercia) establece que un cuerpo en movimiento tiende a permanecer en movimiento a menos que una fuerza externa actúe sobre él. Al frenar, el vehículo se detiene pero los ocupantes sin cinturón continúan moviéndose hacia adelante. Por esto el cinturón de seguridad es obligatorio (Art. 82 Ley 769/2002)."},

{weight:'high',topic:"Física del frenado (2ª Ley de Newton)",
q:"Un camión de 10 toneladas y un automóvil de 1 tonelada van a la misma velocidad. ¿Cuál necesita más distancia de frenado?",
options:["El automóvil, porque es más pequeño y menos estable","El camión, porque tiene mayor masa y por tanto mayor cantidad de movimiento que debe ser contrarrestada por la fuerza de frenado","Ambos necesitan exactamente la misma distancia","Depende solo del tipo de frenos, no de la masa"],
correct:1,
explanation:"La 2ª Ley de Newton (F = m·a) explica que para una misma fuerza de frenado, a mayor masa mayor es la desaceleración requerida y por tanto mayor la distancia de frenado. Por eso el Art. 108 obliga a mayores distancias de seguimiento y el Art. 131 D.13 establece sanciones especiales para camiones con sobrecarga."},

{weight:'high',topic:"Física del frenado (3ª Ley de Newton)",
q:"Cuando un vehículo frena, los frenos ejercen una fuerza sobre las ruedas. ¿Qué dice la 3ª Ley de Newton sobre este proceso?",
options:["Solo existe la fuerza del freno sobre la rueda, sin reacción opuesta","Por cada fuerza de frenado que los frenos ejercen sobre las ruedas, las ruedas ejercen una fuerza igual y opuesta, y el asfalto ejerce fricción que detiene el vehículo","La fuerza de frenado es siempre mayor que la fuerza de movimiento","La 3ª Ley no aplica en el frenado vehicular"],
correct:1,
explanation:"La 3ª Ley de Newton (Acción y Reacción) establece que por cada acción hay una reacción igual y opuesta. En el frenado, el freno ejerce fuerza sobre la rueda, la rueda ejerce fricción sobre el asfalto, y el asfalto ejerce la fuerza de reacción que detiene el vehículo. Si el asfalto está húmedo o con arena, la fricción disminuye y la distancia de frenado aumenta (Art. 108)."},

{weight:'high',topic:"Física del frenado (Energía cinética)",
q:"Un vehículo duplica su velocidad de 40 km/h a 80 km/h. ¿En qué proporción aumenta su energía cinética y por tanto la distancia de frenado?",
options:["Se duplica (×2)","Se triplica (×3)","Se cuadruplica (×4)","Permanece igual"],
correct:2,
explanation:"La energía cinética es E = ½·m·v². Al duplicar la velocidad, la energía cinética se cuadruplica (2² = 4). Esto significa que a 80 km/h se necesita 4 veces más distancia de frenado que a 40 km/h. Es la razón científica por la que los límites de velocidad del Art. 106 y 107 de la Ley 769/2002 son fundamentales para la seguridad vial."},

{weight:'high',topic:"Física del frenado (Fricción y asfalto)",
q:"¿Por qué el Art. 108 indica que el conductor debe considerar el estado del suelo y la humedad para definir la distancia de seguimiento?",
options:["Porque la humedad afecta la visibilidad del conductor, no el frenado","Porque el agua reduce la fricción entre las llantas y el asfalto, aumentando significativamente la distancia de frenado","Porque la lluvia daña los frenos permanentemente","Porque el agua aumenta la fricción y reduce la distancia de frenado"],
correct:1,
explanation:"La fricción entre llantas y asfalto es la fuerza que detiene el vehículo. El agua actúa como lubricante y reduce drásticamente esa fricción (coeficiente de rozamiento), lo que aumenta la distancia de frenado. Por eso el Art. 108 exige considerar el estado del suelo, humedad y visibilidad para mantener una distancia prudente de seguimiento."},

{weight:'med',topic:"Física del frenado (Inercia y cinturón)",
q:"¿Cuál es la relación entre la 1ª Ley de Newton (inercia) y el uso obligatorio del cinturón de seguridad (Art. 82)?",
options:["No existe relación; el cinturón es solo un requisito administrativo","El cinturón contrarresta la inercia del ocupante al frenar: sin él, el cuerpo continúa en movimiento hacia adelante y puede golpear el parabrisas o ser expulsado","El cinturón impide que el motor se apague por inercia","El cinturón aumenta la inercia del vehículo para frenar más rápido"],
correct:1,
explanation:"La inercia (1ª Ley de Newton) hace que en una frenada brusca o colisión, el cuerpo del ocupante tienda a seguir moviéndose hacia adelante. El cinturón de seguridad aplica la fuerza de reacción necesaria para detener al ocupante junto con el vehículo, evitando que impacte contra el tablero o sea expulsado. Por eso el Art. 82 hace obligatorio su uso en todas las vías."},

{weight:'med',topic:"Física del frenado (Masa y carga)",
q:"Un vehículo transporta sobrecarga (más peso del autorizado). Desde el punto de vista físico, ¿cómo afecta esto al frenado?",
options:["Mejora el frenado porque hay más peso sobre las ruedas","Aumenta la masa total del vehículo, incrementando la energía cinética y la distancia de frenado requerida, comprometiendo la seguridad","No tiene ningún efecto sobre el frenado","Solo afecta el frenado si la carga está mal distribuida"],
correct:1,
explanation:"La 2ª Ley de Newton (F=ma) implica que a mayor masa, para la misma fuerza de frenado, menor será la desaceleración. La sobrecarga aumenta la energía cinética del vehículo (E=½mv²), exigiendo mayor distancia para detenerse y pudiendo colapsar el sistema de frenos. Por eso el Art. 131 D.13 ordena la inmovilización del vehículo con sobrecarga."},

// ══════════════════════════════════════
// PRELACIÓN: CASOS ESPECÍFICOS
// ══════════════════════════════════════

{weight:'high',topic:"Prelación en vías (Art. 105)",
q:"¿Cuál es el orden de prelación entre los tipos de vías dentro del perímetro urbano, de mayor a menor?",
options:["Autopista → arteria → principal → secundaria → ordinaria","Metro/metrovía → troncal → férrea → autopista → arteria → principal","Principal → secundaria → arteria → autopista → metro","Peatonal → ciclorruta → ordinaria → principal → autopista"],
correct:1,
explanation:"El Art. 105 establece el orden de prelación en vías urbanas de mayor a menor: vía de metro/metrovía, vía troncal, vías férreas, autopistas, arterias, principales, secundarias, colectoras, ordinarias, locales, privadas, ciclorrutas y peatonales."},

{weight:'high',topic:"Prelación: pendiente (Art. 70)",
q:"Dos vehículos se encuentran en una vía de montaña de un solo carril; uno sube y otro baja. ¿Quién tiene prelación?",
options:["El que baja, porque es más fácil retroceder cuesta arriba","El que sube la pendiente tiene prelación","Ninguno; deben esperar a que llegue un tercero","El vehículo más pequeño, para facilitar el paso"],
correct:1,
explanation:"El Art. 70 establece que en las pendientes tiene prelación el vehículo que sube. El vehículo que baja debe retroceder o buscar un espacio para ceder el paso al que asciende."},

{weight:'high',topic:"Prelación: vía principal vs. secundaria (Art. 70)",
q:"Un vehículo en una vía secundaria llega a una intersección con una vía principal. ¿Quién tiene prelación?",
options:["El vehículo de la vía secundaria si llega primero","El vehículo de la vía principal siempre tiene prelación sobre el de la secundaria","El vehículo más grande","Depende del sentido de circulación"],
correct:1,
explanation:"Según el Art. 70 y el Art. 105, las vías principales tienen prelación sobre las ordinarias y secundarias. El conductor que viene de una vía sin prelación debe detenerse y ceder el paso a los vehículos que circulan por la vía con prelación."},

{weight:'high',topic:"Prelación: vehículo de emergencia (Art. 64)",
q:"Un semáforo está en verde para un conductor, pero una ambulancia con sirenas se aproxima. ¿Qué debe hacer?",
options:["Continuar porque el semáforo verde le da prelación","Ceder el paso a la ambulancia orillándose a la derecha y deteniéndose; los vehículos de emergencia tienen prelación sobre el semáforo","Acelerar para pasar rápido y dejarle el espacio","Solo ceder si la ambulancia va en el mismo sentido"],
correct:1,
explanation:"El Art. 64 establece que todo conductor debe ceder el paso a los vehículos de emergencia (ambulancias, bomberos, policía) orillándose al costado derecho y deteniéndose. Las órdenes de agentes y los vehículos de emergencia tienen prelación sobre cualquier señal de tránsito, incluyendo semáforos en verde."},

{weight:'high',topic:"Prelación: giro izquierda vs. derecho (Art. 70)",
q:"En una intersección, un vehículo A va derecho y un vehículo B (del mismo sentido) quiere girar a la izquierda. ¿Quién tiene prelación?",
options:["El vehículo B que gira a la izquierda, porque señalizó primero","El vehículo A que va derecho tiene prelación sobre el que gira a la izquierda","Ninguno; depende de la velocidad","El que esté en el carril izquierdo"],
correct:1,
explanation:"El Art. 70 establece que si dos vehículos transitan en sentido opuesto y uno va a girar a la izquierda, tiene prelación el vehículo que va a seguir derecho. El giro a la izquierda cede el paso al tráfico de frente."},

{weight:'high',topic:"Prelación: peatón vs. vehículo (Arts. 57, 63)",
q:"En un paso peatonal sin semáforo, ¿quién tiene prelación?",
options:["El vehículo, porque circula por la calzada que tiene mayor prioridad","El peatón tiene prelación; el conductor debe detenerse o reducir velocidad para cederle el paso","El que llegue primero al cruce","El vehículo de mayor tamaño"],
correct:1,
explanation:"Los Arts. 57 y 63 establecen que los conductores deben respetar los derechos e integridad de los peatones dándoles prelación en la vía, especialmente en pasos peatonales. No ceder el paso al peatón en zona permitida acarrea multa de 15 SMLDV (Art. 131 C.32)."},

{weight:'med',topic:"Prelación: ferrocarril (Art. 105)",
q:"¿Qué tipo de vía tiene la mayor prelación dentro del perímetro urbano según el Art. 105?",
options:["La autopista urbana","La vía de metro o metrovía","La vía arteria","La vía principal"],
correct:1,
explanation:"El Art. 105 establece que dentro del perímetro urbano la vía de metro o metrovía tiene la primera prelación de circulación, seguida por la vía troncal y las vías férreas. En ciudades con metro, éste tiene prelación incluso sobre la vía férrea convencional."},

{weight:'med',topic:"Prelación: inicio de marcha (Art. 71)",
q:"Al poner en movimiento un vehículo que estaba estacionado, ¿qué prelación tiene sobre el tráfico en circulación?",
options:["Tiene prelación porque ya está en la vía","Debe ceder el paso a todos los vehículos en marcha antes de incorporarse al tráfico","Solo debe esperar si hay motos o bicicletas","Tiene prelación si usa las luces de emergencia"],
correct:1,
explanation:"El Art. 71 establece que al poner en movimiento un vehículo estacionado se utilizará la señal direccional respectiva, dando prelación a los demás vehículos en marcha y tomando precauciones para evitar choques. El vehículo estacionado cede el paso a todo el tráfico en circulación."},

{weight:'med',topic:"Prelación: ciclistas (Art. 63)",
q:"En cuanto a la prelación vial, los ciclistas respecto a los vehículos automotores:",
options:["No tienen ninguna prelación especial","Tienen prelación como usuarios vulnerables; los conductores deben respetar su espacio y no los pueden adelantar a menos de 1.5 m","Solo tienen prelación en ciclorrutas","Solo tienen prelación los domingos y festivos en ciclovías"],
correct:1,
explanation:"El Art. 63 establece que los conductores deben respetar los derechos e integridad de los peatones y ciclistas, dándoles prelación en la vía. Adicionalmente, el Art. 60 parágrafo 3 exige adelantar a los ciclistas a no menos de 1.50 metros de distancia."},

{weight:'low',topic:"Prelación: vías rurales (Art. 105)",
q:"En zonas rurales, ¿cuál vía tiene mayor prelación de circulación según el Art. 105?",
options:["Carretera secundaria","Vía férrea","Autopista rural","Carreteable"],
correct:1,
explanation:"El Art. 105 establece que en zonas rurales la prelación de mayor a menor es: vías férreas, autopistas, carreteras principales, carreteras secundarias, carreteables, privadas y peatonales. La vía férrea tiene la mayor prelación."},

{weight:'low',topic:"Prelación: peatones en vías (Art. 105)",
q:"Según el Art. 105, ¿en qué tipos de vías los peatones NO tienen prelación aunque estén en zonas diseñadas para ellos?",
options:["En vías ordinarias y locales","En vías férreas, autopistas y vías arterias","En ciclorrutas y vías peatonales","En vías secundarias y colectoras"],
correct:1,
explanation:"El Art. 105 establece que la presencia de peatones en vías y zonas para ellos diseñadas les otorga prelación, EXCEPTO sobre vías férreas, autopistas y vías arterias, donde el riesgo es demasiado alto."},

];
