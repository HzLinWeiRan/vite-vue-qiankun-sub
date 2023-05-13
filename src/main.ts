import { createApp } from 'vue'
import { 
  renderWithQiankun,
  QiankunProps,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper'
import App from './app.vue'
import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'

function render(props: QiankunProps = {}) {
  const { container } = props
  const router = createRouter({
    history: createWebHistory('/subapp'),
    routes
  })
  const app: string | Element = container?.querySelector('#app') || '#app'
  createApp(App).use(router).mount(app)
}

function initQiankun() {
  renderWithQiankun({
    bootstrap() {},
    mount(props) {
      render(props)
    },
    unmount(props) {},
    update(props) {}
  })
}

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQiankun() : render()

