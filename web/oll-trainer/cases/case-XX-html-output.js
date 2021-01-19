var bdy = document.body;
var case_info = document.createElement("span");
case_info.id = "case-info";
document.title = "Case " + (1 + case_number);
bdy.appendChild(case_info);

var ttl = document.createElement("p");
ttl.id = "title";
var ttl_txt = document.createTextNode("Case " + (case_number + 1));
ttl.appendChild(ttl_txt);
case_info.appendChild(ttl);

var br = document.createElement("br");
case_info.appendChild(br);
var alg_el = document.createElement("p");
alg_el.classList.add("alg");
var alg_txt = document.createTextNode(JSON.parse(
              localStorage.getItem('algs'))[case_number]);
alg_el.appendChild(alg_txt);
case_info.appendChild(alg_el);

if (JSON.parse(localStorage.getItem('algs_'))[case_number] != null)
{
  br = document.createElement("br");
  case_info.appendChild(br);
  var alg2_el = document.createElement("p");
  alg2_el.classList.add("alg2");
  var alg2_txt = document.createTextNode(JSON.parse(
                localStorage.getItem('algs_'))[case_number]);
  alg2_el.appendChild(alg2_txt);
  case_info.appendChild(alg2_el);
}

br = document.createElement("br");
case_info.appendChild(br);
var div = document.createElement("div");
div.id = "comment-div";
var comment_el = document.createElement("p");
comment_el.classList.add("comment");
var comment_txt = document.createTextNode(JSON.parse(
              localStorage.getItem('comments'))[case_number]);
comment_el.appendChild(comment_txt);
div.appendChild(comment_el);
case_info.appendChild(div);
