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

/* ── Property Meta Fields (REST-exposed) ───────────────── */
function caasaa_register_property_meta() {
	$string_fields = [
		'price_range', 'location', 'property_type', 'status',
		'developer', 'phase_info', 'rera_lda', 'area_range',
		'total_area', 'contact_phone', 'contact_email', 'brochure_url',
	];
	foreach ( $string_fields as $key ) {
		register_post_meta( 'property', $key, [
			'type'         => 'string',
			'single'       => true,
			'show_in_rest' => true,
		] );
	}

	$array_fields = [ 'hero_tags', 'highlights', 'amenities', 'gallery_images' ];
	foreach ( $array_fields as $key ) {
		register_post_meta( 'property', $key, [
			'type'         => 'array',
			'single'       => true,
			'show_in_rest' => [
				'schema' => [ 'type' => 'array', 'items' => [ 'type' => 'string' ] ],
			],
		] );
	}

	// nearby_schools: array of objects {name, distance}
	register_post_meta( 'property', 'nearby_schools', [
		'type'         => 'array',
		'single'       => true,
		'show_in_rest' => [
			'schema' => [
				'type'  => 'array',
				'items' => [
					'type'       => 'object',
					'properties' => [
						'name'     => [ 'type' => 'string' ],
						'distance' => [ 'type' => 'string' ],
					],
				],
			],
		],
	] );
}
add_action( 'init', 'caasaa_register_property_meta' );

/* ── CORS for Headless / Next.js Frontend ──────────────── */
function caasaa_rest_cors() {
	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
	add_filter( 'rest_pre_serve_request', function ( $value ) {
		header( 'Access-Control-Allow-Origin: *' );
		header( 'Access-Control-Allow-Methods: GET, OPTIONS' );
		header( 'Access-Control-Allow-Headers: Authorization, Content-Type' );
		return $value;
	} );
}
add_action( 'rest_api_init', 'caasaa_rest_cors', 15 );
