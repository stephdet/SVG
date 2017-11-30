var map = document.getElementsByClassName('.map');
var paths = map.querySelectorALL('.mapimage a');
var links = map.querySelectorALL('.maplist a');

//paliatif pour navvi récent

if (Nodelist.prototype.forEach === undefined) {
Nodelist.prototype.forEach = function (callback) {
  [].forEach.call(this,callback)
}

}

paths.forEach (function(path){
  path.AddEventListener('mouseenter',function (e){
    var id = this.id.replace('region-','')
    var document.querySelector('#list-' + id).classList.add('is-active')
    var document.querySelector('#region-' + id).classList.add('is-active')

})

})
