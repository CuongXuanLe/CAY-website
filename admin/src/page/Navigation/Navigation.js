import {AdminNav, NavContent} from './../../components';

const Navigation = () => {
    return(
        <div className="flex flex-row">
            <AdminNav />
            <div className="container p-10 ml-96">
                <strong className="text-3xl">Navigation</strong>
                <div className="px-5 pt-10 space-y-10">
                    <NavContent />
                </div>
            </div>
        </div>
    )
}

export default Navigation