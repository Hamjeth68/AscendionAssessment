const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    resolver: {
      alias: {
        '@': './src',
        '@/components': './src/components',
        // Add other aliases here
      },
      // Remove 'svg' from assetExts to handle SVG files as React components
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      // Add 'svg' to sourceExts to enable importing SVG files as modules
      sourceExts: [...sourceExts, 'svg'],
    },
  };
})();