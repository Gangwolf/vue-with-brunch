module.exports = {
  // See http://brunch.io for documentation.
  files: {
    javascripts: {joinTo: 'app.js'},
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'}
  },
  
  server: {
    port: parseInt(process.env.PORT) || 3000,
    hostname: process.env.IP || 'localhost' 
  },
  
  plugins: {
    on: ['autoprefixer-brunch']
  }
};