for (let i=1; i<=500; i++){
if (i % 15 === 0){
   document.write('しどろ もどろ ');
}else if (i % 5 === 0){
   document.write('もどろ ');
}else if (i % 3 === 0){
   document.write('しどろ ' );
}else if ( i%i===0){
   document.write( '(^^;)   ');
}else{
	document.write( i + ' ');
}
}