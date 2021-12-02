class Math {
    sum(a, b) {
        return a + b
    }
    mul(a, b) {
        return a * b
    }
    div(a, b, callback) {
        setTimeout(()=>{
            callback(a / b)
        },0)
    }

    
}

module.exports = Math