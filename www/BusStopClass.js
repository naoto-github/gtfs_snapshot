class BusStopClass{

  constructor(id, name, marker){
    this.id = id;
    this.name = name;
    this.marker = marker;
    this.table = new Array();
  }

  log(){
    var log = "[BusStopClass id=" + this.id + " name=" + this.name + " length=" + this.table.length + "]";
    return log;
  }

}