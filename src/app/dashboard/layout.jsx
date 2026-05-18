import LayoutMenu from "@/components/dashboad/LayoutMenu";

const DashboadLayout = ({ children }) => {
    return (
        <div className="min-h-full flex flex-1">
            <LayoutMenu />
            {children}
        </div>
    );
};

export default DashboadLayout;