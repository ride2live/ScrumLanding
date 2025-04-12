const includes = [
    'hero'
    // 'offers',
    // 'packages',
    // 'how-it-works',
    // 'reviews',
    // 'contact',
    // 'footer'
  ];
  
  includes.forEach(name => {
    fetch(`./sections/${name}.html`)
      .then(res => res.text())
      .then(html => {
        document.getElementById(name).innerHTML = html;
      });
  });