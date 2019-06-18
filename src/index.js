import _ from 'lodash'
import printMe from './print.js'
import './style.css';
import { cube } from './math.js';

function component() {
    // var element = document.createElement('div');
    var element = document.createElement('pre');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    // element.innerHTML = _.join(['这里是自搭建webpack测试：','Hello', 'webpack'], ' ');
    // element.classList.add('hello');

    // var btn = document.createElement("button")
    // btn.innerHTML = '点击测试'
    // btn.onclick = printMe;
    // element.appendChild(btn)

    element.innerHTML = [
           'Hello webpack!',
           '5 cubed is equal to ' + cube(5)
         ].join('\n\n');
 
    return element;
  }
  
  let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
  document.body.appendChild(element);

  if(module.hot){
    module.hot.accept('./print.js',function(){
      document.body.removeChild(element);
      element = component(); // 重新渲染页面后，component 更新 click 事件处理
      document.body.appendChild(element);
    })
  }