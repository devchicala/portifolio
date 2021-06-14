import "./styles/App.css";
import {
  FaLinkedinIn,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaAngular,
  FaSass,
  FaWordpress,
  FaJava,
  FaNpm,
  FaYarn,
  FaReact,
  FaNodeJs,
  FaFlutter,
} from "react-icons/fa";

import { SiFlutter } from "react-icons/si";

function App() {
  return (
    <div className="App">
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Délcio Chicala Francisco</span>
          <span class="d-none d-lg-block">
            <img
              class="img-fluid img-profile rounded-circle mx-auto mb-2"
              src="https://github.com/devchicala.png"
              alt=""
            />
          </span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">
                Sobre
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#experience">
                Experiência
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#education">
                Formação
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">
                Habilidades
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#projects">
                Projectos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#interests">
                Interesses
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#awards">
                Prémios
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="container-sm p-0">
        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="about"
        >
          <div class="w-100">
            <h1 class="mb-0">
              <span class="text-secondary">Délcio</span>
              <span class="text-primary">Chicala</span>
              <span class="">Francisco</span>
            </h1>
            <div class="subheading mb-5">
              Luanda · Angola · (+244) 930 924 612 · (+244) 993 924 612 ·{" "}
              <a href="mailto:name@email.com">delciofrancisco1@gmail.com</a>
            </div>
            <p class="lead mb-5">
              Tenho experiência em desenvolvimento de plataformas ágeis para
              fornecer uma sinopse robusta para visões gerais de alto nível.
              Profissioal apixonado com a área de TI (Especialmente
              Desenvolvimento de Sistemas) com mais de 3 anos de experiência.
              Actuo em desenvolvimento Web e Mobile, domino as seguintes
              tecnologia/frameworks: Java, Javascrip, Typescript, Angular,
              Flutter, React DOM, React Native, NodeJS e Spring Boot ... também
              actuo em UI/UX Design bem com Gestão de Projectos (PMO). Gosto de
              desafios e procuro fazer parte de projectos que me incetivam a
              revelar a minha melhor versão de profissional.
            </p>
            <div class="social-icons">
              <a href="https://www.linkedin.com/in/d%C3%A9lcio-francisco-143107175/">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/devchicala">
                <FaGithub />
              </a>
            </div>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex justify-content-center"
          id="experience"
        >
          <div class="w-100">
            <h2 class="mb-5">Experiência</h2>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">Fullstack Developer</h3>
                <div class="subheading mb-3">KUFUTA</div>
                <p>
                  Trabalhei como Mobile Developer & Full Stack, uso de
                  tecnologia de desenvolvimento web e Mobile como: HTML5, CSS3,
                  Javascript, ReactJS, React Native, Firebase, Bootstrap, AWS.
                </p>
                <p>
                  Trabalhar numa Startup é sempre desafiante e bem interessante,
                  foi uma ôptima experiência trabalhar nesta startup, pude
                  aprender bastante e conheci profissionais incríveis que
                  marcarão para sempre a minha vida profissional.
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">Fevereiro 2021</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">Web Developer</h3>
                <div class="subheading mb-3">CENTRO DE AJUDA ACADÉMICA</div>
                <p>
                  Web Developer ... participação em projectos em uma equipe
                  jovem e com excelentes qualidades!
                </p>
                <p>
                  Actuei como Full Stack, utizei diversas ferramentas e
                  Tecnologias no Back End trabalhei com Spring Boot (Java),
                  PostgreSQL, MongoDB para o desenvolvimento das APIs e para o
                  Front End trabalhei com o Angular 8, CSS3, HTML5, Fontawesome,
                  Primefaces.
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">Feveriro 2020 - Dezembro 2020</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">Frontend Developer</h3>
                <div class="subheading mb-3">PETABYTE</div>
                <p>
                  Participei no desenvolvimento de Sistemas Frontend. Usou-se
                  diferentes tecnolologias e linguagens de programação para o
                  desenvolvimento de sistemas Front End como Angular e ReactJS
                  para o frontend.
                </p>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">Janeiro 2019 - Outubro 2020</span>
              </div>
            </div>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
        >
          <div class="w-100">
            <h2 class="mb-5">Educação</h2>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="resume-content">
                <h3 class="mb-0">
                  Instituto Superior para as Tecnologia de Informação e
                  Comunicação
                </h3>
                <div class="subheading mb-3">ENGINHEIRO INFORMÁTICO</div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">Feveriro 2014 - Setembro 2019</span>
              </div>
            </div>

            <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
              <div class="resume-content">
                <h3 class="mb-0">Instituto Médio Industrial Simione Mucune</h3>
                <div class="subheading mb-3">TÉCNICO MÉDIO DE INFORMÁTICA</div>
              </div>
              <div class="resume-date text-md-right">
                <span class="text-primary">Janeiro 2011 - Dezembro 2013</span>
              </div>
            </div>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
        >
          <div class="w-100">
            <h2 class="mb-5">Skills</h2>

            <div class="subheading mb-3">
              Linguagens de programação &amp; Ferramentas
            </div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <FaHtml5 />
              </li>
              <li class="list-inline-item">
                <FaCss3 />
              </li>
              <li class="list-inline-item">
                <FaJsSquare />
              </li>
              <li class="list-inline-item">
                <FaAngular />
              </li>
              <li class="list-inline-item">
                <FaSass />
              </li>
              <li class="list-inline-item">
                <FaWordpress />
              </li>
              <li class="list-inline-item">
                <FaJava />
              </li>
              <li class="list-inline-item">
                <FaNpm />
              </li>
              <li class="list-inline-item">
                <FaYarn />
              </li>
              <li class="list-inline-item">
                <FaReact />
              </li>
              <li class="list-inline-item">
                <FaNodeJs />
              </li>
              <li class="list-inline-item" alt="Flutter">
                <SiFlutter />
              </li>
            </ul>

            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-5">
              <li>
                <i class="fa-li fa fa-check text-warning"></i> &nbsp;
                Mobile-First, Responsive Design
              </li>
              <li>
                <i class="fa-li fa fa-check text-warning"></i> &nbsp; Cross
                Browser Testing &amp; Debugging
              </li>
              <li>
                <i class="fa-li fa fa-check text-warning"></i> &nbsp; Cross
                Functional Teams
              </li>
              <li>
                <i class="fa-li fa fa-check text-warning"></i> &nbsp; Software
                Tests &amp; React Test Labrary
              </li>
              <li>
                <i class="fa-li fa fa-check text-warning"></i> &nbsp; Agile
                Development &amp; Scrum
              </li>
            </ul>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="projects"
        >
          <div class="w-100">
            <h2 class="mb-5">Projectos</h2>
            <div class="mb-5">
              <p class="mb-0">
                <h3>Ecoleta</h3>
              </p>
              <p class="mb-4">
                O projeto tem como finalidade estabelecer uma conexão entre
                empresas e/ou entidades que coletam resíduos (orgânicos e
                inorgânicos) às pessoas e/ou entidades que necessitam
                constantemente descartar esses resíduos. Solucionando um grande
                problema recorrente que é o descarte inadequado do lixo,
                facilitando o processo de recliclagem e reutilização.
              </p>
              <p class="mb-4">
                <b>Tecnologias Server:</b> Express, CORS, KnexJS, SQLite,ts-node
              </p>
              <p class="mb-4">
                <b>Tecnologias Web:</b> React Router Dom, React Icons, Axios,
                Leaflet, React Leaflet, React Dropzone
              </p>
              <p class="mb-0">
                <h5>FrontEnd &amp; BackEnd</h5>
                <a href="https://github.com/devchicala/ecoleta">
                  <p>Abrir no Github</p>
                </a>
              </p>
            </div>

            <div class="mb-5">
              <p class="mb-0">
                <h3>Meet Angola</h3>
              </p>
              <p class="mb-4">
                Projecto tem como finalidade conhecer os principais pontos
                turísticos de Angola
              </p>
              <p class="mb-4">
                <b>Tecnologias:</b> Expo, Expo Google Fonts, React Navigation,
                React Native Maps
              </p>
              <p class="mb-0">
                <h5>Code</h5>
                <a href="https://github.com/devchicala/meetAngolaMobile">
                  <p>Abrir no Github</p>
                </a>
              </p>
            </div>

            <div class="mb-5">
              <p class="mb-0">
                <h3>Move.It</h3>
              </p>
              <p class="mb-4">
                O Move.it é um App que utiliza a técnica de pomodoro, com o
                objetivo de melhorar sua produtividade e foco. Evitando
                problemas de saúde que podem ser causados pela carga de trabalho
              </p>
              <p class="mb-4">
                <b>Tecnologias:</b> React, Next.js, TypeScript, JavaScript
                Cookie,Styled Components, React Icons, VS Code com ESLint,
                Prettier e EditorConfig
              </p>
              <p class="mb-0">
                <h5>Code</h5>
                <a href="https://github.com/devchicala/moveit">
                  <p>Abrir no Github</p>
                </a>
              </p>
            </div>

            <div class="mb-5">
              <p class="mb-0">
                <h3>Plantmanager</h3>
              </p>
              <p class="mb-4">
                O Plant Manager é um app para lembrar as pessoas de regar as
                suas plantinhas.
              </p>
              <p class="mb-4">
                <b>Tecnologias:</b> React Native, Expo, TypeScript, Styled
                Components.
              </p>
              <p class="mb-0">
                <h5>Code</h5>
                <a href="https://github.com/devchicala/plantmanager">
                  <p>Abrir no Github</p>
                </a>
              </p>
            </div>

            <div class="mb-5">
              <p class="mb-0">
                <h3>E-Learning</h3>
              </p>
              <p class="mb-4">Sistema de ensino a distância (E-Learning)</p>
              <p class="mb-4">
                <b>Tecnologias Server:</b> Java, Spring Boot
              </p>
              <p class="mb-4">
                <b>Tecnologias Web:</b> Angular 8, Primefaces, Bootstrap
              </p>
              <p class="mb-0">
                <h5>FrontEnd &amp; BackEnd</h5>
                <a href="https://github.com/devchicala/ajudaacademica">
                  <p>Abrir no Github</p>
                </a>
              </p>
            </div>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="interests"
        >
          <div class="w-100">
            <h2 class="mb-5">Interesses</h2>
            <p>
              Além de ser um desenvolvedor web, eu aproveito a maior parte do
              tempo ao ar livre, pratico actividades físicas e tenho o hábito de
              pedalar com os amigos.
            </p>
            <p class="mb-0">
              Quando forçado a entrar em casa, sigo uma série de filmes e
              programas de televisão de ficção científica e fantasia, sou um
              aspirante e passo grande parte do meu tempo livre explorando os
              mais recentes avanços tecnológicos no mundo na desenvolvimento
              front-end da web.
            </p>
          </div>
        </section>

        <hr class="m-0" />

        <section
          class="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="awards"
        >
          <div class="w-100">
            <h2 class="mb-5">Certificações</h2>
            <ul class="fa-ul mb-0">
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                Curso Windows Azure - Microsoft Cloud
              </li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                Curso de banco de dados MySQL e PostgreSQL
              </li>
              <li>
                <i class="fa-li fa fa-trophy text-warning"></i>
                CCNA MÓDULO I, II e III
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
