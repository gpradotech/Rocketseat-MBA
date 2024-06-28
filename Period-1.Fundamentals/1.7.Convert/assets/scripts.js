// Cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// obtendo os elementos do formulário
const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');

// Manipulando o input amount para receber apenas números
amount.addEventListener('input', () => {
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "");
})

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    
    // Aplica a classe que exibe o footer com o resultado
    footer.classList.add("show-result")


  } catch (error) {
    // Remove a classe do footer o tornando oculto
    footer.classList.remove("show-result")
    
    console.log(error);
    alert("Não foi possível converter.")
  }
}

// Formata a moeda da cotação para o Real brasileiro
function formatCurrencyBRL(value) {
  // Converte para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00)
  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}