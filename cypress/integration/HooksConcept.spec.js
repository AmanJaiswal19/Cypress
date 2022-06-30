// url('https://app.calliope.pro/users/sign_in')
describe('Hooks Concept', function () {
    // before block will execeute here
    // before (function(){
    //   cypress.log('this will execute before all TC at Once only')
})
// after(function () {
// cy.log('this will execute after all TC at once only')
// })

beforeEach(() => {
    cy.visit('/')
    cy.get('from.input-group>#user_email').eq(0).type('shubhangi5693@gmail.com')
    cy.get("form-control password optional").eq(0).type('Test@123')
    cy.get('buttin[class=btn btn-primary submit ]').eq(0).click()

    cy.log('Run before each test case')
})
afterEach(()=>{
cy.get('')
})