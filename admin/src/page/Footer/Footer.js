import {AdminNav, FooterContent} from './../../components';

const AdminFooter = () => {
    return (
        <div className="flex flex-row">
            <AdminNav/>
            <div className="container p-10 ml-96">
                <strong className="text-3xl">Footer</strong>
                <div className="px-5 pt-10 space-y-10">
                    <FooterContent />
                </div>
            </div>
        </div>
    )
}

export default AdminFooter