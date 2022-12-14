import {AdminNav, HomeHeader} from './../../components';

const AdminHome = () => {
    return(
        <div className="flex flex-row">
            <AdminNav />
            <div className="container p-10 ml-96">
                <strong className="text-3xl">Home page</strong>
                <div className="px-5 pt-10 space-y-10">
                    <HomeHeader />
                </div>
            </div>
        </div>
    )
}

export default AdminHome