let turno=0;
const triko =[];
const trikpulsado=(e,pos)=>{
    turno++;
    const trik=e.target;
    const color= turno %2 ? 'blue':'green';
    trik.style.backgroundColor= color;
    triko[pos] = color;
}
document.querySelectorAll('.trik').forEach(
    (obj,i)=>obj.addEventListener('click',(e)=>trikpulsado(e,i)));
