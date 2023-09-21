using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ReceitaApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarrinhoController : ControllerBase
    {
        private readonly List<Ingrediente> _carrinho = new List<Ingrediente>();

        [HttpPost("adicionar")]
        public IActionResult AdicionarIngrediente([FromBody] Ingrediente ingrediente)
        {
            _carrinho.Add(ingrediente);
            return Ok();
        }

        [HttpGet("calcularTotal")]
        public IActionResult CalcularTotal()
        {
            decimal total = _carrinho.Sum(ingrediente => ingrediente.Valor);
            return Ok(total);
        }
    }
    public class Ingrediente{
        public string Nome { get; set; }
        public decimal Valor { get; set; }
        public string Imagem { get; set; }}
}
