// Arquivo: data/direitoMilitar.js
// Contém os dados para o deck "Direito Militar" - Introdução ao Direito Militar no Brasil.

export const direitoMilitar = {
    title: "Direito Militar",
    theme: "blue",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M12 2L2 7v7c0 5 10 8 10 8s10-3 10-8V7l-10-5z"/></svg>`,
    summary: "Fundamentos essenciais do Direito Militar no Brasil: estrutura, normas, competências e justiça militar.",
    cards: [
        {
            id: 1,
            title: "O que é Direito Militar?",
            tip: "O ramo jurídico que regula as Forças Armadas.",
            description: "O Direito Militar é o conjunto de normas jurídicas que disciplinam a organização, as atividades, os direitos e deveres dos militares das Forças Armadas e das Forças Auxiliares no Brasil.",
            topics: ["Conceito", "Abrangência", "Objetivos"],
            topicsDetails: [
                { title: "Conceito", content: "<p>Ramo do Direito Público que regula a disciplina militar, hierarquia, e responsabilidade dos militares.</p>" },
                { title: "Abrangência", content: "<p>Aplica-se a militares da Marinha, Exército, Aeronáutica e forças auxiliares (Polícia Militar e Corpo de Bombeiros).</p>" },
                { title: "Objetivos", content: "<p>Garantir a ordem, disciplina, e segurança das instituições militares e do Estado.</p>" }
            ],
            question: "Por que o Direito Militar é um ramo autônomo do Direito?",
            answer: "Porque possui regras específicas que atendem às particularidades da disciplina e hierarquia militares, diferentes do Direito comum.",
            details: {
                subtitle: "// Resumo do conceito:",
                points: [
                    "Regula a vida e organização militar.",
                    "Abrange militares das Forças Armadas e Auxiliares.",
                    "Objetiva disciplina e segurança institucional."
                ]
            }
        },
        {
            id: 2,
            title: "Estrutura das Forças Armadas",
            tip: "Como o sistema militar brasileiro é organizado.",
            description: "As Forças Armadas no Brasil são compostas pela Marinha, Exército e Aeronáutica, cada uma com funções específicas e autonomia administrativa, mas subordinadas ao Ministério da Defesa.",
            topics: ["Marinha", "Exército", "Aeronáutica", "Ministério da Defesa"],
            topicsDetails: [
                { title: "Marinha", content: "<p>Responsável pela defesa naval e operações no mar.</p>" },
                { title: "Exército", content: "<p>Responsável pela defesa terrestre e operações em terra.</p>" },
                { title: "Aeronáutica", content: "<p>Responsável pela defesa aérea e operações no espaço aéreo.</p>" },
                { title: "Ministério da Defesa", content: "<p>Órgão central que coordena e controla as Forças Armadas.</p>" }
            ],
            question: "Qual órgão centraliza o comando das Forças Armadas no Brasil?",
            answer: "O Ministério da Defesa, que supervisiona as três Forças e a política de defesa nacional.",
            details: {
                subtitle: "// Estrutura resumida:",
                points: [
                    "Marinha, Exército e Aeronáutica.",
                    "Cada força com funções específicas.",
                    "Coordenação pelo Ministério da Defesa."
                ]
            }
        },
        {
            id: 3,
            title: "Princípios do Direito Militar",
            tip: "Base ética e legal das normas militares.",
            description: "Os principais princípios que regem o Direito Militar incluem a hierarquia, disciplina, legalidade, e respeito aos direitos humanos, garantindo o funcionamento das instituições militares.",
            topics: ["Hierarquia", "Disciplina", "Legalidade", "Direitos Humanos"],
            topicsDetails: [
                { title: "Hierarquia", content: "<p>Reconhecimento da cadeia de comando e subordinação entre os militares.</p>" },
                { title: "Disciplina", content: "<p>Conjunto de normas que regulam a conduta militar e a obediência.</p>" },
                { title: "Legalidade", content: "<p>Atuação conforme a legislação vigente, respeitando direitos e deveres.</p>" },
                { title: "Direitos Humanos", content: "<p>Garantia dos direitos fundamentais mesmo em ambiente militar.</p>" }
            ],
            question: "Como a hierarquia influencia a disciplina militar?",
            answer: "A hierarquia estabelece a ordem e autoridade, essencial para que a disciplina seja cumprida e a organização funcione eficazmente.",
            details: {
                subtitle: "// Princípios-chave:",
                points: [
                    "Hierarquia: cadeia de comando clara.",
                    "Disciplina: respeito às normas e ordens.",
                    "Legalidade: cumprimento das leis.",
                    "Direitos Humanos: respeito mesmo no ambiente militar."
                ]
            }
        },
        {
            id: 4,
            title: "Código Penal Militar",
            tip: "Leis específicas para crimes militares.",
            description: "O Código Penal Militar (CPM) regula os crimes praticados por militares em serviço ou relacionados à atividade militar, prevendo punições específicas.",
            topics: ["Aplicação", "Crimes Militares", "Sanções"],
            topicsDetails: [
                { title: "Aplicação", content: "<p>Aplica-se aos militares das Forças Armadas e, em certas situações, aos membros das Forças Auxiliares.</p>" },
                { title: "Crimes Militares", content: "<p>Incluem insubordinação, deserção, espionagem, e outros que atentem contra a segurança militar.</p>" },
                { title: "Sanções", content: "<p>Podem variar de advertência a prisão, conforme a gravidade do crime.</p>" }
            ],
            question: "Quem está sujeito ao Código Penal Militar?",
            answer: "Militares das Forças Armadas e, em determinadas condições, integrantes das Forças Auxiliares e civis que cometem crimes militares.",
            details: {
                subtitle: "// Aspectos do CPM:",
                points: [
                    "Crimes específicos para o ambiente militar.",
                    "Abrange militares e algumas situações civis.",
                    "Punições adaptadas à disciplina militar."
                ]
            }
        },
        {
            id: 5,
            title: "Justiça Militar",
            tip: "O sistema judiciário para militares.",
            description: "A Justiça Militar é o ramo do Poder Judiciário responsável por julgar os crimes militares e questões disciplinares envolvendo militares das Forças Armadas e das Forças Auxiliares.",
            topics: ["Competência", "Tribunais", "Processos"],
            topicsDetails: [
                { title: "Competência", content: "<p>Julga crimes militares e infrações disciplinares militares.</p>" },
                { title: "Tribunais", content: "<p>Inclui os Conselhos de Justiça, Tribunais Militares e Superior Tribunal Militar (STM).</p>" },
                { title: "Processos", content: "<p>Seguem regras próprias, com garantias constitucionais e princípios do devido processo legal.</p>" }
            ],
            question: "Qual é a instância máxima da Justiça Militar no Brasil?",
            answer: "O Superior Tribunal Militar (STM), responsável por julgar recursos e processos importantes na área militar.",
            details: {
                subtitle: "// Justiça Militar em foco:",
                points: [
                    "Julgamento de crimes e disciplina militar.",
                    "Estrutura própria de tribunais.",
                    "Garantias e procedimentos específicos."
                ]
            }
        },
        {
            id: 6,
            title: "Forças Auxiliares e o Direito Militar",
            tip: "Polícia Militar e Corpo de Bombeiros sob a ótica jurídica.",
            description: "As Forças Auxiliares, como Polícia Militar e Corpo de Bombeiros, possuem regulamentação própria, mas são submetidas, em parte, ao Direito Militar, especialmente em sua disciplina e hierarquia.",
            topics: ["Polícia Militar", "Corpo de Bombeiros", "Normas Aplicáveis"],
            topicsDetails: [
                { title: "Polícia Militar", content: "<p>Responsável pelo policiamento ostensivo e preservação da ordem pública.</p>" },
                { title: "Corpo de Bombeiros", content: "<p>Executa atividades de defesa civil, salvamento e prevenção de incêndios.</p>" },
                { title: "Normas Aplicáveis", content: "<p>São submetidos a legislação militar quanto à disciplina e hierarquia, mas respeitam também o direito civil.</p>" }
            ],
            question: "As Forças Auxiliares são totalmente regidas pelo Direito Militar?",
            answer: "Não, possuem normas específicas e são submetidas parcialmente ao Direito Militar, mantendo aspectos do direito civil.",
            details: {
                subtitle: "// Relação com as Forças Auxiliares:",
                points: [
                    "Polícia Militar e Bombeiros regulados parcialmente.",
                    "Disciplina e hierarquia militares aplicadas.",
                    "Normas civis também são respeitadas."
                ]
            }
        },
        {
            id: 7,
            title: "Conselho de Justificação e Processo Administrativo Militar",
            tip: "Procedimentos disciplinares dentro das Forças Armadas.",
            description: "O processo administrativo militar é o conjunto de atos para apurar infrações disciplinares, podendo resultar em punições como advertência, detenção ou exclusão, garantido o direito à defesa.",
            topics: ["Apuração", "Direitos do Militar", "Sanções"],
            topicsDetails: [
                { title: "Apuração", content: "<p>Realizada por meio de sindicância ou processo disciplinar.</p>" },
                { title: "Direitos do Militar", content: "<p>Garantia do contraditório, ampla defesa e presunção de inocência.</p>" },
                { title: "Sanções", content: "<p>Advertência, repreensão, detenção ou exclusão das Forças Armadas.</p>" }
            ],
            question: "Quais direitos o militar possui durante o processo disciplinar?",
            answer: "Direito ao contraditório, ampla defesa, presunção de inocência e devido processo legal.",
            details: {
                subtitle: "// Processo administrativo militar:",
                points: [
                    "Apuração rigorosa das infrações.",
                    "Garantia dos direitos do militar.",
                    "Punições proporcionais à falta."
                ]
            }
        },
        {
            id: 8,
            title: "Situações de Excludente de Ilicitude",
            tip: "Quando o ato militar deixa de ser crime.",
            description: "Excludentes de ilicitude são circunstâncias previstas na lei que tornam lícito um ato que normalmente seria considerado criminoso, como o uso da força em cumprimento do dever militar.",
            topics: ["Legítima Defesa", "Estado de Necessidade", "Estrito Cumprimento do Dever"],
            topicsDetails: [
                { title: "Legítima Defesa", content: "<p>Uso da força para proteger a si mesmo ou terceiros contra agressão injusta.</p>" },
                { title: "Estado de Necessidade", content: "<p>Prática de ato para salvar direito próprio ou alheio em situação de perigo atual.</p>" },
                { title: "Estrito Cumprimento do Dever", content: "<p>Atuação dentro das ordens e funções legais atribuídas ao militar.</p>" }
            ],
            question: "O que significa 'excludente de ilicitude' no Direito Militar?",
            answer: "Significa que o ato, apesar de típico, deixa de ser ilícito por estar dentro das circunstâncias legais que justificam sua prática, como legítima defesa ou cumprimento do dever.",
            details: {
                subtitle: "// Excludentes principais:",
                points: [
                    "Legítima defesa protege contra agressão.",
                    "Estado de necessidade justifica atos em perigo.",
                    "Cumprimento do dever legal ampara ações militares."
                ]
            }
        },
        {
            id: 9,
            title: "Deveres e Obrigações do Militar",
            tip: "Responsabilidades essenciais na carreira militar.",
            description: "Os militares têm deveres previstos em lei, como obediência hierárquica, cumprimento de ordens, dedicação ao serviço, respeito às normas e à ética profissional.",
            topics: ["Obediência", "Disciplina", "Ética", "Compromisso"],
            topicsDetails: [
                { title: "Obediência", content: "<p>Respeitar as ordens legais e superiores hierárquicos.</p>" },
                { title: "Disciplina", content: "<p>Manter conduta exemplar e seguir regulamentos.</p>" },
                { title: "Ética", content: "<p>Agir com honestidade, lealdade e respeito.</p>" },
                { title: "Compromisso", content: "<p>Dedicação e responsabilidade no cumprimento das funções.</p>" }
            ],
            question: "Por que a disciplina é fundamental para o serviço militar?",
            answer: "Porque garante a organização, a eficiência e a segurança das operações militares, mantendo a coesão e a hierarquia.",
            details: {
                subtitle: "// Deveres básicos:",
                points: [
                    "Obediência às ordens legais.",
                    "Manutenção da disciplina e ética.",
                    "Compromisso com as funções e o Estado."
                ]
            }
        },
        {
            id: 10,
            title: "Legislação Militar Importante",
            tip: "As leis que regem o Direito Militar no Brasil.",
            description: "Além do Código Penal Militar, outras legislações fundamentais incluem a Constituição Federal (arts. 142), o Estatuto dos Militares (Lei nº 6.880/1980), e regulamentos específicos de cada força.",
            topics: ["Constituição Federal", "Estatuto dos Militares", "Regulamentos"],
            topicsDetails: [
                { title: "Constituição Federal", content: "<p>Define as competências das Forças Armadas e a subordinação ao poder civil.</p>" },
                { title: "Estatuto dos Militares", content: "<p>Dispõe sobre direitos, deveres, garantias e regime disciplinar dos militares.</p>" },
                { title: "Regulamentos Específicos", content: "<p>Normas internas detalhadas para o funcionamento das forças e carreira militar.</p>" }
            ],
            question: "Qual a importância do Estatuto dos Militares para os militares brasileiros?",
            answer: "Ele estabelece direitos, deveres, garantias e o regime disciplinar que regulam a vida funcional e a conduta dos militares no Brasil.",
            details: {
                subtitle: "// Legislação essencial:",
                points: [
                    "Constituição Federal: base do Direito Militar.",
                    "Estatuto dos Militares: direitos e deveres.",
                    "Regulamentos internos para cada força."
                ]
            }
        }
    ]
};
