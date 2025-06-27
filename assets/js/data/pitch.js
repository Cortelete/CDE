// Arquivo: data/pitch.js
// Contém os dados exclusivamente para o deck de "O Pitch Perfeito".

export const pitch = {
    title: "O Pitch Perfeito",
    theme: "indigo",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="m12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
    summary: "Estruture uma apresentação matadora que captura atenção, convence investidores e vende sua ideia.",
    cards: [
        {
            id: 1,
            title: "O Problema",
            tip: "Comece com a dor. Torne-a pessoal.",
            description: "A primeira e mais crucial parte de um pitch. Você precisa convencer a audiência de que existe um problema real, significativo e, idealmente, que eles possam se relacionar com ele.",
            topics: ["Clareza e Relevância", "Dados de Impacto", "Storytelling"],
            topicsDetails: [
                { title: "Clareza e Relevância", content: "Seja direto. Em uma frase, qual é a dor que você resolve? Evite jargões. A avó do investidor precisa entender." },
                { title: "Dados de Impacto", content: "Mostre que não é um problema só seu. Use estatísticas: 'X milhões de pessoas sofrem com Y, custando Z bilhões ao mercado anualmente'." },
                { title: "Storytelling", content: "Crie uma narrativa. Apresente um personagem (ex: 'Esta é a Ana. Ela perde 3 horas por dia com...') para humanizar o problema." }
            ],
            question: "Qual o erro mais comum ao apresentar o problema em um pitch?",
            answer: "O erro mais comum é apresentar um problema que não é significativo ou que a audiência não consegue entender a relevância. Se o problema parece pequeno ou de nicho demais, a solução, não importa quão brilhante, parecerá irrelevante."
        },
        {
            id: 2,
            title: "A Solução",
            tip: "A cura para a dor que você acabou de apresentar.",
            description: "Apresente sua solução de forma clara e concisa. Mostre como seu produto ou serviço resolve o problema de uma maneira única e eficaz.",
            topics: ["Simplicidade", "Demonstração (Demo)", "Proposta de Valor"],
            topicsDetails: [
                { title: "Simplicidade", content: "Explique o que sua solução faz em termos simples. Foco nos benefícios, não nas features." },
                { title: "Demonstração (Demo)", content: "Se possível, mostre a solução funcionando, mesmo que seja um protótipo. 'Mostrar é melhor que falar'." },
                { title: "Proposta de Valor", content: "Qual é o principal benefício que sua solução oferece? (ex: 'Economizamos 50% do tempo dos nossos clientes')." }
            ],
            question: "Devo focar nas características técnicas da minha solução durante o pitch?",
            answer: "Não, a menos que a audiência seja extremamente técnica. Foque nos **benefícios** que a solução gera para o usuário. O investidor não quer saber sobre sua stack de tecnologia, ele quer saber como você resolve o problema e ganha dinheiro."
        },
        {
            id: 3,
            title: "O Mercado",
            tip: "Mostre o tamanho do playground.",
            description: "Quantifique o tamanho da oportunidade. Investidores querem saber se o mercado é grande o suficiente para justificar o investimento.",
            topics: ["TAM, SAM, SOM", "Crescimento do Mercado", "Tendências"],
            topicsDetails: [
                { title: "TAM, SAM, SOM", content: "<strong>TAM</strong> (Total Addressable Market): Mercado total. <strong>SAM</strong> (Serviceable Addressable Market): A fatia que você pode atender com seu modelo de negócio. <strong>SOM</strong> (Serviceable Obtainable Market): Sua meta realista de captura nos primeiros anos." },
                { title: "Crescimento do Mercado", content: "Este mercado está crescendo, estagnado ou encolhendo? Mostre dados que indiquem uma tendência de alta." },
                { title: "Tendências", content: "Quais tendências (tecnológicas, sociais) estão impulsionando o crescimento deste mercado?" }
            ],
            question: "O que significa o conceito de 'bottom-up' para calcular o tamanho do mercado?",
            answer: "Significa calcular o mercado a partir da base: (Número de clientes em potencial) x (Preço médio do seu produto). É uma abordagem mais realista e confiável do que a 'top-down', que pega uma porcentagem de um mercado gigantesco (ex: 'vamos pegar 1% do mercado de alimentos')."
        },
        {
            id: 4,
            title: "Modelo de Negócio",
            tip: "Como você transforma cliques em dinheiro.",
            description: "Explique de forma clara e direta como sua empresa planeja ganhar dinheiro.",
            topics: ["Fontes de Receita", "Estratégia de Preços", "Métricas Chave"],
            topicsDetails: [
                { title: "Fontes de Receita", content: "Como você gera receita? (Assinatura, venda única, freemium, publicidade, comissão, etc.)." },
                { title: "Estratégia de Preços", content: "Por que você escolheu esse preço? Ele se baseia em custo, valor percebido ou concorrência?" },
                { title: "Métricas Chave", content: "Quais são as métricas mais importantes para o seu modelo? (Ex: LTV - Lifetime Value, CAC - Custo de Aquisição de Cliente)." }
            ],
            question: "Qual a diferença entre LTV (Lifetime Value) e CAC (Custo de Aquisição de Cliente)?",
            answer: "CAC é quanto você gasta para adquirir um novo cliente. LTV é o valor total que você espera que esse cliente gere para sua empresa ao longo do tempo. Um modelo de negócio saudável precisa ter um LTV significativamente maior que o CAC."
        },
        {
            id: 5,
            title: "A Concorrência",
            tip: "Conheça seus inimigos (e por que você é melhor).",
            description: "Mostre que você entende o cenário competitivo e posicione sua solução de forma vantajosa.",
            topics: ["Concorrentes Diretos/Indiretos", "Diferencial Competitivo", "Matriz de Concorrência"],
            topicsDetails: [
                { title: "Concorrentes Diretos/Indiretos", content: "Liste quem já resolve o mesmo problema, mesmo que de forma diferente." },
                { title: "Diferencial Competitivo", content: "O que torna sua solução única e difícil de ser copiada? (Tecnologia, marca, efeito de rede, etc.)." },
                { title: "Matriz de Concorrência", content: "Use um gráfico 2x2 para se posicionar visualmente contra seus concorrentes, destacando seus dois diferenciais mais fortes nos eixos." }
            ],
            question: "Dizer 'não temos concorrentes' é uma boa estratégia em um pitch?",
            answer: "Não, é péssima. Sugere que ou você não pesquisou o mercado direito, ou não há mercado para sua solução. Sempre há concorrência, mesmo que seja uma forma alternativa do cliente resolver o problema (ex: uma planilha de Excel)."
        },
        {
            id: 6,
            title: "A Equipe",
            tip: "Investidores apostam no jóquei, não no cavalo.",
            description: "Apresente a equipe fundadora e chave. Mostre por que vocês são as pessoas certas para executar esta ideia.",
            topics: ["Experiência Relevante", "Paixão e Comprometimento", "Complementaridade"],
            topicsDetails: [
                { title: "Experiência Relevante", content: "Destaque experiências passadas, habilidades e conquistas que se conectam com o desafio do projeto." },
                { title: "Paixão e Comprometimento", content: "Mostre que vocês estão 100% dedicados ao projeto. Por que vocês se importam tanto com esse problema?" },
                { title: "Complementaridade", content: "Mostre que a equipe tem habilidades complementares que cobrem as principais áreas do negócio (ex: técnico, negócios, marketing)." }
            ],
            question: "O que é mais importante para um investidor: uma ótima ideia com uma equipe mediana, ou uma ideia mediana com uma ótima equipe?",
            answer: "Uma ótima equipe. A maioria dos investidores concorda que uma equipe excepcional pode transformar uma ideia mediana em um sucesso, enquanto uma equipe fraca pode arruinar a melhor das ideias."
        },
        {
            id: 7,
            title: "Tração e Marcos",
            tip: "Mostre que você não está só no campo das ideias.",
            description: "Apresente o que você já conquistou e quais são os próximos passos importantes. Isso mostra progresso e visão de futuro.",
            topics: ["O que já foi feito", "Métricas de Tração", "Próximos Marcos"],
            topicsDetails: [
                { title: "O que já foi feito", content: "Protótipo construído? Primeiros usuários? Parcerias fechadas?" },
                { title: "Métricas de Tração", content: "Apresente números que provem seu progresso: número de usuários, crescimento semanal, receita inicial, etc." },
                { title: "Próximos Marcos", content: "O que você vai conquistar nos próximos 6-18 meses? (ex: Lançar versão 2.0, atingir 10 mil usuários)." }
            ],
            question: "O que é um MVP e por que ele é uma forma de tração?",
            answer: "MVP (Minimum Viable Product) é a versão mais simples do seu produto que ainda resolve o problema central do cliente. Lançar um MVP e ter os primeiros usuários (mesmo que poucos) é uma forma poderosa de tração, pois prova que você consegue construir e que alguém está disposto a usar sua solução."
        },
        {
            id: 8,
            title: "A Pergunta (The Ask)",
            tip: "Seja direto e justifique o que você vai fazer com o dinheiro.",
            description: "Diga claramente quanto dinheiro você está buscando e onde pretende alocá-lo.",
            topics: ["Quanto Dinheiro?", "Alocação dos Recursos", "Objetivos com o Investimento"],
            topicsDetails: [
                { title: "Quanto Dinheiro?", content: "Seja específico. 'Estamos buscando R$500.000'. Não diga 'qualquer quantia ajuda'." },
                { title: "Alocação dos Recursos", content: "Mostre um plano de como o dinheiro será gasto (ex: 40% em marketing, 50% em contratação de desenvolvedores, 10% em despesas operacionais)." },
                { title: "Objetivos com o Investimento", content: "O que esse dinheiro vai te permitir alcançar? (ex: 'Com este investimento, vamos atingir X usuários e Y de faturamento em 18 meses')." }
            ],
            question: "Qual erro deve ser evitado ao fazer 'The Ask'?",
            answer: "Ser vago ou parecer desesperado. Você precisa mostrar que tem um plano claro e que o dinheiro é o combustível para executar esse plano, não um salva-vidas. A confiança na sua projeção é fundamental."
        },
        {
            id: 9,
            title: "Elevator Pitch",
            tip: "Sua ideia em 30 segundos, sem enrolação.",
            description: "Uma versão ultracondensada da sua apresentação, que pode ser dita no tempo de uma viagem de elevador.",
            topics: ["A Fórmula", "Clareza", "Gatilho de Curiosidade"],
            topicsDetails: [
                { title: "A Fórmula", content: "Para [público-alvo] que tem o [problema], nossa [solução] é um [categoria de produto] que oferece o [principal benefício]. Diferente de [concorrente], nós [diferencial chave]." },
                { title: "Clareza", content: "Sem jargões ou termos técnicos. A mensagem deve ser instantaneamente compreensível." },
                { title: "Gatilho de Curiosidade", content: "O objetivo não é explicar tudo, mas gerar interesse suficiente para que a pessoa queira saber mais." }
            ],
            question: "Crie um Elevator Pitch para o Spotify usando a fórmula.",
            answer: "Para amantes de música que odeiam a pirataria e a inconveniência, o Spotify é um serviço de streaming que dá acesso a todas as músicas do mundo instantaneamente. Diferente de comprar CDs ou baixar MP3, nós oferecemos uma experiência legal, barata e personalizada."
        },
        {
            id: 10,
            title: "Design do Deck",
            tip: "Menos é mais. Muito mais.",
            description: "A aparência visual do seu deck de slides é tão importante quanto o conteúdo. Slides poluídos e confusos destroem sua credibilidade.",
            topics: ["Um Conceito por Slide", "Visual > Texto", "Consistência Visual"],
            topicsDetails: [
                { title: "Um Conceito por Slide", content: "Cada slide deve ter apenas uma ideia central. Se você precisa de vários pontos, use vários slides." },
                { title: "Visual > Texto", content: "Use imagens, gráficos e ícones para transmitir informações. Evite parágrafos longos. Use fontes grandes e legíveis." },
                { title: "Consistência Visual", content: "Mantenha a mesma paleta de cores, fontes e estilo de design em todos os slides para criar uma apresentação profissional e coesa." }
            ],
            question: "Qual é a 'regra dos 10/20/30' de Guy Kawasaki para pitches?",
            answer: "É uma diretriz clássica: um pitch deve ter no máximo **10 slides**, durar no máximo **20 minutos** e usar uma fonte de no mínimo **30 pontos**. É um ótimo lembrete para ser conciso e visual."
        }
    ]
};
