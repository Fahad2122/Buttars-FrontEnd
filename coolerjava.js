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