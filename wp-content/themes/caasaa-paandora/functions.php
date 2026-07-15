<?php
defined( 'ABSPATH' ) || exit;

function caasaa_enqueue_assets() {
	wp_enqueue_style(
		'caasaa-google-fonts',
		'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap',
		[],
		null
	);
	wp_enqueue_style(
		'caasaa-main',
		get_template_directory_uri() . '/assets/css/main.css',
		[],
		'1.0.0'
	);
	wp_enqueue_script(
		'caasaa-main',
		get_template_directory_uri() . '/assets/js/main.js',
		[],
		'1.0.0',
		true
	);
}
add_action( 'wp_enqueue_scripts', 'caasaa_enqueue_assets' );

function caasaa_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'block-template-parts' );
	add_theme_support( 'wp-block-styles' );
	add_theme_support( 'align-wide' );
	add_theme_support(
		'html5',
		[ 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ]
	);
}
add_action( 'after_setup_theme', 'caasaa_setup' );
