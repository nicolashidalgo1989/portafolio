//variables
const   wave = document.querySelectorAll('.wave')[0],
        datos = document.querySelectorAll('.datos')[0];  
//listeners
document.addEventListener('DOMContentLoaded', drawWave); 
document.addEventListener('click', mover); 
window.addEventListener('resize', drawWave);
//functions   
function mostrarDatos(w,h,mX,mY,qX1,qY1,qX2,qY2,tX,tY){ 
    datos.innerHTML = `
        posicion inicial: x ${Math.round(mX)} y ${Math.round(mY)} <br> 
        control point 1 : x ${Math.round(qX1)} y ${Math.round(qY1)}, <br> 
        control point 2 : x ${Math.round(qX2)} y ${Math.round(qY2)} <br>  
        posicion final  : x ${Math.round(tX)} y ${Math.round(tY)} <br>
        M ${mX} ${mY} Q ${qX1} ${qY1}, ${qX2} ${qY2} T ${tX} ${tY}
    `; 
}
function drawWave(){  
    let w = window.innerWidth,
        h = window.innerHeight,
        mX =  Math.round(w * 0),
        mY = Math.round(h/2),
        qX1 = Math.round(w/4),
        qY1 = Math.round(h/2.5),
        qX2 = Math.round(w/2),
        qY2 = Math.round(h/2),
        tX = Math.round(w),
        tY = Math.round(h/2);
    wave.parentElement.style.width = w;
    wave.parentElement.style.height = h;
    wave.setAttribute('d', `M ${mX} ${mY} Q ${qX1} ${qY1} ${qX2} ${qY2} T ${tX} ${tY}`);  
    mostrarDatos(w,h,mX,mY,qX1,qY1,qX2,qY2,tX,tY); 
}
function mover(){
    let mX;
    mX = mX+1;
    drawWave(mX);
}
