import App from './app'
import { UserRoutes } from './presentation/routes/user.route'

const app = new App({ routes: [UserRoutes], plugins: [] })

app.listen()
