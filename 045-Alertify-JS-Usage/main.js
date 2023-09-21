$(document).on('click', '.detail-btn', function (e) {
    var closable = alertify.alert().setting('closable');
        const customer = {
            id: 12345,
            name: "John Doe",
            email: "johndoe@example.com",
            phone: "123-456-7890",
        };
    
        alertify.alert()
        .setting({
            message: `
                <div>
                    <b>id: </b> ${customer.id}
                </div>
                <div>
                    <b>Name: </b> ${customer.name}
                </div>
                <div>
                    <b>Phone: </b> ${customer.phone}
                </div>
                <div>
                    <b>E-Mail: </b> ${customer.email}
                </div>
            `,
            title: 'Customer Details',
            label: 'Agree',
            onok: function() {alertify.success('Done');}
        }).show();
    });