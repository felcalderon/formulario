const formulario = document.getElementById('formulario');
const generarCarta = document.getElementById('crearCarta');
const cartaTeaxt =document.getElementById('carta');

generarCarta.addEventListener('click',e => {
    e.preventDefault();

    const rut = document.getElementById('rut').value;
    const nombre = document.getElementById('nombre').value;
    const apPaterno = document.getElementById('appaterno').value;
    const apMaterno = document.getElementById('apmaterno').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const profesion = document.getElementById('profesion').value;
    const mensaje = document.getElementById('mensaje').value;

  const carta = `Estimados señores de la empresa,

  Me dirijo a ustedes para presentar mi candidatura al puesto de trabajo de apoyo ambiental para Chiloé. Soy ${nombre}, mi rut es ${rut}, de ${edad} años de edad y fecha nacimienti ${fechaNacimiento}, de género ${genero}. Mi profesión es ${profesion} y estoy muy motivado/a para postular al trabajo debido a ${mensaje}.
  
  Espero tener la oportunidad de conversar con ustedes en una entrevista para profundizar en los detalles de mi experiencia y mis habilidades para el puesto. Me pueden contactar a través del correo electrónico ${email} o al número de celular ${celular}.
  
  Quedo a la espera de su respuesta. 
  
  Atentamente,
  ${nombre} ${apPaterno} ${apMaterno}`;

  cartaTeaxt.value = carta;
  


})




