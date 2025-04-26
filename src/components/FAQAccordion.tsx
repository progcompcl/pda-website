import {
  Accordion as BaseAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  data: {
    title: string;
    description: React.ReactNode;
  }[];
}

const accordionData: Props["data"] = [
  {
    title:
      "¿Es un campamento de verdad? ¿Vamos a acampar y programar a la luz de una fogata? ",
    description:
      "¡No! (aunque no sería mala idea). El campamento es una escuela de invierno entre clases y sesiones prácticas en equipos. Típicamente, cada jornada dura todo el día, con clases en la mañana y sesiones prácticas en las tardes.",
  },
  {
    title: "¿Cuándo y dónde se realizará el campamento?",
    description: (
      <>
        <p>
          El campamento se realizará entre el martes 22 de julio y el viernes 1 de
          agosto de 2025, en la Universidad Técnica Federico Santa María, en Valparaíso.
        </p>
        <p>
          Puedes encontrar más información en el <a href="/cronograma">cronograma</a>.
        </p>
      </>
    ),
  },
  {
    title: "¿Quiénes pueden participar?",
    description: (
      <p>
        El campamento está abierto a todos los interesados. Aunque está principalmente
        dirigido a estudiantes universitarios, también son bienvenidos estudiantes
        escolares y cualquier persona con interés en aprender.
      </p>
    ),
  },
  {
    title: "¿Hay conocimientos mínimos requeridos para participar?",
    description: (
      <>
        <p>
          No hay requisitos de entrada, quienes quieran pueden participar. Sin
          embargo, si quieres sacarle el jugo al campamento, debes tener algún
          dominio en algún lenguaje de programación (como C++, Java, o Python),
          y conocer algunos conceptos básicos de programación (bucles o
          for-loops, arreglos y listas, recursión, estructuras básicas,
          algoritmos básicos, etc.).
        </p>
        <p>
          Puedes ver nuestro canal de YouTube para aprender desde tópicos
          esenciales a avanzados y ver algunas de las clases de campamentos
          pasados!
        </p>
      </>
    ),
  },
  {
    title: "Me inscribí en el formulario, ¿tengo que hacer algo más?",
    description: (
      <p>
        No. Te notificaremos tras terminar las inscripciones, confirmando tu
        inscripción al campamento. Tras esa fecha y hasta el inicio del
        campamento, te enviaremos unos cuantos correos más con más información
        importante sobre el evento.
      </p>
    ),
  },
  {
    title: "¿Me puedo cambiar de nivel?",
    description: (
      <p>
        Te puedes cambiar de nivel libremente antes o durante el campamento. Es decir,
        si ves que la clase avanzada es muy difícil o la inicial es muy fácil, puedes
        cambiarte a la otra sin problemas. También puedes ir cambiando día a día según
        el tema que más te interese del <a href="/cronograma">cronograma</a>.
      </p>
    ),
  },
  {
    title: "¿Qué criterios se consideran para otorgar las becas?",
    description: (
      <p>
        Al igual que años pasados, la cantidad de becas es limitada. Tras el cierre
        de las postulaciones, se evaluará cada caso y se asignarán las becas 
        disponibles considerando factores como universidad y región de procedencia,
        y dando prioridad a equipos compuestos solo por mujeres. Se buscará maximizar 
        la diversidad geográfica e institucional entre los beneficiados.
      </p>
    ),
  },
  {
    title: "¿Cómo se hará la entrega de las becas?",
    description: (
      <>
        <p>
          Si se te asigna una beca, recibirás el 50% antes del inicio del campamento
          y el 50% restante a mitad de la semana, una vez confirmada tu asistencia. 
          El monto se entregará a través de transferencia bancaria o en efectivo en
          caso de ser extranjero.
        </p>
        <p>
          Para formalizar la entrega, antes de recibir la beca deberás firmar un 
          compromiso de uso responsable y asistencia completa a las actividades. 
        </p>
      </>
    )
  },
  {
    title:
      "¿Qué ocurre si no puedo asistir al campamento todos los días? ¿Pierdo la beca si falto un día?",
    description: (
      <>
        <p>
          No hay problemas si no puedes asistir a todas las actividades del
          campamento, pero el cronograma está diseñado para aprender lo máximo
          posible al ir todos los días.
        </p>
        <p>
          Se revocará el derecho a beca al tener más de 2 inasistencias contando
          hasta el segundo miércoles. Casos excepcionales pueden ser conversados
          con los organizadores.
        </p>
      </>
    ),
  },
  {
    title: "No tengo una o dos personas para armar un equipo, ¿qué hago?",
    description: (
      <p>
        Puedes inscribirte de igual manera si no tienes un equipo completo. En
        el campamento haremos nuestro mejor esfuerzo para que todos estén en un
        equipo. Sin embargo, en el formulario de inscripción indicamos que
        daremos prioridad a equipos completos sólo en caso de que estemos
        limitados por el espacio.
      </p>
    ),
  },
  {
    title: "¿Tengo que llevar computador?",
    description: (
      <p>
        Para las sesiones prácticas usaremos los computadores de los laboratorios de la
        universidad, por lo que no es necesario llevar uno. Sin embargo, si prefieres
        usar tu computador personal porque te resulta más cómodo, puedes traerlo sin 
        problema.
      </p>
    ),
  },
  {
    title: "¿La inscripción tiene costo?",
    description: (
      <p>
        La inscripción y participación en el campamento son totalmente gratis.
      </p>
    ),
  },
  {
    title:
      "¿Qué hay de la alimentación, transporte, y estadía durante el campamento?",
    description: (
      <>
        <p>
          Quienes participen en el campamento deben hacerse cargo de los gastos de
          alimentación, transporte y hospedaje durante los días del campamento.
        </p>
        <p>
          El casino de la universidad estará disponible para comprar almuerzo a precios
          accesibles.
        </p>
      </>
    ),
  },
  {
    title:
      "Me estoy preparando para la Olimpiada Chilena de Informática o la IOI, ¿puedo inscribirme?",
    description: (
      <p>
        ¡Por supuesto! Eres igualmente bienvenid@, y esperamos que el campamento
        te sea de ayuda.
      </p>
    ),
  },
  {
    title: "¿Qué pasa si tengo más preguntas?",
    description: (
      <p>
        Para cualquier duda o consulta, puedes escribirnos a campamento@progcomp.cl
      </p>
    ),
  }
];
export default function FAQAccordion() {
  return (
    <BaseAccordion
      type="single"
      collapsible
      className="w-full prose-headings:my-0"
    >
      {accordionData.map((item, i) => {
        return (
          <AccordionItem
            value={`item-${i.toFixed()}`}
            key={`item-${i.toFixed()}`}
          >
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </BaseAccordion>
  );
}
