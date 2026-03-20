// Modal Esqueceu Senha
document.addEventListener('DOMContentLoaded', function() {
  const esqueceuLink = document.getElementById('esqueceuSenha');
  const modalSenha = document.getElementById('modalSenha');
  const modalLogin = document.getElementById('modalLogin');
  if (esqueceuLink) {
	  esqueceuLink.addEventListener('click', function(e) {
		  e.preventDefault();
		  modalLogin.classList.remove('mostrar');
		  setTimeout(() => modalLogin.style.display = 'none', 350);
		  modalSenha.style.display = 'flex';
		  setTimeout(() => modalSenha.classList.add('mostrar'), 10);
	  });
  }
  const fecharSenha = document.getElementById('fecharSenha');
  if (fecharSenha) {
	  fecharSenha.addEventListener('click', function() {
		  modalSenha.classList.remove('mostrar');
		  setTimeout(() => modalSenha.style.display = 'none', 350);
	  });
  }
  const voltarLogin = document.getElementById('voltarLogin');
  if (voltarLogin) {
	  voltarLogin.addEventListener('click', function(e) {
		  e.preventDefault();
		  modalSenha.classList.remove('mostrar');
		  setTimeout(() => modalSenha.style.display = 'none', 350);
		  modalLogin.style.display = 'flex';
		  setTimeout(() => modalLogin.classList.add('mostrar'), 10);
	  });
  }
  const senhaForm = document.getElementById('senhaForm');
  if (senhaForm) {
	  senhaForm.addEventListener('submit', function(e) {
		  e.preventDefault();
		  const email = document.getElementById('emailRecupera').value.trim();
		  if (!email) {
			  alert('Por favor, preencha o e-mail.');
			  return;
		  }
		  alert('Se o e-mail estiver cadastrado, você receberá instruções para recuperar sua senha.');
		  modalSenha.classList.remove('mostrar');
		  setTimeout(() => modalSenha.style.display = 'none', 350);
	  });
  }
});
// Modal login
document.addEventListener('DOMContentLoaded', function() {
	const modalLogin = document.getElementById('modalLogin');
	const abrirLogin = document.getElementById('abrirLogin');
	const fecharLogin = document.getElementById('fecharLogin');

	function updateLoginLink() {
		const loggedIn = localStorage.getItem('loggedIn') === 'true';
		if (abrirLogin) {
			abrirLogin.textContent = loggedIn ? 'Logout' : 'Login';
		}
	}

	updateLoginLink();

	window.addEventListener('loginStateChanged', updateLoginLink);

	abrirLogin.addEventListener('click', function(e) {
		const loggedIn = localStorage.getItem('loggedIn') === 'true';
		if (loggedIn) {
			e.preventDefault();
			localStorage.removeItem('loggedIn');
			window.dispatchEvent(new Event('loginStateChanged'));
			alert('Deslogado com sucesso!');
			return;
		}
		e.preventDefault();
		modalLogin.style.display = 'flex';
		setTimeout(() => modalLogin.classList.add('mostrar'), 10);
	});
	fecharLogin.addEventListener('click', function() {
			modalLogin.classList.remove('mostrar');
			setTimeout(() => modalLogin.style.display = 'none', 350);
	});

	// Modal cadastro
	const modalCadastro = document.getElementById('modalCadastro');
	const abrirCadastro = document.getElementById('abrirCadastro');
	const fecharCadastro = document.getElementById('fecharCadastro');
	abrirCadastro.addEventListener('click', function(e) {
		e.preventDefault();
		modalCadastro.style.display = 'flex';
		setTimeout(() => modalCadastro.classList.add('mostrar'), 10);
	});
	fecharCadastro.addEventListener('click', function() {
		modalCadastro.classList.remove('mostrar');
		setTimeout(() => modalCadastro.style.display = 'none', 350);
	});

	// Abrir cadastro do modal login
	const abrirCadastroModal = document.getElementById('abrirCadastroModal');
	if (abrirCadastroModal) {
		abrirCadastroModal.addEventListener('click', function(e) {
			e.preventDefault();
			modalLogin.classList.remove('mostrar');
			setTimeout(() => modalLogin.style.display = 'none', 350);
			modalCadastro.style.display = 'flex';
			setTimeout(() => modalCadastro.classList.add('mostrar'), 10);
		});
	}
	// Submit cadastro
	const cadastroForm = document.getElementById('cadastroForm');
	if (cadastroForm) {
		cadastroForm.addEventListener('submit', function(e) {
			e.preventDefault();
			const nome = document.getElementById('cadastroNome').value.trim();
			const email = document.getElementById('cadastroEmail').value.trim();
			const senha = document.getElementById('cadastroSenha').value.trim();
			if (!nome || !email || !senha) {
				alert('Por favor, preencha todos os campos.');
				return;
			}
			alert('Cadastro realizado com sucesso! Você pode fazer login agora.');
			modalCadastro.classList.remove('mostrar');
			setTimeout(() => modalCadastro.style.display = 'none', 350);
		});
	}
	// Modal aviso resultados
	const modalAviso = document.getElementById('modalAviso');
	const abrirImagem = document.getElementById('abrirImagem');
	const fecharAviso = document.getElementById('fecharAviso');
	abrirImagem.addEventListener('click', function(e) {
			e.preventDefault();
			const avisoMensagem = document.getElementById('avisoMensagem');
			const loggedIn = localStorage.getItem('loggedIn') === 'true';
			if (avisoMensagem) {
				avisoMensagem.textContent = loggedIn ? 'Não há resultados disponíveis.' : 'Você precisa estar logado para conferir seus resultados.';
			}
			modalAviso.style.display = 'flex';
			setTimeout(() => modalAviso.classList.add('mostrar'), 10);
	});
	fecharAviso.addEventListener('click', function() {
			modalAviso.classList.remove('mostrar');
			setTimeout(() => modalAviso.style.display = 'none', 350);
	});
});
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;

function showSlide(i){

if(i >= slide.length){
index = 0;
}

if(i < 0){
index = slide.length - 1;
}

slides.style.transform = "translateX(-" + index * 100 + "%)";

dots.forEach(dot => dot.classList.remove("active"));
dots[index].classList.add("active");

}

document.querySelector(".next").addEventListener("click", () => {
index++;
showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
index--;
showSlide(index);
});

dots.forEach((dot,i)=>{
dot.addEventListener("click", ()=>{
index = i;
showSlide(index);
});
});

setInterval(()=>{
index++;
showSlide(index);
},4000);

/* ANIMAÇÃO AO APARECER */

const elementos = document.querySelectorAll(".animar");

function animarScroll(){

const topoPagina = window.scrollY + window.innerHeight - 100;

elementos.forEach(elemento => {

if(topoPagina > elemento.offsetTop){
elemento.classList.add("ativo");
}

});

}

window.addEventListener("scroll", animarScroll);

animarScroll();

/* CARROSSEL EXAMES */

const slidesExames = document.querySelector(".slides-exames");
const slideExame = document.querySelectorAll(".slide-exame");
const dotsExame = document.querySelectorAll(".dot-exame");

let indexExame = 0;

if(slidesExames && slideExame.length > 0){

function showSlideExame(i){

if(i >= slideExame.length){
indexExame = 0;
}

if(i < 0){
indexExame = slideExame.length - 1;
}

slidesExames.style.transform = "translateX(-" + indexExame * 100 + "%)";

if(dotsExame.length){
dotsExame.forEach(dot => dot.classList.remove("active"));

if(dotsExame[indexExame]){
dotsExame[indexExame].classList.add("active");
}

}

}

const nextBtn = document.querySelector(".next-exame");
const prevBtn = document.querySelector(".prev-exame");

if(nextBtn){
nextBtn.addEventListener("click", ()=>{
indexExame++;
showSlideExame(indexExame);
});
}

if(prevBtn){
prevBtn.addEventListener("click", ()=>{
indexExame--;
showSlideExame(indexExame);
});
}

dotsExame.forEach((dot,i)=>{
dot.addEventListener("click", ()=>{
indexExame = i;
showSlideExame(indexExame);
});
});

setInterval(()=>{
indexExame++;
showSlideExame(indexExame);
},4000);

}

document.querySelectorAll(".animar").forEach(el=>{
el.classList.add("ativo");
});

// Scroll suave e animação ao clicar nos links do cabeçalho
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav.menu a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Ativa animação imediatamente
                const animar = target.querySelector('.animar');
                if (animar) {
                    animar.classList.remove('ativo');
                    setTimeout(() => animar.classList.add('ativo'), 100);
                }
            }
        });
    });
});