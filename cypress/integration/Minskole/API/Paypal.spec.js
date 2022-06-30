describe('verify the order API', () => {

    // token --- blank
    let token = ""
    it('verify the order API', () => {
        cy.request({
            method: "POST",
            url: "https://api-m.sandbox.paypal.com/v1/oauth2/token",
            headers: {
                Authorization: "Basic QVpFbU1IdmJuSEpRUFJ3ZHdON2pWaDF6LXVMTjB2ZWNhMy1Td2haa09KLTE1bmJmcGpYb29DRU1NaE4yODAzcWNiQnhlQ1ZXYWZtWnNRb1Q6RUZOemMwTDZqSlpNSWd5eWhoVmpWME1zWEZvOFVESzhsMXJVUHRlRXV0VEdid0FKbEx3UXE5X2NtNjBJeEl2TGtOczU2NWRsQ2JMSWdXakk="
            },
            form: true,
            body: {
                grant_type: "client_credentials"
            }
        }).then(function (res) {
            cy.log(res.body.access_token)
            token = res.body.access_token
        }).then(function () {
            cy.request({

                method: 'POST',
                url: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: {
                    "intent": "CAPTURE",
                    "purchase_units": [
                        {
                            "amount": {
                                "currency_code": "USD",
                                "value": "100.00"
                            }
                        }
                    ]
                }
            }).then(function (res) {
                cy.log(res)
                expect(res.status).to.equal(201)
                expect(res.body).to.have.property('id')
            })
        })

    })
})

