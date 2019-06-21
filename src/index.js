
function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash').then(a_b => {
      var element = document.createElement('div');
      element.innerHTML = a_b.join(['Dell', 'Lee'], '-');
      // console.log(a_b);
      console.log(_);
      console.log(process.env.NODE_ENV);
      
      
      return element;
  })
  }

getComponent().then(element => {
    document.body.appendChild(element);
});

  // if(module.hot){
  //   module.hot.accept('./print.js',function(){
  //       document.body.removeChild(element);
  //       getComponent().then(component => {
  //         document.body.appendChild(component)
  //       })
    
  //   })
  // }
