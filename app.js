(function() {

    "use strict";

    $('#button').on('click', function() {

        // html seite mit button json schicken
        // zahlen
        // bools null
        // objekt array
        // array aus strings
        // array aus objekten

        var data = {
            number: 0,
            bool: true,
            string: 'test',
            null: null,
            undefined: undefined,
            symbol: Symbol(),
            date: new Date(),
            object: {
                test: '!"§$%&/()=?`*Ä_:;,.-_.,+~´`}][{³²°|<>'
            },
            stringArray: ["test1", "test2"],
            objectArray: [
                {
                    number: 0,
                    bool: true,
                },{
                    number: 0,
                    bool: true,
                }
            ],
            arrayArray: [
                [0,1,2,3],
                ['a','b','c']
            ],
            mixedArray: [
                [0,1,2,3],
                {test:'test3'},
                ['a','b','c']
            ]
        };

        // zum überprüfen wie die Daten aussahen vor dem losschicken
        console.log(data);
        data = JSON.stringify(data);
        console.log('json data: ' + data);

        $.ajax({
            url: '/endpoint.fcgi',
            data: data,
            method: 'POST',
            success: function(response) {
                console.log('response: ' + response);
            },
            error: function(error) {
                console.log('error: ' + error.state());
            }
        });
    });
})();