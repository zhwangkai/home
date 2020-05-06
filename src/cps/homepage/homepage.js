import React, {Component} from 'react';

class Homepage extends Component {
	
	render() {
		return ( 
			<div className = 'cp cp-homepage' > Homepage </div>
		)
	}
	// constructor() {
 //        super();
 //        this.state = {
 //        	rayCount: 500,
 //        	rayPropCount: 8,
 //        	rayPropsLength: 4000,
	// 		baseLength: 200,
	// 		rangeLength: 200,
	// 		baseSpeed: 0.05,
	// 		rangeSpeed: 0.1,
	// 		baseWidth: 10,
	// 		rangeWidth: 20,
	// 		baseHue: 120,
	// 		rangeHue: 60,
	// 		baseTTL: 50,
	// 		rangeTTL: 100,
	// 		noiseStrength: 100,
	// 		xOff: 0.0015,
	// 		yOff: 0.0015,
	// 		zOff: 0.0015,
	// 		backgroundColor: 'hsla(220,60%,3%,1)',
	// 		container: "",
	// 		canvas: {},
	// 		ctx: {},
	// 		center:[],
	// 		tick: 0,
	// 		simplex: {},
	// 		rayProps: {}
 //        }

	// 	this.setState(() => ({
	// 		rayPropsLength: __this.state.rayCount * __this.state.rayPropCount
	// 	}));

	// 	let __this = this;
 //    }

	// componentDidMount() {
	// 	window.addEventListener('load', this.setup());
	// 	window.addEventListener('resize', this.resize());
	// }

 //     __setup = function() {
 //        this.createCanvas();
 //        this.resize();
 //        this.initRays();
 //        this.draw();
 //    }

 //    __initRays = function() {
 //        this.state.simplex = new simplexNoise();
 //        this.state.rayProps = new Float32Array(this.state.rayPropsLength);

 //        let i;

 //        for (i = 0; i < this.state.rayPropsLength; i += this.state.rayPropCount) {
 //            this.initRay(i);
 //        }
 //    }

 //    __initRay = function(i) {
 //        let length, x, y1, y2, n, life, ttl, width, speed, hue;

 //        length = this.state.baseLength + rand(this.state.rangeLength);
 //        x = rand(this.state.canvas.a.width);
 //        y1 = center[1] + noiseStrength;
 //        y2 = center[1] + noiseStrength - length;
 //        n = this.state.simplex.noise3D(x * xOff, y1 * yOff, tick * zOff) * this.state.noiseStrength;
 //        y1 += n;
 //        y2 += n;
 //        life = 0;
 //        ttl = baseTTL + rand(rangeTTL);
 //        width = baseWidth + rand(rangeWidth);
 //        speed = baseSpeed + rand(rangeSpeed) * (round(rand(1)) ? 1 : -1);
 //        hue = baseHue + rand(rangeHue);

 //        rayProps.set([x, y1, y2, life, ttl, width, speed, hue], i);
 //    }

 //     __drawRays = function() {
 //        let i;

 //        for (i = 0; i < rayPropsLength; i += rayPropCount) {
 //            updateRay(i);
 //        }
 //    }

 //    __updateRay = function(i) {
 //        let i2 = 1 + i,
 //            i3 = 2 + i,
 //            i4 = 3 + i,
 //            i5 = 4 + i,
 //            i6 = 5 + i,
 //            i7 = 6 + i,
 //            i8 = 7 + i;
 //        let x, y1, y2, life, ttl, width, speed, hue;

 //        x = rayProps[i];
 //        y1 = rayProps[i2];
 //        y2 = rayProps[i3];
 //        life = rayProps[i4];
 //        ttl = rayProps[i5];
 //        width = rayProps[i6];
 //        speed = rayProps[i7];
 //        hue = rayProps[i8];

 //        drawRay(x, y1, y2, life, ttl, width, hue);

 //        x += speed;
 //        life++;

 //        rayProps[i] = x;
 //        rayProps[i4] = life;

 //        (checkBounds(x) || life > ttl) && initRay(i);
 //    }

 //    __drawRay = function(x, y1, y2, life, ttl, width, hue) {
 //        let gradient;

 //        gradient = ctx.a.createLinearGradient(x, y1, x, y2);
 //        gradient.addColorStop(0, `hsla(${hue},100%,65%,0)`);
 //        gradient.addColorStop(0.5, `hsla(${hue},100%,65%,${fadeInOut(life, ttl)})`);
 //        gradient.addColorStop(1, `hsla(${hue},100%,65%,0)`);

 //        ctx.a.save();
 //        ctx.a.beginPath();
 //        ctx.a.strokeStyle = gradient;
 //        ctx.a.lineWidth = width;
 //        ctx.a.moveTo(x, y1);
 //        ctx.a.lineTo(x, y2);
 //        ctx.a.stroke();
 //        ctx.a.closePath();
 //        ctx.a.restore();
 //    }

 //    __checkBounds = function(x) {
 //        return x < 0 || x > canvas.a.width;
 //    }

 //    __createCanvas = function() {
 //        container = document.querySelector('.content--canvas');
 //        canvas = {
 //            a: document.createElement('canvas'),
 //            b: document.createElement('canvas')
 //        };
 //        canvas.b.style = `
 //        position: fixed;
 //        top: 0;
 //        left: 0;
 //        width: 100%;
 //        height: 100%;
 //    `;
 //        container.appendChild(canvas.b);
 //        ctx = {
 //            a: canvas.a.getContext('2d'),
 //            b: canvas.b.getContext('2d')
 //        };
 //        center = [];
 //    }

 //    __resize = function() {
 //        const {
 //            innerWidth,
 //            innerHeight
 //        } = window;

 //        canvas.a.width = innerWidth;
 //        canvas.a.height = innerHeight;

 //        ctx.a.drawImage(canvas.b, 0, 0);

 //        canvas.b.width = innerWidth;
 //        canvas.b.height = innerHeight;

 //        ctx.b.drawImage(canvas.a, 0, 0);

 //        center[0] = 0.5 * canvas.a.width;
 //        center[1] = 0.5 * canvas.a.height;
 //    }

 //    __render = function() {
 //        ctx.b.save();
 //        ctx.b.filter = 'blur(12px)';
 //        ctx.a.globalCompositeOperation = 'lighter';
 //        ctx.b.drawImage(canvas.a, 0, 0);
 //        ctx.b.restore();
 //    }

 //    __draw = function() {
 //        tick++;
 //        ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
 //        ctx.b.fillStyle = backgroundColor;
 //        ctx.b.fillRect(0, 0, canvas.b.width, canvas.a.height);
 //        drawRays();
 //        render();

 //        window.requestAnimationFrame(draw);
 //    }
}
export default Homepage;