<?php //子テーマ用関数
if ( !defined( 'ABSPATH' ) ) exit;

//子テーマ用のビジュアルエディタースタイルを適用
add_editor_style();

//以下に子テーマ用の関数を書く
function custom_api_get_all_posts()
{
	register_rest_route('custom/v1', '/allposts', array(
		'methods' => 'GET',
		'callback' => 'custom_api_get_all_posts_callback'
	));
}
add_action('rest_api_init', 'custom_api_get_all_posts');

function ltl_get_the_excerpt($post_id = '', $length = 120)
{
	global $post;
	$post_bu = '';

	if (!$post_id) {
		$post_id = get_the_ID();
	} else {
		$post_bu = $post;
		$post = get_post($post_id);
	}
	$mojionly = strip_tags($post->post_content);
	if (mb_strlen($mojionly) > $length) $t = '...';
	$content =  mb_substr($mojionly, 0, $length);
	$content .= $t;
	if ($post_bu) $post = $post_bu;
	return $content;
}

function custom_api_get_all_posts_callback($request)
{
	$posts_data = array();
	$posts = get_posts(
		array(
			'posts_per_page' => -1
		)
	);
	foreach ($posts as $post) {
		setup_postdata($post);
		$posts_data[] = array(
			'slug' => $post->post_name, //記事のURL
			'title' => $post->post_title, //タイトル
			'content' => $post->post_content, //記事の中身
			'updatedAt' => $post->post_modified, //更新日
			'createdAt' => $post->post_date, //投稿日
			'category' => get_the_category($post), //コテゴリ
			'excerpt' => ltl_get_the_excerpt($post->ID, 60) //抜粋。第2引数で文字数を指定する

		);
	}
	return $posts_data;
}

//画像の自動生成を停止する
function disable_image_sizes($new_sizes)
{
	unset($new_sizes['thumbnail']);
	unset($new_sizes['medium']);
	unset($new_sizes['large']);
	unset($new_sizes['medium_large']);
	unset($new_sizes['1536x1536']);
	unset($new_sizes['2048x2048']);
	return $new_sizes;
}
add_filter('intermediate_image_sizes_advanced', 'disable_image_sizes');

add_filter('big_image_size_threshold', '__return_false');

//Cocoonが自動生成する画像を全て停止
add_action('init', function () {
	remove_image_size(THUMB100);
	remove_image_size(THUMB150);
	remove_image_size(THUMB120);
	remove_image_size(THUMB160);
	remove_image_size(THUMB320);
	remove_image_size(get_vertical_card_2_thumbnail_size());
	remove_image_size(get_vertical_card_3_thumbnail_size());
	remove_image_size(get_tile_card_2_thumbnail_size());
	remove_image_size(get_tile_card_3_thumbnail_size());
});
