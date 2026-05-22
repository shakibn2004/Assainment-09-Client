import LayoutMenu from "@/components/dashboad/LayoutMenu";
import { Slide, ToastContainer } from "react-toastify";

const DashboadLayout = ({ children }) => {
    return (
        <div className="min-h-full flex flex-1">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
            <LayoutMenu />
            {children}
        </div>
    );
};

export default DashboadLayout;