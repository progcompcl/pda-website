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
    title: "¿La inscripción tiene costo?",
    description: (
      <p>
        La inscripción y participación en el campamento son totalmente gratis.
      </p>
    ),
  },
  {
    title: "¿Hay requisitos mínimos para participar en el campamento?",
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
          Puedes ver nuestro canal de Youtube para aprender desde tópicos
          esenciales a avanzados y ver algunas de las clases de campamentos
          pasados!
        </p>
      </>
    ),
  },
  {
    title:
      "¿Qué hay de la alimentación, transporte, y estadía durante el campamento?",
    description: (
      <p>
        Quienes participen en el campamento deben hacerse cargo de su
        supervivencia, incluso del almuerzo durante los días del campamento.
      </p>
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
    title:
      "Me estoy preparando para la IOI, o deseo triunfar en la OCI (Olimpiada Chilena de Informática), ¿puedo inscribirme en el campamento?",
    description: (
      <p>
        ¡Por supuesto! Eres igualmente bienvenid@, y esperamos que el campamento
        te sea de ayuda.
      </p>
    ),
  },
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
