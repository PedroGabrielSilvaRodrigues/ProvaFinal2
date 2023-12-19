const request = require('supertest');
const app = require('../app');

describe('Testes automatizados para a API de Pessoas', () => {
  it('Deve adicionar uma pessoa via POST', async () => {
    const response = await request(app)
      .post('/pessoas')
      .send({ nome: 'Pedro Gabriel', email: 'pedrogabie17@gmail.com', cpf: '105.456.868-17' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Pessoa adicionada com sucesso');
    expect(response.body).toHaveProperty('pessoa');
    expect(response.body.pessoa).toHaveProperty('nome', 'Pedro Gabriel');
    expect(response.body.pessoa).toHaveProperty('email', 'pedrogabie17@gmail.com');
    expect(response.body.pessoa).toHaveProperty('cpf', '105.456.868-17');
  });

  it('Deve remover uma pessoa via DELETE', async () => {
    const response = await request(app).delete('/pessoas/105.456.868-17');

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Pessoa removida com sucesso');
    expect(response.body).toHaveProperty('cpf', '105.456.868-17');
  });
});