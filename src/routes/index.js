import Home from '../pages/homePages/homePage'
import Room from '../pages/roomPage/roomPage'
import BookRoom from '../pages/bookroomPage/bookroomPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import TypeProductPage from '../pages/typeProductPage/TypeProductPage'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import RoomDetail from '../pages/roomDetailPage/RoomDetailPage'

export const routes = [
    {
        path: '/',
        page: Home,
        isShowHead : true
    },
    {
        path: '/room',
        page: Room,
        isShowHead : true
    },
    {
        path : '/type',
        page : TypeProductPage,
        isShowHead : true
    },
    {
        path : '/bookroom',
        page : BookRoom,
        isShowHead : true
    },
    {
        path : '/signin',
        page : SignInPage,
        isShowHead : false
    },
    {
        path : '/signup',
        page : SignUpPage,
        isShowHead : false
    },
    {
        path : '/roomdetail',
        page : RoomDetail,
        isShowHead : true
    },
    {
        path : '*',
        page : NotFoundPage
    }
]