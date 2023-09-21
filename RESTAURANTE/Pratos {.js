class Receita {
    constructor() {
      this.ingredientes = [];
      this.ingredientesValores = {};  // Armazenar valores dos ingredientes
    }
  
    adicionarIngrediente(ingrediente, valor) {
      this.ingredientes.push(ingrediente);
      this.ingredientesValores[ingrediente] = valor;
    }
  
    calcularCustoTotal() {
      let custoTotal = 0;
      for (let i = 0; i < this.ingredientes.length; i++) {
        const ingrediente = this.ingredientes[i];
        const valor = this.ingredientesValores[ingrediente];
        custoTotal += valor;
      }
      return custoTotal;
    }
  
    exibirIngredientes() {
      console.log("Lista de ingredientes:");
      this.ingredientes.forEach((ingrediente, index) => {
        console.log(index + 1 + ". " + ingrediente + " - Valor: $" + this.ingredientesValores[ingrediente]);
      });
    }
  }
  
  const minhaReceita = new Receita();
  
  minhaReceita.adicionarIngrediente("farinha", 2.5); // Exemplo de valor: R$ 2.50
  minhaReceita.adicionarIngrediente("açúcar", 1.0);  // Exemplo de valor: R$ 1.00
  minhaReceita.adicionarIngrediente("ovos", 0.3);     // Exemplo de valor: R$ 0.30
  minhaReceita.adicionarIngrediente("leite", 1.2);    // Exemplo de valor: R$ 1.20
  minhaReceita.adicionarIngrediente("fermento", 0.5); // Exemplo de valor: R$ 0.50
  
  minhaReceita.exibirIngredientes();
  console.log("Custo total da receita: $" + minhaReceita.calcularCustoTotal().toFixed(2));
  