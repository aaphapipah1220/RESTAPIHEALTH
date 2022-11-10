'use strict';

exports.success = function(values, response) {
    let data = {
        'status': 200,
        'values': values
    };

    response.json(data);
    response.end();
}