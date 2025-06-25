Clube do Estudante - Portal Interativo de Estudos
Estudar não precisa ser um saco. Pode ser uma invasão de conhecimento.

🤔 O que é isso?
O Clube do Estudante é um portal de estudos interativo, criado para transformar a revisão de matérias densas e complexas em uma experiência rápida, visualmente engajante e direta ao ponto. A ideia nasceu da necessidade de um método de estudo que funcionasse para cérebros que não se dão bem com textos longos e monótonos (alô, TDAH!).

Em vez de resumos chatos, usamos "cards" de conhecimento, cada um focado em um micro-tópico, com uma linguagem ácida, inteligente e sem enrolação. A estética hacker/cyberpunk não é só para ser bonita, é para manter a mente focada e tornar o processo de aprendizado mais estimulante.

✨ Funcionalidades Atuais
Hub Central de Matérias: Uma tela inicial que organiza os decks de estudo por matéria, permitindo escalar o portal para quantos assuntos forem necessários.

Decks de Estudo Interativos: Navegue por um baralho de cards com o mouse, teclado ou touch. Cada card é uma pílula de conhecimento.

Temas Visuais por Matéria: Cada disciplina tem sua própria identidade visual e paleta de cores (roxo/cyberpunk para Gestão de Projetos, verde/hacker para Tópicos em Engenharia), ajudando a criar associações mentais.

Modais de Aprofundamento:

Detalhes Gerais: Clique no corpo de um card para abrir um modal com a explicação completa do assunto.

Tópicos-Chave: Clique em um tópico específico para ver sua definição detalhada.

Q&A Interativo: Teste seu conhecimento com um modal de Pergunta e Resposta para cada card.

Design 100% Responsivo: Funciona em desktop, tablet ou celular.

Zero Dependências Externas: Tudo roda a partir de um único arquivo HTML.

🚀 Tecnologia por Trás do Caos
Este projeto foi construído com a filosofia de ser o mais leve e portátil possível, seguindo o princípio DRY (Don't Repeat Yourself).

HTML5: A estrutura semântica do portal.

Tailwind CSS: Para a estilização rápida e responsiva. Todo o CSS é injetado diretamente no arquivo, então não há necessidade de arquivos .css externos.

JavaScript (Vanilla ES6): Todo o dinamismo da aplicação — desde a renderização dos decks até a lógica dos modais e a troca de temas — é feito com JavaScript puro, sem frameworks. O conteúdo dos cards é armazenado em um objeto studyDecks dentro do script, funcionando como um banco de dados local.

O resultado é um portal de estudos completo contido em um único arquivo index.html.

🛠️ Como Rodar e Publicar
Para rodar localmente:
Simplesmente baixe o arquivo index.html e abra-o em qualquer navegador de internet. É só isso.

Para publicar para a turma (via GitHub Pages):

Crie um novo repositório público no GitHub.

Faça o upload do arquivo index.html para este repositório.

Vá em Settings > Pages no seu repositório.

Na seção "Build and deployment", selecione a branch main como fonte e salve.

Aguarde alguns minutos e o GitHub te dará um link público para o seu portal!

拡張 Como Contribuir ou Expandir
A beleza deste projeto é sua escalabilidade. Para adicionar mais conteúdo:

Para adicionar um novo card a uma matéria existente:

Abra o arquivo index.html.

Vá até a tag <script> no final do arquivo.

Encontre o objeto studyDecks e a chave da matéria desejada (ex: gp ou te).

Dentro do array cards, adicione um novo objeto seguindo a mesma estrutura dos existentes. Dê um novo id e preencha os campos.

Para adicionar uma nova matéria:

Dentro do objeto studyDecks, crie uma nova chave para sua matéria (ex: calculo).

Defina um title e um theme (ex: blue). Você precisará adicionar os estilos correspondentes no CSS se criar um tema novo.

Crie o array cards para essa nova matéria.

Na seção <div id="subject-selection">, copie e cole um dos divs de matéria, alterando o data-subject para a nova chave (ex: data-subject="calculo") e ajuste o título, descrição e ícone.

💖 Dedicatória e Criador
Este projeto é, antes de tudo, uma ferramenta de batalha. Nasceu da urgência de uma prova e da necessidade de hackear o processo de aprendizado para um cérebro com TDAH que se recusa a seguir manuais tradicionais.

Portanto, ele é dedicado a todos os estudantes que pensam diferente: àqueles que veem padrões onde outros veem caos, que buscam a essência em vez de decorar o superficial, e que sabem que a melhor forma de aprender é construindo.

A concepção, curadoria de conteúdo e visão para este portal foram idealizadas e criadas por Davi Cortelete, CEO & Founder da InteligenciArte.IA. Sua curiosidade e direcionamento foram o combustível que transformou um simples script em uma plataforma de estudos completa, provando que uma boa colaboração entre a criatividade humana e a inteligência artificial pode gerar resultados incríveis.

🎓 A Filosofia
Acreditamos que o aprendizado é mais eficaz quando é ativo, rápido e engajante. O Clube do Estudante é um experimento para provar que é possível estudar para provas difíceis de uma forma que respeita a nossa capacidade de atenção e nos mantém motivados através de uma interface que dá vontade de usar.

Estudar é hackear o conhecimento. Esta é a nossa ferramenta.