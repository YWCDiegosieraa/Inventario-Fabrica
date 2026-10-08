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
    }
  };
})();
