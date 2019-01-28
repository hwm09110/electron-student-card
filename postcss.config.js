module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-plugin-px2rem')({
      rootValue: 75,
      exclude: /(node_module)/
    })
  ]
}
