// CAPA DE PERSISTENCIA
// CarpinStock Pro v2: conserva los datos del prototipo anterior cuando existen
// y almacena el estado actual de forma independiente.
(function () {
  const KEY = 'carpinstock_state_v2';
  const LEGACY_KEYS = ['carpinstock_state_v1'];

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function normalize(state) {
    const base = clone(window.CARPINSTOCK_INITIAL);
    const source = state && typeof state === 'object' ? state : {};

    return {
      users: Array.isArray(source.users) && source.users.length ? source.users : base.users,
      materials: Array.isArray(source.materials) ? source.materials : base.materials,
      melamines: Array.isArray(source.melamines) ? source.melamines : base.melamines,
      movements: Array.isArray(source.movements) ? source.movements : base.movements,
      audit: Array.isArray(source.audit) ? source.audit : base.audit,
      session: null
    };
  }

  window.CarpiStorage = {
    key: KEY,

    load() {
      const keys = [KEY, ...LEGACY_KEYS];
      for (const key of keys) {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        try {
          const normalized = normalize(JSON.parse(raw));
          if (key !== KEY) localStorage.setItem(KEY, JSON.stringify(normalized));
          return normalized;
        } catch (_) {
          // Intenta con la siguiente fuente de datos.
        }
      }
      return normalize(null);
    },

    save(state) {
      localStorage.setItem(KEY, JSON.stringify(normalize(state)));
    },

    reset() {
      localStorage.removeItem(KEY);
      LEGACY_KEYS.forEach(key => localStorage.removeItem(key));
      return normalize(null);
    }
  };
})();
