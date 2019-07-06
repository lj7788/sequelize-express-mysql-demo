
var fs        = require('fs');
var path      = require('path');
var basename  = path.basename(__filename);

var routes = require('./main');
var users  = require('./users');
let routers={}
fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = require(path.join(__dirname, file));
    var name=file.substring(0,file.length-3)
    name=name==='main'?'/':'/'+name
    
    routers[name]=model
  });

module.exports = {
    install:(app)=>{
        for(let key in routers){
            let model=routers[key]          
            app.use(key,model)
        }
    }
}