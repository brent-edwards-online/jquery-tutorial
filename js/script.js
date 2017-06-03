$(document).ready(() => {
  let timerCount = 0;
  setInterval(
    () => {
     $('#timerText').html(
      `<h3>${timerCount}</h3>`
     );
     timerCount++;
    },
     1000  /* 10000 ms = 10 sec */
  );

  let colors = ['blue','green','red','pink'];
  $('#theContainer').on('click', () => {
    let rndm = Math.floor(Math.random() * 4);
    let color = colors[rndm];
    $('#theContainer').css('background-color', color);
    $('#theContainer').css('color', 'white');
     $('#theContainer').html(
       `<p>I am ${color}</p>`
       );
  });

  $('#theContainer').on('mousemove', (e) => {
    console.log('X: ' + e.offsetX + " Y: " + e.offsetY);
    $('#mousePosition').html(
      `
      <h4>X: ${e.offsetX} Y: ${e.offsetY}</h4>
      `
    );
  });

  $('#btnAdd').on('click', (e) => {
    $('#theContainer').hide();
  });
  $('#btnRemove').on('click', () => {
    $('#theContainer').show();
  });
  $('#btnClear').on('click', () => {
    
  });

  $('#btn1').css({ marginTop: '20px', marginBottom: '20px' });
  $('p.para1').css({color:'red', backgroundColor: 'grey'});
  $('p.para2').addClass('myclass');

  $('#btn1').on('click', () => {
    $('p.para2').toggleClass('myclass');
  });

  $('div#mydiv').text('Waszup?');
  $('div#myhtmldiv').html('<h3>Waszup?</h3>');

  $('#btn2').on('click', () => {
    $('ul#unorderedList').append('<li>Append Item</li>');
    $('ul#unorderedList').prepend('<li>Prepend Item</li>');

    $('p.para1').appendTo('p.para2');

    $('ul#unorderedList').before('<h5>Before</h5>')
    $('ul#unorderedList').after('<h5>After</h5>')
  });

  let myArray = ['brent','joe','alex','jose']

  $.each(myArray, (idx, val) => {
      $('ul#unorderedList').append('<li>' + val + '</li>');
  });
  
  $('#btnFadeOut').click(() => {
    $('#box').fadeOut(5000, () => {
      $('#btnFadeOut').text('Its gone');
    });
  });

  $('#btnFadeIn').click(() => {
    $('#box').fadeIn(5000,() => {
      $('#btnFadeOut').text('Its back...');
    });
  });

  $('#btnFadeToggle').click(() => {
    $('#box').fadeToggle(3000);
  });

});
