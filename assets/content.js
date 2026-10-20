/* =====================================================================
   DSBD – conteúdo do site (PT / EN)
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser editado para atualizar textos,
   membros, notícias e projetos. As imagens ficam em img/ e os PDFs em docs/.

   ► Para adicionar um projeto FINALIZADO:
     1. Coloque a imagem de capa em img/projects/ (ex.: img/projects/meu-projeto.webp)
     2. Copie um bloco do array PROJECTS abaixo (ex.: "power-grid"),
        mude o id, os textos e use  status: "finished".
     3. Ele aparece automaticamente em projetos-finalizados.html e ganha
        a página projeto.html?p=<id>.
   ► Para mover um projeto em andamento para finalizados, troque
     status: "ongoing"  por  status: "finished".
   ===================================================================== */

window.DSBD = {};

DSBD.T = {
pt:{menu:"Menu",nav_about:"Sobre",nav_projects:"Projetos",nav_pubs:"Publicações",nav_members:"Membros",nav_news:"Notícias",nav_collab:"Colaborações",nav_join:"Faça parte",
hero_eyebrow:"Laboratório de pesquisa · UFPR",
about:"O <strong>Data Science &amp; Big Data</strong> é um laboratório de pesquisa da <strong>Universidade Federal do Paraná (UFPR)</strong>, na interseção do Departamento de Informática (DINF) e do Departamento de Estatística (DEST). Reunimos pesquisadores das duas áreas em <strong>Aprendizado de Máquina, Aprendizado Profundo, Modelagem Estatística, Prototipagem de Hardware e processamento de fluxos de Big Data</strong>.",
cta_projects:"Conheça os projetos",cta_join:"Faça parte do grupo",dinf:"Departamento de Informática",dest:"Departamento de Estatística",
areas_eyebrow:"Áreas de interesse",areas_title:"O que pesquisamos",
proj_eyebrow:"Projetos em andamento",proj_title:"No que estamos trabalhando",proj_lede:"Conheça os projetos ativos do grupo. Os projetos concluídos têm uma página própria.",more:"Saiba mais →",
finished_cta_t:"Projetos finalizados",finished_cta_d:"Veja os projetos que o grupo já concluiu, com resultados, publicações e dados.",finished_cta_b:"Ver projetos finalizados →",
fin_eyebrow:"Projetos finalizados",fin_title:"Projetos concluídos pelo DSBD",fin_lede:"Projetos de pesquisa que já foram encerrados, com seus principais resultados, publicações e dados abertos.",fin_back:"← Ver projetos em andamento",
status_ongoing:"Em andamento",status_finished:"Finalizado",
pubs_eyebrow:"Pesquisas recentes",pubs_title:"Publicações selecionadas",
mem_eyebrow:"Membros",mem_title:"Quem faz o DSBD",tab_fac:"Docentes",tab_stu:"Estudantes",tab_past:"Ex-membros",bio:"Biografia completa",
lvl_ug:"Graduação",lvl_ms:"Mestrado",lvl_phd:"Doutorado",
news_eyebrow:"Notícias",news_title:"Atividades do grupo",meet_eyebrow:"Aberto ao público",meet_title:"Reuniões semanais",
meet_text:"Toda semana um estudante apresenta sua pesquisa em andamento. As apresentações são abertas e todos os interessados estão convidados.",
meet_when:"Quando",meet_day:"Terças, 10h30",meet_where:"Onde",meet_place:"Departamento de Informática, UFPR",
col_eyebrow:"Colaborações",col_title:"Parceiros no Brasil e no exterior",industry:"Indústria",
join_eyebrow:"Faça parte",join_title:"Venha pesquisar conosco",join_lede:"Estamos sempre abertos a novos estudantes de graduação e de pós-graduação.",
join_step:"Qualquer que seja o programa, o primeiro passo obrigatório é agendar uma entrevista com um possível orientador do grupo. Veja os <a href=\"index.html#membros\">docentes</a> e as informações do <a href=\"https://www.prppg.ufpr.br/site/ppginf/pb/doutorado/\" target=\"_blank\" rel=\"noopener\">PPGInf</a>.",
notice_eyebrow:"Editais",notice_title:"Projeto de P&D Libra Rocks",notice_text:"Seleção de estudantes para pesquisa no Projeto de P&D Libra Rocks, em parceria com o Instituto Lamir, com foco na aplicação de Deep Learning à análise de dados geológicos.",notice_doc:"Edital (PDF)",notice_res:"Resultados (PDF)",
copy:"Copiar e-mail",copied:"Copiado",
p_team:"Equipe",p_pub1:"publicação",p_pubs:"Publicações",p_links:"Dados e links",p_tech:"Tecnologias",p_notfound:"Projeto não encontrado.",p_all:"← Todos os projetos",p_finished_all:"← Projetos finalizados",p_tcc:"Trabalhos de conclusão de curso"},
en:{menu:"Menu",nav_about:"About",nav_projects:"Projects",nav_pubs:"Publications",nav_members:"Members",nav_news:"News",nav_collab:"Collaborations",nav_join:"Join in",
hero_eyebrow:"Research laboratory · UFPR",
about:"<strong>Data Science &amp; Big Data</strong> is a research laboratory at the <strong>Federal University of Paraná (UFPR)</strong>, at the intersection of the Department of Informatics (DINF) and the Department of Statistics (DEST). We bring researchers from both fields together in <strong>Machine Learning, Deep Learning, Statistical Modeling, Hardware Prototyping, and Big Data stream processing</strong>.",
cta_projects:"See our projects",cta_join:"Join the group",dinf:"Department of Informatics",dest:"Department of Statistics",
areas_eyebrow:"Areas of interest",areas_title:"What we research",
proj_eyebrow:"Ongoing projects",proj_title:"What we are working on",proj_lede:"Explore the group's active projects. Completed projects have their own page.",more:"Learn more →",
finished_cta_t:"Completed projects",finished_cta_d:"See the projects the group has already completed, with results, publications and data.",finished_cta_b:"See completed projects →",
fin_eyebrow:"Completed projects",fin_title:"Projects completed by DSBD",fin_lede:"Research projects that have concluded, with their main results, publications and open data.",fin_back:"← See ongoing projects",
status_ongoing:"Ongoing",status_finished:"Completed",
pubs_eyebrow:"Latest research",pubs_title:"Selected publications",
mem_eyebrow:"Members",mem_title:"The people behind DSBD",tab_fac:"Faculty",tab_stu:"Students",tab_past:"Past members",bio:"Full bio",
lvl_ug:"Undergrad",lvl_ms:"Master's",lvl_phd:"PhD",
news_eyebrow:"News",news_title:"Group activities",meet_eyebrow:"Open to the public",meet_title:"Weekly meetings",
meet_text:"Every week, a student presents their ongoing research. The presentations are open to the public, and everyone interested is welcome.",
meet_when:"When",meet_day:"Tuesdays, 10:30 AM",meet_where:"Where",meet_place:"Department of Informatics, UFPR",
col_eyebrow:"Collaborations",col_title:"Partners in Brazil and abroad",industry:"Industry",
join_eyebrow:"Join in",join_title:"Come do research with us",join_lede:"We are always open to new applications for both our undergraduate and graduate programs.",
join_step:"Whatever the program, the first mandatory step is to schedule an interview with a potential advisor from the group. See our <a href=\"index.html#membros\">faculty</a> and the <a href=\"https://www.prppg.ufpr.br/site/ppginf/pb/doutorado/\" target=\"_blank\" rel=\"noopener\">PPGInf</a> information (in Portuguese).",
notice_eyebrow:"Public notices",notice_title:"Libra Rocks R&D Project",notice_text:"Call for students to conduct research in the Libra Rocks R&D Project, developed in partnership with the Lamir Institute and focused on applying Deep Learning to the analysis of geological data.",notice_doc:"Notice (PDF)",notice_res:"Results (PDF)",
copy:"Copy email",copied:"Copied",
p_team:"Team",p_pub1:"publication",p_pubs:"Publications",p_links:"Data and links",p_tech:"Technologies",p_notfound:"Project not found.",p_all:"← All projects",p_finished_all:"← Completed projects",p_tcc:"Undergraduate theses"}};

DSBD.AREAS=[
{pt:["Aprendizado de Máquina","Sistemas que aprendem e melhoram com a experiência, sem programação explícita: algoritmos que identificam padrões, fazem previsões e aprendem a partir de dados."],
 en:["Machine Learning","Systems that learn and improve from experience without being explicitly programmed: algorithms that identify patterns, make predictions and learn from data."]},
{pt:["Processamento de Streams","Análise em tempo real de fluxos contínuos de dados: ingestão, processamento e análise à medida que os dados são gerados, permitindo respostas imediatas."],
 en:["Stream Processing","Real-time analysis of continuous data streams: ingesting, processing and analyzing data as it is generated, enabling immediate insights and actions."]},
{pt:["Redes Neurais Profundas","Redes com múltiplas camadas que aprendem padrões complexos diretamente dos dados, sem engenharia de características, com grande sucesso em imagens e linguagem."],
 en:["Deep Neural Networks","Multi-layer networks that learn intricate patterns directly from data without feature engineering, highly successful in image recognition and language processing."]},
{pt:["Cidades Inteligentes","Tecnologia e dados para melhorar a vida urbana: sensores, IoT, análise de dados e IA aplicados a transporte, energia, resíduos, segurança e sustentabilidade."],
 en:["Smart Cities","Technology and data to improve urban life: sensors, IoT, analytics and AI applied to transportation, energy, waste management, public safety and sustainability."]},
{pt:["Processamento e Classificação de Imagens","Manipulação e análise de imagens para extrair informação útil, e categorização de imagens em classes predefinidas com aprendizado de máquina."],
 en:["Image Processing & Classification","Manipulating and analyzing images to extract useful information, and categorizing images into predefined classes with machine learning."]},
{pt:["Hardware","Prototipagem de hardware com propósitos específicos, como incluir instruções vetoriais na memória para acelerar o processamento de dados."],
 en:["Hardware","Prototyping special-purpose hardware, such as adding vector instructions in memory to make data processing faster."]}];

/* ---------------------------------------------------------------------
   PROJETOS
   status: "ongoing" (em andamento) ou "finished" (finalizado)
   sections[].html aceita HTML simples (<p>, <ul>, <strong>, <a>)
   --------------------------------------------------------------------- */
DSBD.PROJECTS=[
{id:"metapklot",status:"ongoing",img:"img/projects/metapklot.webp",
 tech:["Deep learning","Instance segmentation","Image processing","IoT"],
 pt:{title:"MetaPKLot",summary:"Novas técnicas que usam câmeras para aprimorar a gestão automatizada do tráfego em cidades inteligentes por meio de aprendizado de máquina."},
 en:{title:"MetaPKLot",summary:"Novel techniques that use cameras to enhance automated traffic management in smart cities through machine learning."},
 sections:[
  {pt:{h:"Visão geral",html:"<p>O projeto aplica aprendizado de máquina à gestão de tráfego baseada em câmeras em cidades inteligentes: detecção automática de vagas de estacionamento, identificação de áreas congestionadas e medição de quanto tempo a infraestrutura viária é utilizada. Entre as aplicações estão ajudar motoristas a encontrar vagas livres próximas e a cobrança automática pelo tempo de permanência.</p>"},
   en:{h:"Overview",html:"<p>The project applies machine learning to camera-based traffic management in smart cities: automatic detection of parking spaces, identification of congested areas, and measuring how long road infrastructure is used. Applications include helping drivers find nearby free spaces and automated billing based on parking duration.</p>"},
   fig:{src:"img/projects/metapklot-fig.webp",pt:"Câmera monitorando um estacionamento.",en:"A camera monitoring a parking lot."}},
  {pt:{h:"Mapeamento automático das vagas (IEEE SMC 2023)",html:"<p>O método GraphSpot encontra as vagas a partir das imagens da câmera, sem intervenção humana e sem depender de faixas pintadas. Uma rede de segmentação de instâncias detecta os veículos e gera um mapa de calor de ocorrências; cerca de um dia de operação basta para aprender o layout. A acurácia chega a 95,6% (AP25), inclusive em estacionamentos sem marcação visível ou com ocupação irregular.</p>"},
   en:{h:"Automatic parking-space mapping (IEEE SMC 2023)",html:"<p>The GraphSpot method finds parking spaces from camera footage without human input and without relying on painted lines. An instance segmentation network detects vehicles and builds an occurrence-based heat map; about one day of operation is enough to learn the layout. Accuracy reaches 95.6% (AP25), including lots with no visible markings or irregular occupancy.</p>"}},
  {pt:{h:"Modelos únicos vs. ensembles (ICMLA 2023)",html:"<p>O objetivo são sistemas <em>plug-and-play</em>, que funcionem em novos estacionamentos sem retreinamento nem anotação manual. A diversidade dos dados de treino (como a PKLot) pesou mais do que a complexidade do modelo: uma única MobileNetV3 superou os ensembles, com 95,5% de acurácia média em cenários nunca vistos. Isso levou o grupo a focar em modelos leves para dispositivos de borda.</p>"},
   en:{h:"Single deep models vs. ensembles (ICMLA 2023)",html:"<p>The goal is <em>plug-and-play</em> systems that work in new parking lots without retraining or manual annotation. Training-data diversity (such as PKLot) mattered more than model complexity: a single MobileNetV3 beat the ensembles, averaging 95.5% accuracy in unseen scenarios. This led the group to focus on lightweight models for edge devices.</p>"}},
  {pt:{h:"Destilando ensembles em classificadores leves (ICMLA 2024)",html:"<p>Transmitir o vídeo de 1.000 câmeras geraria cerca de 35 GB de dados por hora, por isso o processamento é feito na borda e só informações leves seguem para os servidores. Em um esquema professor-aluno, modelos complexos geram pseudo-rótulos para modelos menores. Os alunos têm 26 vezes menos parâmetros e chegam a 96,6% de acurácia.</p>"},
   en:{h:"Distilling ensembles into lightweight classifiers (ICMLA 2024)",html:"<p>Streaming video from 1,000 cameras would produce about 35 GB of data per hour, so processing happens at the edge and only light information is sent to servers. In a teacher-student setup, complex models create pseudo-labels for smaller ones. The students have 26 times fewer parameters and reach 96.6% accuracy.</p>"}},
  {pt:{h:"Tempo de permanência nas vagas (ICMLA 2024)",html:"<p>Duas redes trabalham juntas: uma classifica a vaga como ocupada ou livre, e uma rede siamesa verifica se o mesmo carro continua na vaga entre imagens consecutivas, apesar de mudanças de iluminação, sombras ou chuva. Com um classificador perfeito, 75% das previsões acertam exatamente o tempo de permanência; com um classificador real, 49%. O erro absoluto médio foi de 46 minutos na PKLot e 54 minutos na CNRPark-EXT. Aplicações incluem detectar carros abandonados ou estacionamento irregular.</p>"},
   en:{h:"Parking dwell time (ICMLA 2024)",html:"<p>Two networks work together: one classifies a space as occupied or empty, and a Siamese network checks whether the same car is still there across consecutive images, despite changes in lighting, shadows or rain. With a perfect classifier, 75% of predictions match the actual dwell time exactly; with a real classifier, 49%. The mean absolute error was 46 minutes on PKLot and 54 minutes on CNRPark-EXT. Applications include detecting abandoned cars or illegal parking.</p>"}},
  {pt:{h:"Computer on the Beach 2025",html:"<ul><li><strong>Regularização com reamostragem de dados:</strong> usar subconjuntos menores por mais épocas reduziu em até 97% as imagens por época, mantendo a acurácia média perto de 89% com a MobileNetV3-Small.</li><li><strong>Modelos leves:</strong> as arquiteturas CustomNNSmall e CustomNNLarge, derivadas da rede de Hochuli, têm até 88× e 34× menos parâmetros que a MobileNetV3-Large, com perda média de cerca de 2% de acurácia (a CustomNNLarge chega a 95,9%).</li><li><strong>Diferenciação da ReLU:</strong> a frequência de avaliações não diferenciáveis depende principalmente da profundidade da rede; funções diferenciáveis convergem um pouco antes, e as não diferenciáveis são um pouco mais rápidas na inferência.</li></ul>"},
   en:{h:"Computer on the Beach 2025",html:"<ul><li><strong>Regularization with data resampling:</strong> using smaller subsets over more epochs cut the images per epoch by up to 97% while keeping average accuracy near 89% with MobileNetV3-Small.</li><li><strong>Lightweight models:</strong> the CustomNNSmall and CustomNNLarge architectures, derived from the Hochuli network, have up to 88× and 34× fewer parameters than MobileNetV3-Large, with an average accuracy loss of about 2% (CustomNNLarge reaches 95.9%).</li><li><strong>ReLU differentiation:</strong> the rate of non-differentiable evaluations depends mainly on network depth; differentiable functions converge slightly earlier, while non-differentiable ones are slightly faster at inference.</li></ul>"}}],
 team:[["Alceu de Souza Britto Jr.","PUCPR","img/people/alceu-britto.webp"],["André G. Hochuli","PUCPR","img/people/andre-hochuli.webp"],["Eduardo Cunha de Almeida","UFPR","img/people/eduardo-almeida.webp"],["Luiz Eduardo S. Oliveira","UFPR","img/people/luiz-oliveira.webp"],["Paulo R. Lisboa de Almeida","UFPR","img/people/paulo-almeida.webp"],["Bruno Aquiles","UFPR","img/people/bruno-aquiles.webp"],["Luan Kujavski","UFPR","img/people/luan-kujavski.webp"],["Marcelo Ribas","UFPR","img/people/marcelo-ribas.webp"],["Heloísa Mendes","UFPR","img/people/heloisa-mendes.webp"],["Paulo Mateus Luza","UFPR","img/people/paulo-luza.webp"],["Nadia Luana Lobkov","UFPR","img/people/nadia-lobkov.webp"],["Thamiris Yamate Fischer","UFPR","img/people/thamiris-fischer.webp"],["Pietro Comin","UFPR","img/people/pietro-comin.webp"]],
 pubs:[
  {t:"MetaPKLot – new challenges and protocols for vision-based parking lot management",v:"Neural Computing and Applications, 2026",u:"https://link.springer.com/article/10.1007/s00521-026-12398-0"},
  {t:"Vehicle Occurrence-based Parking Space Detection",v:"IEEE SMC 2023"},
  {t:"Optimizing Parking Space Classification: Distilling Ensembles into Lightweight Classifiers",v:"IEEE ICMLA 2024",u:"https://arxiv.org/abs/2410.14705"},
  {t:"Using Deep Neural Networks to Quantify Parking Dwell Time",v:"IEEE ICMLA 2024",u:"https://arxiv.org/abs/2411.00158"},
  {t:"Regularização em Redes Neurais com Reamostragem de Dados para Monitoramento Urbano Inteligente",v:"Computer on the Beach 2025",u:"https://periodicos.univali.br/index.php/acotb/article/view/20980"},
  {t:"Proposta de Modelos Leves para Classificação de Vagas de Estacionamentos em Cidades Inteligentes",v:"Computer on the Beach 2025",u:"https://periodicos.univali.br/index.php/acotb/article/view/21015"},
  {t:"Diferenciando o Não Diferenciável: Investigando os problemas na diferenciação da ReLU no treinamento de modelos de Aprendizado Profundo",v:"Computer on the Beach 2025",u:"https://periodicos.univali.br/index.php/acotb/article/view/20985"},
  {t:"PKLot – A robust dataset for parking lot classification",v:"Expert Systems with Applications, 2015",u:"http://www.inf.ufpr.br/lesoliveira/download/ESWA2015.pdf"}],
 tcc:[
  {t:"Otimizando a Classificação de Vagas de Estacionamento: Destilando Conjuntos em Modelos Leves — Paulo M. Luza Alves (2024)",u:"https://www.inf.ufpr.br/bcc/tcc/2024/2024%20Otimizando%20a%20Classifica%C3%A7%C3%A3o%20de%20Vagas%20de%20Estacionamento%20-%20Destilando%20Conjuntos%20em%20Modelos%20Leves.pdf"},
  {t:"Impacto de Imagens Sintéticas na Classificação de Vagas de Estacionamento usando Redes Neurais — Erick Eckermann Cardoso (2024)",u:"https://www.inf.ufpr.br/bcc/tcc/2024/2024%20Impacto%20de%20Imagens%20Sint%C3%A9ticas%20na%20Classifica%C3%A7%C3%A3o%20de%20Vagas%20de%20Estacionamento%20usando%20Redes%20Neurais.pdf"}],
 links:[{pt:"MetaPKLot Dataset (GitHub)",en:"MetaPKLot Dataset (GitHub)",u:"https://github.com/DSBD-Research/MetaPKLot-Dataset"},{pt:"MetaPKLot Challenges (GitHub)",en:"MetaPKLot Challenges (GitHub)",u:"https://github.com/DSBD-Research/MetaPKLot-Challenges"}]},

{id:"concept-drifts",status:"ongoing",img:"img/projects/concept-drift.webp",
 tech:["Data streams","Dynamic selection","Ensembles"],
 pt:{title:"Concept Drifts",summary:"Como adaptar modelos de aprendizado de máquina para lidar com mudanças nos dados?"},
 en:{title:"Concept Drifts",summary:"How can we adapt machine learning models to deal with changes in the data?"},
 sections:[
  {pt:{h:"O problema",html:"<p>Em ambientes não estacionários, os modelos de aprendizado de máquina precisam ser atualizados com frequência, e as mudanças nos dados precisam ser detectadas para que o modelo continue compatível com a realidade atual. Essas mudanças são chamadas de <em>concept drifts</em>. Um modelo que não lida com elas perde desempenho com o tempo. A detecção de fraudes é um exemplo: os fraudadores estão sempre criando novos métodos. Nesses cenários, tanto a atualização quanto as previsões precisam acontecer em tempo real, pela chegada rápida de novas amostras.</p>"},
   en:{h:"The problem",html:"<p>In non-stationary environments, machine learning models must be updated regularly, and changes in the data must be detected so the model stays consistent with current conditions. These changes are called <em>concept drifts</em>. A model that cannot handle them loses performance over time. Fraud detection is an example: fraudsters keep devising new methods. In these settings, both model updates and predictions must happen in real time, as samples arrive quickly.</p>"}},
  {pt:{h:"O framework Dynse",html:"<p>O Dynse adapta métodos de seleção dinâmica de classificadores para ambientes não estacionários com concept drift. Ele alcança resultados de estado da arte em benchmarks conhecidos e está disponível publicamente no GitHub, além de integrado ao MOA.</p>"},
   en:{h:"The Dynse framework",html:"<p>Dynse adapts dynamic classifier selection methods to non-stationary environments with concept drift. It achieves state-of-the-art results on well-known benchmarks and is publicly available on GitHub, as well as integrated into MOA.</p>"},
   fig:{src:"img/projects/concept-drift-dynse.webp",pt:"Funcionamento do Dynse: lotes supervisionados chegam, novos classificadores são treinados e um ensemble é selecionado dinamicamente para cada instância.",en:"How Dynse works: supervised batches arrive, new classifiers are trained and an ensemble is selected dynamically for each instance."}},
  {pt:{h:"Funções de distância e normalização em streams",html:"<p>Medir distâncias é difícil quando não é possível normalizar os dados, porque o intervalo exato do espaço de características é desconhecido. Em streams, as estratégias de normalização precisam funcionar em ambientes reais, por exemplo usando estatísticas de um lote recente. O estudo mostra que, sob concept drift, não normalizar os dados é uma boa estratégia (estatísticas do verão não servem para normalizar dados do inverno) e que as distâncias Canberra e Manhattan tiveram o melhor desempenho quando os intervalos das características mudavam ao longo do tempo.</p>"},
   en:{h:"Distance functions and normalization in streams",html:"<p>Measuring distance is hard when the data cannot be normalized, because the exact range of the feature space is unknown. In streams, normalization strategies must work in real environments, for instance using statistics from a recent batch. The study shows that, under concept drift, not normalizing the data is a good strategy (summer statistics should not normalize winter data) and that the Canberra and Manhattan distances performed best when feature ranges changed over time.</p>"},
   fig:{src:"img/projects/concept-drift-distance.webp",pt:"Acurácia ao longo dos lotes para diferentes funções de distância e estratégias de normalização.",en:"Accuracy over batches for different distance functions and normalization strategies."}}],
 team:[["Paulo R. Lisboa de Almeida","UFPR","img/people/paulo-almeida.webp"],["Luiz Eduardo S. Oliveira","UFPR","img/people/luiz-oliveira.webp"]],
 pubs:[
  {t:"Adapting Dynamic Classifier Selection for Concept Drift",v:"Expert Systems with Applications, 2018 — Almeida et al.",u:"https://www.sciencedirect.com/science/article/pii/S0957417418301611"},
  {t:"Handling Concept Drifts Using Dynamic Selection of Classifiers",v:"IEEE ICTAI 2016 — Almeida et al.",u:"https://ieeexplore.ieee.org/abstract/document/7814713"},
  {t:"Distance Functions and Normalization Under Stream Scenarios",v:"Barboza et al."}],
 links:[{pt:"Dynse Framework (GitHub)",en:"Dynse Framework (GitHub)",u:"https://github.com/paulorla/dynse"}]},

{id:"db-query",status:"ongoing",img:"img/projects/db-query.webp",
 tech:["Databases","P4","Network switches","Near-data processing"],
 pt:{title:"Consultas com aceleração de rede",summary:"Processamento de consultas de banco de dados com aceleração de rede: grandes volumes de dados processados na borda."},
 en:{title:"Network-accelerated queries",summary:"Database query processing with network acceleration: large amounts of data processed on the edge."},
 sections:[
  {pt:{h:"Objetivo",html:"<p>O projeto estuda o co-processamento distribuído de consultas, em que o sistema de banco de dados e o hardware de rede dividem o trabalho. Mover grandes volumes de dados pela hierarquia de memória prejudica tanto o desempenho quanto o consumo de energia. A rede costuma ser a camada mais lenta dessa hierarquia, mas o hardware recente oferece acesso a dados com latência próxima à da memória local e permite executar processamento complexo nos próprios switches, por exemplo com a linguagem P4.</p>"},
   en:{h:"Goal",html:"<p>The project studies distributed query co-processing, where the database system and the network hardware share the work. Moving large volumes of data through the memory hierarchy hurts both performance and energy use. The network is usually the slowest layer of that hierarchy, but recent hardware offers data access with latency close to local memory and can run complex processing on the switches themselves, for example with the P4 language.</p>"}},
  {pt:{h:"O modelo de processamento P4",html:"<p>O pipeline analisa o pacote e constrói uma máquina de estados; os metadados e os dados do pacote determinam as transições que decidem o encaminhamento. A lógica de entrada e saída fica em pipelines de unidades <em>match-action</em> (MAU), que juntas formam o plano de dados, capaz de implementar protocolos de rede ou operações de consulta. Um plano de controle em software coordena o processamento, e o compilador P4 gera a API que ele usa. As limitações da linguagem P4 trazem questões de pesquisa desafiadoras, que guiam a agenda do projeto.</p>"},
   en:{h:"The P4 processing model",html:"<p>The pipeline parses the packet and builds a state machine; packet metadata and data drive the transitions that decide forwarding. Ingress and egress logic sits in match-action unit (MAU) pipelines, which together form the data plane and can implement network protocols or query operations. A software control plane coordinates processing, and the P4 compiler generates the API it uses. The limitations of the P4 language raise challenging research questions that guide the project's agenda.</p>"},
   fig:{src:"img/projects/db-query-p4.webp",pt:"Pipeline de processamento de pacotes em P4.",en:"P4 packet processing pipeline."}},
  {pt:{h:"Histórico e resultados esperados",html:"<p>O projeto se apoia em trabalhos publicados nas principais conferências de banco de dados (VLDB, ICDE, EDBT, DATE, CIKM, DEXA) e em workshops de hardware para bancos de dados (ADMS@VLDB, DaMoN@SIGMOD, PhD@VLDB, SIGMOD Research Competition). Os trabalhos receberam o Prêmio CAPES de Tese 2021, o segundo lugar no prêmio de teses da SBC 2021 e um prêmio do ACM SIGMOD 2023. Os resultados esperados são algoritmos, metodologias e propostas de extensões de hardware que possam ser adotadas por fabricantes de SGBDs e de hardware.</p><p>Projeto apoiado pelo CNPq e pelo projeto SmartEdge.</p>"},
   en:{h:"Track record and expected outcomes",html:"<p>The project builds on work published at the main database venues (VLDB, ICDE, EDBT, DATE, CIKM, DEXA) and at database-hardware workshops (ADMS@VLDB, DaMoN@SIGMOD, PhD@VLDB, SIGMOD Research Competition). The work received the CAPES 2021 Thesis Award, the SBC 2021 runner-up thesis award and an ACM SIGMOD 2023 award. Expected outcomes are algorithms, methodologies and hardware-extension proposals that DBMS vendors and hardware manufacturers could adopt.</p><p>Supported by CNPq and the SmartEdge project.</p>"}}],
 team:[["Eduardo Cunha de Almeida","UFPR","img/people/eduardo-almeida.webp"],["Marco Antonio Zanata Alves","UFPR","img/people/marco-zanata.webp"]],
 pubs:[
  {t:"Improved Computation of Database Operators via Vector Processing Near-Data",v:"IEEE SBAC-PAD 2023",u:"https://ieeexplore.ieee.org/abstract/document/10305869"},
  {t:"Fast detection of denial constraint violations",v:"Proceedings of the VLDB Endowment, 2021",u:"https://dl.acm.org/doi/abs/10.14778/3503585.3503595/"}],
 links:[{pt:"CNPq",en:"CNPq",u:"https://www.gov.br/cnpq/pt-br"},{pt:"Projeto SmartEdge",en:"SmartEdge project",u:"https://www.smart-edge.eu"}]},

{id:"hospitalization",status:"ongoing",img:"img/projects/hospitalization.webp",
 tech:["Large language models","RoBERTa","BERTimbau","LLaMA / Open-Cabrita3B","LoRA","Random Forest"],
 pt:{title:"Predição de internamento",summary:"Modelos de linguagem de grande escala (LLMs) aplicados a dados de planos de saúde para prever internamentos hospitalares."},
 en:{title:"Hospitalization prediction",summary:"Large language models (LLMs) applied to health insurance data to predict hospital admissions."},
 sections:[
  {pt:{h:"Motivação",html:"<p>Prever internamentos pode apoiar o desenvolvimento de aplicações para operadoras de planos de saúde, hospitais e para a medicina. Os dados coletados pelos planos de saúde têm um potencial que nem sempre é explorado, e extrair características deles para aplicações de aprendizado de máquina costuma exigir processos trabalhosos e conhecimento especializado. Com os modelos de linguagem de grande escala (LLMs), esses dados podem ser usados em muitas aplicações com pouco conhecimento especializado, desde que sejam organizados e preparados para esses modelos.</p>"},
   en:{h:"Motivation",html:"<p>Predicting hospitalizations can support applications for health insurers, hospitals and medicine. The data collected by health insurance companies has potential that is not always explored, and extracting features from it for machine learning usually requires demanding processes and specialized knowledge. With large language models (LLMs), this data can be used in many applications with little specialized knowledge, as long as it is organized and prepared for these models.</p>"}},
  {pt:{h:"Abordagem",html:"<p>O projeto propõe uma forma de usar dados de planos de saúde em LLMs para prever internamentos. Os eventos de cada beneficiário (procedimentos, materiais, regime de atendimento, CID) são agregados em um registro por dia e encadeados em ordem cronológica, formando <strong>sentenças históricas</strong> que terminam no dia anterior a um internamento.</p><p>A base reúne registros de 1990 a 2021: cerca de 89 milhões de registros de 445 mil beneficiários, que resultaram em mais de 880 mil sentenças históricas. Foram avaliados o RoBERTa treinado do zero com <em>masked language modeling</em>, o BERTimbau e o Open-Cabrita3B (uma variante do LLaMA para português, ajustada com LoRA), além de combinações dos modelos.</p>"},
   en:{h:"Approach",html:"<p>The project proposes a way to use health insurance data in LLMs to predict hospitalizations. Each beneficiary's events (procedures, supplies, care regime, ICD code) are aggregated into one record per day and chained chronologically into <strong>historical sentences</strong> that end the day before a hospitalization.</p><p>The data covers records from 1990 to 2021: about 89 million records from 445,000 beneficiaries, which produced more than 880,000 historical sentences. The models evaluated were RoBERTa trained from scratch with masked language modeling, BERTimbau and Open-Cabrita3B (a LLaMA variant for Portuguese, fine-tuned with LoRA), as well as combinations of these models.</p>"},
   fig:{src:"img/projects/hospitalization-aggregation.webp",pt:"Agregação dos eventos de um beneficiário em um único registro por dia.",en:"Aggregating a beneficiary's events into a single record per day."}},
  {pt:{h:"Sentenças históricas",html:"<p>Para cada beneficiário, o histórico é dividido em exemplos de treino: sequências que antecedem um internamento são rotuladas como positivas (1) e as demais como negativas (0). Assim, o modelo aprende a reconhecer padrões no histórico que indicam um internamento próximo.</p>"},
   en:{h:"Historical sentences",html:"<p>For each beneficiary, the history is split into training examples: sequences that precede a hospitalization are labeled positive (1) and the others negative (0). The model thus learns to recognize patterns in the history that signal an upcoming hospitalization.</p>"},
   fig:{src:"img/projects/hospitalization-sentences.webp",pt:"Geração de sentenças históricas por beneficiário, com dois internamentos e sem internamento.",en:"Generating historical sentences per beneficiary, with two hospitalizations and with none."}},
  {pt:{h:"Resultados",html:"<p>O trabalho gerou modelos pré-treinados em português e em inglês com dados de planos de saúde, que podem ser usados em diversas aplicações e foram disponibilizados à comunidade científica. Nos testes:</p><ul><li><strong>Internamentos em geral:</strong> F1-Score de 87,8 e AUC de 0,955.</li><li><strong>Internamentos por AVC:</strong> o melhor modelo alcançou F1-Score de 88,7 e AUC de 0,964.</li></ul><p>O projeto segue em andamento, com a aplicação da abordagem a outras condições, como a insuficiência cardíaca (IEEE SMC 2025).</p>"},
   en:{h:"Results",html:"<p>The work produced pre-trained models in Portuguese and English using health insurance data, which can be used in several applications and were made available to the scientific community. In the tests:</p><ul><li><strong>General hospitalizations:</strong> F1-Score of 87.8 and AUC of 0.955.</li><li><strong>Stroke hospitalizations:</strong> the best model reached an F1-Score of 88.7 and an AUC of 0.964.</li></ul><p>The project is ongoing, applying the approach to other conditions such as heart failure (IEEE SMC 2025).</p>"},
   fig:{src:"img/projects/hospitalization-stroke.webp",pt:"Predição de internamentos por AVC com diferentes antecedências (5 a 60 dias).",en:"Predicting stroke hospitalizations at different lead times (5 to 60 days)."}}],
 team:[["Everton F. Baro","UFPR · IFPR"],["Luiz Eduardo S. Oliveira","UFPR","img/people/luiz-oliveira.webp"],["Alceu de Souza Britto Jr.","PUCPR","img/people/alceu-britto.webp"]],
 pubs:[
  {t:"Predicting Hospitalization with LLMs from Health Insurance Data",v:"Baro, E., Oliveira, L. S., Britto Jr, A. Medical & Biological Engineering & Computing, 2025",u:"http://www.inf.ufpr.br/lesoliveira/download/MBEC2025.pdf"},
  {t:"Predicting Heart Failure Hospitalizations with LLMs from Health Insurance Data",v:"Baro, E., Oliveira, L. S., Britto Jr, A. IEEE International Conference on Systems, Man, and Cybernetics (IEEE SMC), Vienna, Austria, 2025"},
  {t:"Predicting Hospitalization from Health Insurance Data",v:"Baro, E., Oliveira, L. S., Britto Jr, A. IEEE International Conference on Systems, Man, and Cybernetics (IEEE SMC), Prague, Czech Republic, 2022"}],
 links:[{pt:"Artigo na MBEC (DOI)",en:"MBEC article (DOI)",u:"https://doi.org/10.1007/s11517-024-03251-4"}]},

{id:"power-grid",status:"finished",img:"img/projects/power-grid.webp",
 tech:["Deep learning","Ensembles","Dynamic regressor selection","Denial constraints"],
 pt:{title:"Detecção de falhas em redes elétricas",summary:"Framework para diagnóstico de falhas em linhas de transmissão por meio de aprendizado de máquina."},
 en:{title:"Detecting faults on power grids",summary:"A framework for fault diagnosis in transmission lines through machine learning."},
 sections:[
  {pt:{h:"Visão geral",html:"<p>O projeto desenvolveu um framework de aprendizado de máquina para diagnóstico de falhas em linhas de transmissão, com foco em duas tarefas:</p><ul><li><strong>Classificação da falha:</strong> identificar quais fases (A, B, C) estão envolvidas e se há contato com a terra (G).</li><li><strong>Localização da falha:</strong> estimar em que ponto da linha a falha ocorreu.</li></ul><p>Saber o tipo e o local exato da falha permite que as concessionárias enviem as equipes de reparo mais rapidamente.</p>"},
   en:{h:"Overview",html:"<p>The project developed a machine learning framework for diagnosing faults in transmission lines, focused on two tasks:</p><ul><li><strong>Fault classification:</strong> identifying which phases (A, B, C) are involved and whether ground (G) is affected.</li><li><strong>Fault location:</strong> estimating where on the line the fault occurred.</li></ul><p>Knowing the type and exact location of a fault lets utilities dispatch repair crews faster.</p>"},
   fig:{src:"img/projects/power-grid-fig1.webp",pt:"Figura 1 – Exemplo de uma falha real do tipo AG (fase A para a terra).",en:"Figure 1 – Example of a real AG fault (phase A to ground)."}},
  {pt:{h:"Método",html:"<p>O sistema utiliza dados de oscilografia, isto é, as formas de onda de tensão e corrente registradas durante a falha. A partir delas são extraídas características que alimentam algoritmos baseados em ensembles. Para a localização, o projeto propôs um novo esquema de seleção dinâmica de regressores.</p>"},
   en:{h:"Method",html:"<p>The system uses oscillography data, that is, the voltage and current waveforms recorded during the fault. Features extracted from them feed ensemble-based algorithms. For fault location, the project proposed a new dynamic regressor selection scheme.</p>"},
   fig:{src:"img/projects/power-grid-fig2.webp",pt:"Figura 2 – Ambiente de operação do método proposto.",en:"Figure 2 – Operating environment of the proposed method."}},
  {pt:{h:"Dados abertos",html:"<p>Os dados do estudo estão disponíveis publicamente no Zenodo (link ao lado).</p>"},
   en:{h:"Open data",html:"<p>The study's data are publicly available on Zenodo (see the link alongside).</p>"}}],
 team:[],
 pubs:[
  {t:"Artigo no KDMiLe 2022",tEn:"Paper at KDMiLe 2022",v:"Symposium on Knowledge Discovery, Mining and Learning (KDMiLe), 2022",u:"https://doi.org/10.5753/kdmile.2022.227805"},
  {t:"Artigo no IECON 2022",tEn:"Paper at IECON 2022",v:"IEEE Industrial Electronics Society Conference (IECON), 2022",u:"https://dx.doi.org/10.1109/IECON49645.2022.9968993"},
  {t:"Artigo no SBBD 2023",tEn:"Paper at SBBD 2023",v:"Simpósio Brasileiro de Banco de Dados (SBBD), 2023",u:"https://doi.org/10.5753/sbbd.2023.231718"},
  {t:"Artigo na Neural Computing and Applications",tEn:"Article in Neural Computing and Applications",v:"Neural Computing and Applications (Springer), 2023",u:"https://doi.org/10.1007/s00521-023-09155-y"}],
 links:[{pt:"Dados do estudo (Zenodo)",en:"Study data (Zenodo)",u:"https://dx.doi.org/10.5281/zenodo.10275032"}]},

{id:"corals",status:"finished",img:"img/projects/corals.webp",
 tech:["Image classification","Semantic segmentation","U-Net / Pix2Pix"],
 pt:{title:"De Olho nos Corais",summary:"Monitoramento da saúde dos corais diante do estresse climático, a partir de fotos de recifes compartilhadas no Instagram."},
 en:{title:"Keeping an Eye on the Corals",summary:"Monitoring coral health under climate stress, using reef photos shared on Instagram."},
 sections:[
  {pt:{h:"O projeto",html:"<p>Os recifes de coral são vitais para os ecossistemas marinhos, mas estão ameaçados pelo estresse térmico causado pelas mudanças climáticas. Para monitorar sua saúde, o Laboratório de Ecologia Marinha (LECOM) da Universidade Federal do Rio Grande do Norte (UFRN) criou o projeto <strong>#DeOlhoNosCorais</strong>, que convida as pessoas a compartilhar fotos de recifes no Instagram.</p>"},
   en:{h:"The project",html:"<p>Coral reefs are vital to marine ecosystems but are threatened by heat stress caused by climate change. To monitor their health, the Marine Ecology Laboratory (LECOM) at the Federal University of Rio Grande do Norte (UFRN) created the <strong>#DeOlhoNosCorais</strong> project, which invites people to share reef photos on Instagram.</p>"},
   fig:{src:"img/projects/corals-fig6.webp",pt:"Exemplos de segmentação semântica de imagens de corais.",en:"Examples of semantic segmentation of coral images."}},
  {pt:{h:"Resultados",html:"<p>O DSBD aplicou modelos de aprendizado de máquina para classificação de imagens e segmentação semântica. Combinados, eles identificam as espécies de coral e avaliam a saúde dos recifes. O modelo U-Net Pix2Pix alcançou 86% de acurácia em nível de pixel na segmentação semântica. A abordagem pode tornar a análise de imagens de recifes mais rápida e eficiente e pode ser aplicada a outras regiões com a inclusão de novos conjuntos de dados.</p>"},
   en:{h:"Results",html:"<p>DSBD applied machine learning models for image classification and semantic segmentation. Combined, they identify coral species and assess reef health. The U-Net Pix2Pix model reached 86% pixel-level accuracy in semantic segmentation. The approach can make reef image analysis faster and more efficient, and it can be applied to other regions as more datasets are added.</p>"},
   fig:{src:"img/projects/corals-fig4.webp",pt:"Foto de recife (A) e a máscara de segmentação correspondente (B).",en:"Reef photo (A) and the corresponding segmentation mask (B)."}}],
 team:[],
 pubs:[{t:"Artigo na PeerJ",tEn:"Article in PeerJ",v:"PeerJ, 2023",u:"https://peerj.com/articles/16219"}],
 links:[]}
];

DSBD.PUBS=[
{y:2026,t:"MetaPKLot – new challenges and protocols for vision-based parking lot management",a:"de Almeida, P. L., Alves, J. H., Kujavski, L. M., Alves, P. L., Oliveira, L. E.",v:"Neural Computing and Applications, 38(17), 704",u:"https://link.springer.com/content/pdf/10.1007/s00521-026-12398-0.pdf"},
{y:2024,t:"Using Deep Neural Networks to Quantify Parking Dwell Time",a:"Ribas, M. E. M., Mendes, H. B., Oliveira, L. E. S., Zanlorensi, L. A., Almeida, P. R. L.",v:"IEEE 23rd International Conference on Machine Learning and Applications (ICMLA)",u:"https://arxiv.org/pdf/2411.00158"},
{y:2024,t:"Optimizing Parking Space Classification: Distilling Ensembles into Lightweight Classifiers",a:"Alves, P. L., Hochuli, A., Oliveira, L. E., Almeida, P. R. L.",v:"IEEE 23rd International Conference on Machine Learning and Applications (ICMLA)",u:"https://arxiv.org/pdf/2410.14705"},
{y:2023,t:"Vehicle Occurrence-based Parking Space Detection",a:"Almeida, P. R. L., Alves, J. H., Oliveira, L. S., Hochuli, A. G., Fröhlich, J. V., Krauel, R. A.",v:"IEEE International Conference on Systems, Man, and Cybernetics (SMC)",u:""},
{y:2023,t:"Improved Computation of Database Operators via Vector Processing Near-Data",a:"Santos, S., Kepe, T. R., Alves, M. A.",v:"IEEE 35th International Symposium on Computer Architecture and High Performance Computing (SBAC-PAD)",u:"https://ieeexplore.ieee.org/abstract/document/10305869"},
{y:2023,t:"Fast & Furious: On the modelling of malware detection as an evolving data stream",a:"Ceschin, F., Botacin, M., Gomes, H. M., Pinagé, F., Oliveira, L. S., Grégio, A.",v:"Expert Systems with Applications, 212, 118590",u:"https://www.sciencedirect.com/science/article/pii/S0957417422016463"},
{y:2021,t:"Fast detection of denial constraint violations",a:"Pena, E. H., de Almeida, E. C., Naumann, F.",v:"Proceedings of the VLDB Endowment, 15(4), 859–871",u:"https://dl.acm.org/doi/abs/10.14778/3503585.3503595/"},
{y:2015,t:"PKLot – A robust dataset for parking lot classification",a:"Almeida, P. R. L., Oliveira, L. S., Silva Jr, E., Britto Jr, A., Koerich, A.",v:"Expert Systems with Applications, 42(11), 4937–4949",u:"http://www.inf.ufpr.br/lesoliveira/download/ESWA2015.pdf"}];

DSBD.FACULTY=[
{n:"Anderson Ara",img:"img/people/anderson-ara.webp",
 pt:"Bacharel (2009) e mestre (2011) em Estatística pela Universidade Federal de São Carlos (UFSCar). Doutor em Estatística (2016) pelos Programas de Pós-Graduação em Estatística (PPGEst-UFSCar) e em Ciência da Computação (PPGCC-UFSCar).",
 en:"Holds a bachelor's degree (2009) and a master's degree (2011) in Statistics, both from the Federal University of São Carlos (UFSCar). He completed his Ph.D. in Statistics (2016) through the Postgraduate Programs in Statistics (PPGEst-UFSCar) and Computer Science (PPGCC-UFSCar)."},
{n:"André Grégio",img:"img/people/andre-gregio.webp",
 pt:"Professor Associado do Departamento de Informática da UFPR. Doutor em Engenharia Elétrica pela UNICAMP (2012). Pesquisa segurança computacional, análise de malware, segurança de dispositivos móveis e aplicação de aprendizado de máquina e ciência de dados à cibersegurança.",
 en:"Associate Professor in the Department of Informatics at UFPR. Ph.D. in Electrical Engineering from the University of Campinas (UNICAMP, 2012). His research covers computer security, malware analysis, mobile device security, and machine learning and data science applied to cybersecurity."},
{n:"Eduardo Cunha de Almeida",img:"img/people/eduardo-almeida.webp",
 pt:"Professor Associado da UFPR. Pesquisa sistemas de banco de dados e gerenciamento de dados, com publicações em periódicos e conferências de prestígio como VLDB e ICDE.",
 en:"Associate Professor at UFPR. His research is in database systems and data management, with publications in highly regarded venues such as VLDB and ICDE."},
{n:"Luiz Eduardo S. Oliveira",img:"img/people/luiz-oliveira.webp",
 pt:"Doutor em Ciência da Computação pela Université du Québec (2003). Orientou e coorientou mais de 40 estudantes de mestrado, doutorado e pós-doutorado e publicou mais de 240 artigos em periódicos e conferências internacionais. Recebeu o prêmio de melhor tese de doutorado da ÉTS/Université du Québec (2003) e o IBM Faculty Award (2017). Atua em reconhecimento de padrões, aprendizado de máquina e visão computacional.",
 en:"Ph.D. in Computer Science from Université du Québec (2003). He has supervised and co-supervised more than 40 master's, doctoral and postdoctoral students and published over 240 articles in journals and international conferences. He received the Excellence Award for the best doctoral thesis from ÉTS/Université du Québec (2003) and an IBM Faculty Award (2017). He works mainly in pattern recognition, machine learning and computer vision."},
{n:"Marco Antonio Zanata Alves",img:"img/people/marco-zanata.webp",
 pt:"Bacharel em Ciência da Computação pela UNESP (2006), mestre (2009) e doutor (2014) em Ciência da Computação pela UFRGS, onde fez pós-doutorado (2014–2016). Desde 2016 é Professor Associado do Departamento de Informática da UFPR, responsável por disciplinas de arquitetura de computadores e programação paralela.",
 en:"B.Sc. in Computer Science from UNESP (2006), M.Sc. (2009) and Ph.D. (2014) in Computer Science from UFRGS, where he was a postdoctoral researcher (2014–2016). Since 2016 he has been an Associate Professor in the Department of Informatics at UFPR, teaching computer architecture and parallel programming."},
{n:"Paulo Ricardo Lisboa de Almeida",img:"img/people/paulo-almeida.webp",
 pt:"Bacharel em Engenharia de Computação pela UEPG (2012) e doutor em Ciência da Computação pela UFPR (2018). Pesquisa aprendizado de máquina e contribuiu com algoritmos e benchmarks usados pela comunidade, como o framework Dynse (no MOA) e a base PKLot.",
 en:"B.Sc. in Computer Engineering from UEPG (2012) and Ph.D. in Computer Science from UFPR (2018). His research focuses on machine learning and has produced algorithms and benchmarks used by the community, such as the Dynse Framework (in MOA) and the PKLot dataset."},
{n:"Wagner Hugo Bonat",img:"img/people/wagner-bonat.webp",
 pt:"Pesquisador e professor do Departamento de Estatística da UFPR desde 2010. Bacharel (2008) e mestre (2010) pela UFPR, e doutor em Matemática e Ciência da Computação pela University of Southern Denmark (2016).",
 en:"Researcher and lecturer in the Department of Statistics at UFPR since 2010. B.S. (2008) and M.S. (2010) from UFPR, and Ph.D. in Mathematics and Computer Science from the University of Southern Denmark (2016)."}];

DSBD.STUDENTS=[
{n:"Claudio Biazus",l:"phd",img:"img/people/claudio-biazus.webp",pt:"Doutorando no PPGInf, em Inteligência Artificial com ênfase em Dataset Distillation.",en:"PhD student in PPGInf, in Artificial Intelligence with an emphasis on Dataset Distillation."},
{n:"Marcos Antonio Schreiner",l:"phd",img:"img/people/marcos-schreiner.webp",pt:"Doutorando no PPGInf, trabalha com Concept Drift.",en:"PhD student in PPGInf, working on concept drift."},
{n:"Renan Escribano",l:"phd",img:"img/people/renan-escribano.webp",pt:"Doutorando no PPGInf, trabalha com calibração de modelos de visão computacional.",en:"PhD student in PPGInf, working on calibration of computer vision models."},
{n:"Ruanitto Docini",l:"phd",img:"img/people/ruanitto-docini.webp",pt:"Doutorando no PPGInf, trabalha com Text-to-SQL.",en:"PhD student in PPGInf, working on Text-to-SQL."},
{n:"Eloiza",l:"ms",img:"img/people/eloiza.webp",pt:"Mestranda.",en:"Master's student."},
{n:"Felipe Turetti Peruci",l:"ms",img:"img/people/felipe-peruci.webp",pt:"Mestrando no PPGInf, trabalha com visão computacional.",en:"Master's student in PPGInf, working on computer vision."},
{n:"Paulo Luza",l:"ms",img:"img/people/paulo-luza.webp",pt:"Mestrando no PPGInf, pesquisa técnicas de compressão de modelos de Deep Learning.",en:"Master's student in PPGInf, researching model compression techniques for Deep Learning."},
{n:"Esdras Zultanski Araujo",l:"ms",img:"img/people/esdras-araujo.webp",pt:"Mestrando no PPGInf, trabalha com aprendizagem de máquina.",en:"Master's student in PPGInf, working on machine learning."},
{n:"Gustavo Berwanger Liberado",l:"ms",img:"img/people/gustavo-liberado.webp",pt:"Mestrando no PPGInf, trabalha com visão computacional.",en:"Master's student in PPGInf, working on computer vision."},
{n:"Thiago Toma",l:"ms",img:"img/people/thiago-toma.webp",pt:"Mestrando no PPGInf, trabalha com grafos e Text-to-SQL.",en:"Master's student in PPGInf, working on graphs and Text-to-SQL."},
{n:"Luan Kujavski",l:"ms",img:"img/people/luan-kujavski.webp",pt:"Mestrando no PPGInf, trabalha com deep learning. Atua no projeto MetaPKLot.",en:"Master's student in PPGInf, working on deep learning. Works on the MetaPKLot project."},
{n:"David Gomes",l:"ug",img:"img/people/david-gomes.webp",pt:"Ciência da Computação, com foco em Processamento de Linguagem Natural (PLN).",en:"Computer Science, focused on Natural Language Processing (NLP)."},
{n:"Pietro Comin",l:"ug",img:"img/people/pietro-comin.webp",pt:"Ciência da Computação, investiga como a precisão numérica e o comportamento das funções de ativação afetam CNNs.",en:"Computer Science, investigating how numerical precision and activation function behavior impact CNNs."},
{n:"Roberto Tomchak",l:"ug",img:"img/people/roberto-tomchak.webp",pt:"Ciência da Computação, Deep Learning aplicado a segurança e visão computacional.",en:"Computer Science, Deep Learning applied to security and computer vision."},
{n:"Larissa Cutti",l:"ug",img:"img/people/larissa-cutti.webp",pt:"Informática Biomédica, pesquisa deep learning e segurança de criptoativos.",en:"Biomedical Informatics, researching deep learning and crypto-asset security."},
{n:"Thamiris Fischer",l:"ug",img:"img/people/thamiris-fischer.webp",pt:"Ciência da Computação, pesquisa como o comportamento das funções de ativação afeta CNNs.",en:"Computer Science, researching how activation function behavior impacts CNNs."}];

DSBD.PAST=[
{n:"Eduardo Victor",img:"img/people/eduardo-victor.webp",pt:"Mestrado",en:"Master's student"},
{n:"Heloísa Mendes",img:"img/people/heloisa-mendes.webp",pt:"Graduação em Ciência da Computação, redes siamesas · projeto MetaPKLot",en:"CS undergrad, siamese networks · MetaPKLot project"},
{n:"Bruno Aquiles",img:"img/people/bruno-aquiles.webp",pt:"Graduação em Ciência da Computação, segmentação de instâncias · projeto MetaPKLot",en:"CS undergrad, instance segmentation · MetaPKLot project"},
{n:"Marcelo Ribas",img:"img/people/marcelo-ribas.webp",pt:"Graduação em Ciência da Computação, redes siamesas · projeto MetaPKLot",en:"CS undergrad, siamese networks · MetaPKLot project"},
{n:"Barbara Santos",img:"img/people/barbara-santos.webp",pt:"Graduação em Informática Biomédica, visualização de dados de alta dimensão",en:"Biomedical Informatics undergrad, high-dimensional data visualization"},
{n:"Erick Cardoso",img:"img/people/erick-cardoso.webp",pt:"Graduação em Ciência da Computação, Deep Learning",en:"CS undergrad, Deep Learning"},
{n:"Nadia Lobkov",img:"img/people/nadia-lobkov.webp",pt:"Graduação em Ciência da Computação, divulgação digital dos projetos do laboratório",en:"CS undergrad, digital outreach of the lab's projects"}];

DSBD.NEWS=[
{d:"2025-05-27",pt:"O graduando Luan apresenta seu artigo sobre modelos leves para classificação de vagas de estacionamento em cidades inteligentes.",en:"Undergraduate student Luan presents his paper proposing lightweight models for classifying parking spaces in smart cities.",u:"https://periodicos.univali.br/index.php/acotb/article/view/21015"},
{d:"2024-07-23",pt:"O graduando Muriki apresenta o trabalho sobre validação estatística do pareamento de colunas na evolução do esquema do Censo Escolar brasileiro.",en:"Undergraduate student Muriki presents our work on statistical validation of column matching in the schema evolution of the Brazilian Public School Census.",u:"https://arxiv.org/abs/2407.09885"},
{d:"2023-12-11",pt:"Reunião de apresentação do novo site do DSBD.",en:"Presentation meeting for the new DSBD website."},
{d:"2023-11-13",pt:"Reunião sobre o uso de múltiplas redes pré-treinadas para criar ground truths.",en:"Meeting on using multiple pre-trained networks to create ground truths."},
{d:"2023-09-27",pt:"Apresentação do Prof. Paulo Almeida no 23º Meetup do CIDAMO sobre streams e projetos de cidades inteligentes.",en:"Prof. Paulo Almeida presents streams and smart-city projects at the 23rd CIDAMO Meetup."}];

DSBD.COLLAB=[
{wide:1,where:{pt:"Montreal, Canadá",en:"Montreal, Canada"},name:"ÉTS – École de technologie supérieure",people:[["Rafael Menelau Cruz","img/people/rafael-cruz.webp"],["Robert Sabourin","img/people/robert-sabourin.webp"],["Alessandro Lameiras Koerich","img/people/alessandro-koerich.webp"]],
 pt:"Colaboração de mais de duas décadas em reconhecimento de padrões e aprendizado de máquina, com mais de 100 artigos publicados e orientação conjunta de pós-graduandos na UFPR e na ÉTS.",
 en:"A collaboration spanning more than two decades in pattern recognition and machine learning, with over 100 papers published and graduate students co-supervised at UFPR and ÉTS."},
{where:{pt:"França",en:"France"},name:"Université de Rouen Normandie",people:[["Laurent Heutte","img/people/laurent-heutte.webp"]],
 pt:"Colaboração iniciada em 2014 no projeto CAPES-STIC-AmSud, em temas como recuperação de imagens de documentos e análise de imagens médicas.",
 en:"Started in 2014 through the CAPES-STIC-AmSud project, on topics such as document image retrieval and medical image analysis."},
{where:{pt:"Nova Zelândia",en:"New Zealand"},name:"Victoria University of Wellington",people:[["Heitor Gomes","img/people/heitor-gomes.webp"]],
 pt:"Colaboração em fluxos de dados (data streams), com artigos em segurança computacional e Random Forests para streams desbalanceados.",
 en:"Collaboration on data streams, with joint papers on computer security and Random Forests for imbalanced data streams."},
{wide:1,where:{pt:"Indústria",en:"Industry"},name:"IBM Research",people:[["Paulo Cavalin","img/people/paulo-cavalin.webp"]],
 pt:"Colaboração centrada em classificação de texturas, com orientação de pós-graduandos e mais de uma dúzia de artigos revisados por pares.",
 en:"Collaboration centered on texture classification, with co-supervised graduate students and over a dozen peer-reviewed papers."}];

DSBD.INDUSTRY=[["IBM Brasil","img/partners/ibm.webp"],["Samsung Research Brazil","img/partners/samsung-research.webp"],["GoGenetic","img/partners/gogenetic.webp"]];

DSBD.JOIN={pt:[["Mestrado e Doutorado","Para quem já tem graduação. Os programas duram 24 e 48 meses, respectivamente. Normalmente temos bolsas, e as inscrições estão sempre abertas."],["Iniciação Científica","Para estudantes de graduação aprenderem a conduzir e documentar pesquisa científica em pequenos projetos, com acompanhamento de um orientador."],["Especialização","Para profissionais interessados nas demandas mais recentes da indústria em Ciência de Dados e Big Data. <a href=\"http://dsbd.leg.ufpr.br/\" target=\"_blank\" rel=\"noopener\">Conheça o programa ↗</a>"]],
en:[["Master's & PhD","For students who already hold a bachelor's degree. The programs last 24 and 48 months, respectively. We usually have scholarships, and applications are always open."],["Scientific Initiation","For undergraduates to learn how to conduct and document scientific research through small projects, guided by a mentor."],["Specialization","For professionals interested in the latest industry needs in Data Science and Big Data. <a href=\"http://dsbd.leg.ufpr.br/\" target=\"_blank\" rel=\"noopener\">See the program ↗</a>"]]};
