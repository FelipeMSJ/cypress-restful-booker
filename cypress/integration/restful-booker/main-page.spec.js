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
        //cy.contains('button', 'Book this room').trigger('mousedown').trigger('mouseup') //Clica no botão 'Book this room'

        const agendarQuarto = require('../../fixtures/book-room.json') //Importa o arquivo .json da pasta fixtures

        //PREENCHE OS CAMPOS DE AGENDAMENTO
        cy.get('input[name="firstname"]').type(agendarQuarto.firstname)
        cy.get('input[name="lastname"]').type(agendarQuarto.lastname)
        cy.get('input[name="email"]').type(agendarQuarto.email)
        cy.get('input[name="phone"]').type(agendarQuarto.phone)

        //SELECIONA OS DIAS DE AGENDAMENTO
        //Da um atributo id com o número do checkout do cliente
        cy.contains('button', agendarQuarto.bookingdates.checkout.slice(-2)).invoke('attr', 'id', agendarQuarto.bookingdates.checkout.slice(-2))
        //Faz com que o mouse arraste a partir da data de checkin até a data de chekout. Funciona manual, não consegui automatizar.
        //Para utilizar .drag é necessário instalar um plugin
        cy.contains('button', agendarQuarto.bookingdates.checkin.slice(-2)).drag(`button[id='${agendarQuarto.bookingdates.checkout.slice(-2)}']`)

        //CLICA NO BOTÃO DE AGENDAR
        cy.contains('button', 'Book').click()
    })
})