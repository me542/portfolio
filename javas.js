
    const sections = ["hero, about", "service", "project", "contact"];

    sections.forEach(id => {
      fetch(`${id}.html`)
        .then(res => res.text())
        .then(html => {
          document.getElementById(id).innerHTML = html;
        });
    });
 