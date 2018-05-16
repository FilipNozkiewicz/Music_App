var PIECES = {EMPTY : 0 , wp : 1,wN : 2,wB : 3,wR : 4,wQ : 5,wK : 6,bP : 7,
bN : 8,bB : 9,bR : 10,bQ : 11,bK : 12};  // theese are piones

// kind of mapping :)
//alert(PIECES.bK); // is tehe number of bK
// board square number

var BRD_SQR_NUM = 120;

var FILES = {FILE_A:0 ,FILE_B:1 ,FILE_C:2 ,FILE_D:3 ,
FILE_E:4 ,FILE_F:5 ,FILE_G:6 ,FILE_H:7 ,FILE_NONE:8 };
// poles horizzontally
// poles vertically
var RANKS = {RANK_1:0,RANK_2:1,RANK_3:2,RANK_4:3,RANK_5:4,RANK_6:5,
RANK_7:6,RANK_8:7,RANK_NONE:8};

var COLORS = {WHITE:0 , BLACK:1 , BOTH:2};

var SQUARES = {
	A1:21 , B1:22 , C1:23 , D1:24 , E1:25 , F1:26 , G1:27 , H1:28 , 
	A8:91 , B8:92 , C8:93 , D8:94 , E8:95 , F8:96 , G8:97 , H8:98 , 
	NO_SQ:99 , OFFBOARD:100 }; // limit of board 
var BOOL = {FALSE:0 , TRUE:1};

var FilesBrd = new Array(BRD_SQR_NUM);
var RanksBrd = new Array(BRD_SQR_NUM); // arrays of squares

function FR2SQ(f,r){
	return ((21 + (f))+ ((r)*10)); // return specified positio f -s hor r - ver
}