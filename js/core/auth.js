// CONTROL DE ACCESO
(function () {
  window.CarpiAuth = {
    login(username, password, users) {
      const clean = String(username || '').trim().toLowerCase();
      return users.find(user =>
        String(user.username).toLowerCase() === clean && user.password === password
      ) || null;
    },

    canEdit(user) {
      return Boolean(user && ['Administrador', 'Supervisor', 'Operario'].includes(user.role));
    },

    canDelete(user) {
      return Boolean(user && ['Administrador', 'Supervisor'].includes(user.role));
    },

    canAdmin(user) {
      return Boolean(user && user.role === 'Administrador');
    },

    register(userData, users) {
      const cleanUsername = String(userData.username || '').trim().toLowerCase();
      const exists = users.find(u => String(u.username).toLowerCase() === cleanUsername);
      if (exists) {
        throw new Error('El nombre de usuario ya está en uso');
      }
      
      const nextId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
      const newUser = {
        id: nextId,
        username: cleanUsername,
        name: String(userData.name || '').trim(),
        role: String(userData.role || 'Operario'),
        password: String(userData.password || '')
      };
      
      users.push(newUser);
      return newUser;
    }
  };
})();
