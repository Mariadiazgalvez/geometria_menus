import { leerTeclado } from './entrada'
export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Perimetro Rectangulo')
    console.log('2.- Area Triangulo')
    console.log('3.- Superficie Rombo')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('Opción: ') )
    return n
}