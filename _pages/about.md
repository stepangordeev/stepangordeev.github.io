---
layout: about
title: about
permalink: /
description: Economics Ph.D. Candidate

profile:
  align: left
  image: prof_pic.jpg
  address: >

news: false  # includes a list of news items
selected_papers: true # includes a list of papers marked as "selected={true}"
social: true  # includes social icons at the bottom of the page

years: [2021, 2020]
---

I am a fifth-year Economics Ph.D. student at the University of Rochester. I am interested in macro development.

---

{: #research}
## __research__

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>