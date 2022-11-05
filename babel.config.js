module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@Pages': './src/pages',
          '@Types': './src/types',
          '@Routes': './src/routes',
          '@Api': './src/services',
        },
        extenstions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
};
