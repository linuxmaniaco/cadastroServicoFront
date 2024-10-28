import React from 'react';
import '../assets/formProduto.css'

function Form() {
  return (
    <div className="form-container">
      <h2>Registrar / Editar Produtos</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Nome do produto" required />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" placeholder="Descrição do produto" required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" step="0.01" placeholder="Preço do produto" required />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock:</label>
          <input type="number" id="stock" name="stock" placeholder="Quantidade no estoque" required />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">Salvar</button>
          <button type="button" className="btn-cancel">Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;