const express = require('express');

const rotas = express.Router();

rotas.post('user', () => {
//  adiconar novo usuario com o seguinte formatato
//  {
//   "displayName": "Brett Wiltshire",
//   "email": "brett@email.com",
//   "password": "123456",
//   "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
// }

// displayName string min 8
// password string min 6
// email
//    ser unico > { message: 'User already registered' }
//    formato blabla@blabla > 
// Caso contrário, retornar a mesma resposta do endpoint de /login, um token JWT:
});

module.exports = rotas;
