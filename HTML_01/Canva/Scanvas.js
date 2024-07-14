const Canvas1 = document.getElementById('Canvas1');

//Atur UKURAN CANVAS
Canvas1.width = window.innerWidth;
Canvas1.height = window.innerHeight;

//Mnentukan Content
const c = Canvas1.getContext('2d');

//Manipulasi Canvas Kotak
c.fillStyle = 'pink';
c.strokeStyle = '#999';
Canvas1.linerWidht = '5';
c.rect(50, 50, 300, 300);
c.fill();
c.stroke();

//Membuat LINGKARAN
c.fillStyle ='Blue';
c.beginPath();
c.arc(550, 200, 150, 0, 2 * Math.PI);
c.fill();
c.stroke();

// MEMBUAT SEGITIGA
c.fillStyle = 'Black';
c.beginPath();
c.moveTo(900, 50);
c.lineTo(1050, 350);
c.lineTo(750, 350);
c.closePath();
c.fill();
c.stroke();