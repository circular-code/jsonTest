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
        ]
    };

    $.ajax({
        url: 'url hier einfügen',
        data: JSON.stringify(data),
        method: 'POST',
        success: function(response) {
           console.log(response);
        },
        error: function(er) {
            console.log(er);
        }
    });
});