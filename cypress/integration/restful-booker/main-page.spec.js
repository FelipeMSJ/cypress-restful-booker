/// <reference types="cypress" />

describe('Página Principal', ()=>{
    beforeEach(()=>{
        //Entra no site
        cy.visit('https://automationintesting.online/')

        //Verifica se o método GET retornou 200
        cy.request({
            method: 'GET',
            url: 'https://automationintesting.online/'
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
        })
        
    })

    //Caso de sucesso para reservar quarto
    it('Reservar quarto disponível', ()=>{
        cy.contains('button', 'Book this room').click() //Clica no botão 'Book this room'

        const agendarQuarto = require('../../fixtures/book-room.json') //Importa o arquivo .json da pasta fixtures

        //Preenche os campos de agendamento
        cy.get('input[name="firstname"]').type(agendarQuarto.firstname)
        cy.get('input[name="lastname"]').type(agendarQuarto.lastname)
        cy.get('input[name="email"]').type(agendarQuarto.email)
        cy.get('input[name="phone"]').type(agendarQuarto.phone)

        //Seleciona os dias de agendamento

        //Clica no botão de agendar

        
    })
})