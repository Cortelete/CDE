// Arquivo: data/bpmn.js
// Contém os dados para o baralho de "Modelagem BPMN", com o campo 'details' reestruturado.

export const bpmn = {
    title: "Modelagem BPMN",
    theme: "emerald",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M2 8h20"/><path d="M6 12h12"/><path d="M10 16h4"/><path d="M4 4v16"/><path d="M20 4v16"/></svg>`,
    summary: "Visualize, desenhe e otimize seus processos de negócio como um profissional.",
    cards: [
        {
            id: 1,
            title: "O que é BPMN?",
            tip: "O mapa do tesouro dos seus processos.",
            description: "Business Process Model and Notation é uma notação gráfica padrão para especificar processos de negócio em um diagrama.",
            topics: ["Padrão Global", "Clareza na Comunicação", "Ponte Negócios-TI"],
            topicsDetails: [
                { title: "Padrão Global", content: "<p>É mantido pelo Object Management Group (OMG), o que garante que um diagrama feito em qualquer lugar do mundo possa ser entendido por outros.</p>" },
                { title: "Clareza na Comunicação", content: "<p>Cria uma linguagem visual comum que pode ser facilmente compreendida tanto por stakeholders de negócio quanto por desenvolvedores de TI.</p>" },
                { title: "Ponte Negócios-TI", content: "<p>Serve como a documentação precisa para a automação de processos, diminuindo a ambiguidade na implementação de sistemas.</p>" }
            ],
            question: "Qual o principal benefício de usar BPMN em vez de um fluxograma simples?",
            answer: "BPMN é muito mais preciso e rico em elementos. Ele tem uma notação rigorosa para representar eventos, decisões complexas, múltiplos participantes e exceções, o que um fluxograma simples não consegue fazer, tornando-o ideal para automação e análise de processos.",
            details: {
                subtitle: "// Pilares do BPMN:",
                points: [
                    "<strong>Padrão Global:</strong> É mantido pelo Object Management Group (OMG), garantindo um entendimento universal.",
                    "<strong>Clareza na Comunicação:</strong> Cria uma linguagem visual comum entre áreas de negócio e TI.",
                    "<strong>Ponte Negócios-TI:</strong> Serve como a documentação precisa para a automação de processos."
                ]
            }
        },
        {
            id: 2,
            title: "Elementos Essenciais",
            tip: "Os blocos de construção de todo processo.",
            description: "BPMN possui quatro categorias principais de elementos: Objetos de Fluxo, Objetos de Conexão, Piscinas/Raias e Artefatos.",
            topics: ["Objetos de Fluxo", "Objetos de Conexão", "Piscinas e Raias"],
            topicsDetails: [
                { title: "Objetos de Fluxo", content: "<p>São os elementos principais que definem o comportamento. Incluem <strong>Eventos</strong> (círculos), <strong>Atividades</strong> (retângulos) e <strong>Gateways</strong> (losangos).</p>" },
                { title: "Objetos de Conexão", content: "<p>Conectam os Objetos de Fluxo. Incluem <strong>Fluxo de Sequência</strong> (linha sólida, mostra a ordem), <strong>Fluxo de Mensagem</strong> (linha tracejada, mostra comunicação entre participantes) e <strong>Associação</strong> (linha pontilhada, liga artefatos).</p>" },
                { title: "Piscinas e Raias", content: "<p><strong>Piscinas</strong> representam participantes do processo (ex: 'Cliente', 'Empresa'). <strong>Raias</strong> (Lanes) subdividem uma piscina para organizar atividades por função ou papel (ex: 'Vendas', 'Financeiro').</p>" }
            ],
            question: "Para que serve uma Piscina (Pool) em um diagrama BPMN?",
            answer: "Uma Piscina representa um participante organizacional no processo. Ela atua como um contêiner para as atividades desse participante e é crucial para modelar a interação e a troca de mensagens com outros participantes (outras piscinas).",
            details: {
                subtitle: "// Categorias de Elementos:",
                points: [
                    "<strong>Objetos de Fluxo:</strong> Definem o comportamento do processo (Eventos, Atividades, Gateways).",
                    "<strong>Objetos de Conexão:</strong> Ligam os objetos de fluxo (Fluxo de Sequência, Fluxo de Mensagem).",
                    "<strong>Piscinas e Raias:</strong> Organizam o processo por participantes e responsabilidades."
                ]
            }
        },
        {
            id: 3,
            title: "Eventos",
            tip: "Onde as coisas começam, mudam e terminam.",
            description: "Eventos (círculos) representam algo que acontece durante um processo. Eles podem iniciar, interromper ou finalizar um fluxo.",
            topics: ["Evento de Início", "Evento Intermediário", "Evento de Fim"],
            topicsDetails: [
                { title: "Evento de Início", content: "<p>Círculo com borda fina. Indica onde o processo começa. Só pode ter fluxos de saída.</p>" },
                { title: "Evento Intermediário", content: "<p>Círculo com borda dupla. Ocorre durante o processo, podendo ser acionado por tempo, mensagem, etc.</p>" },
                { title: "Evento de Fim", content: "<p>Círculo com borda grossa. Indica onde o processo termina. Só pode ter fluxos de entrada.</p>" }
            ],
            question: "Qual a diferença visual entre um Evento de Início e um Evento de Fim?",
            answer: "O Evento de Início tem uma borda fina e única, enquanto o Evento de Fim tem uma borda grossa e única.",
            details: {
                subtitle: "// Tipos de Eventos:",
                points: [
                    "<strong>Evento de Início:</strong> (Círculo fino) Dispara o início de um processo.",
                    "<strong>Evento Intermediário:</strong> (Círculo duplo) Ocorre durante um processo, representando uma mudança de estado.",
                    "<strong>Evento de Fim:</strong> (Círculo grosso) Indica a conclusão de um caminho do processo."
                ]
            }
        },
        {
            id: 4,
            title: "Atividades",
            tip: "O trabalho que precisa ser feito.",
            description: "Representam uma tarefa ou um trabalho realizado por alguém ou por um sistema. São representadas por retângulos com cantos arredondados.",
            topics: ["Tarefa (Task)", "Subprocesso", "Tipos de Tarefa"],
            topicsDetails: [
                { title: "Tarefa (Task)", content: "<p>Uma atividade atômica, que não pode ser decomposta em mais detalhes no diagrama atual.</p>" },
                { title: "Subprocesso", content: "<p>Uma atividade composta que pode ser expandida para mostrar seu próprio fluxo detalhado. Indicado por um sinal de `+` no retângulo.</p>" },
                { title: "Tipos de Tarefa", content: "<p>Podem ser de usuário, de serviço (automatizada), de script, manual, etc., indicadas por pequenos ícones dentro da tarefa.</p>" }
            ],
            question: "Quando você deve usar um Subprocesso em vez de uma Tarefa?",
            answer: "Use um Subprocesso quando uma atividade é complexa e pode ser detalhada em seu próprio conjunto de passos. Isso ajuda a manter o diagrama principal limpo e legível, escondendo a complexidade.",
            details: {
                subtitle: "// Tipos de Atividades:",
                points: [
                    "<strong>Tarefa (Task):</strong> Uma atividade atômica e indivisível no contexto do diagrama.",
                    "<strong>Subprocesso:</strong> Uma atividade composta que contém seu próprio fluxo de processo, ajudando a organizar a complexidade.",
                    "<strong>Tipos de Tarefa:</strong> Ícones indicam a natureza do trabalho (manual, automatizado, etc.)."
                ]
            }
        },
        {
            id: 5,
            title: "Gateways",
            tip: "As encruzilhadas do seu processo.",
            description: "Gateways (losangos) controlam como o fluxo se divide e se funde. Eles determinam os caminhos que o processo pode seguir.",
            topics: ["Exclusivo (XOR)", "Paralelo (AND)", "Inclusivo (OR)"],
            topicsDetails: [
                { title: "Gateway Exclusivo (XOR)", content: "<p>Apenas um dos caminhos de saída pode ser seguido. É uma decisão 'ou isso ou aquilo'. Marcado com um 'X' ou sem marcador.</p>" },
                { title: "Gateway Paralelo (AND)", content: "<p>Todos os caminhos de saída são ativados simultaneamente. O fluxo se divide para executar tarefas em paralelo. Marcado com um '+'</p>" },
                { title: "Gateway Inclusivo (OR)", content: "<p>Um ou mais caminhos de saída podem ser ativados com base em condições. É uma decisão 'isso, e/ou aquilo'. Marcado com um 'O'.</p>" }
            ],
            question: "Você precisa modelar um ponto onde um pedido pode ser aprovado e, ao mesmo tempo, uma notificação ser enviada. Qual gateway usar?",
            answer: "Um Gateway Paralelo (AND), pois as duas ações (aprovar pedido e enviar notificação) devem ocorrer simultaneamente e de forma independente.",
            details: {
                subtitle: "// Tipos de Gateways:",
                points: [
                    "<strong>Exclusivo (XOR):</strong> Apenas um caminho é escolhido. É um 'OU' exclusivo.",
                    "<strong>Paralelo (AND):</strong> Todos os caminhos são ativados ao mesmo tempo.",
                    "<strong>Inclusivo (OR):</strong> Um ou mais caminhos podem ser ativados."
                ]
            }
        },
        {
            id: 6,
            title: "Fluxos",
            tip: "As estradas que conectam tudo.",
            description: "As linhas que conectam os elementos do BPMN, mostrando a direção e o tipo de interação.",
            topics: ["Fluxo de Sequência", "Fluxo de Mensagem", "Associação"],
            topicsDetails: [
                { title: "Fluxo de Sequência", content: "<p>Linha contínua com uma seta. Mostra a ordem em que as atividades são executadas. Só pode conectar elementos dentro da mesma piscina.</p>" },
                { title: "Fluxo de Mensagem", content: "<p>Linha tracejada com um círculo no início e uma seta no fim. Mostra a comunicação entre diferentes piscinas (participantes).</p>" },
                { title: "Associação", content: "<p>Linha pontilhada. Usada para associar informações e artefatos (como documentos) a objetos de fluxo.</p>" }
            ],
            question: "Qual a principal restrição de um Fluxo de Sequência?",
            answer: "Ele não pode cruzar as fronteiras de uma Piscina. Para comunicação entre diferentes participantes (Piscinas), deve-se usar um Fluxo de Mensagem.",
            details: {
                subtitle: "// Tipos de Conexões:",
                points: [
                    "<strong>Fluxo de Sequência:</strong> Mostra a ordem das atividades dentro de um mesmo participante.",
                    "<strong>Fluxo de Mensagem:</strong> Representa a comunicação entre participantes diferentes (piscinas).",
                    "<strong>Associação:</strong> Liga informações ou documentos a elementos do fluxo."
                ]
            }
        },
        {
            id: 7,
            title: "Pools e Lanes",
            tip: "Quem faz o quê e onde.",
            description: "Piscinas (Pools) e Raias (Lanes) são usadas para organizar e categorizar as atividades.",
            topics: ["Piscina (Pool)", "Raia (Lane)", "Diferença Fundamental"],
            topicsDetails: [
                { title: "Piscina (Pool)", content: "<p>Representa um participante principal no processo (ex: Empresa, Cliente, Fornecedor). Um processo inteiro pode estar contido em uma única piscina.</p>" },
                { title: "Raia (Lane)", content: "<p>É uma subdivisão dentro de uma piscina. Usada para categorizar atividades por função, departamento ou papel (ex: Vendas, Marketing, TI).</p>" },
                { title: "Diferença Fundamental", content: "<p>Piscinas representam entidades separadas que se comunicam. Raias representam divisões internas da mesma entidade. O fluxo de sequência pode cruzar raias, mas não piscinas.</p>" }
            ],
            question: "Em um processo de compra online, o 'Cliente' e a 'Loja Virtual' seriam representados por Raias ou Piscinas?",
            answer: "Por Piscinas, pois são dois participantes distintos e separados que se comunicam através de fluxos de mensagem (ex: o cliente envia um pedido, a loja envia uma confirmação).",
            details: {
                subtitle: "// Organização do Processo:",
                points: [
                    "<strong>Piscina (Pool):</strong> Representa um participante principal (ex: Empresa, Cliente).",
                    "<strong>Raia (Lane):</strong> É uma subdivisão dentro de uma piscina para organizar por função (ex: Vendas, Financeiro).",
                    "<strong>Diferença Fundamental:</strong> A comunicação entre Piscinas usa Fluxo de Mensagem; dentro de uma mesma Piscina (entre Raias), usa-se Fluxo de Sequência."
                ]
            }
        },
        {
            id: 8,
            title: "Artefatos",
            tip: "As notas adesivas do seu diagrama.",
            description: "Fornecem informações adicionais sobre o processo, sem afetar diretamente o fluxo.",
            topics: ["Objeto de Dados", "Anotação de Texto", "Grupo"],
            topicsDetails: [
                { title: "Objeto de Dados", content: "<p>Representa um documento ou dado necessário ou produzido por uma atividade (ex: 'Fatura', 'Relatório').</p>" },
                { title: "Anotação de Texto", content: "<p>Permite que o modelador adicione comentários ou explicações adicionais para quem lê o diagrama.</p>" },
                { title: "Grupo", content: "<p>É um agrupamento visual de elementos, indicado por uma caixa pontilhada, usado para fins de documentação ou análise, sem afetar o fluxo.</p>" }
            ],
            question: "Um Objeto de Dados, como uma 'Nota Fiscal', afeta a ordem de execução do processo?",
            answer: "Não diretamente. Um Objeto de Dados mostra que a informação é necessária ou produzida, mas ele não tem poder de controle sobre o fluxo. A conexão é feita por uma linha de Associação, não por um Fluxo de Sequência.",
            details: {
                subtitle: "// Informações Adicionais:",
                points: [
                    "<strong>Objeto de Dados:</strong> Mostra um documento ou informação relevante para uma atividade (ex: Fatura).",
                    "<strong>Anotação de Texto:</strong> Permite adicionar comentários e explicações ao diagrama.",
                    "<strong>Grupo:</strong> Agrupa elementos visualmente para fins de documentação."
                ]
            }
        },
        {
            id: 9,
            title: "BPMN vs. Fluxograma",
            tip: "Precisão vs. Simplicidade.",
            description: "Embora ambos visualizem processos, o BPMN é uma notação formal e poderosa, enquanto o fluxograma é mais simples e informal.",
            topics: ["Nível de Detalhe", "Padronização", "Uso Ideal"],
            topicsDetails: [
                { title: "Nível de Detalhe", content: "<p>BPMN tem um conjunto rico de símbolos para representar cenários complexos (exceções, transações, múltiplos participantes) que são impossíveis de modelar em um fluxograma.</p>" },
                { title: "Padronização", content: "<p>BPMN é um padrão internacional (ISO/IEC 19510). Fluxogramas não têm uma padronização universal, variando muito em estilo e símbolos.</p>" },
                { title: "Uso Ideal", content: "<p>Use fluxogramas para esboços rápidos e processos simples. Use BPMN para documentação formal, análise de processos e, especialmente, quando o objetivo é a automação.</p>" }
            ],
            question: "Quando seria mais apropriado usar um fluxograma em vez de um diagrama BPMN?",
            answer: "Para uma apresentação rápida e de alto nível para uma audiência não técnica, onde o objetivo é apenas mostrar a sequência geral de passos sem se aprofundar em regras, exceções ou responsabilidades. Para qualquer outra coisa que exija precisão, o BPMN é superior.",
            details: {
                subtitle: "// Quando Usar Cada Um:",
                points: [
                    "<strong>Nível de Detalhe:</strong> BPMN é muito mais rico e preciso para cenários complexos.",
                    "<strong>Padronização:</strong> BPMN é um padrão internacional, garantindo entendimento universal.",
                    "<strong>Uso Ideal:</strong> Use fluxogramas para esboços rápidos; use BPMN para documentação formal e automação."
                ]
            }
        },
        {
            id: 10,
            title: "BPMN 2.0",
            tip: "A evolução que permitiu a automação.",
            description: "A versão 2.0 foi um marco, pois introduziu um formato de arquivo padrão (XML) que permite que diagramas sejam executados por motores de processo (BPMS).",
            topics: ["Execução", "Interoperabilidade", "Modelos de Coreografia"],
            topicsDetails: [
                { title: "Execução", content: "<p>A principal mudança foi a capacidade de um diagrama BPMN ser não apenas um desenho, mas um modelo executável que um sistema de software pode interpretar e rodar.</p>" },
                { title: "Interoperabilidade", content: "<p>O padrão XML permite que um modelo criado em uma ferramenta de modelagem seja exportado e importado em outra, ou em um motor de automação, sem perda de informação.</p>" },
                { title: "Modelos de Coreografia", content: "<p>Introduziu diagramas de Coreografia, que focam nas interações (troca de mensagens) entre os participantes, em vez do fluxo interno de cada um.</p>" }
            ],
            question: "Qual foi a grande inovação do BPMN 2.0 que o tornou tão crucial para a automação de processos?",
            answer: "A introdução de um formato de serialização padrão (XML). Isso transformou o BPMN de uma simples ferramenta de desenho em uma linguagem que pode ser diretamente executada por um motor de software (BPMS), criando uma ponte direta entre o desenho do processo de negócio e sua implementação técnica.",
            details: {
                subtitle: "// Inovações do BPMN 2.0:",
                points: [
                    "<strong>Execução:</strong> Um diagrama BPMN passou a ser um modelo executável por software.",
                    "<strong>Interoperabilidade:</strong> O padrão XML permite que modelos sejam trocados entre diferentes ferramentas.",
                    "<strong>Modelos de Coreografia:</strong> Introduziu uma nova forma de visualizar a interação entre participantes."
                ]
            }
        }
    ]
};
