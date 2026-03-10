# El Meta Cambió — Parte 3

**Lo que te pueden preguntar en una entrevista de Cloud/DevOps/Infra.**

Este es el Parte 3 y final de la serie. Si no leíste las partes anteriores, te recomiendo hacerlo. La preparación y las fases de la entrevista te dan contexto para saber cuándo y cómo van a aparecer estas preguntas.

- **Parte 1:** Preparación, mentalidad, y lo que deberías saber antes de la entrevista.
- **Parte 2:** Las fases de la entrevista.
- **Parte 3 (este post):** Referencia de preguntas técnicas.

---

## Antes de arrancar

Este pool es solo de referencia. Siempre depende de a qué estás aplicando. ¿Es un rol de liderazgo? ¿Solo soporte? Readapta las siguientes preguntas para empezar a estudiar o para armar los highlights cuando expliques tu perfil.

No voy a cubrir todo. Si cubriera todo, esto no sería un post, sería un libro. La idea es que tengas un mapa de las áreas que te pueden tocar y que identifiques dónde están tus gaps.

---

## Las preguntas clásicas — que siempre van a estar

### "Tell me about your experience"

El entrevistador quiere saber sobre tu experiencia. Lol.

Menciona brevemente las tecnologías y proyectos en los que trabajaste. Deberías gastar la cantidad necesaria de tiempo acá. Ni más, ni menos.

Prepáralo de antemano, apuntando a lo que ellos quieren escuchar, más tus highlights para usar el tiempo de forma inteligente.

### "What's your level with X technology?"

Dependiendo de tu experiencia, esto va a setear la dificultad de las preguntas. Si no estás seguro, una respuesta safe es "intermediate", así tú y el entrevistador pueden empezar a medirte.

Advanced o expert son buenas opciones cuando tienes mucha experiencia con una tecnología y múltiples escenarios de uso.

### "In this hypothetical scenario, how would you accomplish it?"

Esto puede variar, y su propósito es obtener una idea de tu mapa mental respecto a arquitecturas, workflows, y tecnologías.

Puede haber múltiples respuestas. Generalmente son abiertos con eso. Van a usar esto como oportunidad para argumentar en tu contra y ver cómo reaccionas y te adaptas a cambios de enfoque.

### "What are the projects that you have worked on?"

El entrevistador usa esto para hacerte explicar detalles que solo una persona involucrada sabría.

La variante del "most challenging project" es para ver cómo performas y abordas problemas. Es bueno tener una respuesta preparada. Idealmente, con tecnología popular.

---

## Arquitectura — el panorama general

Las preguntas de arquitectura te pueden caer desde múltiples ángulos. Las tareas de migración te dan mucha experiencia en este tema.

A este nivel deberías conocer los tipos posibles:

- **Microservicios:** cuándo usarlos, sus dependencias, buenas prácticas.
- **Monolitos:** cuándo son la mejor opción (sí, a veces lo son).
- **Event-driven:** cuándo aplica y cómo se implementa.
- **Híbridos:** la realidad es que la mayoría de los proyectos son un mix.

Algo como "qué desafíos tendrías que resolver si quieres usar una arquitectura de microservicios desde cero" es una pregunta bastante típica. Setting up dependencies, buenas prácticas, observability, etc.

De ahí salen preguntas derivadas como "qué load balancer usarías si tengo una aplicación que requiere paths específicos o hace redirects."

---

## Cloud Provider — la lógica es estándar

No importa si es AWS, GCP, o Azure. La lógica detrás es estándar. Voy a usar terminología de AWS porque es el más común, pero los conceptos aplican a todos.

### Networking

- Cómo configurar VPCs. Peering y subnetting necesario.
- Diferencia entre Load Balancers y cuándo usar cada uno (ALB vs NLB vs Classic).

### Seguridad y acceso

- Tipos de policies y scopes, buenas prácticas, preguntas de seguridad.
- Service Account vs IAM role para un servicio.
- Opciones para acceder a instancias con SSH (hay al menos dos comunes).

### CDN y WAF

- Cuándo y cómo usar CloudFront. Cache rules, behaviors, etc.
- Funcionalidades de WAF. Troubleshooting y ventajas.

### Mensajería y eventos

- Configuración de SQS/SNS y escenarios de uso.
- Cuándo usar cada uno y cómo se integran.

### Monitoreo y logs

- Configuración de alarmas y setup. ¿Qué podemos monitorear por default?
- Log groups, permisos, y temas relacionados.
- Cluster configuration y observability.

---

## Infrastructure as Code — el clásico

### CloudFormation

- Nested stacks vs cross-reference stacks.
- Cuándo usar cada approach.

De 1 a 10, ¿cuánto odias cuando los stacks de CloudFormation explotan y terminan en un estado no recuperable? Yo estoy en un 8 constante.

### Serverless

Las preguntas de Lambda rara vez son triviales. Es más probable que te pregunten:

- ¿Cómo triggearías una Lambda desde S3?
- ¿Cómo enviarías una notificación desde el Personal Health Dashboard de AWS a Slack o email?
- Variantes relacionadas a aplicaciones event-driven y su integración con otros servicios de AWS.
- Step Functions, limitaciones con la concurrencia.

---

## Containers — el pan de cada día

### Comandos y conceptos

- Comandos comunes de Docker.
- En el contexto del Dockerfile: qué hace cada instrucción, mejores prácticas.
- Build y run de containers.

### Image Registry

- Push de imágenes, manejo de tags.
- Registries custom.
- Políticas de limpieza y retención.

### Cluster administration

- Tipos de servicios en Kubernetes (o ECS, según el caso).
- Conocimiento de conceptos arquitectónicos y requerimientos.
- Troubleshooting de pods, services, networking.

### Herramientas adicionales

- **Helm:** para qué sirve, cómo se usa, charts, values.
- **Service mesh:** Istio, Linkerd, conceptos generales.

---

## Pipelines — CI/CD

- Cómo automatizar tareas cotidianas. Explica tu approach.
- Tipos de releases (blue-green, canary, rolling update).
- Cómo manejar dependencias en el pipeline.
- Cómo acelerar jobs como builds (caching, paralelismo, artifacts).
- ¿Cómo reutilizas código entre pipelines?
- Buenas prácticas: branching strategy, approval gates, rollback.

---

## Automatización IaC — el detalle

### Terraform

Preguntas del estilo:

- ¿Por qué no puedes usar un provider dentro de un módulo cuando lo llamas con un `for_each` desde el nivel del consumidor?
- Necesito mergear maps. ¿Qué método uso? ¿Cuál elemento sobreescribe al otro?
- ¿Cuándo tienes que lockear states? ¿Es necesario hacerlo siempre?

Si puedes responder estas sin googlear, estás bien.

### CloudFormation y SAM

- ¿Qué es SAM? ¿Has usado Serverless Framework?
- Esto sigue siendo popular para deploys legacy y aplicaciones serverless.

### Configuration Management

- Conocimiento de Packer y el proceso de building AMIs.
- Chef, Ansible: diferencias, ventajas, y desventajas.
- Cuándo usar cada uno y por qué.

---

## Seguridad — el add-on a todo lo anterior

Esto no es una categoría separada en el sentido de que te van a hacer un bloque de preguntas de seguridad. Es más un:

> Agrega el "hazlo con seguridad en mente" a todos los puntos anteriores.

Cada respuesta que des sobre arquitectura, cloud, containers, o pipelines debería tener un componente de seguridad implícito. Si el entrevistador te pregunta cómo configurarías un VPC y no mencionas security groups, NACLs, o algún approach de seguridad, estás rechazando puntos gratis.

---

## Cómo usar este pool

No intentes memorizar todo esto. Eso no es el punto.

1. **Identifica tus gaps:** lee la lista y marca dónde no podrías dar una respuesta decente.
2. **Prioriza:** enfócate en las áreas más relevantes para los puestos a los que estás aplicando.
3. **Practica en voz alta:** en inglés. No es lo mismo saber algo que poder explicarlo en otro idioma.
4. **Ten ejemplos reales:** para cada área donde tienes experiencia, ten un ejemplo concreto de un proyecto o situación real.

---

## Cerrando la serie

Eso es todo. Tres partes: preparación, fases de la entrevista, y el pool de preguntas.

Estas notas no son la verdad absoluta. Son lo que a mí me sirvió y lo que preparé para gente con la que trabajé. Algunas cosas van a envejecer mal (la tecnología cambia). Otras van a seguir siendo relevantes por un buen rato (la preparación y el manejo de una entrevista no cambian tanto).

El meta va a seguir cambiando. Pero la base es la misma: prepárate, conoce tu historia, y muestra cómo piensas. El inglés es una herramienta más, no el obstáculo principal.

✌️
