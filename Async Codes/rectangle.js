class Rectangle {
    constructor(width, height, color){
        this.height = height;
        this.width = width;
        this.color = color;
    }

    area(){
        const area = this.height * this.width;
        return area;
    }
    paint(){
        console.log("The color is")
        console.log(this.color)
    }
    destroy(){

    }
}

const rect = new Rectangle(6, 7, "Purple")
const area = rect.area();
rect.destroy()
console.log(area)