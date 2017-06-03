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
});
