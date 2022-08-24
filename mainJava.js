function alertFunction(){
	alert("Item added to the cart Successfully!");
}

//--- For Air Coolers --- 
let imageCooler1 = ["cooler1.png", "cooler1_1.png", "cooler1_2.png"];
let imageCooler2 = ["cooler2.png", "cooler2_1.png", "cooler2_2.png"];
let imageCooler3 = ["cooler3.png"];
let imageCooler4 = ["cooler4.png", "cooler4_1.png"];
var C1=C2=C3=C4=0;

document.getElementById('cooler1R').onclick = nextPicC1;
document.getElementById('cooler1L').onclick = prePicC1;

document.getElementById('cooler2R').onclick = nextPicC2;
document.getElementById('cooler2L').onclick = prePicC2;

document.getElementById('cooler3R').onclick = nextPicC3;
document.getElementById('cooler3L').onclick = prePicC3;

document.getElementById('cooler4R').onclick = nextPicC4;
document.getElementById('cooler4L').onclick = prePicC4;

//cooler 01
function nextPicC1(){
	C1++;
	if(C1 > imageCooler1.length-1){
		C1=0;
	}
	document.getElementById('hrefC1').href = imageCooler1[C1];
	document.getElementById('srcC1').src = imageCooler1[C1];
}
function prePicC1(){
	C1--;
	if(C1 < 0){
		C1 = imageCooler1.length-1;
	}
	document.getElementById('hrefC1').href = imageCooler1[C1];
	document.getElementById('srcC1').src = imageCooler1[C1];
}

//cooler 02
function nextPicC2(){
	C2++;
	if(C2 > imageCooler2.length-1){
		C2=0;
	}
	document.getElementById('hrefC2').href = imageCooler2[C2];
	document.getElementById('srcC2').src = imageCooler2[C2];
}
function prePicC2(){
	C2--;
	if(C2 < 0){
		C2 = imageCooler1.length-1;
	}
	document.getElementById('hrefC2').href = imageCooler2[C2];
	document.getElementById('srcC2').src = imageCooler2[C2];
}

//cooler 03
function nextPicC3(){
	C3++;
	if(C3 > imageCooler3.length-1){
		C3=0;
	}
	document.getElementById('hrefC3').href = imageCooler3[C3];
	document.getElementById('srcC3').src = imageCooler3[C3];
}
function prePicC3(){
	C3--;
	if(C3 < 0){
		C3 = imageCooler3.length-1;
	}
	document.getElementById('hrefC3').href = imageCooler3[C3];
	document.getElementById('srcC3').src = imageCooler3[C3];
}

//cooler 04
function nextPicC4(){
	C4++;
	if(C4 > imageCooler4.length-1){
		C4=0;
	}
	document.getElementById('hrefC4').href = imageCooler4[C4];
	document.getElementById('srcC4').src = imageCooler4[C4];
}
function prePicC4(){
	C4--;
	if(C4 < 0){
		C4 = imageCooler4.length-1;
	}
	document.getElementById('hrefC4').href = imageCooler4[C4];
	document.getElementById('srcC4').src = imageCooler4[C4];
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