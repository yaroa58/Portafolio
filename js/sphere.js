

const Texts = ['JavaScript', 'HTML', 'CSS','Java',
               'MongoDB','Power BI','GIT','mySQL','REAC','Excel'];
 var tagcloud = TagCloud('.sphere', Texts, {
  radius: 120,
  maxSpeed: 'fast',
  iniSpeed: 'fast',
  direction: 135,
  keep: true
  });

  var color = '#ec1839';
  document.querySelector('.sphere').style.color = color;