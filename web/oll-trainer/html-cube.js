function create_html_cube(clickable = false)
{
  var body = document.body,
      div = document.createElement('div');
      tbl = document.createElement('table');
  tbl.id = "cube";

  for (var i = 0; i < 5; i++){
    var tr = tbl.insertRow();
    for (var j = 0; j < 5; j++){
      var td = tr.insertCell();
      td.id = "td-" + i + j;
      switch (5*i + j) {
        case 0: case 4: case 20: case 24:
          td.classList.add("blank");
          break;
        case  1: case  2: case  3:
        case  5: case 10: case 15:
        case  9: case 14: case 19:
        case 21: case 22: case 23:
          td.classList.add("side");
          break;
        case  6: case  7: case  8:
        case 11: case 12: case 13:
        case 16: case 17: case 18:
          td.classList.add("normal");
          break;
      }
      if (clickable){
        switch (5*i + j) {
          case  6: td.setAttribute('onclick',"clicked(0)"); break;
          case  7: td.setAttribute('onclick',"clicked(1)"); break;
          case  8: td.setAttribute('onclick',"clicked(2)"); break;
          case 13: td.setAttribute('onclick',"clicked(3)"); break;
          case 18: td.setAttribute('onclick',"clicked(4)"); break;
          case 17: td.setAttribute('onclick',"clicked(5)"); break;
          case 16: td.setAttribute('onclick',"clicked(6)"); break;
          case 11: td.setAttribute('onclick',"clicked(7)"); break;
          case 12:
            td.setAttribute('onclick',"go()");
            td.appendChild(document.createTextNode("Go!"));
            break;
        }
      }
    }
  }
  body.appendChild(tbl);
}

function update(cube_data){
  clear();
  switch (cube_data[0]) {
    case 0: select(1,1); break;
    case 1: select(1,0); break;
    case 2: select(0,1); break;}
  switch (cube_data[1]) {
    case 0: select(1,2); break;
    case 1: select(0,2); break;}
  switch (cube_data[2]) {
    case 0: select(1,3); break;
    case 1: select(0,3); break;
    case 2: select(1,4); break;}
  switch (cube_data[3]) {
    case 0: select(2,3); break;
    case 1: select(2,4); break;}
  switch (cube_data[4]) {
    case 0: select(3,3); break;
    case 1: select(3,4); break;
    case 2: select(4,3); break;}
  switch (cube_data[5]) {
    case 0: select(3,2); break;
    case 1: select(4,2); break;}
  switch (cube_data[6]) {
    case 0: select(3,1); break;
    case 1: select(4,1); break;
    case 2: select(3,0); break;}
  switch (cube_data[7]) {
    case 0: select(2,1); break;
    case 1: select(2,0); break;}
}

function clear(){
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++){
      var el = document.getElementById('td-' + i + j);
      if (el.classList.contains("selected"))
        el.classList.remove("selected");
    }
  }
  select(2,2);
}

function select(row, col)
{
  document.getElementById('td-' + row + col).classList.add("selected");
}
