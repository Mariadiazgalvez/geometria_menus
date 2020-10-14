import {menu} from './view/menu'
import { leerTeclado } from './view/entrada'
const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log("Perimetro Rectangulo")
                await rectangulo()
                break
            case 2:
                console.log("Area Triangulo")
                let a: number
                let b: number
                a =  parseInt( await leerTeclado('Dame la altura')) 
                b =  parseInt( await leerTeclado('Dame la base'))
                console.log(`Su área es: ${triangulo(a, b) /2}`)
                break
            case 3:
                console.log("Perimetro rombo")
                let lado: number
                lado =  parseInt( await leerTeclado('Introduzca el lado')) 
                console.log(`El perimetro del rombo es: ${rombo (lado) *4}`)
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
const rectangulo = async () => {
    let l1: number
    let l2: number
    l1 =  parseInt( await leerTeclado('Dame un lado')) 
    l2 =  parseInt( await leerTeclado('Dame el otro lado'))
    console.log(`El perimetro es ${l1 *2 + l2 *2}`)
}

const triangulo = (a: number, b: number): number => a * b / 2

const rombo = (lado:number): number => lado * 4

main()
