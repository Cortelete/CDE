// Arquivo: data/ai.js
// Contém os dados exclusivamente para o deck de "Inteligência Artificial".

export const ai = {
    title: "Inteligência Artificial",
    theme: "blue",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="mx-auto mb-4"><path d="M12 8V4H8"/><rect x="4" y="12" width="16" height="8" rx="2"/><path d="M2 12h20"/><path d="M17.5 12V8h-3v4"/><path d="M6.5 12V8h-3v4"/></svg>`,
    summary: "Explore o universo da IA, de algoritmos de aprendizado a redes neurais e os dilemas éticos da atualidade.",
    cards: [
        {
            id: 1,
            title: "O que é IA?",
            tip: "Ensinando máquinas a pensar (ou a parecer que pensam).",
            description: "IA é um campo da ciência da computação dedicado a criar sistemas que podem realizar tarefas que normalmente exigiriam inteligência humana.",
            topics: ["Inteligência Humana", "IA Fraca vs. Forte", "Aplicações"],
            topicsDetails: [
                { title: "Tarefas 'Humanas'", content: "<p>Isso inclui aprendizado, raciocínio, resolução de problemas, percepção (visual, auditiva) e compreensão de linguagem.</p>" },
                { title: "IA Fraca (Narrow AI)", content: "<p>É a IA que temos hoje. Especializada em uma tarefa específica, como jogar xadrez (Deep Blue) ou recomendar filmes (Netflix).</p>" },
                { title: "IA Forte (General AI)", content: "<p>É a IA hipotética com consciência e capacidade cognitiva semelhante à humana, capaz de realizar qualquer tarefa intelectual. Ainda é ficção científica.</p>" }
            ],
            question: "A Siri ou a Alexa são exemplos de IA Forte? Por quê?",
            answer: "Não. Elas são exemplos de IA Fraca (ou Estreita), pois são especializadas em um conjunto de tarefas (responder perguntas, tocar música) e não possuem consciência ou capacidade de aprendizado geral como um ser humano."
        },
        {
            id: 2,
            title: "Machine Learning (ML)",
            tip: "Aprender com dados, sem ser programado para isso.",
            description: "Um subcampo da IA onde algoritmos 'aprendem' padrões a partir de grandes volumes de dados para fazer previsões ou tomar decisões.",
            topics: ["Aprendizado", "Dados", "Modelos"],
            topicsDetails: [
                { title: "Aprendizado por Exemplo", content: "<p>Em vez de programar regras explícitas, o desenvolvedor 'mostra' milhares de exemplos ao algoritmo, e ele infere as regras por conta própria.</p>" },
                { title: "Dados são o Combustível", content: "<p>A qualidade e a quantidade dos dados de treinamento são os fatores mais importantes para o sucesso de um modelo de ML. 'Garbage in, garbage out'.</p>" },
                { title: "Modelo", content: "<p>O resultado do treinamento é um 'modelo', que é a representação matemática dos padrões aprendidos, pronto para ser usado em novos dados.</p>" }
            ],
            question: "Qual a diferença fundamental entre a programação tradicional e o Machine Learning?",
            answer: "Na programação tradicional, o programador escreve regras explícitas para o computador seguir. No Machine Learning, o programador fornece dados e uma resposta esperada, e o computador 'aprende' as regras sozinho."
        },
        {
            id: 3,
            title: "Tipos de ML",
            tip: "O professor, o detetive e o explorador.",
            description: "O Machine Learning é geralmente dividido em três categorias principais, de acordo com a forma como o algoritmo aprende: Supervisionado, Não Supervisionado e por Reforço.",
            topics: ["Supervisionado", "Não Supervisionado", "Por Reforço"],
            topicsDetails: [
                { title: "Aprendizado Supervisionado", content: "<p>O algoritmo aprende a partir de dados rotulados (com a 'resposta certa'). Como um aluno com um gabarito. Ex: prever preços de casas usando um histórico com preços conhecidos.</p>" },
                { title: "Aprendizado Não Supervisionado", content: "<p>O algoritmo recebe dados não rotulados e tenta encontrar estruturas ou padrões por conta própria. Como um detetive buscando pistas. Ex: agrupar clientes em segmentos de mercado (clusterização).</p>" },
                { title: "Aprendizado por Reforço", content: "<p>O algoritmo aprende através de tentativa e erro, recebendo recompensas por ações corretas e punições por ações erradas. Como adestrar um cão. Ex: treinar uma IA para jogar um videogame.</p>" }
            ],
            question: "Para criar um sistema de detecção de spam em e-mails, qual tipo de aprendizado de máquina seria mais adequado?",
            answer: "Aprendizado Supervisionado. Você treinaria o modelo com uma grande quantidade de e-mails já rotulados como 'spam' ou 'não spam'."
        },
        {
            id: 4,
            title: "Redes Neurais e Deep Learning",
            tip: "Inspirado no cérebro, mas feito de matemática.",
            description: "Redes Neurais são um tipo de modelo de ML inspirado na estrutura do cérebro humano. Deep Learning refere-se a redes neurais muito 'profundas' (com muitas camadas).",
            topics: ["Neurônio Artificial", "Camadas", "Deep Learning"],
            topicsDetails: [
                { title: "Neurônio Artificial", content: "<p>Uma unidade matemática que recebe múltiplas entradas, aplica pesos a elas, soma tudo e passa o resultado por uma 'função de ativação' para gerar uma saída.</p>" },
                { title: "Camadas (Layers)", content: "<p>Os neurônios são organizados em camadas. Uma rede neural tem uma camada de entrada, uma ou mais camadas ocultas e uma camada de saída. É nas camadas ocultas que a 'mágica' do aprendizado de padrões complexos acontece.</p>" },
                { title: "Deep Learning", content: "<p>Quando uma rede neural tem muitas camadas ocultas, ela é chamada de 'profunda' (Deep Neural Network). O Deep Learning é o que impulsiona as IAs mais avançadas hoje, como reconhecimento de imagem e modelos de linguagem.</p>" }
            ],
            question: "Por que o Deep Learning é tão poderoso para tarefas como reconhecimento de imagem?",
            answer: "Porque as múltiplas camadas permitem que a rede aprenda hierarquias de características. As primeiras camadas podem aprender a detectar bordas e cantos, as camadas intermediárias combinam isso para detectar olhos e narizes, e as camadas finais combinam tudo para reconhecer um rosto."
        },
        {
            id: 5,
            title: "Processamento de Linguagem Natural (PLN)",
            tip: "Ensinando o computador a 'falar' nossa língua.",
            description: "PLN (ou NLP em inglês) é a área da IA que foca em capacitar os computadores a entender, interpretar e gerar linguagem humana.",
            topics: ["Entender", "Interpretar", "Gerar"],
            topicsDetails: [
                { title: "Análise Sintática e Semântica", content: "<p>A <strong>Sintaxe</strong> lida com a estrutura gramatical da frase. A <strong>Semântica</strong> lida com o significado. Para entender 'O cachorro perseguiu o gato', a IA precisa dos dois.</p>" },
                { title: "Aplicações", content: "<p>Tradutores automáticos (Google Translate), chatbots, assistentes virtuais (Siri, Alexa), análise de sentimentos em redes sociais e resumo de textos.</p>" },
                { title: "Modelos de Linguagem (LLMs)", content: "<p>São modelos de Deep Learning gigantes, como o GPT, treinados com vastas quantidades de texto para prever a próxima palavra em uma sequência, o que lhes dá uma incrível capacidade de gerar texto coerente e responder perguntas.</p>" }
            ],
            question: "O que é 'análise de sentimento' e como ela se encaixa no PLN?",
            answer: "Análise de sentimento é uma técnica de PLN usada para identificar e extrair a polaridade emocional (positiva, negativa, neutra) de um texto. É muito usada para analisar reviews de produtos, comentários em redes sociais, etc."
        },
        {
            id: 6,
            title: "Visão Computacional",
            tip: "Dando olhos às máquinas.",
            description: "É o campo da IA que treina computadores para 'ver' e interpretar o mundo visual, extraindo informações de imagens e vídeos.",
            topics: ["Reconhecimento de Objetos", "Segmentação", "Aplicações"],
            topicsDetails: [
                { title: "Reconhecimento de Objetos", content: "<p>A tarefa mais comum: identificar e localizar objetos dentro de uma imagem (ex: 'há um carro e duas pessoas na foto').</p>" },
                { title: "Segmentação de Imagem", content: "<p>Vai além do reconhecimento. A segmentação classifica cada pixel da imagem, permitindo, por exemplo, separar o primeiro plano do fundo ou identificar exatamente a forma de um tumor em uma imagem médica.</p>" },
                { title: "Aplicações", content: "<p>Carros autônomos (para 'ler' placas e ver pedestres), reconhecimento facial, diagnóstico médico por imagem, controle de qualidade em linhas de produção e realidade aumentada.</p>" }
            ],
            question: "Como um carro autônomo usa a Visão Computacional?",
            answer: "Ele usa a Visão Computacional para processar o fluxo de vídeo de suas câmeras em tempo real, permitindo identificar e rastrear outros veículos, pedestres, semáforos, placas de trânsito e as faixas da pista, tomando decisões de direção com base nessas informações visuais."
        },
        {
            id: 7,
            title: "Ética em IA",
            tip: "Com grandes poderes, vêm grandes responsabilidades.",
            description: "A discussão sobre os princípios morais e o impacto social da Inteligência Artificial. Garante que a tecnologia seja usada para o bem.",
            topics: ["Viés (Bias)", "Transparência", "Privacidade"],
            topicsDetails: [
                { title: "Viés (Bias)", content: "<p>Se uma IA é treinada com dados enviesados (que refletem preconceitos humanos), ela aprenderá e amplificará esses preconceitos. Ex: um sistema de recrutamento que discrimina mulheres porque foi treinado com mais currículos de homens.</p>" },
                { title: "Transparência (Caixa-Preta)", content: "<p>Muitos modelos de Deep Learning são 'caixas-pretas': eles dão uma resposta, mas é difícil explicar o 'porquê'. A falta de transparência é um problema sério em áreas como medicina e justiça.</p>" },
                { title: "Privacidade", content: "<p>As IAs precisam de muitos dados, o que levanta enormes preocupações sobre como os dados pessoais são coletados, usados e protegidos, como visto no caso da Cambridge Analytica.</p>" }
            ],
            question: "Explique o que é viés algorítmico em IA e dê um exemplo.",
            answer: "Viés algorítmico ocorre quando um sistema de IA reflete os preconceitos existentes nos dados com os quais foi treinado. Por exemplo, se um software de reconhecimento facial for treinado majoritariamente com rostos de pessoas brancas, ele terá uma performance muito pior para reconhecer rostos de pessoas negras, perpetuando uma falha sistêmica."
        },
        {
            id: 8,
            title: "Modelos Generativos",
            tip: "A IA que cria em vez de apenas classificar.",
            description: "São modelos de IA, como GPT e DALL-E, capazes de gerar conteúdo novo (texto, imagens, música) que é semelhante aos dados com os quais foram treinados.",
            topics: ["GANs", "Modelos de Linguagem", "Aplicações Criativas"],
            topicsDetails: [
                { title: "GANs (Redes Adversárias Generativas)", content: "<p>Uma arquitetura com duas redes neurais: o Gerador, que cria amostras falsas, e o Discriminador, que tenta diferenciar as falsas das reais. Elas competem e melhoram juntas. Muito usado para gerar imagens realistas.</p>" },
                { title: "Modelos de Linguagem (LLMs)", content: "<p>Como o GPT, são treinados para prever a próxima palavra em um texto. Essa habilidade simples, em escala massiva, permite que eles escrevam artigos, respondam perguntas, traduzam e programem.</p>" },
                { title: "Revolução Criativa", content: "<p>Essas ferramentas estão revolucionando áreas criativas, permitindo a criação rápida de protótipos, a geração de arte, a composição de música e a escrita de roteiros, atuando como um 'copiloto' para a criatividade humana.</p>" }
            ],
            question: "Qual a diferença fundamental entre um modelo de IA que classifica imagens e um que gera imagens?",
            answer: "Um modelo de classificação (discriminativo) aprende a mapear uma entrada a um rótulo (ex: 'esta imagem é um gato'). Um modelo generativo aprende a distribuição dos dados para criar novas amostras do zero (ex: 'crie uma imagem de um gato')."
        },
        {
            id: 9,
            title: "Regressão vs. Classificação",
            tip: "Prever um número ou escolher uma categoria?",
            description: "São as duas tarefas mais comuns no aprendizado de máquina supervisionado, diferenciadas pelo tipo de saída que produzem.",
            topics: ["Regressão", "Classificação", "Exemplos"],
            topicsDetails: [
                { title: "Regressão", content: "<p>O objetivo é prever um valor numérico contínuo. A saída é um número. Ex: prever o preço de uma casa, a temperatura de amanhã, as vendas do próximo mês.</p>" },
                { title: "Classificação", content: "<p>O objetivo é prever uma categoria ou classe discreta. A saída é um rótulo. Ex: prever se um e-mail é 'spam' ou 'não spam', se um tumor é 'benigno' ou 'maligno', ou qual animal está em uma foto.</p>" },
                { title: "Algoritmos", content: "<p>Algoritmos de Regressão comuns incluem Regressão Linear e Polinomial. Algoritmos de Classificação comuns incluem Regressão Logística, K-NN e Máquinas de Vetores de Suporte (SVM).</p>" }
            ],
            question: "Você quer construir um modelo para prever se um cliente vai ou não cancelar a assinatura de um serviço. Isso é um problema de Regressão ou Classificação?",
            answer: "É um problema de Classificação, pois a saída é uma categoria discreta com duas classes possíveis: 'vai cancelar' ou 'não vai cancelar'."
        },
        {
            id: 10,
            title: "O Papel dos Dados",
            tip: "Lixo entra, lixo sai.",
            description: "Em IA e Machine Learning, os dados não são apenas importantes; eles são a base de tudo. A performance de um modelo é limitada pela qualidade de seus dados.",
            topics: ["Qualidade", "Quantidade", "Pré-processamento"],
            topicsDetails: [
                { title: "Qualidade vs. Quantidade", content: "<p>Mais dados é quase sempre melhor, mas a qualidade supera a quantidade. Dados limpos, relevantes e sem viés são mais valiosos do que ter muitos dados sujos e enviesados.</p>" },
                { title: "Fontes de Dados", content: "<p>Dados podem vir de bancos de dados, planilhas, APIs, web scraping, sensores (IoT), imagens, textos, etc. A variedade é enorme.</p>" },
                { title: "Pré-processamento", content: "<p>É a etapa mais demorada de um projeto de ML, conhecida como 'faxina de dados'. Inclui limpar, formatar, tratar valores ausentes e normalizar os dados para que o modelo possa 'entendê-los' corretamente.</p>" }
            ],
            question: "Por que a etapa de pré-processamento de dados é considerada tão crucial em um projeto de Machine Learning?",
            answer: "Porque os algoritmos de ML são sensíveis a inconsistências, erros e escalas diferentes nos dados. O pré-processamento (limpeza, normalização) garante que os dados estejam em um formato de alta qualidade, permitindo que o modelo aprenda padrões reais em vez de 'ruído', o que impacta diretamente sua precisão e confiabilidade."
        }
    ]
};
