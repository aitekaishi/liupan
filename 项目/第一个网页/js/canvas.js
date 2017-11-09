$(function  () {
	var x = document.getElementById("head_j");
	var cx = x.getContext("2d");
	cx.beginPath();cx.moveTo(0,0);
	cx.lineTo(100,0);cx.lineTo(100,41);cx.lineTo(50,56);cx.lineTo(0,41);
	cx.closePath();cx.fillStyle = "#F7A934";cx.fill();cx.fillStyle="white",cx.fillText("网址导航",25,25)
	
	var y = document.getElementById("canvas_a");
	var cy = y.getContext("2d");
	cy.beginPath();cy.moveTo(0,0);
	cy.lineTo(30,0);cy.lineTo(30,70);cy.lineTo(15,79);cy.lineTo(0,70);
	cy.closePath();cy.fillStyle = "#4E5D98";cy.fill();cy.fillStyle="white";
	cy.fillText("最",10,20);cy.fillText("新",10,35);cy.fillText("英",10,50);cy.fillText("雄",10,65);
	
	var z = document.getElementById("canvas_b");
	var cz = z.getContext("2d");
	cz.beginPath();cz.moveTo(0,0);
	cz.lineTo(30,0);cz.lineTo(30,70);cz.lineTo(15,79);cz.lineTo(0,70);
	cz.closePath();cz.fillStyle = "#4E5D98";cz.fill();cz.fillStyle="white";
	cz.fillText("限",10,20);cz.fillText("免",10,35);cz.fillText("英",10,50);cz.fillText("雄",10,65);
	
	var q = document.getElementById("canvas_c");
	var cq = q.getContext("2d");
	cq.beginPath();cq.moveTo(0,0);
	cq.lineTo(30,0);cq.lineTo(30,70);cq.lineTo(15,79);cq.lineTo(0,70);
	cq.closePath();cq.strokeStyle = "black";cq.stroke();cq.fillStyle="black";
	cq.fillText("更",10,20);cq.fillText("多",10,35);cq.fillText("英",10,50);cq.fillText("雄",10,65);
	
})
