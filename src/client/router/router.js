import Home from '../components/Home/Home.vue'
import About from '../components/About.vue'
import FallBackPage from '../components/FallBackPage/FallBackPage.vue'
import MyOrders from '../components/MyOrders/MyOrders.vue'
import Oms from '../components/Oms/Oms.vue'
import Login from '../components/Auth/Login.vue'
import Signup from '../components/Auth/Signup.vue'
import Notes from '../components/Notes/Notes.vue'
import Cms from '../components/Cms/Cms.vue'
import Offers from '../components/Offers/Offers.vue'
import OfferDetails from '../components/Offers/OfferDetails.vue'
import Blogs from '../components/Blog/Blog.vue'
import BlogDetails from '../components/Blog/BlogDetails.vue'

export const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/myorders', component: MyOrders },
	{ path: '/login', component: Login },
	{ path: '/signup', component: Signup },
	{ path: '/notes', component: Notes },
	{ path: '/oms', component: Oms },
	{ path: '/cms', component: Cms },
	{ path: '/offers', component: Offers },
	{ path: '/offers/:id', component: OfferDetails },
	{ path: '/blog', component: Blogs },
	{ path: '/blog/:id', component: BlogDetails },
	{ path: '/*', component: FallBackPage }
]


// function loggedInRedirectDashboard(to, from, next) {
//   if (localStorage.token) {
//     next('/dashboard');
//   } else {
//     next();
//   }
// }

// function isLoggedIn(to, from, next) {
//   if (localStorage.token) {
//     next();
//   } else {
//     next('/login');
//   }
// }

