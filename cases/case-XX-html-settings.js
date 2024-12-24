create_html_cube();
var center = document.getElementById('td-22');
center.appendChild(document.createTextNode("#"));
center.setAttribute("onclick", "(function f(){ window.location =" +
                    "'../index.html'; })();");
