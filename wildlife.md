---
layout: gallery
title: Wildlife Gallery
description: Wildlife Photos
email: evensophotography@gmail.com
---

<!-- One -->
<section id="one">
	<div class="inner">
		<p>This is the first version of a gallery that I like. I still want to make these images smaller, as they currently use the size of the 'post' template image, and it makes many of the images stretched and low resolution. The images also have to sit in the site data itself, but I would like to find a way to script the album creation. That will be the next stage of this project. For now, enjoy pictures of my German dog, Sanko:)</p>
	</div>
</section>

<!-- Two -->
{% include gallery_layout.html gallery=site.data.galleries.animals %}

<!-- Three -->
<section id="three">
	<div class="inner">
		<header class="major">
			<h2>Looking for a Photographer?</h2>
		</header>
		<p>If you are looking for someone to photograph your event, sport, or gathering, fill out the contact form below and I will contact you as soon as possible!</p>
	</div>
</section>
