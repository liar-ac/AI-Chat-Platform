const CONFIG_API = {
    HTTP_URL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000',
    VAD_URL: import.meta.env.VITE_VAD_URL || 'http://127.0.0.1:8000/static/frontend/vad/',
}
export default CONFIG_API
