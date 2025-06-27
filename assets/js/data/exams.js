// Arquivo: data/exams.js
// Contém os dados para o baralho de "Técnicas de Estudo e Prova", com o campo 'details' reestruturado.

export const exams = {
    title: "Técnicas de Estudo e Prova",
    theme: "sky",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    summary: "Técnicas para controlar a ansiedade, gerenciar o tempo e maximizar sua nota.",
    cards: [
        {
            id: 1,
            title: "A Mentalidade Certa",
            tip: "A prova mede seu conhecimento, não seu valor.",
            description: "Entrar na prova com a mentalidade correta é metade da batalha. Encare-a como uma oportunidade de mostrar o que aprendeu, não como um julgamento.",
            topics: ["Confiança", "Foco no Processo", "Respiração"],
            topicsDetails: [
                { title: "Confiança", content: "<p>Confie no seu preparo. Lembre-se das horas de estudo. Você está mais preparado do que pensa.</p>" },
                { title: "Foco no Processo", content: "<p>Não pense na nota final. Concentre-se em resolver uma questão de cada vez, da melhor forma possível.</p>" },
                { title: "Respiração", content: "<p>Se sentir ansiedade, pare por 10 segundos e foque na sua respiração. Uma respiração profunda e lenta pode acalmar o sistema nervoso.</p>" }
            ],
            question: "Qual a primeira coisa a se fazer ao sentir o pânico chegando durante uma prova?",
            answer: "Parar imediatamente o que está fazendo, fechar os olhos por um instante e focar em duas ou três respirações lentas e profundas. Isso quebra o ciclo da ansiedade e permite que você retome o controle cognitivo.",
            details: {
                subtitle: "// Pilares da Mentalidade:",
                points: [
                    "<strong>Confiança:</strong> Confie no seu preparo. Lembre-se das horas de estudo. Você está mais preparado do que pensa.",
                    "<strong>Foco no Processo:</strong> Não pense na nota final. Concentre-se em resolver uma questão de cada vez, da melhor forma possível.",
                    "<strong>Respiração:</strong> Se sentir ansiedade, pare por 10 segundos e foque na sua respiração. Uma respiração profunda e lenta pode acalmar o sistema nervoso."
                ]
            }
        },
        {
            id: 2,
            title: "Repetição Espaçada",
            tip: "O inimigo do 'esqueci tudo no dia seguinte'.",
            description: "É uma técnica de aprendizado que envolve revisar informações em intervalos crescentes de tempo, combatendo a 'curva do esquecimento'.",
            topics: ["Curva do Esquecimento", "Flashcards", "Ferramentas"],
            topicsDetails: [
                { title: "Curva do Esquecimento", content: "<p>Naturalmente, esquecemos a maior parte do que aprendemos em poucos dias. A repetição espaçada reativa a memória pouco antes de você esquecer.</p>" },
                { title: "Flashcards", content: "<p>É o método mais popular para aplicar a técnica. Ferramentas como o Anki são baseadas neste princípio.</p>" },
                { title: "Intervalos Crescentes", content: "<p>Você revisa um card hoje. Se acertar, o revisará em 3 dias. Se acertar de novo, em 1 semana, depois 1 mês, e assim por diante.</p>" }
            ],
            question: "Por que revisar um assunto todo dia é menos eficiente que a repetição espaçada?",
            answer: "Porque revisar todo dia não dá ao cérebro o 'esforço' necessário para recuperar a informação, o que é crucial para fortalecer a memória de longo prazo. A repetição espaçada força esse esforço de recuperação no momento ideal.",
            details: {
                subtitle: "// Como Funciona:",
                points: [
                    "<strong>Curva do Esquecimento:</strong> Naturalmente, esquecemos a maior parte do que aprendemos em poucos dias. A repetição espaçada reativa a memória pouco antes de você esquecer.",
                    "<strong>Flashcards:</strong> É o método mais popular para aplicar a técnica. Ferramentas como o Anki são baseadas neste princípio.",
                    "<strong>Intervalos Crescentes:</strong> Você revisa um card hoje. Se acertar, o revisará em 3 dias. Se acertar de novo, em 1 semana, depois 1 mês, e assim por diante."
                ]
            }
        },
        {
            id: 3,
            title: "Técnica de Feynman",
            tip: "Se você não consegue explicar, você não entendeu.",
            description: "Um método de aprendizado que consiste em explicar um conceito complexo com suas próprias palavras, de forma simples, como se estivesse ensinando para uma criança.",
            topics: ["Escolha o Conceito", "Ensine para uma Criança", "Identifique as Lacunas", "Simplifique"],
            topicsDetails: [
                { title: "Escolha o Conceito", content: "<p>Pegue um pedaço de papel e escreva o nome do conceito no topo.</p>" },
                { title: "Ensine para uma Criança", content: "<p>Escreva uma explicação sobre o conceito usando apenas palavras e analogias simples. Evite jargões.</p>" },
                { title: "Identifique as Lacunas", content: "<p>Ao tentar explicar, você inevitavelmente encontrará pontos onde seu entendimento é fraco ou confuso. Essas são suas lacunas de conhecimento.</p>" },
                { title: "Simplifique", content: "<p>Volte ao material de estudo para preencher as lacunas, e então refine sua explicação até que ela seja clara e concisa.</p>" }
            ],
            question: "Qual o principal benefício da Técnica de Feynman?",
            answer: "Ela força você a transformar conhecimento passivo (o que você leu) em conhecimento ativo (o que você realmente entendeu), expondo brutalmente as áreas onde seu entendimento é superficial.",
            details: {
                subtitle: "// Os 4 Passos:",
                points: [
                    "<strong>Escolha o Conceito:</strong> Pegue um pedaço de papel e escreva o nome do conceito no topo.",
                    "<strong>Ensine para uma Criança:</strong> Escreva uma explicação sobre o conceito usando apenas palavras e analogias simples. Evite jargões.",
                    "<strong>Identifique as Lacunas:</strong> Ao tentar explicar, você inevitavelmente encontrará pontos onde seu entendimento é fraco ou confuso.",
                    "<strong>Simplifique:</strong> Volte ao material de estudo para preencher as lacunas, e então refine sua explicação até que ela seja clara e concisa."
                ]
            }
        },
        {
            id: 4,
            title: "Gerenciamento de Tempo na Prova",
            tip: "Não perca a guerra por causa de uma batalha.",
            description: "Uma estratégia para alocar seu tempo de forma inteligente durante a prova, garantindo que você tente resolver todas as questões.",
            topics: ["Leitura Rápida Inicial", "Comece pelas Fáceis", "Controle o Relógio"],
            topicsDetails: [
                { title: "Leitura Rápida Inicial", content: "<p>Gaste os primeiros 2-3 minutos folheando a prova inteira para ter uma ideia do tamanho, dos tipos de questão e do peso de cada uma.</p>" },
                { title: "Comece pelas Fáceis", content: "<p>Resolva primeiro as questões que você tem certeza da resposta. Isso garante pontos, aumenta sua confiança e aquece seu cérebro.</p>" },
                { title: "Controle o Relógio", content: "<p>Calcule o tempo médio por questão (ex: 180 min / 60 questões = 3 min/questão). Se estiver gastando muito tempo em uma, marque-a e volte depois.</p>" }
            ],
            question: "Por que é arriscado começar a prova pela questão mais difícil?",
            answer: "Porque você pode gastar uma quantidade desproporcional de tempo e energia mental nela, ficar preso, frustrado e comprometer o tempo necessário para resolver várias outras questões mais fáceis que garantiriam mais pontos.",
            details: {
                subtitle: "// Estratégia de Prova:",
                points: [
                    "<strong>Leitura Rápida Inicial:</strong> Gaste os primeiros 2-3 minutos folheando a prova inteira para ter uma ideia geral.",
                    "<strong>Comece pelas Fáceis:</strong> Resolva primeiro as questões que você tem certeza da resposta para garantir pontos e confiança.",
                    "<strong>Controle o Relógio:</strong> Calcule o tempo médio por questão. Se estiver gastando muito tempo em uma, marque-a e volte depois."
                ]
            }
        },
        {
            id: 5,
            title: "O 'Brain Dump'",
            tip: "Esvazie sua cabeça antes de começar.",
            description: "Uma técnica para os primeiros minutos de prova: escrever todas as fórmulas, datas, conceitos e mnemônicos importantes em uma folha de rascunho.",
            topics: ["Alivia a Carga Mental", "Segurança", "Como Fazer"],
            topicsDetails: [
                { title: "Alivia a Carga Mental", content: "<p>Tira da sua cabeça a pressão de ter que lembrar de tudo. Uma vez no papel, você pode consultar quando precisar.</p>" },
                { title: "Segurança", content: "<p>Reduz a ansiedade de 'dar branco' no meio da prova. Suas 'colas' autorizadas estão ali.</p>" },
                { title: "Como Fazer", content: "<p>Assim que o fiscal autorizar o início, vire a prova e use o verso ou a folha de rascunho para despejar rapidamente toda a informação decorada.</p>" }
            ],
            question: "Essa técnica não é uma forma de 'cola'?",
            answer: "Não, desde que seja feita após o início oficial da prova, usando apenas a memória e o material permitido (como folhas de rascunho). É uma estratégia de organização mental, não de fraude.",
            details: {
                subtitle: "// Como Executar:",
                points: [
                    "<strong>Alivia a Carga Mental:</strong> Tira da sua cabeça a pressão de ter que lembrar de tudo.",
                    "<strong>Segurança:</strong> Reduz a ansiedade de 'dar branco' no meio da prova.",
                    "<strong>Como Fazer:</strong> Assim que a prova começar, use uma folha de rascunho para despejar rapidamente todas as fórmulas e conceitos que memorizou."
                ]
            }
        },
        {
            id: 6,
            title: "Sono e Alimentação",
            tip: "Seu cérebro é hardware. Cuide dele.",
            description: "A performance cognitiva é diretamente impactada pela qualidade do seu sono e nutrição, especialmente nos dias que antecedem a prova.",
            topics: ["O Poder do Sono", "Evite Virar a Noite", "Alimentação Leve"],
            topicsDetails: [
                { title: "O Poder do Sono", content: "<p>É durante o sono que o cérebro consolida as memórias e o aprendizado. Dormir bem é tão importante quanto estudar.</p>" },
                { title: "Evite Virar a Noite", content: "<p>Estudar na véspera até tarde é contraproducente. É melhor garantir 7-8 horas de sono para ter um cérebro descansado e afiado.</p>" },
                { title: "Alimentação Leve", content: "<p>No dia da prova, coma alimentos leves e que você já está acostumado. Evite comidas pesadas que podem causar sonolência ou desconforto.</p>" }
            ],
            question: "Qual o impacto de uma noite mal dormida na performance de uma prova?",
            answer: "Uma noite mal dormida afeta negativamente a memória de curto prazo, a capacidade de concentração, o raciocínio lógico e a velocidade de processamento, aumentando as chances de cometer erros por descuido.",
            details: {
                subtitle: "// Cuidados Essenciais:",
                points: [
                    "<strong>O Poder do Sono:</strong> É durante o sono que o cérebro consolida as memórias e o aprendizado. Dormir bem é tão importante quanto estudar.",
                    "<strong>Evite Virar a Noite:</strong> Estudar na véspera até tarde é contraproducente. É melhor garantir 7-8 horas de sono.",
                    "<strong>Alimentação Leve:</strong> No dia da prova, coma alimentos leves e que você já está acostumado."
                ]
            }
        },
        {
            id: 7,
            title: "Leitura Atenta do Enunciado",
            tip: "O diabo mora nos detalhes.",
            description: "Muitos erros em provas não são por falta de conhecimento, mas por má interpretação do que foi pedido.",
            topics: ["Circule Palavras-Chave", "Entenda o Comando", "Cuidado com Negativas"],
            topicsDetails: [
                { title: "Circule Palavras-Chave", content: "<p>Sublinhe ou circule as palavras mais importantes do enunciado para focar sua atenção no que realmente importa.</p>" },
                { title: "Entenda o Comando", content: "<p>A pergunta pede para 'explicar', 'comparar', 'calcular' ou 'citar'? Cada verbo exige um tipo diferente de resposta.</p>" },
                { title: "Cuidado com Negativas", content: "<p>Fique extremamente atento a palavras como 'NÃO', 'EXCETO', 'INCORRETO'. É um erro clássico e fácil de cometer na pressa.</p>" }
            ],
            question: "Se uma questão parece ter duas alternativas corretas, o que você deve fazer?",
            answer: "Releia o enunciado com máxima atenção. Provavelmente há uma palavra ou detalhe sutil que torna uma alternativa mais correta ou mais específica que a outra. Procure por restrições ou condições no enunciado.",
            details: {
                subtitle: "// Estratégias de Leitura:",
                points: [
                    "<strong>Circule Palavras-Chave:</strong> Sublinhe ou circule as palavras mais importantes do enunciado para focar sua atenção.",
                    "<strong>Entenda o Comando:</strong> A pergunta pede para 'explicar', 'comparar', 'calcular' ou 'citar'? Cada verbo exige uma resposta diferente.",
                    "<strong>Cuidado com Negativas:</strong> Fique extremamente atento a palavras como 'NÃO', 'EXCETO', 'INCORRETO'."
                ]
            }
        },
        {
            id: 8,
            title: "Eliminação de Alternativas",
            tip: "Aumente suas chances no chute consciente.",
            description: "Em questões de múltipla escolha, mesmo que não saiba a resposta certa, você pode aumentar suas chances eliminando as respostas obviamente erradas.",
            topics: ["Identifique Absolutos", "Procure Opostos", "Desconfie de Estranhas"],
            topicsDetails: [
                { title: "Identifique Absolutos", content: "<p>Alternativas com palavras como 'sempre', 'nunca', 'todos' ou 'nenhum' são frequentemente falsas, pois admitem poucas exceções.</p>" },
                { title: "Procure Opostos", content: "<p>Se duas alternativas são diretamente opostas, é provável que uma delas seja a correta.</p>" },
                { title: "Desconfie de Estranhas", content: "<p>Se uma alternativa usa um vocabulário muito diferente ou parece não ter relação com o tema, ela provavelmente é um distrator.</p>" }
            ],
            question: "Em uma questão com 5 alternativas, se você consegue eliminar 3, qual passa a ser sua chance de acertar?",
            answer: "Sua chance passa de 20% (1 em 5) para 50% (1 em 2). É uma melhoria estatística gigantesca que vale o esforço de eliminação.",
            details: {
                subtitle: "// Técnicas de Eliminação:",
                points: [
                    "<strong>Identifique Absolutos:</strong> Alternativas com palavras como 'sempre', 'nunca', 'todos' ou 'nenhum' são frequentemente falsas.",
                    "<strong>Procure Opostos:</strong> Se duas alternativas são diretamente opostas, é provável que uma delas seja a correta.",
                    "<strong>Desconfie de Estranhas:</strong> Se uma alternativa usa um vocabulário muito diferente ou parece não ter relação com o tema, provavelmente é um distrator."
                ]
            }
        },
        {
            id: 9,
            title: "A Revisão Final",
            tip: "Uma última varredura para salvar pontos preciosos.",
            description: "Se sobrar tempo, use-o para uma revisão estratégica, não para questionar todas as suas respostas.",
            topics: ["Foco nos Erros de Transcrição", "Verifique as Marcadas", "Não Mude por Insegurança"],
            topicsDetails: [
                { title: "Foco nos Erros de Transcrição", content: "<p>Verifique se você passou todas as respostas corretamente para o gabarito. É um erro bobo, mas fatal.</p>" },
                { title: "Verifique as Marcadas", content: "<p>Volte apenas para as questões que você marcou com dúvida. Não revise as que você tinha certeza.</p>" },
                { title: "Não Mude por Insegurança", content: "<p>Estudos mostram que sua primeira intuição costuma ser a correta. Só mude uma resposta se você encontrar uma evidência clara e inequívoca de que errou.</p>" }
            ],
            question: "Por que não é recomendado mudar respostas por pura insegurança no final da prova?",
            answer: "Porque a primeira resposta é frequentemente baseada em um reconhecimento mais profundo e intuitivo do material estudado. A dúvida final é, muitas vezes, gerada pelo cansaço e ansiedade, levando a 'overthinking' e a trocas de uma resposta certa por uma errada.",
            details: {
                subtitle: "// Revisão Estratégica:",
                points: [
                    "<strong>Foco nos Erros de Transcrição:</strong> Verifique se você passou todas as respostas corretamente para o gabarito.",
                    "<strong>Verifique as Marcadas:</strong> Volte apenas para as questões que você marcou com dúvida.",
                    "<strong>Não Mude por Insegurança:</strong> Estudos mostram que sua primeira intuição costuma ser a correta. Só mude se tiver certeza absoluta do erro."
                ]
            }
        },
        {
            id: 10,
            title: "Pós-Prova: Lições Aprendidas",
            tip: "A prova não acaba quando você entrega.",
            description: "O ciclo do aprendizado se completa quando você analisa seus erros e acertos para melhorar no futuro.",
            topics: ["Corrija a Prova", "Identifique Padrões de Erro", "Ajuste a Rota de Estudo"],
            topicsDetails: [
                { title: "Corrija a Prova", content: "<p>Assim que tiver o gabarito, corrija sua prova. Entenda não só o que errou, mas por que errou.</p>" },
                { title: "Identifique Padrões de Erro", content: "<p>Seus erros foram por falta de atenção? Falta de conhecimento teórico? Dificuldade de interpretação? Identificar o padrão é o primeiro passo para corrigir.</p>" },
                { title: "Ajuste a Rota de Estudo", content: "<p>Use essa análise para ajustar seu método de estudo para a próxima vez. Talvez você precise de mais exercícios, mais teoria ou mais simulados.</p>" }
            ],
            question: "Qual a importância de analisar os erros de uma prova que já passou?",
            answer: "É fundamental para um aprendizado de longo prazo. A análise transforma a experiência da prova de um simples evento de avaliação para uma poderosa ferramenta de diagnóstico, mostrando exatamente onde seus pontos fracos estão e como direcionar seus esforços futuros de forma mais eficiente.",
            details: {
                subtitle: "// O Ciclo do Aprendizado:",
                points: [
                    "<strong>Corrija a Prova:</strong> Assim que tiver o gabarito, corrija sua prova. Entenda não só o que errou, mas por que errou.",
                    "<strong>Identifique Padrões de Erro:</strong> Seus erros foram por falta de atenção? Falta de conhecimento? Dificuldade de interpretação?",
                    "<strong>Ajuste a Rota de Estudo:</strong> Use essa análise para ajustar seu método de estudo para a próxima vez."
                ]
            }
        }
    ]
};
