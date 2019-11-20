//Show
function show(el) {
  var target = document.querySelector(el);
  // target.style.display = "block";
  target.style.setProperty("display", "block", "important");
}

//Hide
function hide(el) {
  var target = document.querySelector(el);
  // target.style.display = "none";
  target.style.setProperty("display", "none", "important");
}

//Add Class to all
function AddClass(el, className) {
  var _el = document.querySelectorAll(el);
  for (var i = 0; i < _el.length; i++) {
    _el[i].classList.add(className);
  }
}

//Remove Class to all
function RemoveClass(el, className) {
  var _el = document.querySelectorAll(el);
  for (var i = 0; i < _el.length; i++) {
    _el[i].classList.remove(className);
  }
}

//Remove & Add Class to all
function RemoveAddClass(el, classRemove, classAdd) {
  var _el = document.querySelectorAll(el);
  for (var i = 0; i < _el.length; i++) {
    _el[i].classList.remove(classRemove);
    _el[i].classList.add(classAdd);
  }
}

//Remove all by selector
function removeAll(sel) {
  var target = document.querySelectorAll(sel);
  for (var i = 0; i < target.length; i++) {
    target[i].parentNode.removeChild(target[i]);
  }
}

//toggle all class by array - onclick="toggleAllClass(findChildren(findParent(this, 'LI'), '.detail'), 'hidden'); return false;"
//return false - avoid the page jumping straight to the top"
function toggleAllClass(allChildren, cls) {
  for (var i = 0; i < allChildren.length; i++) {
    allChildren[i].classList.toggle(cls);
  }
  // return false; //not working
}
function findParent(thisElement, parentTagName) {
  while ((thisElement = thisElement.parentElement) && (thisElement.tagName != parentTagName));
  //Searching loop only stop while parent is founded
  return thisElement; //if searching no one will return null
}
function findChildren(parentEL, sl) {
  return parentEL.querySelectorAll(sl);
}

//Form Reset - sl means the form selector <button onclick="resetForm('.uk-modal-body>form')">
function resetForm(sl) {
  document.querySelector(sl).reset();
}

//onmouseover="viewHeight('[uk-dropdown]', 'nav.bg_primary')"
function viewHeight(sel, upperSelector) {
  if (document.querySelector(sel)!=null && document.querySelector(upperSelector)!=null) {
    var topHeight = document.querySelector(upperSelector).getBoundingClientRect().top + document.querySelector(upperSelector).getBoundingClientRect().height;
    var target = document.querySelectorAll(sel);
    for (var i = 0; i < target.length; i++) {
      target[i].style.maxHeight = window.innerHeight - topHeight + "px";
    }
  }
}

//select onchange Event - <select onchange="showOption()">
function showOption(thisSelect, index, cls) {
  var showDiv = document.querySelector(cls);
  if (thisSelect.selectedIndex == index) {
    showDiv.style.setProperty("display", "block", "important");
  } else {
    showDiv.style.setProperty("display", "none", "important");
  }
}
//------------- End funcition ---------------------------------------//

if (document.querySelector(".text_size") != null) {
  
}

// window.onscroll = function() {gotoTop("#gototop", "opacity-100")};
// window.onload = function() {viewHeightMiddle(".uk-slideshow-items", "header", "#slideshow+:first-of-type")};
// window.onresize = function() {viewHeightMiddle(".uk-slideshow-items", "header", "#slideshow+:first-of-type")};

// var w = window.outerWidth;
// if (w <= 959) {
// }



