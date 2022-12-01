import {AdminNav, GuideContent} from './../../components';

const AdminGuide = () => {
    return (
        <div className="flex flex-row">
            <AdminNav/>
            <div className="container p-10 ml-96">
                <strong className="text-3xl">Guide Page</strong>
                <div className="px-5 pt-10 space-y-10">
                    <GuideContent />
                </div>
            </div>
        </div>
    )
}

export default AdminGuide