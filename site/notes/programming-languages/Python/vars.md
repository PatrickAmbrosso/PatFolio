---
title: Variables
prev:
  text: Projects
  link: ./projects
next: false
---
# dasd
VARS {{ 1 + 1 }}

<h2>Soldra Machan</h2>

<h2 v-for="i in 3">{{ i }}</h2>

<div id="app" class="link-card">
  <ul>
    <li v-for="(link, index) in links" :key="index" class="card">
      <a :href="link.url" class="card-link">
        <div class="card-content">
          <h3>{{ link.title }}</h3>
          <!-- Add any additional content here -->
        </div>
      </a>
    </li>
  </ul>
</div>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'Link 1', url: 'https://www.example.com/link1' },
        { title: 'Link 2', url: 'https://www.example.com/link2' },
        { title: 'Link 3', url: 'https://www.example.com/link3' },
        // Add more links as needed
      ],
    };
  },
};
</script>
