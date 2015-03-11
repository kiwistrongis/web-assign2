<?php
	header('Access-Control-Allow-Origin: *');

	#vars
	$laptops = [
		'Acer Aspire V7',
		'Dell Inspiron',
		'Lenovo Yoga 2',
		'MacBook Pro Retina',
		'MacBook Air',
		'Sony VAIO Pro 13'];
	$prices = [
		700,
		600,
		1100,
		1400,
		900,
		1400];

	#print shit
	print( '<?xml version="1.0" encoding="UTF-8"?>'."\n");
	print( "<prices>\n");
	for( $i = 0; $i < count( $laptops); $i++)
		printf( "  <laptop name=\"%s\" price=\"$%d\" />\n",
			$laptops[ $i], $prices[ $i]);
	print( "</prices>\n");
?>
