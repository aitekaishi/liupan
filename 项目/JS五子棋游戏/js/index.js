var ChessBoard = {
	'boardSize' : 15,
	'gridSize' : 40,
	'boardArr' : new Array(15),
	'createBoardArr' : function(){
		var size = this.boardSize+1;
		var arr = this.boardArr;
		for(var i = 0; i<size; i++){
			arr[i] = new Array(size);
			for(var k = 0; k<size; k++){
				arr[i][k] = 0;
			}
		}
		return arr;
	},
	'createGrid' :function(){
		var canvas = document.getElementsByClassName('wrapper')[0];
		var bSize = this.boardSize;
		var rSize = this.gridSize;
		canvas.setAttribute('style','width:'+bSize*rSize+'px;height:'+bSize*rSize+'px');
		var grid = document.createElement('div');
		grid.setAttribute('class','grid');
		grid.setAttribute('style','width:'+(rSize-2)+'px;height:'+(rSize-2)+'px');
		canvas.appendChild(grid);
		return canvas;
	},
	'createChessboard' :function(){
		document.getElementsByClassName('wrapper')[0].innerHTML = '';
		this.createBoardArr();
		for(var i = 0; i<this.boardSize*this.boardSize; i++){
			this.createGrid();
		}
	}
};
var Chess = {
	'isBlack' : true,
	'createChess' : function(x,y){
		var canvas = document.getElementsByClassName('wrapper')[0];
		var chess = document.createElement('div');
		if(this.isBlack){
			chess.setAttribute('class','black');
		}else{
			chess.setAttribute('class','white');
		}
		var chessSize = ChessBoard.gridSize;
		chess.setAttribute('style','left:'+(x*chessSize-chessSize/2)+'px;top:'+(y*chessSize-chessSize/2)+'px; width:'+(chessSize-5)+'px;height:'+(chessSize-5)+'px;border-radius:'+(chessSize-5)+'px;');
		canvas.appendChild(chess);
		return canvas;
	}
};
var Message = {
	'blackWin' : '恭喜黑棋获胜！',
	'whiteWin' : '恭喜白棋获胜！',
	'unlawfulness' : '不能在此位置下棋',
	'gameOver' : '游戏已结束，请重新开始',
};
var Rule = {
	'isOver' : false,
	'isOutside' : function(x,y){ 
		if(x ==0 || y == 0 || x>=ChessBoard.boardSize || y>=ChessBoard.boardSize){
			alert(Message.unlawfulness);
			return true;
		}else{
			return false;
		}
	},
	'isChess' : function(x,y){
		if(ChessBoard.boardArr[x][y] != 0){
			alert(Message.unlawfulness);
			return true;
		}else{
			return false;
		}
	},
	'isWin' : function(type,x,y){
		var leng = ChessBoard.boardSize;
		//左
		var alignCount = 1;
		for(var i = 1; i<=x; i++){
			if(ChessBoard.boardArr[x-i][y] != type) break;
			alignCount++;
		}

		//右
		for(var i = 1; i<=leng; i++){
			if(ChessBoard.boardArr[x+i][y] != type) break;
			alignCount++;
		}

		//上
		var verticalCount = 1;
		for(var i = 1; i<=y; i++){
			if(ChessBoard.boardArr[x][y-i] != type) break;
			verticalCount++;
		}

		//下
		for(var i = 1; i<=leng; i++){ 
			if(ChessBoard.boardArr[x][y+i] != type) break;
			verticalCount++;
		}

		//左上方向
		var bevelLeftCount = 1;
		for(var i = 1; i<=y; i++){
			if(ChessBoard.boardArr[x-i][y-i] != type) break;
			bevelLeftCount++;
		}

		//右下方向
		for(var i = 1; i<=leng; i++){
			if(ChessBoard.boardArr[x+i][y+i] != type) break;
			bevelLeftCount++;
		}

		//右上方向
		var bevelRightCount = 1;
		for(var i = 1; i<=y; i++){
			if(ChessBoard.boardArr[x+i][y-i] != type) break;
			bevelRightCount++;
		}

		//左下方向
		for(var i = 1; i<=leng; i++){
			if(ChessBoard.boardArr[x-i][y+i] != type) break;
			bevelRightCount++;
		}
		if(alignCount >= 5 || verticalCount >= 5 || bevelLeftCount >=5 || bevelRightCount >=5){
			if(type == 1){
				alert(Message.blackWin);
			}else{
				alert(Message.whiteWin);
			}
			Rule.isOver = true;
		}		
	}
};
function play(e){
	if(Rule.isOver){
		alert(Message.gameOver);
		return;
	}

	var size = ChessBoard.gridSize;
	var x = Math.round((e.clientX-10)/size);
	var y = Math.round((e.clientY-10)/size);
	if (Rule.isOutside(x,y))  return;	
	if (Rule.isChess(x,y))	return;	
	Chess.createChess(x,y);
	if(Chess.isBlack){
		ChessBoard.boardArr[x][y] = 1;
		Rule.isWin(1,x,y);
	}else{
		ChessBoard.boardArr[x][y] = 2;
		Rule.isWin(2,x,y);
	}
	Chess.isBlack = !Chess.isBlack;
}
var wrapper = document.getElementsByClassName('wrapper')[0];
wrapper.addEventListener("click", function(e){
    play(e);
});
ChessBoard.createChessboard();
document.getElementById('reset').addEventListener("click",function(){
	Rule.isOver = false;
	ChessBoard.createChessboard();
})