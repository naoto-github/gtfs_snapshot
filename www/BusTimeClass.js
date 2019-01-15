class BusTimeClass{

  constructor(id, trip_id, time, stop_id){
    this.id = id;
    this.trip_id = trip_id;

    var str = time.split(":");
    var h = str[0];
    var m = str[1];
    var s = str[2];
    this.time = new Date()
    this.time.setHours(h);
    this.time.setMinutes(m);
    this.time.setSeconds(s);

    this.stop_id = stop_id;
    this.service_id = ""
    this.shape_id = "";
    this.name = "";
  }

  log(){
    var log = "[BusTimeClass id=" + this.id + " trip_id=" + this.trip_id + " time=" + this.time.getHours() + "時" + this.time.getMinutes() + "分  stop_id=" + this.stop_id + " service_id=" + this.service_id + " shape_id=" + this.shape_id + " name=" + this.name + "]";
    
    return log;
  }

}
