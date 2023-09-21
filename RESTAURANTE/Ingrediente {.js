
class Ingrediente {
    constructor(nome, valor) {
      this.nome = nome;
      this.valor = valor;
    }
  }
  
  class Receita {
    constructor() {
      this.ingredientes = [];
    }
  
    adicionarIngrediente(ingrediente) {
      this.ingredientes.push(ingrediente);
    }
  
    calcularValorTotal() {
      let valorTotal = 0;
      this.ingredientes.forEach((ingrediente) => {
        valorTotal += ingrediente.valor;
      });
      return valorTotal;
    }
  }

  const farinha = new Ingrediente("farinha", 2.0);
  const açúcar = new Ingrediente("açúcar", 1.5);
  const ovos = new Ingrediente("ovos", 3.0);
  const leite = new Ingrediente("leite", 1.0);
  const fermento = new Ingrediente("fermento", 0.5);
  const minhaReceita = new Receita();
  minhaReceita.adicionarIngrediente(farinha);
  minhaReceita.adicionarIngrediente(açúcar);
  minhaReceita.adicionarIngrediente(ovos);
  minhaReceita.adicionarIngrediente(leite);
  minhaReceita.adicionarIngrediente(fermento);
  const valorTotal = minhaReceita.calcularValorTotal();
  console.log("Valor total da receita: $" + valorTotal.toFixed(2));
