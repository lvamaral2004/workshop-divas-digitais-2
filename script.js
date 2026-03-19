/* =========================================
   ARQUIVO DE JAVASCRIPT (script.js)
   Aqui você adiciona INTERATIVIDADE ao site!
   JavaScript faz coisas acontecerem quando
   o usuário clica, passa o mouse, etc.
   ========================================= */


/* =========================================
   NÍVEL 3 | BOTÃO INTERATIVO
   Esta função é chamada quando o botão
   "Clique aqui para uma surpresa!" é clicado.
   ========================================= */

function mostrarMensagem() {
  // Primeiro, encontramos o elemento com id="mensagem" no HTML
  var caixaDeMensagem = document.getElementById('mensagem');

  // Verificamos se a mensagem está escondida ou visível
  if (caixaDeMensagem.style.display === 'none') {
    // Se estava escondida, mostramos ela!
    caixaDeMensagem.style.display = 'block';

    // 🎯 NÍVEL 3 | Você pode mudar a cor do botão ao clicar também!
    // Descomente as linhas abaixo removendo os // do início:
    // var botao = document.querySelector('.botao-surpresa');
    // botao.style.backgroundColor = '#roxo_ou_outra_cor_aqui';

  } else {
    // Se já estava visível, escondemos ela novamente
    caixaDeMensagem.style.display = 'none';
  }
}


/* =========================================
   EFEITO DE DIGITAÇÃO
   Faz o título aparecer letra por letra,
   como se estivesse sendo digitado!
   ========================================= */

// Encontramos o elemento com a classe "titulo" na página
var titulo = document.querySelector('.titulo');

// Somente roda o efeito se o título existir na página atual
if (titulo) {
  var textoOriginal = titulo.textContent; // Guardamos o texto original
  var i = 0;                              // Começamos na posição 0
  titulo.textContent = '';               // Apagamos o texto inicial

  // Esta função adiciona uma letra por vez ao título
  function typeWriter() {
    if (i < textoOriginal.length) {
      titulo.textContent += textoOriginal.charAt(i); // Adiciona a próxima letra
      i++;
      // 🎯 NÍVEL 3 | Troque o número abaixo para mudar a velocidade da digitação
      // Número menor = mais rápido | Número maior = mais devagar
      setTimeout(typeWriter, 50); // 50 = espera 50 milissegundos entre cada letra
    }
  }

  // Espera 500 milissegundos e depois começa o efeito
  setTimeout(typeWriter, 500);
}


/* =========================================
   TROCA DE IMAGEM AO PASSAR O MOUSE
   Quando o mouse passa por cima da imagem,
   ela muda para outra imagem!
   ========================================= */

// Encontramos a imagem dentro da div com classe "imagem"
var imagem = document.querySelector('.imagem img');

// Somente roda o efeito se a imagem existir na página atual
if (imagem) {

  // ✏️ NÍVEL 1 | Troque pelos nomes dos seus arquivos de imagem
  var imagemOriginal = 'imagem1.png'; // Imagem normal
  var imagemHover    = 'imagem2.png'; // Imagem ao passar o mouse

  // Quando o mouse ENTRA na imagem:
  imagem.addEventListener('mouseenter', function () {
    imagem.style.opacity = '0';           // Deixa a imagem invisível
    setTimeout(function () {
      imagem.src = imagemHover;           // Troca para a segunda imagem
      imagem.style.opacity = '1';         // Deixa a imagem visível novamente
    }, 150);
  });

  // Quando o mouse SAI da imagem:
  imagem.addEventListener('mouseleave', function () {
    imagem.style.opacity = '0';           // Deixa a imagem invisível
    setTimeout(function () {
      imagem.src = imagemOriginal;        // Volta para a imagem original
      imagem.style.opacity = '1';         // Deixa a imagem visível novamente
    }, 150);
  });

}