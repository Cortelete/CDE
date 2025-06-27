// Arquivo: data/comms.js
// Contém os dados para o baralho de "Comunicação e Apresentação", com o campo 'details' reestruturado.

export const comms = {
    title: "Comunicação e Apresentação",
    theme: "teal",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    summary: "Aprenda os segredos da comunicação eficaz para apresentações e negociações.",
    cards: [
        {
            id: 1,
            title: "Comunicação Verbal vs. Não Verbal",
            tip: "O corpo fala mais alto que as palavras.",
            description: "A comunicação eficaz é uma combinação do que você diz (verbal) e como você se comporta (não verbal).",
            topics: ["Verbal", "Não Verbal", "Congruência"],
            topicsDetails: [
                { title: "Verbal", content: "Refere-se às palavras que você escolhe, ao tom de voz, ritmo e clareza da sua fala." },
                { title: "Não Verbal", content: "Inclui sua postura, gestos, contato visual, expressões faciais. É responsável por uma grande parte da impressão que você causa." },
                { title: "Congruência", content: "O mais importante é que sua comunicação verbal e não verbal estejam alinhadas. Dizer 'estou confiante' com os ombros curvados e sem contato visual não convence ninguém." }
            ],
            question: "Qual é mais impactante na percepção da audiência, a comunicação verbal ou a não verbal?",
            answer: "A comunicação não verbal. Estudos indicam que a linguagem corporal e o tom de voz têm um impacto muito maior na forma como a mensagem é recebida do que as palavras exatas que são ditas.",
            details: {
                subtitle: "// Pilares da Comunicação:",
                points: [
                    "<strong>Verbal:</strong> Refere-se às palavras que você escolhe, ao tom de voz, ritmo e clareza da sua fala.",
                    "<strong>Não Verbal:</strong> Inclui sua postura, gestos, contato visual, expressões faciais. É responsável por uma grande parte da impressão que você causa.",
                    "<strong>Congruência:</strong> O mais importante é que sua comunicação verbal e não verbal estejam alinhadas. Dizer 'estou confiante' com os ombros curvados e sem contato visual não convence ninguém."
                ]
            }
        },
        {
            id: 2,
            title: "Escuta Ativa",
            tip: "Ouvir para entender, não para responder.",
            description: "É a habilidade de se concentrar completamente no que está sendo dito, entender a mensagem, responder de forma pensada e lembrar-se do conteúdo.",
            topics: ["Foco Total", "Sem Interrupções", "Parafrasear"],
            topicsDetails: [
                { title: "Foco Total", content: "Elimine distrações. Guarde o celular. Mantenha contato visual. Mostre que você está presente." },
                { title: "Sem Interrupções", content: "Deixe a pessoa terminar de falar antes de formular sua resposta. A pausa é sua aliada." },
                { title: "Parafrasear", content: "Repita o que você entendeu com suas próprias palavras. 'Então, se eu entendi bem, o que você está dizendo é que...' Isso mostra que você estava ouvindo e confirma seu entendimento." }
            ],
            question: "Qual a diferença entre 'ouvir' e 'escutar'?",
            answer: "'Ouvir' é um ato passivo, a percepção física do som. 'Escutar' é um ato ativo e cognitivo, que envolve interpretar, entender e dar sentido ao que foi ouvido. A escuta ativa é a forma mais elevada de escutar.",
            details: {
                subtitle: "// Como Praticar a Escuta Ativa:",
                points: [
                    "<strong>Foco Total:</strong> Elimine distrações. Guarde o celular. Mantenha contato visual. Mostre que você está presente.",
                    "<strong>Sem Interrupções:</strong> Deixe a pessoa terminar de falar antes de formular sua resposta. A pausa é sua aliada.",
                    "<strong>Parafrasear:</strong> Repita o que você entendeu com suas próprias palavras. 'Então, se eu entendi bem...' Isso mostra que você estava ouvindo e confirma seu entendimento."
                ]
            }
        },
        {
            id: 3,
            title: "A Estrutura de uma Apresentação",
            tip: "Introdução, miolo e fim. Desde Aristóteles.",
            description: "Toda boa apresentação segue uma estrutura clássica que guia a audiência de forma lógica e persuasiva.",
            topics: ["A Abertura (Gancho)", "O Desenvolvimento", "O Fechamento (Call-to-Action)"],
            topicsDetails: [
                { title: "A Abertura (Gancho)", content: "Você tem 30 segundos para capturar a atenção. Comece com uma pergunta provocativa, uma estatística chocante ou uma história curta e relevante." },
                { title: "O Desenvolvimento", content: "Organize seu conteúdo em 3 a 5 pontos principais. Use uma lógica clara (ex: problema-solução-benefícios) e transições suaves entre os tópicos." },
                { title: "O Fechamento (Call-to-Action)", content: "Resuma sua mensagem principal e diga à audiência o que você quer que eles façam a seguir (ex: 'Visitem nosso site', 'Aprovem o orçamento')." }
            ],
            question: "Por que começar uma apresentação com 'Olá, meu nome é...' é uma má ideia?",
            answer: "Porque é previsível e não gera interesse. Você desperdiça os segundos mais preciosos da sua apresentação, quando a atenção da audiência está no auge, com uma informação que poderia ser dita depois. Comece com um gancho que desperte a curiosidade.",
            details: {
                subtitle: "// A Estrutura Clássica:",
                points: [
                    "<strong>A Abertura (Gancho):</strong> Você tem 30 segundos para capturar a atenção. Comece com uma pergunta, estatística ou história.",
                    "<strong>O Desenvolvimento:</strong> Organize seu conteúdo em 3 a 5 pontos principais com uma lógica clara.",
                    "<strong>O Fechamento (Call-to-Action):</strong> Resuma sua mensagem principal e diga à audiência o que você quer que eles façam a seguir."
                ]
            }
        },
        {
            id: 4,
            title: "Storytelling em Negócios",
            tip: "Dados convencem, histórias conectam.",
            description: "É a arte de usar narrativas para transmitir uma mensagem, criar uma conexão emocional e tornar informações complexas mais memoráveis e persuasivas.",
            topics: ["O Herói", "O Conflito", "A Resolução"],
            topicsDetails: [
                { title: "O Herói", content: "O herói da sua história não é você ou sua empresa, é o seu cliente." },
                { title: "O Conflito", content: "O problema ou desafio que o seu cliente (o herói) enfrenta. É a dor que você vai resolver." },
                { title: "A Resolução", content: "Como o seu produto ou serviço (a 'arma mágica') ajuda o herói a superar o conflito e alcançar um estado melhor." }
            ],
            question: "Como o storytelling pode ser mais eficaz do que apenas apresentar dados?",
            answer: "Dados ativam as partes lógicas do cérebro, enquanto histórias ativam as partes lógicas E emocionais. Uma história cria um contexto para os dados, tornando-os mais fáceis de entender, lembrar e, o mais importante, de se importar com eles.",
            details: {
                subtitle: "// A Jornada do Herói:",
                points: [
                    "<strong>O Herói:</strong> O herói da sua história não é você ou sua empresa, é o seu cliente.",
                    "<strong>O Conflito:</strong> O problema ou desafio que o seu cliente (o herói) enfrenta. É a dor que você vai resolver.",
                    "<strong>A Resolução:</strong> Como o seu produto ou serviço (a 'arma mágica') ajuda o herói a superar o conflito e alcançar um estado melhor."
                ]
            }
        },
        {
            id: 5,
            title: "O Poder da Pausa",
            tip: "O silêncio é sua arma secreta.",
            description: "Fazer pausas estratégicas durante a fala é uma das ferramentas mais poderosas e subutilizadas na comunicação.",
            topics: ["Criar Ênfase", "Dar Tempo para Absorver", "Transmitir Confiança"],
            topicsDetails: [
                { title: "Criar Ênfase", content: "Uma pausa antes ou depois de uma declaração importante a torna muito mais impactante." },
                { title: "Dar Tempo para Absorver", content: "Após apresentar uma ideia complexa, uma pausa dá à audiência tempo para processar a informação." },
                { title: "Transmitir Confiança", content: "Falar rápido e sem parar é um sinal de nervosismo. Pausar demonstra controle e confiança no seu próprio conteúdo." }
            ],
            question: "Onde é o melhor momento para usar uma pausa em uma apresentação?",
            answer: "Logo antes de revelar a informação mais importante (para criar suspense) ou logo depois (para dar tempo para a informação 'afundar' na mente da audiência).",
            details: {
                subtitle: "// Benefícios do Silêncio Estratégico:",
                points: [
                    "<strong>Criar Ênfase:</strong> Uma pausa antes ou depois de uma declaração importante a torna muito mais impactante.",
                    "<strong>Dar Tempo para Absorver:</strong> Após apresentar uma ideia complexa, uma pausa dá à audiência tempo para processar a informação.",
                    "<strong>Transmitir Confiança:</strong> Falar rápido e sem parar é um sinal de nervosismo. Pausar demonstra controle e confiança."
                ]
            }
        },
        {
            id: 6,
            title: "Lidando com Perguntas Difíceis",
            tip: "Não entre em pânico. Agradeça, repita e responda.",
            description: "Sessões de Q&A podem ser intimidadoras, mas são uma oportunidade de reforçar sua mensagem e demonstrar conhecimento.",
            topics: ["Agradeça e Repita", "Seja Honesto", "Ponte para sua Mensagem"],
            topicsDetails: [
                { title: "Agradeça e Repita", content: "Comece com 'Ótima pergunta'. Repita a pergunta para garantir que todos ouviram e para ganhar tempo para pensar." },
                { title: "Seja Honesto", content: "Se você não sabe a resposta, admita. É melhor dizer 'Não tenho essa informação agora, mas posso pesquisar e te retornar' do que inventar algo." },
                { title: "Ponte para sua Mensagem", content: "Responda à pergunta diretamente e, se possível, use-a como uma 'ponte' para reforçar um dos pontos principais da sua apresentação." }
            ],
            question: "O que fazer se alguém fizer uma pergunta agressiva ou hostil?",
            answer: "Mantenha a calma e não leve para o lado pessoal. Responda ao conteúdo da pergunta, não à emoção. Seja respeitoso, conciso e volte para sua mensagem principal. Ex: 'Entendo sua preocupação com X. O que nossos dados mostram é que...'",
            details: {
                subtitle: "// Técnica de 3 Passos:",
                points: [
                    "<strong>Agradeça e Repita:</strong> Comece com 'Ótima pergunta'. Repita a pergunta para garantir que todos ouviram e para ganhar tempo para pensar.",
                    "<strong>Seja Honesto:</strong> Se você não sabe a resposta, admita. É melhor dizer 'Não tenho essa informação agora, mas posso pesquisar e te retornar' do que inventar algo.",
                    "<strong>Ponte para sua Mensagem:</strong> Responda à pergunta diretamente e, se possível, use-a como uma 'ponte' para reforçar um dos pontos principais da sua apresentação."
                ]
            }
        },
        {
            id: 7,
            title: "Regra do 10-20-30",
            tip: "O mantra de Guy Kawasaki para pitches.",
            description: "Uma diretriz simples e poderosa para criar apresentações que respeitam o tempo e a capacidade de atenção da audiência.",
            topics: ["10 Slides", "20 Minutos", "30 Pontos de Fonte"],
            topicsDetails: [
                { title: "10 Slides", content: "É o número máximo de conceitos que uma pessoa consegue absorver em uma reunião. Force-se a ser conciso." },
                { title: "20 Minutos", content: "Você deve conseguir fazer sua apresentação em 20 minutos, mesmo que tenha uma hora. Os 40 minutos restantes são para discussão, que é a parte mais valiosa." },
                { title: "30 Pontos de Fonte", content: "Usar uma fonte grande força você a usar menos texto e a focar nas ideias principais, além de garantir que todos na sala consigam ler." }
            ],
            question: "Por que a regra dos 20 minutos é tão importante, mesmo que a reunião seja de uma hora?",
            answer: "Porque permite que a maior parte do tempo seja gasta em conversa e perguntas. Um pitch não é um monólogo, é o início de um diálogo. A discussão é onde o verdadeiro engajamento e convencimento acontecem.",
            details: {
                subtitle: "// A Regra de Ouro de Guy Kawasaki:",
                points: [
                    "<strong>10 Slides:</strong> É o número máximo de conceitos que uma pessoa consegue absorver em uma reunião. Seja conciso.",
                    "<strong>20 Minutos:</strong> Faça sua apresentação em 20 minutos, mesmo que tenha uma hora. O resto é para discussão.",
                    "<strong>30 Pontos de Fonte:</strong> Use uma fonte grande. Isso força o uso de menos texto e garante a legibilidade."
                ]
            }
        },
        {
            id: 8,
            title: "Conheça Sua Audiência",
            tip: "Fale a língua deles, não a sua.",
            description: "A comunicação mais eficaz é aquela que é adaptada para quem está ouvindo. O que importa para eles? O que eles já sabem?",
            topics: ["Nível de Conhecimento", "Interesses e Dores", "Adapte a Linguagem"],
            topicsDetails: [
                { title: "Nível de Conhecimento", content: "Eles são especialistas ou leigos no assunto? Isso define o nível de profundidade e o uso de jargões." },
                { title: "Interesses e Dores", content: "O que mantém sua audiência acordada à noite? Como sua mensagem pode ajudá-los a resolver seus problemas ou atingir seus objetivos?" },
                { title: "Adapte a Linguagem", content: "Use analogias e exemplos que ressoem com a experiência da sua audiência." }
            ],
            question: "Como você adaptaria a mesma apresentação sobre um novo software para investidores e para engenheiros?",
            answer: "Para investidores, focaria nos resultados de negócio: tamanho do mercado, modelo de receita e potencial de crescimento. Para engenheiros, focaria nos detalhes técnicos: a arquitetura do sistema, a stack de tecnologia e os desafios de implementação.",
            details: {
                subtitle: "// Adapte sua Mensagem:",
                points: [
                    "<strong>Nível de Conhecimento:</strong> Eles são especialistas ou leigos? Isso define a profundidade e o uso de jargões.",
                    "<strong>Interesses e Dores:</strong> Como sua mensagem pode ajudá-los a resolver seus problemas ou atingir seus objetivos?",
                    "<strong>Adapte a Linguagem:</strong> Use analogias e exemplos que ressoem com a experiência da sua audiência."
                ]
            }
        },
        {
            id: 9,
            title: "O 'Call to Action' (CTA)",
            tip: "Termine dizendo o que você quer que aconteça.",
            description: "Toda comunicação persuasiva deve terminar com uma chamada clara para a ação. Não deixe sua audiência adivinhando o próximo passo.",
            topics: ["Seja Específico", "Seja Confiante", "Torne Fácil"],
            topicsDetails: [
                { title: "Seja Específico", content: "Não diga 'Espero que tenham gostado'. Diga 'Peço a aprovação do orçamento de X para iniciarmos a fase 1'." },
                { title: "Seja Confiante", content: "Faça o pedido com confiança, como se você esperasse um 'sim'." },
                { title: "Torne Fácil", content: "Deixe claro qual é o próximo passo e facilite para a audiência tomá-lo." }
            ],
            question: "Por que 'Qualquer dúvida, estou à disposição' é um fechamento fraco?",
            answer: "Porque é passivo e não direciona a audiência para uma ação. Um bom fechamento é proativo e diz claramente o que deve acontecer a seguir, mantendo o controle da narrativa.",
            details: {
                subtitle: "// Como Finalizar com Impacto:",
                points: [
                    "<strong>Seja Específico:</strong> Não diga 'Espero que tenham gostado'. Diga 'Peço a aprovação do orçamento de X para iniciarmos a fase 1'.",
                    "<strong>Seja Confiante:</strong> Faça o pedido com confiança, como se você esperasse um 'sim'.",
                    "<strong>Torne Fácil:</strong> Deixe claro qual é o próximo passo e facilite para a audiência tomá-lo."
                ]
            }
        },
        {
            id: 10,
            title: "A Prática Leva à Perfeição",
            tip: "Não decore, internalize.",
            description: "A fluidez e a confiança em uma apresentação não vêm da memorização, mas da prática repetida até que o conteúdo se torne parte de você.",
            topics: ["Pratique em Voz Alta", "Grave-se", "Simule o Ambiente Real"],
            topicsDetails: [
                { title: "Pratique em Voz Alta", content: "Falar é muito diferente de ler. Praticar em voz alta ajuda a encontrar as melhores palavras e o ritmo certo." },
                { title: "Grave-se", content: "Grave áudio ou vídeo da sua apresentação. É desconfortável, mas é a melhor maneira de identificar tiques, vícios de linguagem e áreas para melhorar a postura." },
                { title: "Simule o Ambiente Real", content: "Se possível, pratique no local da apresentação ou em um ambiente similar. Apresente para colegas ou amigos e peça feedback honesto." }
            ],
            question: "Qual a diferença entre decorar o texto e internalizar a mensagem?",
            answer: "Decorar leva a uma apresentação robótica e frágil (se você esquece uma palavra, pode se perder). Internalizar significa que você conhece tão bem suas ideias principais que pode falar sobre elas naturalmente, adaptando-se à audiência e às perguntas sem precisar seguir um script fixo.",
            details: {
                subtitle: "// Como Praticar Eficazmente:",
                points: [
                    "<strong>Pratique em Voz Alta:</strong> Falar é muito diferente de ler. Praticar em voz alta ajuda a encontrar as melhores palavras e o ritmo certo.",
                    "<strong>Grave-se:</strong> Grave áudio ou vídeo da sua apresentação. É a melhor maneira de identificar tiques e áreas para melhorar.",
                    "<strong>Simule o Ambiente Real:</strong> Pratique no local da apresentação ou em um ambiente similar e peça feedback honesto."
                ]
            }
        }
    ]
};
