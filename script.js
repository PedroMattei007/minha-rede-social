const formulario = document.getElementById("formLogin");
//email para teste
const adm = "admin@teste.com";
const senhaadm = "1234"


console.log(email);
console.log(senha);

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    // Pega o email digitado na página
    const email = document.getElementById("email").value;
    // Pega a senha digitada na página
    const senha = document.getElementById("senha").value;
    // Mensagem de aprovação
    const mensagem = document.getElementById("mensagem");


    // validação de e-mail e senha
    if (email === adm && senha === senhaadm){
        mensagem.textContent = "login aprovado";
        mensagem.className = "sucesso"
    } else {
        mensagem.textContent = "Email ou senha incorretos";
        mensagem.className = "erro" 
    };



   
    console.log("O formulário foi enviado!");

});