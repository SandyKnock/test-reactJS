import React, {Component} from 'react'
import './canvas.sass'

export default class CanvasComponent extends Component {

    componentDidMount() {
        this.updateCanvas();
        console.log("update");
    }

    updateCanvas() {
        let c = this.refs.canvas.getContext('2d'),
            h = this.refs.canvas.height = 600,
            w = this.refs.canvas.width = 700,
            collection,
            len = 1024;

        function draw_bg() {
            let alpha = 1/(Math.random()*10+5);
            c.fillStyle = "rgba(0,0,0,"+alpha+")";
            c.fillRect(0, 0,  w, h);
        }

        function random_x() {
            return ( Math.random() * (w + 48) ) - 24;
        }

        function random_y() {
            return Math.random() * h - 32;
        }

        function random_r() {
            return Math.random() * 5;
        }

        let theta, x, y;

        function draw_frame() {
            for (let i = 0; i < 10; i++) {
                collection[i].forEach(function (drop) {
                    c.strokeStyle = drop.color;
                    c.beginPath();
                    c.moveTo(drop.x, drop.y);
                    for(let j = 1; j <= 5 * 2; j++)
                    {
                        if(j % 2 == 0){
                            theta = j * (Math.PI * 2) / (5 * 2);
                            x = drop.x + (drop.r * Math.cos(theta));
                            y = drop.y + (drop.r * Math.sin(theta));
                        } else {
                            theta = j * (Math.PI * 2) / (5 * 2);
                            x = drop.x  + ((2/2) * Math.cos(theta));
                            y = drop.y + ((2/2) * Math.sin(theta));
                        }
                        c.lineTo(x ,y);
                    }
                    c.closePath();
                    c.stroke();
                    drop.y += drop.speed;
                    if (drop.y > drop.limit) {
                        drop.y = Math.random() * (-1 * (h / 2));
                        drop.x = random_x();
                    }
                });
            }
        }


        function randomize_drops() {
            collection = {};
            for (let i = 0; i < len; i++) {
                let drop = random_drop();
                typeof collection[drop.distance] === "undefined" &&
                (collection[drop.distance] = []);
                collection[drop.distance].push(drop);
            }
        }

        function random_drop(){
            let drop = {};
            drop.x = random_x();
            drop.y = random_y();
            drop.r = random_r();

            let alpha = 1/(Math.random()*10),
                r = Math.random()*100,
                g = Math.random()*100,
                b = Math.random()*100;

            drop.color = "rgba("+r+"%, "+g+"%, "+b+"%,"+alpha+")"
            drop.distance = Math.random() * 10 | 0;
            drop.speed = Math.random() * (drop.distance / 6) + 0.2;
            drop.size = (drop.speed + 1) / 16 * 18;
            drop.limit = (drop.speed + 1) / 2 * h;
            return drop;
        }


        function loop() {
            requestAnimationFrame(loop);
            draw_bg();
            draw_frame();
        }

        function init() {
            draw_bg();
            randomize_drops();
            loop();
        }

        init();
    }


    render() {
        return (
            <canvas ref='canvas' id="canvas"></canvas>
        )
    }
}