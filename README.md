# Aluraflix


 
## Descrição
O Aluraflix é um desafio proposto pela Alura com ONE (Oracle Next Education), projetado em React com Vite, simulando site de streaming com vídeos do canal Alura do youtube. Desafio proposto como pré-requisito para obtenção de certificado da última etapa do programa ONE. Foram utilizadas várias funcionalidades e tecnologias do React, tais como react-router-dom, os hooks useStates, useParams e useEffect. No site é possível você assistir aos vídeos, clicando neles no banner que é um slider automático e manual, ou clicando nos próprios vídeos listados em categorias, ainda, é possível editá-los, excluí-los e até adicionar novo vídeo (funcinalidades CRUD para o servidor json). Contudo, para usar as funcionalidades descritas é necessáio o json-sever, logo você devará clonar o projeto e rodar o json-server no terminal, mais explicações abaixo, também, mais abaixo tem link do vídeo mostrando todas as funcionalidades.

## Dependências 
`json-server`

## Funcionalidade
* **Importante**: as funcionalidades descritas nos tópicos abaixo só serão possíveis se você clonar este projeto para a sua máquina e rodar o comando no terminal `npm i` para instalação do diretório "node_models" que foi ignorada no git commit, logo após, rode no terminal o comando `npm run dev` e mantenha, pois será necessário abrir outro terminal, abra outro terminal e rode o comando `npm start` ou `json-sever --watch db.json` para carregar os arquivos do db.json. Este projeto está fazendo fetch do my json sever que é diferente do json-server, portando, no componente Inicial, que está na pasta pages, no seu index.jsx troque const videosApi = await fetch('https://my-json-server.typicode.com/jefersonssant/aluraflix-api/videos') por const videosApi = await fetch('http://localhost:3000/videos')
  
* **Banner:** no banner tem um slide automático e manual, no lado esquerdo tem ícone de seta sinalizando a direção que você pode retroceder na passagem dos slides, no lado direito também, e a cada 5 segundos ele passa automaticamente, no lado direito do banner tem o vídeo clicável que te direciona para assistir o respectivo vídeo;
  
* **Categorias/Áreas Frontend, Backend, Mobile:** aqui você também pode clicar no vídeo que irá para a página do próprio site para assistir o respectivo vídeo. Ainda, poderá clicar no botão de excluir para deletá-lo do arquivo db.json, e ao clicar no botão de editar vai abrir uma modal onde você poderá editar título, link de imagem, de vídeo, descrição e atualizar o vídeo, ao clicar em guardar a atualização se refletirá imediatamente no site. Na parte inferior de cada área tem um scroll horizontal que te permitirá rolar para a esquerda e direita quando houver muitos vídeos para visualizar;
  
* **Menu**: no header, contém o menu para home e novo vídeo, ao clicar em novo vídeo você vai para a página de inserção de novo vídeo, onde deverá preencher o formulário de título, link de imagem, de vídeo e descriçao, ao clicar em guardar, a atualização se refletirá imediamente no site contendo os novos vídeos. Ao clicar em home vai para a página inicial e, também, ao clicar na logo da Aluraflix.

## Acesse e compreenda melhor
* **Vídeo com as funcionalidades completas:** [https://youtu.be/HZ7teTBV4W0]
* **link do site na Vercel**: [https://challenge-one-aluraflix.vercel.app/]
## Imagem
![screencapture-challenge-one-aluraflix-vercel-app-2024-07-04-17_36_51](https://github.com/jefersonssant/challenge-one-aluraflix/assets/133176621/f0443387-144f-4b55-a9e9-ea0f948f351b)

## Tecnologias utilizadas
* <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="logo React"/>
* <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="logo JavaScript">
* <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="logo Node.js">
## Autor
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/133176621?v=4" width=115><br><sub text-decoration="none">Jeferson Santos</sub>](https://github.com/Penichezito) |
| :---: |


