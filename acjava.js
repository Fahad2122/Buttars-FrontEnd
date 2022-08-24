function alertFunction(){
	alert("Item added to the cart Successfully!");
}

//--- For AC ---
let imageAC1 = ["ac1.png", "ac1_1.png"];
let imageAC2 = ["ac2.png", "ac2_1.png", "ac2_2.png", "ac2_3.png"];
let imageAC3 = ["ac3.png", "ac3_1.png"];
let imageAC4 = ["ac4.png", "ac4_1.png"];
var A1=A2=A3=A4=0;

document.getElementById('ac1R').onclick = nextPicA1;
document.getElementById('ac1L').onclick = prePicA1;

document.getElementById('ac2R').onclick = nextPicA2;
document.getElementById('ac2L').onclick = prePicA2;

document.getElementById('ac3R').onclick = nextPicA3;
document.getElementById('ac3L').onclick = prePicA3;

document.getElementById('ac4R').onclick = nextPicA4;
document.getElementById('ac4L').onclick = prePicA4;

//AC 01
function nextPicA1(){
	A1++;
	if(A1 > imageAC1.length-1){
		A1=0;
	}
	document.getElementById('hrefA1').href = imageAC1[A1];
	document.getElementById('srcA1').src = imageAC1[A1];
}
function prePicA1(){
	A1--;
	if(A1 < 0){
		A1 = imageAC1.length-1;
	}
	document.getElementById('hrefA1').href = imageAC1[A1];
	document.getElementById('srcA1').src = imageAC1[A1];
}

//AC 02
function nextPicA2(){
	A2++;
	if(A2 > imageAC2.length-1){
		A2=0;
	}
	document.getElementById('hrefA2').href = imageAC2[A2];
	document.getElementById('srcA2').src = imageAC2[A2];
}
function prePicA2(){
	A2--;
	if(A2 < 0){
		A2 = imageAC2.length-1;
	}
	document.getElementById('hrefA2').href = imageAC2[A2];
	document.getElementById('srcA2').src = imageAC2[A2];
}

//AC 03
function nextPicA3(){
	A3++;
	if(A3 > imageAC3.length-1){
		A3=0;
	}
	document.getElementById('hrefA3').href = imageAC3[A3];
	document.getElementById('srcA3').src = imageAC3[A3];
}
function prePicA3(){
	A3--;
	if(A3 < 0){
		A3 = imageAC3.length-1;
	}
	document.getElementById('hrefA3').href = imageAC3[A3];
	document.getElementById('srcA3').src = imageAC3[A3];
}

//AC 04
function nextPicA4(){
	A4++;
	if(A4 > imageAC4.length-1){
		A4=0;
	}
	document.getElementById('hrefA4').href = imageAC4[A4];
	document.getElementById('srcA4').src = imageAC4[A4];
}
function prePicA4(){
	A4--;
	if(A4 < 0){
		A4 = imageAC4.length-1;
	}
	document.getElementById('hrefA4').href = imageAC4[A4];
	document.getElementById('srcA4').src = imageAC4[A4];
}