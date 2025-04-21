document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
  
    form.addEventListener("submit", function (e) {
      const nome = form.nome.value.trim();
      const telefone = form.telefone.value.trim();
      const email = form.email.value.trim();
      const tipo = form.querySelector('input[name="tipo"]:checked');
      const horario = form.horario.value;
      const descricao = form.descricao.value.trim();
      const servicoMarcado = form.querySelectorAll('input[name="servico"]:checked');
  
      if (nome.length < 3) {
        alert("Por favor, preencha seu nome completo.");
        e.preventDefault();
        return;
      }
  
      if (!email.includes("@") || !email.includes(".")) {
        alert("Insira um e-mail válido.");
        e.preventDefault();
        return;
      }
  
      if (telefone.length < 9) {
        alert("Telefone inválido. Digite ao menos 9 dígitos.");
        e.preventDefault();
        return;
      }
  
      if (!tipo) {
        alert("Selecione se você é pessoa física ou jurídica.");
        e.preventDefault();
        return;
      }
  
      if (horario === "") {
        alert("Selecione o melhor horário para contato.");
        e.preventDefault();
        return;
      }
  
      if (servicoMarcado.length === 0) {
        alert("Selecione pelo menos um tipo de serviço.");
        e.preventDefault();
        return;
      }
  
      if (descricao.length < 10) {
        alert("Descreva melhor o serviço que deseja contratar.");
        e.preventDefault();
        return;
      }
  
      // Se passou por tudo, o FormSubmit faz o envio
      alert("Formulário validado com sucesso! Enviando... ✅");
    });
  });
  