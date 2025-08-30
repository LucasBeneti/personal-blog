---
title: 'Implementando meu primeiro PWA'
description: 'Aqui apresento como implementei meu primeiro PWA e os motivos de ter feito isso.'
pubDate: 'AUg 28 2025'
heroImage: '../../assets/blog-placeholder-1.jpg'
---

### TL;DR

- queria que o app fosse próximo como um aplicativo, sem ter que implementar efetivamente um aplicativo
- o app pode funcionar sem internet
- os dados do usuário ficam todos locais (literalmente no localStorage)
- queria entender melhor como isso funciona, por curiosidade e ver se a utilidade é essa mesmo

### O que é um PWA e para o que ele serve?

Um Progressive Web App (PWA), é um tipo de aplicativo que pode ser utilizado como se fosse um aplicativo, “instalado” no seu celular para que você possa acessar ele sem ter que abrir o navegador e ir para o site do app em questão. De maneira grosseira, a diferença entre um PWA é um aplicativo nativo, é que ele será escrito com tecnologias da web, ao invés da plataforma nativa, e não terá, necessariamente, os mesmo acessos à APIs do seu dispositivo móvel. Mas qualquer coisa que você consiga fazer na Web, você pode fazer no seu PWA, pois o que acontece é que com auxílio de alguns arquivos (manifest.json e service-worker.js), você “encapsula” seu app em uma casca de um browser e assim, basicamente está abrindo uma aba do seu app no seu navegador.

### Por que implementar um PWA?

Os motivos de implementar um PWA podem variar com as necessidades do seu aplicativo, pois você deve se perguntar se seu usuário irá se beneficiar de utilizar sua aplicação como sendo um aplicativo sozinho, como se fosse nativo. “Precisa ser uma aplicação somente WEB? Ou meu usuário poderia se beneficiar se for algo com acesso mais direto e simples (do que abrir o navegador, abrir uma nova aba e navegar para minha aplicação?”. No caso da minha aplicação, como tudo é rodado do lado do cliente e nem os dados dos usuários são enviados para um servidor, ficou muito claro que a aplicação poderia ser como se fosse uma calculadora para o usuário.
Além disso, preparar a aplicação para ser um PWA, exige que você pense em outros pontos, como a utilização sem conexão à internet. O usuário poderia utilizar nesse modo ou sua aplicação irá (e deveria) quebrar? Pois se for necessário, tem como lidar com isso implementando um service-worker.js que irá interceptar as chamadas feitas pelo usuário e poderá, se for necessário, servir respostas dessas requisições que estejam cacheadas ou “simuladas” de alguma outra forma. Mas o ponto é que temos essa ferramenta (service-worker), que pode nos ajudar em diversas atividades da aplicação.

### O que é necessário minimamente?

Aqui descrevo um pouco do que é minimanete necessário para tornar seu aplicativo em um PWA minimamente funcional. Lidando desde dados mínimos que o Chromium (ou qualquer outro navegador que vai rodar seu aplicativo) precisa para identificar e instalar seu aplicaitvo, até estratégias de service-worker para lidar com navegação e caching da aplicação.

#### manifest.json

Basicamente precisamos de dois arquivos, o manifest.json, que terá alguns dados importantes sobre sua aplicação como name ou short_name, id (anteriormente, se não a start_url era obrigatório, mas agora essa dependência é removida se fornecer o id), e o path dos ícones para serem utilizados nas miniaturas do aplicativo. Boas práticas e mais detalhes desse padrão de arquivo, podem ser encontrados aqui (link para a documentação explicando melhor sobre manifest.json). Mas basicamente o mínimo que devemos ter ficaria parecido com o seguinte:

```JSON
{
 "short_name": "Portfolio",
 "name": "Portfolio Manager",
 "id": "/",
 "icons": [
   {
     "src": "/images/portfolio-icon-192-192.png",
     "type": "image/png",
     "sizes": "192x192"
   },
   {
     "src": "/images/portfolio-icon-512-512.png",
     "type": "image/png",
     "sizes": "512x512"
   }
 ],
 "display": "standalone",
 "background_color": "#101828"
}

```

O name é utilizado na instalação do aplicativo e o short_name é o que vai aparecer na tela inicial do usuário, já que o espaço é reduzido. Outro ponto importante, você deve dar pelo menos um desses nomes (qualquer um), pois é importante para os sistemas operacionais que a aba do Chromium (que é o que roda sua aplicação), tenha um título, para evitar alguns tipos de golpes.

O atributo start_url tem o objetivo de falar qual é a página que o usuário deve ser colocado ao abrir o aplicativo. Ele evita que o usuário seja redirecionado para qualquer aba em que ele estava quando baixou e instalou seu PWA. E mais recentemente, temos um outro atributo, o id que efetivamente substitui o start_url e remove a obrigatoriedade dele. Esse id é uma forma do navegador identificar seu PWA, e o melhor valor para esse atributo, pode ser fornecido pelo Chrome Devtools mesmo. Para mais detalhes, pode ler mais aqui.

Os ícones devem ser fornecidos em pelo menos nos tamanhos 192x192 e 512x512, pois é o que o Chromium precisa para lidar com ícones do seu aplicativo em diferentes telas. E o de 512px, é o que aparece na splash screen, quando seu aplicativo é carregado.
Há alguns outros atributos que são interessantes serem colocados no arquivo, com o display, que é o modo com que esse aplicativo será carregado para o usuário e o background_color, que é a cor de fundo para quando seu app é carregado no dispositivo do usuário (para não dar aquele “flicker” de tela branca, para depois mudar para a cor base do fundo do seu aplicativo). Esses e outros atributos podem ser encontrados [aqui](https://web.dev/articles/add-manifest?hl=pt-br#display).

#### service-worker.js

Além do arquivo manifest.json, em alguns casos a implementação de um service-worker se faz útil, pois ele funciona como um “proxy” programável entre sua aplicação e a rede, rodando em background pelo browser, capaz de realizar diversas tarefas. Desse modo ele pode fazer algumas coisas, como:

- suporte offline, interceptando requisições de navegação e outros tipos e servindo páginas e/ou dados cached, ao invés de mostrar a página de erro do browser;
- performance e caching, salvando requisições e dados que podem ser servidos posteriormente;
  notificações push e background sync, pois consegue reagir a notificações mesmo se o app não estiver aberto e até submeter
- formulários após uma reconexão com a internet (se esse for o caso);

O service-worker faz parte de uma API Web Workers, e basicamente mantém sempre o mesmo ciclo de vida em três eventos, são eles: download, install e activate. Sempre que o usuário visitar uma aplicação que tenha um service-worker, ele será baixado, instalado e ativado. Além disso, para ter certeza que a aplicação não permaneça com um service-worker com problemas, a cada 24h ocorre um novo download e instalação desse service-worker.

Uma boa prática é adicionar event listeners para esses eventos e fazer algumas coisas antes deles, como por exemplo organizar os arquivos que devem ser cacheados antes da instalação do service-worker. No caso do evento de activate, é uma boa prática limpar o cache de arquivos antigos e sem uso, para dar espaço para os novos e nesse mesmo momento, fazer o “claim”, ou obter o controle, de todas as páginas do escopo deste service-worker.

Outro evento interessante que podemos adicionar um listener é o evento de fetch, que é disparado sempre que ocorre uma requisição. Ouvindo esse evento, podemos fazer todo tipo de coisa, como responder ao usuário com a rota do arquivo da sua aplicação que contém o Javascript que irá lidar com o routing da sua aplicação. Podemos também fazer o cache das respostas de requisições (que não sejam de navegação, é claro), para o caso de quisermos esses dados disponíveis para o funcionamento offline da aplicação.
Mas o ponto é que o funcionamento do service-worker consiste em, em seu life-cycle, lançar alguns eventos em sequência (ou sempre que o usuário interage com a aplicação), e reagir a esses eventos, de forma programática para atingir alguns objetivos.

Para o caso da minha aplicação, era importante interceptar as requisições de navegação para que a biblioteca de navegação que usei, funcionasse corretamente (considerando o funcionamento de um SPA). E fora isso, um ou outro cache de respostas de requisições HTTP, mais a fim de testes para melhoria de performance da aplicação. No trecho de código abaixo, é possível ver uma parte do arquivo service-worker.js da minha aplicação até o momento:

```js
self.addEventListener('install', (event) => {
 event.waitUntil(
   caches.open(CACHE_NAME).then((cache) => {
     console.log('Opened cache');
     return cache.addAll(urlsToCache);
   })
 );
 self.skipWaiting();
});


self.addEventListener('activate', (event) => {
 event.waitUntil(
   caches.keys().then((cacheNames) => {
     return Promise.all(
       cacheNames.map((cacheName) => {
         if (cacheName !== CACHE_NAME) {
           console.log('Deleting old cache:', cacheName);
           return caches.delete(cacheName);
         }
       })
     );
   })
 );
 self.clients.claim();
});

self.addEventListener('fetch', (event) => {
 const { request } = event;
 const url = new URL(request.url);


 if (request.mode === 'navigate') {
   event.respondWith(
     fetch(request).catch(() => {
       // If network fails, serve the cached index.html for navigation
       return caches.match('/');
     })
   );
   return;
 }
})
//….. continuação do código para o evento de fetch

```

Como é possível ver, esse é o formato do que é esperado de um arquivo service-worker mesmo, sem nenhuma chamada explícita para chamar o script, apenas várias definições de event listeners para eventos dele. Esse é o código que será rodado na thread desse Web Worker ( o service-worker é um tipos de Web Workers disponível na [Web Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)).
