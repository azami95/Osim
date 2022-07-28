

describe ('First Test', () => {
    beforeEach('Log In', () => {
        cy.LogInToWebPage()
    })
    

    it.skip('First Try', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()


        cy.get('#inputEmail1').type('Azami')

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then(box => {
           cy.wrap(box).eq(0).check({force: true})
           cy.wrap(box).eq(1).check({force: true})
           cy.wrap(box).eq(0).should('not.be.checked')
           //cy.contains('nb-card', 'Using the Grid').find('nb-radio').eq(2).should('contain', 'Disabled Option')
           cy.wrap(box).eq(2).should('be.disabled')

            
        })
    })    

    it.skip ('Second Try', () => {
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //cy.contains('nb-card', 'Basic form').then(basic => {
            //const email = basic.find('[for="exampleInputEmail1"]').text()
            //const password = basic.find('[for="exampleInputPassword1"]').text()

            //expect(email).to.equal('Email address')
            //expect(password).to.equal('Password')
            //cy.wrap(basic).find('[for="exampleInputEmail1"]').should('contain', 'Email address')
            //cy.get('nb-card.inline-form-card').invoke('text').then(text => {
                //expect(text).to.equal('Inline form')
            cy.contains('nb-card','Horizontal form')
            .find('.custom-checkbox')
            .click()
            .invoke('attr', 'class').then(classValue => {
                expect(classValue).to.contain('checked')
            })
        })

    it.skip ('Trird Try', () => {
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

         cy.contains('nb-card', 'Common Datepicker')
             .find('[placeholder="Form Picker"]')
                 .then(input => {
                     cy.wrap(input)
                         .click()
                     cy.get('nb-calendar-day-picker')
                         .contains('17')
                         .click()
                     cy.wrap(input)
                         .invoke('prop', 'value')
                         .should('contain', 'May 17, 2022')
             })
         })
        
         it.only('Forth Try', () => {
            //cy.contains('Material Light')
                //.click()
            //cy.get('.option-list')
            //cy.get('nb-option-list')
                //.find('.option-list')
                //.contains('Dark')
                //.click()
            //cy.get('nb-layout-header')
                //.find('nb-select', 'button')
                //.should('contain', 'Dark')
            //cy.get('nb-layout-header')
                //.should('have.css', 'background-color', 'rgb(34, 43, 69)')  
                
            

            cy.get('nb-layout-header nb-select').then(dropDown => {
               cy.wrap(dropDown).click()
               cy.get('.option-list nb-option').each((list, index) => {
                
                const listColors = {
                                    'Light': 'rgb(255, 255, 255)',
                                    'Dark': 'rgb(34, 43, 69)',
                                    'Cosmic': 'rgb(50, 50, 89)',
                                    'Corporate': 'rgb(255, 255, 255)',
                                    'Material Light': 'rgb(98, 0, 238)',
                                    'Material Dark': 'rgb(233, 29, 99)'
            }
                   const listName = list.text().trim()

                   cy.wrap(list)
                    .click()
                   cy.wrap(dropDown)
                    .should('contain', listName)
                   cy.get('nb-layout-header')
                    .should('have.css', 'background-color', listColors[listName]) 

                   if(index < 5) {
                    cy.wrap(dropDown).click()
                   }
                   
               })
            })
                      
                    
            
         })


         it.skip ('Fifth Try', () => {
            cy.contains('Tables & Data').click()
            cy.contains('Smart Table').click()

            cy.get('table tbody').contains('tr', 'Snow').then( row => {
               //cy.wrap(row).find('td').eq(5).should('contain', 'snow@gmail.com')
               cy.wrap(row).find('.nb-edit').click()
               cy.wrap(row).find('td').eq(6).click().clear().type(26) 
               cy.wrap(row).find('.nb-checkmark').click()
               cy.wrap(row).find('td').eq(6).should('contain', 26)

            cy.get('nb-card').find('thead').then(add => {
                cy.wrap(add).find('tr').eq(1).find('.nb-plus').click()
                cy.wrap(add).find('tr').eq(2).then(navigator => {
                   cy.wrap(navigator).find('[placeholder="First Name"]').type('Aziz')
                   cy.wrap(navigator).find('[placeholder="Last Name"]').type('Azami')
                   cy.wrap(navigator).find('.nb-checkmark').click()
                   cy.get('tbody tr').eq(0).find('td').eq(2).should('contain', 'Aziz')
                })

                const birth = [20, 30, 40, 100]

                cy.wrap(birth).each(birth => {
                    cy.get('thead').find('tr').eq(1).find('th').eq(6).click().clear().type(birth)
                    cy.wait(500)
                    
                    cy.get('tbody tr').each(age => {
                        if(birth == 100){
                        cy.get('tbody').should('contain', 'No data found')

                        }else{
                            cy.wrap(age).find('td').eq(6).should('contain', birth) 
                        }
                    
                    
                })

                })

            
                
                
            })   
            })

         })
        
       
   
         it.skip ('Sixth Try', () => {
            cy.contains('Forms').click()
            cy.contains('Datepicker').click()
            cy.get('nb-card-body [placeholder="Form Picker"]').click()
            cy.get('nb-calendar-day-picker').contains(17).click()
            cy.get('input[placeholder="Form Picker"]').click()
            cy.get('nb-calendar-view-mode > button[status=basic]').then(element => cy.log(element))
            cy.get('input[placeholder="Form Picker"]').shadow().find('div[contenteditable="plaintext-only"]')

            //cy.get('nb-card-header').find('button').invoke('text').should('contain', 'May 2022')

        //  function selectCurrent(day) {
        //     let date = new Date()
        //     date.setDate()(date.getDate() + day)
        //     let futureDate = getDate()
        //     let futureMonth = date.toLocaleString('defaul', {month: 'string'})


        //     cy.get('nb-calendar-day-picker').contains(17).click()
        //     cy.get('nb-datepicker-container nb-calendar-view-mode').invoke('text').should('contain', 'May 2022')

        //     }




         })
            
        

         it.skip ('Seventh Try', () => {
            cy.contains('Tables & Data').click()
            cy.contains('Smart Table').click()
            

            const stub = cy.stub()

            cy.on('window=confirm', stub) 

            cy.get('tbody tr').eq(2).find('.nb-trash').click().then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
            })
    

            

         })

          it.skip ('Page Object Patern', () => {
            navigateTo.FormLayout() 
          })  
          
    
})