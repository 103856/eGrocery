const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  lintOnSave: false, // Añadir esta línea si deseas desactivar ESLint en tiempo de ejecución

  // Configuración de ESLint
  pluginOptions: {
    lintStyleOnBuild: true,
    eslint: {
      rules: {
        "vue/multi-word-component-names": "off"
      }
    }
  }
});
