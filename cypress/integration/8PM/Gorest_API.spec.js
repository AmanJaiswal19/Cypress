// describe('validate the Gorest API', () => {

//     let token = 'd209119cc8183e44f215f5f895cd80e95f86b74c355984fae9fc80f12d36283b'

//     it('validate the GET Request', () => {
//         cy.request({
//             method: 'GET',
//             url: 'https://gorest.co.in/public/v2/users',
//             headers: {
//                 'Authorization': 'Bearer' + token
//             }
//         }).then(function (response) {
//             expect(response.status).to.equal(200)
//         })
//     })

//     it('verify the POST API', () => {
//         cy.request({
//             method: 'POST',
//             url: "https://gorest.co.in/public/v2/users",
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             },
//             body: {
//                 name: "Tenali Ramakrishna", gender: "male",
//                 email: "tenali.raasajkfjsagjkjfjmakrishna@15ce.com", status: "inactive"
//             }
//         }).then(function (response) {
//             expect(response.status).to.equal(201)
//         })
//         // it('Verify the Gorest POST Api', () => {
//         //     cy.request({
//         //         method: "POST",
//         //         url: "https://gorest.co.in/public/v1/users",
//         //         headers: {
//         //             Authorization: `Bearer ${token}`
//         //         },
//         //         body: {
//         //             "name": "Tenali Ramakrishna",
//         //             "gender": "male",
//         //             "email": "AherMahesh45@gmail.com",
//         //             "status": "active"
//         //         }
//         //     }).then((res) => {
//         //         expect(res.status).to.eq(201)

//         //     })

//     })

//     it('verify the PUT Request', () => {
//         cy.request({
//             method: 'PUT',
//             url: 'https://gorest.co.in/public/v2/users/7',
//             headers: {
//                 'Authorization': 'Bearer' + token
//             },
//             body: { name: "Allasani Peddana", email: "allasagfklslni.peddana@15ce.com", status: "active" }
//         }).then(function (response) {
//             expect(response.status).to.equal(200)
//         })
//     })

//     it('verify the DELETE API', () => {
//         cy.request({
//             method: 'DELETE',
//             url: "https://gorest.co.in/public/v2/users/ 4346",
//             headers: {
//                 'Authorization': 'Bearer ' + token
//             }
//         }).then(function (res) {
//             expect(res.status).to.equal(204)
//         })
//     })
// })

//------------------------------------------------------------------------//

describe('verify the GET API', function () {

    let token = 'd209119cc8183e44f215f5f895cd80e95f86b74c355984fae9fc80f12d36283b'

    it('verify the GET API', function () {
        cy.request({
            method: 'GET',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (res) {
            expect(res.status).to.equal(200)
        })
    })

    it.only('verify the POST API', function () {
        cy.request({
            method: 'POST',
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                'Authorization': 'Bearer' + token
            },
            body: {
                "name": "Tenali Ramakrishna", "gender": "male",
                "email": "abc${Math.random()*6}@gmail.com", "status": "active"
            }
        }).then(function (res) {
            expect(res.status).to.equal(201)
        })
    })

    it('verify the PUT API', function () {
        cy.request({
            method: 'PUT',
            url: "https://gorest.co.in/public/v2/users/56",
            headers: {
                'Authorization': 'Bearer ' + token
            },
            body: obj
        }).then(function (res) {
            expect(res.status).to.equal(200)
            expect(res.body.email).to.equal(obj.email)
            expect(res.body.gender).to.equal(obj.gender)
            expect(res.body.status).to.equal(obj.status)
            expect(res.body.name).to.equal(obj.name)
        })
    })


    it('verify the DELETE API', function () {
        cy.request({
            method: 'DELETE',
            url: "https://gorest.co.in/public/v2/users/6995",
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function (res) {
            expect(res.status).to.equal(204)

        })
    })
})