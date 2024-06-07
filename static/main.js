function getCurrentTimestamp() {
	return new Date();
}
	 
// global variables
var data='';
var recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-IN";

function renderMessageToScreen(args) {
	// local variables
	let displayDate = (args.time || getCurrentTimestamp()).toLocaleString('en-IN', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
	let messagesContainer = $('.messages');
	// init element
	let message = $(`
	<li class="message ${args.message_side}">
		<div class="avatar"></div>
		<div class="text_wrapper">
			<div class="text">${args.text}</div>
			<div class="timestamp">${displayDate}</div>
		</div>
	</li>
	`);
	// add to parent
	messagesContainer.append(message);

	// animations
	setTimeout(function () {
		message.addClass('appeared');
	}, 0);
	messagesContainer.animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
}

/**
 * Displays the user message on the chat screen. This is the right side message.
 */
function showUserMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'right',
	});
}
/**
 * Displays the chatbot message on the chat screen. This is the left side message.
 */
function showBotMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'left',
	});
}

/**
 * Get input from user and show it on screen on button click.
 */
$('#send_button').on('click', function (e) {
	// get and show message and reset input
	showUserMessage($('#msg_input').val());
	data = $('#msg_input').val();
	// alert(data);
	$('#msg_input').val('');

	// show bot message
	setTimeout(function () {
		showBotMessage(randomstring());
	}, 300);
});

/**
 * Returns a random string. Just to specify bot message to the user.
 */
function randomstring(length = 2) {
	var output = 'Error!! Enter your choice in NUMBER from above!!';
	
	// alert(data);
	if (data == 1) {
		output = "<h3>About College:</h3> Laxmi Institute of Technology College is temple of learning is located nearby Vapi Valsad a sprawling 120 acres campus with facilities to match the imaginations of the elites. In a serene environment away from the city, the lush green atmosphere of Laxmi Institute of Technology provides the students a system that is a perfect blend of modern techniques and traditional values facilitating the enhancement of their physical, mental, social and spiritual values, because of all these Facilities Laxmi Institute of Technology gain a reputation in Vapi Valsad and is now identified as leading engineering College in Vapi & Valsad District.  ";
	}
	if (data == 2) {
		output = "<h3>College Departments:</h3><h4>Bachlelor of Engineering {& Lateral} </h4>-Information Technology<br/> -Computer Science and Engineering<br/>-Elwctronics & Communication Engineering<br/> -Mechanical Engineering <br/>-Civi Engineering<br/> -Electrical Enginnering<br/>-Automobile Engineering <br/><br/><b>Eligibility:</b><br/>BE:- 10+2 with 45%<br/><br/><h4>Diploma Courses {& Lateral}</h4>-Automobile Engineering<br/>-Civil Engineering<br/>-Mechanical Engineering<br/>-Electrical Engineering<br/><br/><b>Eligibility:</b><br/>Diploma:- 10th<br/>Diploma{Lateral}:- ITI<br/><br/><h4>Vocational Courses</h4>-Bachelor of Vocational Studies[B.Voc.](Software Development)<br/>-Diploma in Vocational Studies[D.Voc.](Software Development)<br/><br/><b>Eligibility:</b><br/>B.Voc:- 10+2<br/>D.Voc:- 10th<br/><br/><h4>Masters of Business Administartion</h4>-Finance<br/>-Marketing<br/>-Human Resources<br/>-Information Technology<br/><br/><b>Eligibility:</b><br/>Graduation with 45%";
	}
	if(data==3)
	{
		output="<h3>Fee Structure:</h3>-BE 72,000rs.(1st Year Fees)<br/>-Polytechnic 41,000rs.(1st Year Fees)<br/>-B.Voc 35,000rs.(1st Year Fees)<br/>-D.Voc 25,000rs.(1st Year Fees)<br/>-MBA(82,000 1st Year Fees)";
	}
	if(data==4)
	{
		output="<h3>Scholarship Details:</h3><h4>1. POST MATRIC SCHOLARSCHIP Govt. of Gujarat</h4><h4>Required Documents:</h4>-Bonafide Certificate<br/>-Last Year Marksheet<br/>-Fee Receipt<br/>-Income Certificate<br/>-Bank Account Number & IFSC code<br/>-Aadhar card<br/>-Ration Card<h4>2. ST SC OBC category of students can logon to www.digitalgujarat.gov.in to apply for scholarship (Fresh/Renewal) under various sub categories & schemes.</h4><h4>Required Documents:</h4>-Bonafide Certificate<br/>-Income Certificate<br/>-Fee Receipt<br/>-Caste Certificate<br/>-Last Year Marksheet<br/>-Bank Account Number & IFSC code<br/>-Aadhar card<br/>-Ration Card<h4>3. MYSY Scholarship</h4><h4>Required Documents:</h4>-Bonafide Certificate<br/>-Income Certificate<br/>-Last Year Marksheet<br/>-Fee Receipt<br/>-Bank Account Number & IFSC code<br/>-Aadhar card<br/>-Ration Card<h4>4. National Scholarship Portal</h4><h4>Required Documents:</h4>-Bonafide Certificate<br/>-Income Certificate<br/>-Last Year Marksheet<br/>-Fee Receipt<br/>-Bank Account Number & IFSC code<br/>-Aadhar card<br/>-Ration Card <br/><br/><b>Note: All student must have original documents together as well as xerox copy for each ducument.</b> ";
	}
	if(data==5)
	{
		output="<h3>Admission Process:</h3><h5>Laxmi Institute of Technology is located in Valsad, Gujarat and offers various courses in the field of engineering. Laxmi Institute of Technology offers BE in 7 specializations at the UG level and Diploma in Engineering in 4 specializations.</h5>• Candidates can apply for admission to BE and Diploma courses only if they are a domiciled resident of Gujarat. Resident domiciles of Gujarat residing in other states are also eligible to apply.<br/>• Candidates are required to have completed their 10+2 in Science stream with 45% to be eligible to apply. <br/>• Admission to BE will be allotted on the basis of performance in the GUJCET (Gujarat Common Entrance Test), conducted by the Admission Committee for Professional Courses, Gujarat.<br/>• Admission to Diploma courses is based on the rules of Admission Committee for Professional Diploma Courses (ACPDC).<br/>• Management quota seats will be allotted on the basis of merit, which will be based on previous academic performances.<br/>• Applicants to BE through management quota are also required to have appeared for the GUJCET examination to be considered eligible.<br/><h4> Documents Required:</h4>• 10th mark sheet<br/>• 12th mark sheet<br/>• GUJCET mark sheet<br/>• Two Passport size Photo<br/>• School Leaving Certificate or Transfer Certificate<br/>• Caste certificate for a candidate belonging to Scheduled Castes (SC), Scheduled Tribes (ST) and Socially and Educationally Backward Classes (SEBC), issued by the authority empowered by the State Government in this behalf<br/>• Non-Creamy Layer (NCL) certificate of the family, valid as per State Government Rules, by the authority empowered by the State Government in this behalf<br/>• Certificate of Physical Disability, issued and duly signed by the Civil Surgeon/ competent Medical Authority, in case the candidate is Physically Handicapped<br/>• Certificate of Ex-Serviceman, duly issued by the Director, Sainik Welfare Board, Gujarat State or by the District Sainik Welfare Officer<br/>• A copy of certificate of In-Serviceman duly issued by the Commanding Officer of the respective unit in which he is serving<br/>• A copy of valid certificate of income issued by the authority empowered by the State Government in this behalf, if applicable<br/>• Photograph of candidate for other State / other than Gujarat Secondary and Higher Secondary School Examination Board<br/>• Such other certificates as the Admission Committee deems necessary ";
	}
	if(data==6)
	{
		output="<h3>Mess Timing/Menu:</h3> <a href='MessMenu.html'>Mess Menu</a>";
	}
	if(data==7)
	{
		output="<h3>Events in college:</h3>Idea Fest on 16 May 2023</br> Farewell 2k23 soon ";
	}
	if(data==8)
	{
		output="<h3>Timetable:</h3> <a href= 'ExamTT.html'>BE sem:6 Mid-2 Time Table</a>"
	}
	
	var randomchar = function () {
		var n = Math.floor(Math.random() * 62);
		if (n < 10) return n;
		if (n < 36) return String.fromCharCode(n + 55);
		return String.fromCharCode(n + 61);
	};

	while (output.length < length) output += randomchar();
	return output;
}

/**
 * Set initial bot message to the screen for the user.
 */
 $(window).on('load', function () {
	showBotMessage('Welcome to LIT Campus Bot! <br/><br/>1. About College <br/> 2. About Department <br/> 3. Fees Structure <br/> 4. Scholarship Details <br/> 5. Admission process<br/> 6. Mess Timing/Menu <br/>7. Upcoming Events in college <br>8. Timetable');
	showBotMessage('Enter your choice in NUMBER from above');
 });