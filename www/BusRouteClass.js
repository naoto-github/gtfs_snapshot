class BusRouteClass{

  constructor(id){
    this.id = id;
    this.name = null;
    this.shape = new Array();
    this.line = null;
    this.color = null;
  }

  log(){
    var log = "[BusRouteClass id=" + this.id + " name=" + this.name + " color=" + this.color + " length=" + this.shape.length + "}";
    return log;
  }

}