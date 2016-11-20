!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/assets/js/",e(e.s=1)}([,function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}var i=n(6),a=r(i);new a.default(document.getElementById("canvas"),80),function(t){var e=t.querySelector("#app");e.displayInstalledToast=function(){t.querySelector("platinum-sw-cache").disabled||t.querySelector("#caching-complete").show()},e.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){}),addEventListener("paper-header-transform",function(e){var n=t.querySelector("#mainToolbar .app-name"),r=t.querySelector("#mainToolbar .middle-container"),i=t.querySelector("#mainToolbar .bottom-container"),a=e.detail,o=a.height-a.condensedHeight,s=Math.min(1,a.y/o),c=.5,u=Math.max(c,(o-a.y)/(o/(1-c))+c),l=1-s;Polymer.Base.transform("translate3d(0,"+100*s+"%,0)",r),Polymer.Base.transform("scale("+l+") translateZ(0)",i),Polymer.Base.transform("scale("+u+") translateZ(0)",n)}),e.onDataRouteClick=function(){var e=t.querySelector("#paperDrawerPanel");e.narrow&&e.closeDrawer()},e.scrollPageToTop=function(){t.getElementById("mainContainer").scrollTop=0}}(document)},,,,function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e,n,r){return Math.sqrt((n-t)*(n-t)+(r-e)*(r-e))}function i(t,e){return Math.atan2(t.y-e.y,t.x-e.x)}function a(t){return{x:Math.cos(t),y:Math.sin(t)}}function o(t,e){var n=i(t,e);return a(n-Math.PI)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=function(){function t(e,r,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#000",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2*Math.random()+.5,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.random()*Math.PI;n(this,t),this.position={current:{x:r,y:i},home:{x:r,y:i}},this.velocity={x:0,y:0},this.direction=s,this.settings={boundaryForce:.2,color:a,context:e,diameter:o,damping:.85,movementRadius:50*Math.random()+10,steeringForceRest:.25,steeringForceTarget:.5,steeringRandomness:.25}}return s(t,[{key:"move",value:function(){var t=this.settings,e=t.steeringForceTarget,n=t.steeringForceRest,i=t.steeringRandomness,s=t.movementRadius,c=t.boundaryForce,u=t.damping,l=this.position,h=l.current,d=l.home,f=this.velocity,m=r(h.x,h.y,d.x,d.y),v=a(this.direction),y=this.hasTarget?e:n;if(f.x+=v.x*y,f.y+=v.y*y,this.direction+=(2*Math.random()-1)*i,m>0){var p=o(h,d);m=Math.min(s,m),m/=s,f.x+=p.x*m*c,f.y+=p.y*m*c}f.x*=u,f.y*=u,h.x+=f.x,h.y+=f.y}},{key:"draw",value:function(){var t=this.settings,e=t.diameter,n=t.context,r=t.color,i=this.position.current,a=e/2;n.fillStyle=r,n.beginPath(),n.arc(i.x,i.y,a,0,2*Math.PI,!1),n.closePath(),n.fill()}},{key:"setDirection",value:function(t){var e=this.settings.steeringRandomness;if(t){var n=this.position.current;this.hasTarget=!0,this.direction=i(t,n)}else this.hasTarget=!1,this.direction+=(2*Math.random()-1)*e}}]),t}();e.default=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(){return Math.random()<.5?-1:1}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(5),c=r(s),u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;i(this,t),this.canvas=e,this.context=e.getContext("2d"),this.particleSpacing=n,this.fps=r,this.init()}return o(t,[{key:"init",value:function(){this.stop(),this.clear(),this.resize(),this.createParticles(),this.animate(),this.bind()}},{key:"bind",value:function(){var t=this;window.addEventListener("resize",function(){return t.init()})}},{key:"resize",value:function(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}},{key:"clear",value:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"createParticles",value:function(){var t=this.canvas,e=t.width,n=t.height,r=this.particleSpacing,i=Math.floor(e/r),o=Math.floor(n/r),s=(r+(e-i*r))/2,u=(r+(n-o*r))/2;this.particles=[];for(var l=0;l<i;l++)for(var h=0;h<o;h++){var d=l*r+s+r*Math.random()*a(),f=h*r+u+r*Math.random()*a(),m=Math.round(48+d/e*25+f/n*25),v="rgba("+m+", 0, 0, 1)",y=new c.default(this.context,d,f,v);this.particles.push(y)}}},{key:"draw",value:function(){if(this.clear(),this.particles)for(var t=0;t<this.particles.length;t++){var e=this.particles[t];e.move(),e.draw()}}},{key:"animate",value:function(){var t=this,e=Date.now();(void 0===this.lastFrameDate||e-this.lastFrameDate>this.fps)&&(this.lastFrameDate=e,this.draw()),this.animationFrame=window.requestAnimationFrame(function(){return t.animate()})}},{key:"stop",value:function(){window.cancelAnimationFrame(this.animationFrame)}}]),t}();e.default=u}]);