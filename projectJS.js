let mondayBreakfast = document.getElementById("mb").value;
let mondaySnack1 = document.getElementById("ms1").value;
let mondayLunch = document.getElementById("ml").value;
let mondaySnack2 = document.getElementById("ms2").value;
let mondayDinner = document.getElementById("md").value;
let tuesdayBreakfast = document.getElementById("tb").value;
let tuesdaySnack1 = document.getElementById("ts1").value;
let tuesdayLunch = document.getElementById("tl").value;
let tuesdaySnack2 = document.getElementById("ts2").value;
let tuesdayDinner = document.getElementById("td").value;
let wednesdayBreakfast = document.getElementById("wb").value;
let wednesdaySnack1 = document.getElementById("ws1").value;
let wednesdayLunch = document.getElementById("wl").value;
let wednesdaySnack2 = document.getElementById("ws2").value;
let wednesdayDinner = document.getElementById("wd").value;
let thursdayBreakfast = document.getElementById("thb").value;
let thursdaySnack1 = document.getElementById("ths1").value;
let thursdayLunch = document.getElementById("thl").value;
let thursdaySnack2 = document.getElementById("ths2").value;
let thursdayDinner = document.getElementById("thd").value;
let fridayBreakfast = document.getElementById("fb").value;
let fridaySnack1 = document.getElementById("fs1").value;
let fridayLunch = document.getElementById("fl").value;
let fridaySnack2 = document.getElementById("fs2").value;
let fridayDinner = document.getElementById("fd").value;
let userName = document.getElementById("name").value;
let userEmail = document.getElementById("email").value;
let userGoal = document.getElementById("goal").value;

let _mb = mondayBreakfast.toString();
let _ms1 = mondaySnack1.toString();
let _ml = mondayLunch.toString();
let _ms2 = mondaySnack2.toString();
let _md = mondayDinner.toString();
let _tb = tuesdayBreakfast.toString();
let _ts1 = tuesdaySnack1.toString();
let _tl = tuesdayLunch.toString();
let _ts2 = tuesdaySnack2.toString();
let _td = tuesdayDinner.toString();
let _wb = wednesdayBreakfast.toString();
let _ws1 = wednesdaySnack1.toString();
let _wl = wednesdayLunch.toString();
let _ws2 = wednesdaySnack2.toString();
let _wd = wednesdayDinner.toString();
let _thb = thursdayBreakfast.toString();
let _ths1 = thursdaySnack1.toString();
let _thl = thursdayLunch.toString();
let _ths2 = thursdaySnack2.toString();
let _thd = thursdayDinner.toString();
let _fb = fridayBreakfast.toString();
let _fs1 = fridaySnack1.toString();
let _fl = fridayLunch.toString();
let _fs2 = fridaySnack2.toString();
let _fd = fridayDinner.toString();
let _name = userName.toString();
let _email = userEmail.toString();
let _goal = userGoal.toString();

document.getElementById("submit").addEventListener('click', function myWindow() {
	if (_email == "") {
		alert("Email required");
		return false;
	} else {
		myText = ("<html>\n<head>\n<title>Meal Plan</title>\n</head>\n<body>\n");
		myText += ("<h1>Meal plan for: " + _name + "</h1>\n");
		myText += ("<p>Goal: " + _goal + "</p>\n");
		myText += ("<p>Monday</p>\n<ul>\n<li>Breakfast: " + _mb + "</li>\n<li>Snack: " + _ms1 + "</li>\n<li>Lunch: " + _ml + "</li>\n<li>Snack: " + _ms2 + "</li>\n<li>Dinner: " + _md + "</li>\n</ul>\n");
		myText += ("<p>Tuesday</p>\n<ul>\n<li>Breakfast: " + _tb + "</li>\n<li>Snack: " + _ts1 + "</li>\n<li>Lunch: " + _tl + "</li>\n<li>Snack: " + _ts2 + "</li>\n<li>Dinner: " + _td + "</li>\n</ul>\n");
		myText += ("<p>Wednesday</p>\n<ul>\n<li>Breakfast: " + _wb + "</li>\n<li>Snack: " + _ws1 + "</li>\n<li>Lunch: " + _wl + "</li>\n<li>Snack: " + _ws2 + "</li>\n<li>Dinner: " + _wd + "</li>\n</ul>\n");
		myText += ("<p>Thursday</p>\n<ul>\n<li>Breakfast: " + _thb + "</li>\n<li>Snack: " + _ths1 + "</li>\n<li>Lunch: " + _thl + "</li>\n<li>Snack: " + _ths2 + "</li>\n<li>Dinner: " + _thd + "</li>\n</ul>\n");
		myText += ("<p>Friday</p>\n<ul>\n<li>Breakfast: " + _fb + "</li>\n<li>Snack: " + _fs1 + "</li>\n<li>Lunch: " + _fl + "</li>\n<li>Snack: " + _fs2 + "</li>\n<li>Dinner: " + _fd + "</li>\n</ul>\n");
		myText += ("</body>\n</html>");
		flyWindow = window.open("", "", "width=400,height=200,left=200,top=200");
		flyWindow.document.write(myText);
	}
});