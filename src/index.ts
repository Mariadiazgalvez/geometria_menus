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
                let n1: number
                let n2: number
                n1 =  parseInt( await leerTeclado('Dame la altura')) 
                n2 =  parseInt( await leerTeclado('Dame la base'))
                console.log(`Su área es: ${triangulo(n1, n2) /2}`)
                break
            case 3:
                console.log("Superficie rombo")
                let num1: number
                let num2: number
                num1 =  parseInt( await leerTeclado('Dame la diagonal menor')) 
                num2 =  parseInt( await leerTeclado('Dame la diagonal mayor'))
                console.log(`La superficie del rombo es: ${rombo (num1, num2) /2}`)
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
    let n1: number
    let n2: number
    n1 =  parseInt( await leerTeclado('Dame un lado')) 
    n2 =  parseInt( await leerTeclado('Dame el otro lado'))
    console.log(`El perimetro es ${n1 *2 + n2 *2}`)
}

const triangulo = (n1: number, n2: number): number => n1 * n2 / 2

const rombo = (num1: number, num2: number): number => num1 * num2 / 2

main()
