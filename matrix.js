class Matrix{
    constructor(rows,cols){
        this.rows = rows
        this.cols = cols

        this.data = []

        for (let i = 0; i < rows; i++) {
            let arr = []
            for (let j = 0; j < cols; j++) {
                arr.push(0)
            }
            this.data.push(arr)          
        }
    }

    static arrayToMatrix(arr){
        let mat = new Matrix(arr.length, 1)

        mat.map((elm, i, j) => {
            return arr[i]
        })

        return mat
    }

    print(){
        console.table(this.data)
    }

    randomizar(){
        this.map((elm, i, j)=>{
            return Math.random() * 2 - 1
        })
    }

    static map(A, func){
        let matrix = new Matrix(A.rows, B.rows)
        
        matrix.data = matrix.data.map((arr, i) =>{
            return arr.map((num, j)=>{
                return func(num, i, j)
            })
        })
        return matrix
    }


    //reescrevendo o map de Array para retornar os elementos contidos na matrix...
    map(func){
        this.data = this.data.map((arr, i) =>{
            return arr.map((num, j)=>{
                return func(num, i, j)
            })
        })
        return this
    }

    //função para adição das matrizes...
    static add(A, B){
        var mat = new Matrix(A.rows, A.cols)

        mat.map((elemento, i , j)=>{
            return A.data[i][j] + B.data[i][j]
        })
        return mat
    }

    //função para obter o produto de matrizes...
    static mult(A, B){
        var mat =  new Matrix(A.rows, B.cols)

        mat.map((num, i, j)=>{
            let sum = 0
            for (let k = 0; k < A.cols; k++) {
                let element1 = A.data[i][k];
                let element2 = B.data[k][j];
                sum += element1 *  element2
            }
            return sum
        })
        return mat
    }

}