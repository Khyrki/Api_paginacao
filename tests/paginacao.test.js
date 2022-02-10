const chai = require('chai');
const chaihttp = require('chai-http');

const app = require('../src/index');

chai.use(chaihttp);

const { expect } = chai;

describe('GET /paginacao', () => {

  describe('Teste validacoes sem "paginalAtual"', () => {
    let response;
    before(async () => {
      response = await chai.request(app)
        .get('/paginacao')
        .send({
          "paginasTotal": 2
        })
    });

    it('Retorna a mensagem de erro', () => {
      expect(response.body.message).to.equal('"paginaAtual" is required');
    });
  });

  describe('Teste validacoes sem "paginasTotal"', () => {
    let response;
    before(async () => {
      response = await chai.request(app)
        .get('/paginacao')
        .send({
          "paginaAtual": 2
        })
    });

    it('Retorna a mensagem de erro', () => {
      expect(response.body.message).to.equal('"paginasTotal" is required');
    });

  });

  describe('Teste validacoes passando "paginalAtual" maior que "paginasTotal"', () => {
    let response;
    before(async () => {
      response = await chai.request(app)
        .get('/paginacao')
        .send({
          "paginaAtual": 4,
          "paginasTotal": 2
        })
    });

    it('Retorna a mensagem de erro', () => {
      expect(response.body.message).to.equal('"paginaAtual" cant be greater then "paginasTotal"');
    });

  });

  describe('Teste retorno da api', () => {
    let response;
    before(async () => {
      response = await chai.request(app)
        .get('/paginacao')
        .send({
          "paginaAtual": 5,
          "paginasTotal": 10
        })
    });

    it('Retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });

    it('O objeto possui a propriedade "id"', () => {
      expect(response.body).to.have.property('id');
    });

    it('O objeto possui a propriedade "paginacao"', () => {
      expect(response.body).to.have.property('paginacao');
    });

    it('Retorna array de paginação', () => {
      expect(response.body.paginacao).to.have.members(["...","3","4","**5**","6","7","..."]);
    });

  });

});
