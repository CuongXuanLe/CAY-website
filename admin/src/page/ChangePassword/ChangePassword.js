import { AdminNav, ChangePwd } from "../../components"

const ChangePassword = () => {
    return(
        <div className="flex flex-grow">
            <AdminNav/>
            <div className="container p-10 ml-96">
                <strong className="text-3xl">User Setting</strong>
                <div className="px-5 pt-10 space-y-10">
                    <ChangePwd/>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword