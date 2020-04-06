import Vue from 'vue';
import VueRouter from 'vue-router';

import App from '../App.vue';
import AppAux from '../components/layout/AppAux.vue';
import TheMap from '../components/Map.vue';
import Table from '../components/Table.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'App',
    component: App,
    redirect: {
      name: 'AppAux',
    },
    children: [
      {
        path: '',
        name: 'AppAux',
        component: AppAux,
        redirect: {
          name: 'Map',
        },
        children: [
          {
            path: 'demo/map',
            name: 'Map',
            component: TheMap,
            meta: {
              title: 'Covid Optimize - Map',
              metaTags: [
                {
                  name: 'description',
                  content: 'The map page of the demonstration',
                },
                {
                  property: 'og:description',
                  content: 'The map view of the demonstration',
                },
              ],
            },
          },
          {
            path: 'demo/table',
            name: 'Table',
            component: Table,
            meta: {
              title: 'Covid Optimize - Table',
              metaTags: [
                {
                  name: 'description',
                  content: 'The table page of the demonstration',
                },
                {
                  property: 'og:description',
                  content: 'The table view of the demonstration',
                },
              ],
            },
          },
          {
            path: 'about',
            name: 'About',
            component: About,
            meta: {
              title: 'About',
              metaTags: [
                {
                  name: 'description',
                  content: 'The about page of the demonstration',
                },
                {
                  property: 'og:description',
                  content: 'The about page of the demonstration',
                },
              ],
            },
          },
          {
            path: 'contact',
            name: 'Contact',
            component: Contact,
            meta: {
              title: 'Contact',
              metaTags: [
                {
                  name: 'description',
                  content: 'The contact page of the demonstration',
                },
                {
                  property: 'og:description',
                  content: 'The contact page of the demonstration',
                },
              ],
            },
          },
        ],
      },
    ],
  },
  {
    path: '*',
    redirect: {
      name: 'App',
    },
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]')
  ).map((el) => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
