export  default function validacionAnio(anio){
    // 1895 - (año actual + 1)
    const fecha = (new Date().getFullYear()) + 1;
    if(anio > 2022 && anio <= fecha){
        return true;
    }else{
        return false;
    }}