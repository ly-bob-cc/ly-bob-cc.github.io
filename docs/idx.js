let tab_text = document.getElementById('_title');
tab_text.textContent = 'Coding Club';

let h1_primary = document.getElementById('_h1');
h1_primary.textContent = 'Table of Content';

let content = ['Kinematics Calculator', 'Pascal Triangle'];
let ul_content = document.getElementById('_ul');
for (let i = 0; 1 < content.length; i++) {
  let li_content = document.createElement('li');
  li_content.appendChild(document.createTextNode(content));
  ul_content.appendChild(li_content);
