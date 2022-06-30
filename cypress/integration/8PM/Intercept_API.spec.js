describe('verify functionality of API', () => {

    function ValidateApi(method, url, body, status) {
        if (body != undefined) {
            cy.request({
                method: method,
                url: url,
                body: body
            }).then(function (res) { //storing responnse in res
                //cy.log('res')
                expect(res.status).to.equal(status)
            })
        }
        else {
            cy.request({
                method: method,
                url: url
            }).then(function (res) {  //storing responnse in res
                //cy.log('res')
                expect(res.status).to.equal(status)
            })
        }
    }

    it('verify GET request', () => {
        ValidateApi("GET", 'https://reqres.in/api/users?page=2', undefined, 200)
    })

    it('verify POST request', () => {
        ValidateApi("POST", 'https://reqres.in/api/users', {
            "name": "morpheus",
            "job": "leader"
        }, 201)
    })

    it('verify PUT request', () => {
        ValidateApi("PUT", 'https://reqres.in/api/users/2', {
            "name": "morpheus",
            "job": "zion resident"
        }, 200)
    })

    it('verify DELETE request', () => {
        ValidateApi("DELETE", 'https://reqres.in/api/users/2', undefined, 204)
    })
})

//----------------------------------------------------------------------------------//

describe('vefify the API Request', () => {

    it('vefify the GET Request', () => {

        cy.request({
            method: 'GET',
            url: "https://reqres.in/api/users?page=2"
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })
    })

    it('verify the POST Request', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function (response) {
            expect(response.status).to.eq(201)
        })
    })

    it('verify the PUT Request', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        }).then(function (response) {
            expect(response.status).to.eq(200)
        })
    })

    it('verify the DELETE Request', () => {

        cy.request({
            method: 'DELETE',
            url: "https://reqres.in/api/users/2"
        }).then(function (response) {
            expect(response.status).to.eq(204)
        })
    })
})