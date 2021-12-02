/**tratando erros com ty catch o erro é identioficado mas o código seguinte continua, não ocorre a 
 * a 
 */

class CustomError extends Error{
    constructor({mensagem, data}) {
        super(mensagem);
        this.data = data;
    }
}

try {
    const user = 'octa'
    console.log(user)
    //Error é uma classe e podemos gerar objetos manualmente  extende-la tambem
    //const err = new Error('Erro manual!')
    const mErr = new CustomError({
        mensagem: 'Erro de server', 
        data: { 
            status: 500
        }
    })
    throw mErr;
} catch(err) {
    console.log(err)
} finally {
    //console.log('finaly executado')
}