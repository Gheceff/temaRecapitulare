let listaUtilizatori = [
    { id: 1, nume: 'John Doe', varsta: 25, email: 'john@example.com' },
    { id: 2, nume: 'Jane Doe', varsta: 30, email: 'jane@example.com' },
    {id:3,nume:'Eduard Gheceff',varsta:23,email:'edu_gheceff@yahoo.com'}
  ];
  
  function afiseazaUtilizatori() {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';
  
    listaUtilizatori.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `${user.nume} (Varsta: ${user.varsta}, Email: ${user.email})`;
      userListElement.appendChild(listItem);
    });
  }
  
  function adaugaUtilizator() {
    const nume = document.getElementById('nume').value;
    const varsta = parseInt(document.getElementById('varsta').value);
    const email = document.getElementById('email').value;
  
    if (nume && varsta && email) {
      const id = listaUtilizatori.length + 1;
      const newUser = { id, nume, varsta, email };
      listaUtilizatori.push(newUser);
  
      
      document.getElementById('userForm').reset();
  
      
      afiseazaUtilizatori();
    } else {
      alert('Completeaza toate campurile!');
    }
  }
  
  
  afiseazaUtilizatori();
  