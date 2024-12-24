create_html_cube(true);
var our_data = [];
if (localStorage.getItem('our_data') == undefined){
  for(var i = 0; i < 4; i++) {
    our_data.push(0);
    our_data.push(0);
  }
  localStorage.setItem('our_data', JSON.stringify(our_data));
} else {
  our_data = JSON.parse(localStorage.getItem('our_data'));
}
update(our_data);

function clicked(index) {
  rotate(index);
}

function rotate(index)
{
  if (index % 2 == 0) /*corner*/ our_data[index] = (our_data[index]+1) % 3;
  else                /* edge */ our_data[index] = (our_data[index]+1) % 2;
  update(our_data);
  localStorage.setItem('our_data', JSON.stringify(our_data));
}

function go() {
  //redirects iff it's possible and isn't solved
  var solved = true;
  for (var i = 0; i < 8; ++i)
  {
    if (our_data[i] != 0){
      solved = false;
      break;
    }
  }
  if (solved)
  {
    alert("Solved!");
    return;
  }
  var edges_sum = 0, corners_sum = 0;
  for (var i = 0; i < 4; ++i)
  {
    corners_sum += our_data[2*i];
    edges_sum += our_data[2*i + 1];
  }
  if (edges_sum % 2 != 0 || corners_sum % 3 != 0)
  {
    alert("Impossible!");
    return;
  }
  window.location = 'cases/case-XX.html';
}
