document.addEventListener('DOMContentLoaded', function() {
  // Array de proyectos (puedes agregar más proyectos aquí)
  const proyectos = [
    'Proyecto 1',
    'Proyecto 2',
    'Proyecto 3'
  ];

  // Obtener la lista de proyectos
  const listaProyectos = document.getElementById('lista-proyectos');

  // Agregar cada proyecto a la lista
  proyectos.forEach(function(proyecto) {
    const li = document.createElement('li');
    li.textContent = proyecto;
    listaProyectos.appendChild(li);
  });
});
