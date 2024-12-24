var case_cube_data = JSON.parse(localStorage.getItem('our_data'));
var orient = JSON.parse(localStorage.getItem('orientation'));
var cases_counter = [];
if (localStorage.getItem('cases_counter') == undefined){
  for (var i = 0; i < 57; ++i)
  {
    cases_counter[i] = 0;
  }
} else {
  cases_counter = JSON.parse(localStorage.getItem('cases_counter'));
}

var found = false;
var rotations = 0;
var case_number;
while (!found && rotations < 4)
{
  for (var i = 0; i < 57; ++i)
  {
    var equal = true;
    for (var j = 0; j < 8; ++j)
    {
      if (case_cube_data[j] != orient[i][j])
      {
        equal = false;
        break;
      }
    }
    if (equal)
    {
      found = true;
      case_number = i;
      break;
    }
  }
  if (!found)
  {
    y_rot(case_cube_data);
    rotations++;
  }
}
if (rotations == 4)
{
  console.warn("Orientation Error");
}
update(case_cube_data);
++cases_counter[case_number];
localStorage.setItem('cases_counter', JSON.stringify(cases_counter));
console.log("This case was done " + cases_counter[case_number] + " time(s)");

function y_rot (or_array)
{
  var corner_temp = or_array[0];
  var   edge_temp = or_array[1];
  or_array[0] = or_array[6];
  or_array[6] = or_array[4];
  or_array[4] = or_array[2];
  or_array[2] = corner_temp;
  or_array[1] = or_array[7];
  or_array[7] = or_array[5];
  or_array[5] = or_array[3];
  or_array[3] =   edge_temp;
}

function clear_counter()
{
  for (var i = 0; i < 57; ++i)
  {
    cases_counter[i] = 0;
  }
  localStorage.setItem('cases_counter', JSON.stringify(cases_counter));
}
