const COMMAND = process && process.env && process.env._ ? process.env._ : ''

const isReactNativeMacos = COMMAND.includes('react-native-macos')

module.exports = {
  presets: ['react-native'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'react-native': isReactNativeMacos
            ? 'react-native-macos'
            : 'react-native'
        }
      }
    ]
  ]
}
