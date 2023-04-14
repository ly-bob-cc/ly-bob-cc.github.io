// Set tab title in header
let tab_text = document.getElementById('_title');
tab_text.textContent = 'Coding Club';

// Set first heading
let h1_primary = document.getElementById('_heading');
h1_primary.textContent = 'Table of Content';

// Set list element
let content = ['Kinematics Calculator', 'Pascal Triangle'];
// let links = ['https://ly-bob-cc.github.io/kinematics-calculator/kinematics-calculator.html','https://ly-bob-cc.github.io/pascal-triangle/pascal-triangle.html]
let ul_content = document.getElementById('_ul');
for (let i = 0; i < content.length; i++) {
  let li_content = document.createElement('li');
  // a_link = document.createElement('a');
  // a_link.appendChild(document.createTextNode('what is this'));
  // a_link.title = 'How is this different'
  // a_link.href = links[i];
  li_content.appendChild(document.createTextNode(content[i]));
  // li_content.appendChild(a_link);
  ul_content.appendChild(li_content);
}

// Define an array of menu items with their corresponding links
const menuItems = [
  { text: "Home", link: "#home" },
  { text: "Projects", link: "#projects" },
  { text: "About", link: "#about" }
];

// Get the <ul> element from the HTML
const menuList = document.getElementById("menu-list");

// Loop through the menuItems array and create <li> elements with links
menuItems.forEach(item => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = item.link;
  a.textContent = item.text;
  li.appendChild(a);
  menuList.appendChild(li);
});
