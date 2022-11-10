'use strict';

const respon = require('./response');
const connection = require('./koneksi');

exports.index = function(req, response){
    respon.success('REST API Sukses')
};