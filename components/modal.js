import {
  createApp,
	reactive,
	h,
} from 'vue'
import Modal from './Modal.vue'

let singletonOptions

export function showModal(options) {
  return new Promise((resolve) => {
    showModal.close()
		const reactiveOptions = reactive(options || {show:true})
		singletonOptions = reactiveOptions
		reactiveOptions.teleport = 'body'
    const { unmountInstance } = mountInstance(Modal, reactiveOptions, {
      onConfirm: () => {
        reactiveOptions.onConfirm && reactiveOptions.onConfirm()
        reactiveOptions.show = false
        resolve('confirm')
      },
      onCancel: () => {
        reactiveOptions.onCancel && reactiveOptions.onCancel()
        reactiveOptions.show = false
        resolve('cancel')
      },
    })
    reactiveOptions.show = true
  })
}

showModal.close = () => {
	if (singletonOptions != null) {
		const prevSingletonOptions = singletonOptions
		singletonOptions = null
		prevSingletonOptions.show = false
	}
}

function mount(component) {
  const app = createApp(component)
  const host = document.createElement('div')
  document.body.appendChild(host)

  return {
    instance: app.mount(host),
    unmount() {
      app.unmount()
      document.body.removeChild(host)
    },
  }
}

function mountInstance(
  component,
  props,
  eventListener
){
  const Host = {
    setup() {
      return () =>
        h(component, {
          ...props,
          ...eventListener,
        })
    },
  }

  const { unmount } = mount(Host)
  return { unmountInstance: unmount }
}
