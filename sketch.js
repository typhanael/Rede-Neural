function setup(){
    createCanvas(500, 500)
    background(0)

    //var m1 = new Matrix(1,2)
    //var m2 = new Matrix(2,1)
    

    var nn = new RedeNeural(1, 3, 1)

    var arr = [1,2]

    nn.feedforward(arr)
}

function draw(){

}