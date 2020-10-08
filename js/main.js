function move(doDai, elementID) {

      let elem = document.getElementById(elementID);
    //   let styleElem = elem.style.width;

      let width = 1;
      let id = setInterval(frame, 10);
      function frame() {
        if (width >= doDai) {
          clearInterval(id);
        
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }

}

function main() {
    move(90, 'tinhoc');
    move(70, 'ngoaingu');
    move(100, 'giaotiep');
    move(50, 'tiengtrung');
    move(90, 'html');
}

function ramdomMauBackGround ()
{
   let mau = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
   document.body.style.backgroundColor = mau;
//    let mau = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//    let mau2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//    document.body.style.backgroundImage = "linear-gradient(" + mau+ ", " +mau2 +")";
}